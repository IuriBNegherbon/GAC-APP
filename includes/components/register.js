import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {
	modifyEmail,
	modifyPassword,
	modifyName,
	registerUser
} from '../actions/AutenticacaoActions';

class Register extends Component {
	_registerUser() {
		const {name, email, password} = this.props;
		this.props.cadastrarUsuario({name, email, password});
	}

	renderButtonRegsiter() {
		if(this.props.loadingRegister) {
			return (
				<ActivityIndicator size='large'/>
			)
		}

		return (
			<Button
				title='Acessar'
				color='#115e54'
				onPress={() => this._registerUser()}
			/>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.containerInput}>
					<TextInput
						value={this.props.nome}
						style={styles.form}
						placeholder='Nome'
						placeholderTextColor='#fff'
						onChangeText={input => this.props.modifyName(input)}
					/>
					<TextInput
						value={this.props.email}
						style={styles.form}
						placeholder='E-mail'
						keyboardType='email-address'
						placeholderTextColor='#fff'
						onChangeText={input => this.props.modifyEmail(input)}
					/>
					<TextInput
						value={this.props.senha}
						style={styles.form}
						placeholder='Senha'
						secureTextEntry
						placeholderTextColor='#fff'
						onChangeText={input => this.props.modifyPassword(input)}
					/>
					<Text style={styles.error}>{this.props.erroCadastro}</Text>
				</View>
				<View style={styles.containerButton}>
					{this.renderButtonRegsiter()}
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => (
	{
		name: state.AutenticacaoReducer.name,
		email: state.AutenticacaoReducer.email,
		password: state.AutenticacaoReducer.password,
		errorRegister: state.AutenticacaoReducer.errorRegister,
		loadingRegister: state.AutenticacaoReducer.loadingRegister
	}
);

export default connect(
	mapStateToProps,
	{
		modifyName,
		modifyEmail,
		modifyPassword,
		registerUser
	}
)(Register);

const styles = StyleSheet.create({
	bg: {
		flex: 1
	},

	container: {
		flex: 1,
		padding: 15
	},

	containerInput: {
		flex: 4,
		justifyContent: 'center'
	},

	form: {
		fontSize: 15,
		height: 45,
		color: '#fff'
	},

	error: {
		fontSize: 15,
		color: '#fff',
		textAlign: 'center',
		marginTop: 25
	},

	containerButton: {
		flex: 1
	}
});
