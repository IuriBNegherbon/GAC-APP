import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

export default class Topbar extends Component {
	render() {
		return (
			<View style={styles.containerTopbar}>
				<TouchableOpacity onPress={() => {
					alert('ok');
				}}>
					<Text style={styles.menuTopbar}>&#9776;</Text>
				</TouchableOpacity>
				<Text style={styles.titleTopbar}>GAC</Text>
				<TouchableOpacity>
					
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerTopbar: {
		flexDirection: 'row',
		backgroundColor: '#3c4858',
		height: 60,
		alignItems: 'center'
	},

	menuTopbar: {
		marginLeft: 25,
		marginRight: 20,
		color: '#fff',
		fontSize: 25
	},

	titleTopbar: {
		fontSize: 20,
		color: '#fff'
	}
});