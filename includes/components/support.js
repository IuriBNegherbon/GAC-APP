import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Support extends Component {
	render() {
		return (
            <View style={styles.container}>
                <Text style={styles.title}>Nos envia sua mensagem e entraremo em contato</Text>
                <TextInput style={{fontSize: 20}} placeholder='Assunto'/>
                <TextInput style={{fontSize: 18}} placeholder='Digite sua mensagem'/>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => {Actions.home();}}>
                        <Text style={styles.buttonCancel}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.buttonEnviar}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 25,
    },

    title: {
        paddingTop: 25,
        fontSize: 20,
        marginBottom: 25
    },

    buttons: {
        flexDirection: 'row',
        marginLeft: 100
    },

    buttonCancel: {
        marginRight: 25,
        color: '#F95F62',
        fontSize: 18
    },

    buttonEnviar: {
        color: '#1194F6',
        fontSize: 18
    }
});