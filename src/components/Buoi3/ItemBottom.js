import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class ItemBottom extends Component {
  render() {
    return <View style={styles.itemBottom} />;
  }
}
const styles = StyleSheet.create({
  itemBottom: {
    backgroundColor: '#4f82c0',
    // flex: 1,
    borderRadius: 20,
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '40%',
  },
});
