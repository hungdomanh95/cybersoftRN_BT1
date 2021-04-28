import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
// import BoxItem from './BoxItem';
// import ItemTop from './itemTop';
import ItemBottom from './ItemBottom';
const Buoi3 = () => {
  const textAvatar = 'React Native 02 -- Cao Thang';
  const isShow = true;
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        {/* <ItemTop />
          <ItemTop /> */}

        <Text style={styles.textAvatar}>
          {isShow ? (
            <Image source={require('../../img/a.jpg')} style={styles.images} />
          ) : (
            <Text>Image Hidden</Text>
          )}
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.boxBottom}>
        <ItemBottom />
        <ItemBottom />
        <ItemBottom />
        <ItemBottom />
        {/* <BoxItem /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    flex: 1,
  },
  boxItem: {
    flex: 1,
  },
  boxTop: {
    backgroundColor: '#A1c99A',
    flex: 20,
    borderRadius: 20,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxBottom: {
    backgroundColor: '#c8c8fA',
    flex: 20,
    borderRadius: 20,
    flexDirection: 'row',
    paddingBottom: '10%',
    flexWrap: 'wrap',
  },
  itemTop: {
    backgroundColor: '#ffffc2',
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBottom: {
    backgroundColor: '#4f82c0',
    flex: 1,
    borderRadius: 20,
    margin: '10%',
  },
  images: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: 'white',
  },
  textAvatar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
});

export default Buoi3;
