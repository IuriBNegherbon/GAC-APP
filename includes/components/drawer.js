import React, { Component } from 'react';
import {
	Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Drawer extends Component {
	render() {
		return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>GAC</Text>
                    <Text style={styles.userName}>Iuri</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttons} onPress={() => {Actions.home();}}>
                        <Text style={styles.buttonText}>Horários</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => {Actions.perfilUser();}}>
                        <Text style={styles.buttonText}>Editar Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => {Actions.perfilAnimal();}}>
                        <Text style={styles.buttonText}>Perfil do Seu Dog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => {Actions.login();}}>
                        <Text style={styles.buttonText}>Sair</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.support}>
                    <TouchableOpacity style={styles.buttons} onPress={() => {Actions.support();}}>
                        <Text style={styles.buttonText}>Suporte</Text>
                    </TouchableOpacity>
                </View>
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E2D3E',
        padding: 25
    },
    title: {
        fontSize: 25,
        color: '#fff'
    },

    userName: {
        color: '#fff',
        fontSize: 20,
        paddingBottom: 50
    },

    buttons: {
        paddingBottom: 20
    },

    buttonText: {
        color: '#ddd',
        fontSize: 18,
        fontWeight: '100'
    },

    support: {
        paddingTop: 75
    }
});