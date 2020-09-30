import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import CategorySection from './CategorySection';
import {
  getProducts,
  getProductsError,
  getProductsPending,
} from '../reducers/reducer';
import {fetchAnime} from '../api/fetchProducts';

import {bindActionCreators} from 'redux';

export const SectionsList = ({fetchProducts, products}) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <View style={styles.container}>
      {products.products &&
        products.products.map((anime, index) => (
          <CategorySection
            title={anime.attributes.title}
            contentUrl={anime.relationships.anime.links.related}
            key={`${anime.attributes.title}-${index}`}
          />
        ))}
    </View>
  );
};

SectionsList.propTypes = {
  animeList: PropTypes.array,
  products: PropTypes.object,
};

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts: fetchAnime,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SectionsList);
