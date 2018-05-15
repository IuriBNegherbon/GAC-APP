import React, { Component } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PerfilUser extends Component {
	render() {
		return (
            <View style={styles.container}>
				<Image/>
                <Text style={styles.userName}>Iuri</Text>
				<Text style={styles.text}>iuri@gmail.com</Text>
				<Text style={styles.text}>SN201825748</Text>
				<TouchableOpacity>
					<Text style={styles.butttonEdditing}>Editar Conta</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.butttonDelete}>Apagar Conta</Text>
				</TouchableOpacity>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},

	userName: {
		color: '#1E2D3E',
		fontSize: 22
	},

	text: {
		fontSize: 18
	},

	butttonEdditing: {
		color: '#1194F6',
		fontSize: 18,
		marginTop: 15
	},

	butttonDelete: {
		color: '#F95F62',
        marginTop: 10,
        fontSize: 18
	}
});