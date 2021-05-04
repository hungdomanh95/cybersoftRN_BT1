import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default class BaiTapScrollView extends Component {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.arr.map(item => (
            <View
              style={[
                styles.item,
                {
                  backgroundColor: `#${Math.floor(
                    Math.random() * 16777215,
                  ).toString(16)}`,
                },
              ]}
              key={item}>
              <Text>item {item}</Text>
            </View>
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
  item: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
});
