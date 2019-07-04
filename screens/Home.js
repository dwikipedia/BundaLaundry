import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import LaundryKg from '../screens/menus/LaundryKg'
import LaundryPcs from '../screens/menus/LaundryPcs'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Yuk laundry hari ini!</Text>
                <View style={styles.elementsContainer}>
                    <LaundryKg />
                    <LaundryPcs />
                </View>
            </View>
        )
    }
}

let width = Dimensions.get('window').width

const styles = StyleSheet.create({
    header: {
        // fontWeight: "bold",
        // textAlign: "center",
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',
        marginTop: 30,
        marginBottom: 24
    },
    elementsContainer: {
        // backgroundColor: '#ecf5fd',
        backgroundColor: '#32B76C',
        // marginLeft: 24,
        // marginRight: 24,
        // marginBottom: 24,
        // flex: 1
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 70,
        width:width
    },
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'stretch',
        // height: 50,
        // backgroundColor:'#9ccc65'
        marginTop: 100
    }
})