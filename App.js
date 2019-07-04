import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, ActivityIndicator } from 'react-native';

import Routes from './components/Routes'
import Firebase from './config/Firebase'
import FlashMessage from 'react-native-flash-message'

class App extends Component {
  componentWillMount() {
    Firebase.init()
  }  

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#519657'
          barStyle='light-content' />
        <Routes />
        {/* <Home/> */}
        <FlashMessage position='center'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#43a047',
  },
});

export default App