import React, { Component } from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './components/login';
import Home from './components/home';
import Topbar from './components/topbar';

const Routes = () => (
    <Router>
        <Stack key='root'>
            <Scene key='login' component={Login} hideNavBar='true' initial/>
            <Scene key='home' component={Home} title='GAC'/>
        </Stack>
    </Router>
);

export default Routes;