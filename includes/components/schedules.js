import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  modifyHours,
  modifyMinutes,
  modifyQuantity,
  registerData,
} from '../actions/AppActions';

class Schedules extends Component {
  _registerData() {
    const { hours, minutes, quantity, contador } = this.props;
    this.props.registerData({ hours, minutes, quantity, contador });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 350, height: 120, backgroundColor: '#3c4858', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
          <TextInput
            value={this.props.hours}
            style={{ width: 70, fontSize: 45 }}
            placeholder={this.props.dataHours}
            placeholderTextColor='#fff'
            keyboardType='numeric'
            onChangeText={input => this.props.modifyHours(input)}
          />
          <TextInput
            value={this.props.minutes}
            style={{ width: 70, fontSize: 45 }}
            placeholder={this.props.dataMinutes}
            placeholderTextColor='#fff'
            keyboardType='numeric'
            onChangeText={input => this.props.modifyMinutes(input)}
          />
          <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 5 }}>
            <Text>AM</Text>
            <Text>PM</Text>
          </View>
        </View>
        <View style={{ width: 350, height: 120, backgroundColor: '#3c4858', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10 }}>
          <TextInput
            value={this.props.quantity}
            style={{ width: 90, fontSize: 45 }}
            placeholder={this.props.dataQuantity}
            placeholderTextColor='#fff'
            keyboardType='numeric'
            onChangeText={input => this.props.modifyQuantity(input)}
          />
          <Text style={{ color: '#fff', fontSize: 45 }}>gramas</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => { Actions.pop(); }}>
              <Text style={{ color: '#F95F62', marginRight: 10, fontSize: 18 }}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._registerData()}>
              <Text style={{ color: '#1194F6', fontSize: 18 }}>OK</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, color: '#000', textAlign: 'center', marginTop: 25 }}>{this.props.errorRegister}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  hours: state.AppReducer.hours,
  minutes: state.AppReducer.minutes,
  quantity: state.AppReducer.quantity,
  contador: state.AppReducer.contador,
  registerDataError: state.AppReducer.registerDataError,
});

export default connect(mapStateToProps, {
  modifyHours,
  modifyMinutes,
  modifyQuantity,
  registerData,
})(Schedules);
