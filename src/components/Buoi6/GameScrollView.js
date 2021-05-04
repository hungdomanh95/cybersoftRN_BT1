import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import gameData from '../../Data/gameData';

export default class GameScrollView extends Component {
  renderGameItem = () => {
    return gameData.map(item => (
      <View
        key={item.id}
        style={[styles.itemGame, {backgroundColor: `${item.backgroundColor}`}]}>
        <Image source={item.icon} style={styles.iconItem} />
        <View style={styles.contentItem}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </View>
      </View>
    ));
  };
  renderGameItem2 = () => {
    return gameData.map(item => (
      <View
        key={item.id + 10}
        style={[styles.itemGame, {backgroundColor: `${item.backgroundColor}`}]}>
        <Image source={item.icon} style={styles.iconItem} />
        <View style={styles.contentItem}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </View>
      </View>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            {this.renderGameItem()}
            {this.renderGameItem2()}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343433',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  itemGame: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: 10,
    paddingVertical: 30,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  iconItem: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  contentItem: {
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subTitle: {
    color: 'white',
    fontSize: 12,
    opacity: 0.6,
  },
});
