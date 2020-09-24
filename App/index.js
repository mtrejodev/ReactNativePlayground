import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, Provider } from 'react-redux'
import { SafeAreaView, Text, View } from 'react-native'
import { createStore } from 'redux';
import ProductView from '../src/components/ProductView';

import configureStore from '../src/api/store'

const store = configureStore()


const App = () => {
    return (
        <Provider store={store}>
            <ProductView />
        </Provider>
    )
}

export default App