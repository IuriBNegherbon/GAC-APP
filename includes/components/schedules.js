import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
    TouchableOpacity,
    TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Schedules extends Component {
	render() {
		return (
            <View style={styles.container}>
                <View style={styles.containerHours}>
                    <TextInput style={{width: 100, fontSize: 45}} placeholder='3:30' placeholderTextColor='#fff' keyboardType='numeric'/>
                    <View style={styles.HoursTextAmPm}>
                        <Text>AM</Text>
                        <Text>PM</Text>
                    </View>
                </View>                
                <View style={styles.containerHours}>
                    <TextInput style={{width: 60, fontSize: 45}} placeholder='30' placeholderTextColor='#fff' keyboardType='numeric'/>
                    <Text style={styles.gramsText}>gramas</Text>
                </View>
                <View style={styles.containerButtons}>
                    <TouchableOpacity onPress={() => {Actions.pop();}}>
                        <Text style={styles.buttonCancel}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.buttonOk}>OK</Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerHours: {
        width: 350,
        height: 120,
        backgroundColor: '#3c4858',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },

    HoursText: {
        color: '#fff',
        fontSize: 45
    },

    HoursTextAmPm: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 5
    },

    gramsText: {
        color: '#fff',
        fontSize: 45
    },

    containerButtons: {
        flexDirection: 'row'
    },

    buttonCancel: {
        color: '#F95F62',
        marginRight: 10,
        fontSize: 20
    },

    buttonOk: {
        color: '#1194F6',
        fontSize: 20
    }
});