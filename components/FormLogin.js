import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import * as firebase from 'firebase'
import { showMessage } from "react-native-flash-message";
import { Actions } from 'react-native-router-flux'

class FormLogin extends Component {
    constructor(props) {
        super(props)
        state = {
            email: '',
            password: '',
        }
    }

    onSubmit = (email, password) => {
        console.log(this.props.type)

        this.props.type == 'Signup'
            ? firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    showMessage({
                        message: "Account created, please login.",
                        type: 'success'
                    }),
                        Actions.login()
                })
                .catch((error) => {
                    errorMessage(error)
                })
            : firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    Actions.dashboard()
                })
                .catch((error) => {
                    errorMessage(error)
                })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <TextInput style={styles.Input}
                    placeholderTextColor="black"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={email => this.setState({ email })}
                    onSubmitEditing={() => this.password.focus()}
                />

                <TextInput style={styles.Input}
                    placeholderTextColor="black"
                    underlineColorAndroid='rgba(0,0,0,0)'
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize='none'
                    onChangeText={password => this.setState({ password })}
                    ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}
                    onPress={() => this.onSubmit(this.state.email, this.state.password)}>
                    <Text style={styles.buttonText}>
                        {this.props.type}
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const errorMessage = ((error) =>
    showMessage({
        message: error.toString(error),
        type: 'danger'
    })
)

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Input: {
        width: 300,
        // backgroundColor: 'rgba(255,255,255,0.7)',
        backgroundColor: '#e1ffb1',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
        paddingVertical: 5
    },
    button: {
        width: 300,
        backgroundColor: '#00701a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
})

export default FormLogin
