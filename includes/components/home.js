import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	ListView,
	TouchableOpacity,
	StatusBar,
	StyleSheet
} from 'react-native';
import firebase from 'firebase';
import Topbar from './topbar';

//funcionarios.child("001").child("nome").set();

export default class Home extends Component {

	constructor() {
		super();
		let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
		this.state = {
			itemDataSource: ds
		}

		this.renderRow = this.renderRow.bind(this);
		this.pressRow = this.pressRow.bind(this);
	}

	componentWillMount() {
		this.getItems(this.itemsRef);
		/*var config = {
			apiKey: "AIzaSyC6j36G0DzpJK35lj0oFRzmhhdoz_A-1QY",
			authDomain: "gacapp-8b4eb.firebaseapp.com",
			databaseURL: "https://gacapp-8b4eb.firebaseio.com",
			projectId: "gacapp-8b4eb",
			storageBucket: "gacapp-8b4eb.appspot.com",
			messagingSenderId: "1057945419816"
		};
		var iniciar = firebase.initializeApp(config);
		*/
	}

	componentDidMount() {
		this.getItems(this.itemsRef);
	}

	getItems(itemsRef) {
		let items = [{horario: '13:15', quantidade: '100'}, {horario: '15:00', quantidade: '100'}];

		this.setState({
			itemDataSource: this.state.itemDataSource.cloneWithRows(items)
		});
	}

	pressRow(item) {
		console.log(item);
	}

	renderRow(item) {
			return(
				<View style={styles.listView}>
					<TouchableOpacity onPress={() => {
						this.pressRow(item);
					}}>
						<View style={styles.listView}>
							<Text style={styles.listViewText}>{item.horario}</Text>
							<Text style={styles.listViewText}>{item.quantidade} gramas</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {
						alert('ok');
					}}>
						<Text style={styles.listViewCancel}>X</Text>
					</TouchableOpacity>
				</View>
			);
	}


	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor='#3c4858'/>
				<Topbar/>
				<Text style={styles.listViewTitle}>Hoje</Text>
				<ListView 
					dataSource={this.state.itemDataSource}
					renderRow={this.renderRow}
				/>
				<TouchableOpacity onPress={() => {
					alert('ok');
					}}
					style={styles.listViewAdd}
				>
					<Text style={styles.listViewAddText}>+</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1
	},

	listViewTitle: {
		fontSize: 20,
		margin: 30,
		marginBottom: 0
	},

	listView: {
		height: 90,
		flexDirection: 'row',
		alignItems: 'center'
	},

	listViewText: {
		fontSize: 20,
		marginLeft: 25,
		marginRight: 50
	},

	listViewCancel: {
		marginLeft: 70,
		fontSize: 18
	},

	listViewAdd: {
		backgroundColor: '#3c4858',
		padding: 20,
		marginLeft: 330,
		width: 75,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},

	listViewAddText: {
		color: '#fff',
		fontSize: 30
	}
});