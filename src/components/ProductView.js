import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProductsAction from '../api/fetchProducts';
import { getProductsError, getProducts, getProductsPending } from '../../src/reducers/reducer';
import { SafeAreaView, Text } from 'react-native';



class ProductView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentDidMount() {
        const { fetchProducts } = this.props;
        fetchProducts();
    }

    shouldComponentRender() {
        const { pending } = this.props;
        if (pending === false) return false;
        return true;
    }

    render() {

        return (
            <SafeAreaView>
                <Text>Hola mundoÇ</Text>
            </SafeAreaView>
        )
    }
}


const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProductsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);