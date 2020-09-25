import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, StyleSheet, Text } from 'react-native'
import { getProducts, getProductsError, getProductsPending } from '../reducers/reducer'
import fetchPokemons from '../api/fetchProducts'
import { bindActionCreators } from 'redux'
import PokemonCard from './PokemonCard'
export const PokemonList = ({ fetchProducts, products }) => {

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <View style={styles.container}>
            <Text>Pokemon List  Story</Text>
            <View style={styles.cardsContainer}>
                {
                    products.products.results && products.products.results.map((product, index) =>
                        <PokemonCard key={index} pokemon={product} action={() => console.log('CLICKED POKEMON')} />
                    )
                }
            </View>
        </View>
    )
}

PokemonList.propTypes = {
    fetchProducts: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchPokemons
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 25
    }
})
