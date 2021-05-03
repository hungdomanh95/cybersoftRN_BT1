import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class IconButton extends Component {
  handlechangeIcon = () => {
    this.props.changeIcon(this.props.icon);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handlechangeIcon}>
        <Image source={this.props.icon.imageUrl} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
});
