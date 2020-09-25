import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Text, View, StyleSheet } from 'react-native'

export default PokemonCard = ({ pokemon, action }) => {
    console.log('EACH CARD POKEMON', pokemon);
    return (
        <View style={styles.outterContainer}>
            <View style={styles.cardContainer}>

                {
                    pokemon && <Text>{pokemon.name}</Text>
                }

                <Button title="Click me" onPress={action} />
            </View>
        </View>
    )
}

PokemonCard.propTypes = {
    action: PropTypes.func.isRequired,
    pokemon: PropTypes.object
}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "gray",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    outterContainer: {
        width: "33%",
        padding: 5,
    }
})
