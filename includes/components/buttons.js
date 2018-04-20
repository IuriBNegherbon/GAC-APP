import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity
} from 'react-native';

const btnPress = () => {
	alert('botão pressionado');
}

export default class App extends Component {
	render() {
		return (
			<View style={Styles.principal}>
				<TouchableOpacity style={Styles.button}>
					<Text style={Styles.textButton}>Clique aqui</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const Styles = {
	principal: {
		paddingTop: 40
	},

	button: {
		backgroundColor: '#48bbec',
		padding: 10,
		borderColor: '#1d8eb8',
		borderWidth: 1,
		borderRadius: 50
	},

	textButton: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		alignSelf: 'center'
	}
}
