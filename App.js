import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	ListView,
	TouchableHighlight
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import firebase from 'firebase';
import Login from './includes/components/login';
import Home from './includes/components/home';
import Topbar from './includes/components/topbar';

export default class App extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{id: 'a'}}
				renderScene={(route, navigator) => {
					if (route.id === 'a') {
						return (<Login navigator={navigator}/>);
					}

					if (route.id === 'b') {
						return (<Home/>);
					}
				}}
			/>
		);
	}
}