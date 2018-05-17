import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  modifyHours,
  modifyQuantity,
  registerData
} from '../actions/AppActions';

class Schedules extends Component {
  _registerData() {
    const { hours, quantity } = this.props;
    this.props.registerData({ hours, quantity });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHours}>
          <TextInput
            value={this.props.hours}
            style={{width: 130, fontSize: 45}}
            placeholder='3:30'
            placeholderTextColor='#fff'
            keyboardType='numeric'
            onChangeText={input => this.props.modifyHours(input)}
          />
          <View style={styles.HoursTextAmPm}>
            <Text>AM</Text>
            <Text>PM</Text>
          </View>
        </View>
        <View style={styles.containerHours}>
          <TextInput
            value={this.props.quantity}
            style={{width: 90, fontSize: 45}}
            placeholder='30'
            placeholderTextColor='#fff'
            keyboardType='numeric'
            onChangeText={input => this.props.modifyQuantity(input)}
          />
          <Text style={styles.gramsText}>gramas</Text>
        </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity onPress={() => {Actions.pop();}}>
              <Text style={styles.buttonCancel}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._registerData()}>
              <Text style={styles.buttonOk}>OK</Text>
          </TouchableOpacity>
          <Text style={styles.error}>{this.props.errorRegister}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  hours: state.AppReducer.hours,
  quantity: state.AppReducer.quantity,
  registerDataError: state.AppReducer.registerDataError,
});

export default connect(mapStateToProps, {
  modifyHours,
  modifyQuantity,
  registerData,
})(Schedules);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerHours: {
    width: 350,
    height: 120,
    backgroundColor: '#3c4858',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },

  HoursText: {
    color: '#fff',
    fontSize: 45,
  },

  HoursTextAmPm: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 5,
  },

  gramsText: {
    color: '#fff',
    fontSize: 45,
  },

  error: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    marginTop: 25,
  },

  containerButtons: {
    flexDirection: 'row',
  },

  buttonCancel: {
    color: '#F95F62',
    marginRight: 10,
    fontSize: 18,
  },

  buttonOk: {
    color: '#1194F6',
    fontSize: 18.
  },
});
