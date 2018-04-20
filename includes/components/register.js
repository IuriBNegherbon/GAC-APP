import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	ListView,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import firebase from 'firebase';

export default class Login extends Component {
		constructor() {
			super();
			this.state = {
				modalVisible: false
			}
		}

		login() {
			alert('ok');
		}

		cadastrar() {
			alert('ok');
		}

		setModalVisible(visible) {
			this.setState({modalVisible: true});
		}

		render() {
				return (
						<View style={styles.container}>
							<Text style={styles.title}>{this.props.title}</Text>
							<TextInput style={styles.inputs} placeholder='Nome'></TextInput>
							<TextInput style={styles.inputs} placeholder='Email'></TextInput>
							<TextInput style={styles.inputs} placeholder='Senha'></TextInput>
							<TextInput style={styles.inputs} placeholder='Serial Number do GAC'></TextInput>
							<TouchableOpacity 
									onPress={() => { this.cadastrar(); }}
									accessibilityLabel='Cadastrar'
									style={styles.buttons}
							>
								<Text style={styles.buttonText}>CADASTRAR</Text>
							</TouchableOpacity>
						</View>
				)
		}
}

const styles = StyleSheet.create({
	container: {
		padding: 30
	},

	title: {
		marginTop: 30,
		textAlign: 'center',
		fontSize: 30,
		color: '#000'
	},

	text: {
		textAlign: 'center',
		fontSize: 18
	},

	inputs: {
		marginBottom: 10
	},

	buttons: {
		height: 40,
		marginTop: 50,
		marginBottom: 20,
		backgroundColor: '#1194F6',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50
	},

	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold'
	}
});