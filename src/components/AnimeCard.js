import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import propTypes from 'prop-types';

const AnimeCard = ({title, image}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <ImageBackground style={styles.innerContainer} source={{uri: image}}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

AnimeCard.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
};

AnimeCard.defaultProps = {
  title: 'Anime Title',
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 8,
    aspectRatio: 2 / 3,
    height: 150,
    marginBottom: 10,
  },
  title: {
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default AnimeCard;
