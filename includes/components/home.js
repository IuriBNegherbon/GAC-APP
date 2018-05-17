import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
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
    this.dataSource = ds.cloneWithRows(data);
  }

  render() {
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={data => (
            <View>
              <Text>{data}</Text>
            </View>
          )}
        />
      </View>
    );
  }

/*
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#3c4858'/>
        <Text style={styles.listViewTitle}>Hoje</Text>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={data => (
            <View>
              <Text>{data.hours}</Text>
              <Text>{data.quantity}</Text>
            </View>
          )}
        />
        <TouchableOpacity onPress={() => {Actions.schedules();}}
          style={styles.listViewAdd}
        >
          <Text style={styles.listViewAddText}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }*/
}

const mapStateToProps = state => {
  const data = _.map(state.ListDataReducer, (val, uid) => {
    return { ...val, uid };
  });
  return { data };
};

export default connect(mapStateToProps, {
  dataFetch,
})(Home);

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

  listViewText: {
    fontSize: 20,
    marginLeft: 25,
    marginRight: 50,
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
