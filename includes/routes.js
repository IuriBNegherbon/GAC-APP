import React, { Component } from 'react';
import {Router, Scene, Stack, Drawer} from 'react-native-router-flux';

import Login from './components/login';
import Register from './components/register';
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
          <Scene key='register' component={Register} hideNavBar/>
            <Drawer key='drawer' contentComponent={drawer} hideNavBar>
                <Scene key='home' component={Home} title='GAC' navTransparent/>
                <Scene key='schedules' component={Schedules} title='GAC' navTransparent/>
                <Scene key='connectionError' component={ConnectionError} title='GAC' navTransparent/>
                <Scene key='support' component={Support} title='GAC Suporte' navTransparent/>
                <Scene key='perfilUser' component={PerfilUser} title='GAC' navTransparent/>
                <Scene key='perfilAnimal' component={PerfilAnimal} title='GAC' navTransparent/>
            </Drawer>
        </Stack>
    </Router>
);

export default Routes;
