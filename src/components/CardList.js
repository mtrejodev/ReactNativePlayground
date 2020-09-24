import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { favoritedCard } from "../actions";
import Card from "./Card";


const CardList = ({ cards, favoritedCard }) => {

    const renderCards = () => {
        return cards.map(item => {
            return (
                <Card
                    key={item.id}
                    image={item.image}
                    text={item.label}
                    is_favorite={item.is_favorite}
                    action={() => favoritedCard(item.id)}
                />
            );
        });
    };
    
    return <View style={styles.container}>{renderCards()}</View>;

}

const styles = {
    container: {
        flex: 1
    }
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    favoritedCard: PropTypes.func.isRequired
};

const mapStateToProps = ({ cards }) => {
    return cards;
};

export default connect(
    mapStateToProps,
    {
        favoritedCard
    }
)(CardList);