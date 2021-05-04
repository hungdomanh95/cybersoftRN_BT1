import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class IconButton extends Component {
  // handlechangeIcon = () => {
  //   console.log('this.props.image: ', this.props.image);
  //   this.props.changeIcon(this.props.image);
  // };
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.changeIcon(this.props.image)}>
        <Image source={this.props.image} style={styles.icon} />
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
