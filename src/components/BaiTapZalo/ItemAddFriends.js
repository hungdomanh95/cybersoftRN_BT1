import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class ItemAddFriends extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.content}>
          <Image source={this.props.item.image} style={styles.image} />
          <View style={styles.infor}>
            <Text style={styles.textStrong}>{this.props.item.name}</Text>
            <Text>{this.props.item.mutualFriends} bạn chung</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Kết bạn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 10,
  },
  content: {
    flexDirection: 'row',
  },
  infor: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  textStrong: {
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: '#BBBBFF',
  },
});
