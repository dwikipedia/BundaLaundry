import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

class LaundryPcs extends Component {
    showForm = () => {
        console.log('MASHOK')
    }
    render() {
        return (
            <View style={{ marginVertical: 20, justifyContent: 'center', marginLeft: 40 }}>
                <TouchableOpacity
                    onPress={() => this.showForm()}>
                    <Image source={require('../../assets/fashion.png')} style={{ width: 80, height: 80, marginLeft: 12 }} />
                    <Text>Laundry Satuan</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LaundryPcs
