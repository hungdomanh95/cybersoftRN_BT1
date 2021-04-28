import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';

export default class IconButton extends Component {
  render() {
    return <Image source={this.props.icon.imageUrl} style={styles.icon} />;
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
});
