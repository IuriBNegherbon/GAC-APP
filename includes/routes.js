import React, { Component } from 'react';
import {Router, Scene, Stack, Drawer} from 'react-native-router-flux';

import Login from './components/login';
import Home from './components/home';
import Schedules from './components/schedules';
import ConnectionError from './components/connectionError';
import Support from './components/support';
import PerfilUser from './components/perfilUser';
import PerfilAnimal from './components/perfilAnimal';
import drawer from './components/drawer';

const Routes = () => (
    <Router>
        <Stack key='root'>
            <Scene key='login' component={Login} hideNavBar initial/>
            <Drawer key='drawer' contentComponent={drawer} hideNavBar>
                <Scene key='home' component={Home} title='GAC'/>
                <Scene key='schedules' component={Schedules} title='GAC'/>
                <Scene key='connectionError' component={ConnectionError} title='GAC'/>
                <Scene key='support' component={Support} title='GAC Suporte'/>
                <Scene key='perfilUser' component={PerfilUser} title='GAC'/>
                <Scene key='perfilAnimal' component={PerfilAnimal} title='GAC'/>
            </Drawer>
        </Stack>
    </Router>
);

export default Routes;