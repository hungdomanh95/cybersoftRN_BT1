import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ItemScrollView extends Component {
  render() {
    return (
      <View
        style={[
          styles.item,
          {
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16,
            )}`,
          },
        ]}>
        <Text>item {this.props.item}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
});
