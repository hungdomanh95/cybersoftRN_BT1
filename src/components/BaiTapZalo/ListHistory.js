import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {historyFriend} from '../../Data/zaloData';
export default class ListHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleTop}>
          <Icon name="back-in-time" size={20} style={styles.icon} />
          <Text style={styles.textStrong}>Danh sách tìm kiếm gần đây</Text>
        </View>
        <ScrollView style={styles.row} bounces="false">
          <View style={styles.flexRow}>
            {historyFriend.map((item, index) => (
              <View key={index} style={styles.center}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.textStrong}>{item.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 150,
    // flex:1,
    width: '100%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  titleTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 10,
  },
  textStrong: {
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 5,
  },
});
