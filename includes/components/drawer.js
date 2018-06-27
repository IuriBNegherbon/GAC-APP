import React, { Component } from 'react';
import _ from 'lodash';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Drawer extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1E2D3E', padding: 25 }}>
        <View>
          <Text style={{ fontSize: 25, color: '#fff' }}>GAC</Text>
          <Text style={{ color: '#fff', fontSize: 20, paddingBottom: 50 }}>Bruno</Text>
        </View>
        <View>
          <TouchableOpacity style={{ paddingBottom: 20 }} onPress={() => {Actions.home();}}>
              <Text style={{ color: '#ddd', fontSize: 18, fontWeight: '100' }}>Horários</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingBottom: 20 }} onPress={() => {Actions.perfilUser();}}>
              <Text style={{ color: '#ddd', fontSize: 18, fontWeight: '100' }}>Editar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingBottom: 20 }} onPress={() => {Actions.perfilAnimal();}}>
              <Text style={{ color: '#ddd', fontSize: 18, fontWeight: '100' }}>Perfil do Seu Dog</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingBottom: 20 }} onPress={() => {Actions.login();}}>
              <Text style={{ color: '#ddd', fontSize: 18, fontWeight: '100' }}>Sair</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 75 }}>
          <TouchableOpacity style={{ paddingBottom: 20 }} onPress={() => {Actions.support();}}>
              <Text style={{ color: '#ddd', fontSize: 18, fontWeight: '100' }}>Suporte</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
