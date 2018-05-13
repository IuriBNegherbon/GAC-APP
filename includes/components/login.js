import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	Modal,
	TextInput,
	TouchableOpacity,
	TouchableHighlight,
	StyleSheet,
	ActivityIndicator
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {
	modifyEmail,
	modifyPassword,
	authUser
} from '../actions/AutenticacaoActions';

import firebase from 'firebase';
//import Register from './register';
import Home from './home';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			modalVisible: false
		}
	}

	_authUser() {
		const {email, password} = this.props;
		this.props.authUser({email, password});
	}

	renderButtonAccess() {
		if(this.props.loadingLogin) {
			return (
				<ActivityIndicator size='large'/>
			)
		}
		return (
			<Button
				title='Acessar'
				color='#115e54'
				onPress={() => this._authUser()}
			/>
		);
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
				<TextInput
					style={styles.inputs}
					placeholder='Email'
					onChangeText={input => this.props.modifyEmail(input)}
				/>
				<TextInput
					style={styles.inputs}
					placeholder='Senha'
					onChangeText={input => this.props.modifyPassword(input)}
				/>
				<Text style={styles.error}>{this.props.loginError}</Text>
				{this.renderButtonAccess()}
			</View>
		);
	}
}

const mapStateToProps = state => ({
	email: state.AutenticacaoReducer.email,
	password: state.AutenticacaoReducer.password,
	loginError: state.AutenticacaoReducer.loginError,
	loadingLogin: state.AutenticacaoReducer.loadingLogin
})

export default connect(mapStateToProps, {
	modifyEmail,
	modifyPassword,
	authUser
})(Login);

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

	error: {
		fontSize: 15,
		color: '#000',
		textAlign: 'center',
		marginTop: 25
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
