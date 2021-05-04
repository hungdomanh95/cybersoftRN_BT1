import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ItemScrollView from './ItemScrollView';

export default class BaiTapScrollView extends Component {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.arr.map((item, index) => (
            <ItemScrollView item={item} key={index} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
