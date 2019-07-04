import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo'
import FormLogin from '../components/FormLogin'
import { Actions } from 'react-native-router-flux'

class Login extends Component {
    doSignUp() {
        Actions.signup()
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <FormLogin type='Login' />
                <View style={styles.signUpText}>
                    <Text style={styles.signUp}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.doSignUp}>
                        <Text style={styles.signUpBtn}> Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#43a047',
        flex: 1,
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

export default Login