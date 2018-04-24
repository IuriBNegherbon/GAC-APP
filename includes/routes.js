import React, { Component } from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './components/login';
import Home from './components/home';
import Schedules from './components/schedules';
import ConnectionError from './components/connectionError';
import Support from './components/support';

const Routes = () => (
    <Router>
        <Stack key='root'>
            <Scene key='login' component={Login} hideNavBar initial/>
            <Scene key='home' component={Home} title='GAC'/>
            <Scene key='schedules' component={Schedules} title='GAC'/>
            <Scene key='connectionError' component={ConnectionError} title='GAC'/>
            <Scene key='support' component={Support} title='GAC Suporte'/>
        </Stack>
    </Router>
);

export default Routes;