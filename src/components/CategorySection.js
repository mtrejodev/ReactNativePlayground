import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import AnimeCard from './AnimeCard';
import {fetchAnimeContent} from '../api/fetchProducts';
const CategorySection = ({title, contentUrl}) => {
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    async function setAsyncContent() {
      const animeContent = await fetchAnimeContent(contentUrl);
      setCurrent(animeContent.data);
    }
    setAsyncContent();
  }, [contentUrl]);
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={current}
        horizontal
        keyExtractor={(value, index) => `${value}-${index}`}
        renderItem={(animeTitle) => (
          <AnimeCard
            title={animeTitle.item.attributes.canonicalTitle}
            image={animeTitle.item.attributes.posterImage.tiny}
          />
        )}
      />
    </View>
  );
};

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  contentUrl: PropTypes.string.isRequired,
};

CategorySection.defaultProps = {
  title: 'Category Title',
  contentList: ['Naruto', 'Sauske', 'Naruto', 'Sasuke'],
};

export default CategorySection;

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: '#1F271B',
    width: '100%',
    flexDirection: 'column',
  },
  title: {
    color: '#28AFB0',
    fontWeight: 'bold',
  },
});
