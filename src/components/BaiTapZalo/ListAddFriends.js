import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {addFriend} from '../../Data/zaloData';
import ItemAddFriends from './ItemAddFriends';
export default class ListAddFriends extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleTop}>
          <Icon name="ios-people" size={20} style={styles.icon} />
          <Text style={styles.textStrong}>Gợi ý kết bạn</Text>
        </View>
        <ScrollView>
          {addFriend.map((item, index) => (
            <ItemAddFriends item={item} key={index} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 5,
    width: '100%',
    // marginVertical: 20,
    // backgroundColor: 'blue',
  },
  textStrong: {
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 5,
  },
  titleTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
