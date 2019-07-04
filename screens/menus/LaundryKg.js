import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

class LaundryKg extends Component {
    showForm = () => {
        console.log('MASHOK WOI')
    }
    render() {
        return (
            <View style={{ marginVertical: 20, justifyContent: 'center', marginRight: 30 }}>
                <TouchableOpacity
                    onPress={() => this.showForm()}>
                    <Image source={require('../../assets/basket.png')} style={{ width: 80, height: 80, marginLeft: 7 }} />
                    <Text>Laundry Kiloan</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LaundryKg
