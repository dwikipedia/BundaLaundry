import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Logo from '../components/Logo'
import FormLogin from '../components/FormLogin'
import { Actions } from 'react-native-router-flux'

class Signup extends Component {
    doGoBack() {
        Actions.pop()
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <FormLogin type='Signup' />
                <View style={styles.signUpText}>
                    <Text style={styles.signUp}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.doGoBack}>
                        <Text style={styles.signUpBtn}>  Sign in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#43a047',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpText: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signUp: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16
    },
    signUpBtn: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default Signup