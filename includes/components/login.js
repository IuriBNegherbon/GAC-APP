import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	Modal,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import firebase from 'firebase';
import Register from './register';
import Home from './home';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			modalVisible: false
		}
	}

	login() {
		alert('ok');
		//this.props.navigator.push({id: 'b'});
	}

	cadastrar() {
		alert('ok');
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>GAC</Text>
				<TextInput style={styles.inputs} placeholder='Email'></TextInput>
				<TextInput style={styles.inputs} placeholder='Senha'></TextInput>
				<TouchableOpacity 
					onPress={() => {Actions.home();}}
					style={styles.buttons}
				>
					<Text style={styles.buttonText}>ENTRAR</Text>
				</TouchableOpacity>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
					alert('Modal has been closed.');
					}}>
					<View style={{marginTop: 22}}>
						<Register title="Bem vindo ao GAC"/>
					</View>
					<TouchableHighlight
						onPress={() => {
						this.setModalVisible(!this.state.modalVisible);
						}}
						style={styles.buttonCancel}
					>
						<Text style={styles.buttonText}>CANCELAR</Text>
					</TouchableHighlight>
				</Modal>
				<Text style={styles.text}>OU</Text>
				<TouchableOpacity 
					onPress={() => {
					this.setModalVisible(true);
					}}
					style={styles.buttons}
				>
					<Text style={styles.buttonText}>CADASTRAR-SE</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					onPress={() => {
					this.setModalVisible(true);
					}}
					style={styles.buttons}
				>
					<Text style={styles.buttonText}>ENTRAR COM O GOOGLE</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
		backgroundColor: '#fff',
		flex: 1
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

	buttonCancel: {
		margin: 30,
		height: 40,
		marginTop: 50,
		marginBottom: 20,
		backgroundColor: '#F95F62',
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