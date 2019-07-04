import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux'

import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Dashboard from '../screens/Dashboard'

class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideTabBar={true} hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="signup" component={Signup} title="Register"/>
                    <Scene key="dashboard" component={Dashboard} title="Dashboard"/>
                </Stack>
            </Router>
        )
    }
}

export default Routes