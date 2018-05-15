import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './includes/routes';
import reducers from './includes/reducers/index';

export default class App extends Component {
	componentWillMount() {
		let config = {
			apiKey: "AIzaSyC6j36G0DzpJK35lj0oFRzmhhdoz_A-1QY",
			authDomain: "gacapp-8b4eb.firebaseapp.com",
			databaseURL: "https://gacapp-8b4eb.firebaseio.com",
			projectId: "gacapp-8b4eb",
			storageBucket: "gacapp-8b4eb.appspot.com",
			messagingSenderId: "1057945419816"
		};
		firebase.initializeApp(config);
	}
	render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes/>
      </Provider>
    );
	}
}
