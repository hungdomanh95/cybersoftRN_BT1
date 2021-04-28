import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Touched extends Component {
  handleOnPress = params => {
    console.log('Pressed', params);
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleOnPress('RN02')}>
          <Text style={styles.textButton}> Button </Text>
        </TouchableOpacity>

        {/* <TouchableHighlight style={styles.button} onPress={this.handleOnPress}>
          <Text style={styles.textButton}>Button Highlight</Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback
          style={styles.button}
          onPress={this.handleOnPress}>
          <Text style={[styles.textButton, styles.textRed]}>
            Button WithoutFeedback
          </Text>
        </TouchableWithoutFeedback> */}
      </View>
    );
  }
}
// rns : tạo nhanh style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    marginVertical: 10,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textRed: {
    color: 'red',
  },
});
