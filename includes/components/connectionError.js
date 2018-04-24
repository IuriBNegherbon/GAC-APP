import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class ConnectionError extends Component {
	render() {
		return (
            <View style={styles.container}>
                <Text style={styles.title}>Não foi possível se connectar ao GAC</Text>
                <Text style={styles.text}>Ocorreu algum problema durante a conexão, clique no botão abaixo para voltar as configurações</Text>
                <TouchableOpacity onPress={() => {Actions.home();}}>
                    <Text style={styles.button}>VOLTAR</Text>
                </TouchableOpacity>
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35
    },

    title: {
        fontSize: 20
    },

    text: {
        margin: 10,
        fontSize: 18
    },

    button: {
        fontSize: 18,
        color: '#F95F62'
    }
});