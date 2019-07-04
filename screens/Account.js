import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native';

export default class Account extends Component {
    render() {
        return (
            <View>
                <Text>Hello from account</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        fontWeight: "bold",
        textAlign: "center"
    },
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: 50
    }
})