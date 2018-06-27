import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  Text,
  View,
  ListView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { dataFetch } from '../actions/AppActions';

class Home extends Component {
  componentWillMount() {
    this.props.dataFetch();
    this.getData(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.getData(nextProps.data);
  }

  getData(data) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.font = ds.cloneWithRows(data);
  }

  renderRow(data) {
    return (
      <TouchableOpacity onPress={() => { Actions.schedules({ dataHours: data.user_data_hora, dataMinutes: data.user_data_minuto, dataQuantity: data.user_data_racao }) }}>
        <View style={styles.listView}>
          <Text style={{ fontSize: 20, marginLeft: 25 }}>{data.user_data_hora}</Text>
          <Text>:</Text>
          <Text style={{ fontSize: 20, marginRight: 50 }}>{data.user_data_minuto}</Text>
          <Text style={{ fontSize: 20 }}>Ração: </Text>
          <Text style={{ fontSize: 20, marginRight: 50 }}>{data.user_data_racao}</Text>
          <TouchableOpacity>
            <Text style={{ marginLeft: 10, marginRight: 25, color: '#F95F62', fontSize: 18 }}>EXCLUIR</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#3c4858'/>
        <Text style={styles.listViewTitle}>Hoje</Text>
        <ListView
          enableEmptySections
          dataSource={this.font}
          renderRow={data => this.renderRow(data)}
        />
        <TouchableOpacity onPress={() => {Actions.schedules();}}
          style={styles.listViewAdd}
        >
          <Text style={styles.listViewAddText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const data = _.map(state.ListDataReducer, (val, uid) => {
    return { ...val, uid };
  });
  return ({ data });
};

export default connect(mapStateToProps, { dataFetch })(Home);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 50,
  },

  listViewTitle: {
    fontSize: 20,
    margin: 30,
    marginBottom: 0,
  },

  listView: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  listViewCancel: {
    marginLeft: 20,
    fontSize: 18,
  },

  listViewAdd: {
    backgroundColor: '#3c4858',
    padding: 18,
    marginLeft: 280,
    width: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listViewAddText: {
    color: '#fff',
    fontSize: 30,
  },
});
