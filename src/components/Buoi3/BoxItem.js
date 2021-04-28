import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ItemBottom from './ItemBottom';

export default class BoxItem extends Component {
  render() {
    return (
      <View style={styles.boxItem}>
        <ItemBottom />
        <ItemBottom />
        <ItemBottom />
        <ItemBottom />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxItem: {
    flex: 1,
    // backgroundColor:"red"
  },
});
