import React, { Component } from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './components/login';
import Home from './components/home';
import Schedules from './components/schedules';

const Routes = () => (
    <Router>
        <Stack key='root'>
            <Scene key='login' component={Login} hideNavBar initial/>
            <Scene key='home' component={Home} title='GAC'/>
            <Scene key='schedules' component={Schedules} title='GAC'/>
        </Stack>
    </Router>
);

export default Routes;