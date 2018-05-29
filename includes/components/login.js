import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  modifyEmail,
  modifyPassword,
  authUser,
} from '../actions/AutenticacaoActions';

import firebase from 'firebase';
import Home from './home';

class Login extends Component {
  _authUser() {
    const { email, password } = this.props;
    this.props.authUser({ email, password });
  }

  renderButtonAccess() {
    if(this.props.loadingLogin) {
      return (
        <ActivityIndicator size='large'/>
      )
    }
      return (
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => this._authUser()}
      >
        <Text style={styles.buttonText}>ACESSAR</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GAC</Text>
        <TextInput
          style={styles.inputs}
          placeholder='Email'
          keyboardType='email-address'
          onChangeText={input => this.props.modifyEmail(input)}
        />
        <TextInput
          style={styles.inputs}
          placeholder='Senha'
          secureTextEntry
          onChangeText={input => this.props.modifyPassword(input)}
        />
        <Text style={styles.error}>{this.props.errorLogin}</Text>
        {this.renderButtonAccess()}
        <TouchableOpacity
          title='cadastre-se'
          style={styles.buttons}
          onPress={() => Actions.register()}
          accessibilityLabel='clique para se cadastrar'
        >
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  password: state.AutenticacaoReducer.password,
  errorLogin: state.AutenticacaoReducer.errorLogin,
  loadingLogin: state.AutenticacaoReducer.loadingLogin,
});

export default connect(mapStateToProps, {
  modifyEmail,
  modifyPassword,
  authUser,
})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
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
    marginTop: 25,
    marginBottom: 25
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
