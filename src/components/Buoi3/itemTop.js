import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ItemTop extends Component {
  render() {
    return (
      <View style={styles.itemTop}>
        <Text>ITem Top</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemTop: {
    backgroundColor: '#ffffc2',
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
