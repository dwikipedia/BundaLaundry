import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width:200, height:220}}
                source={require("../assets/logo.png")}/>
                {/* <Text style={styles.logoText}>Laundry Satuan & Kiloan</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'white',
        fontWeight: '300',
        textShadowColor: 'rgba(0, 0, 0, 0.6)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
});

export default Logo