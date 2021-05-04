import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import ListAddFriends from './ListAddFriends';
import ListHistory from './ListHistory';

export default class BaiTapZalo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListHistory />
        <ListAddFriends />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
});
