import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <View style={styles.itemTop} />
        <View style={styles.itemTop} />
      </View>
      <View style={styles.line} />
      <View style={styles.boxBottom}>
        <View style={styles.boxItem}>
          <View style={styles.itemBottom} />
          <View style={styles.itemBottom} />
        </View>
        <View style={styles.boxItem}>
          <View style={styles.itemBottom} />
          <View style={styles.itemBottom} />
        </View>
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
  },
  boxBottom: {
    backgroundColor: '#c8c8fA',
    flex: 20,
    borderRadius: 20,
    flexDirection: 'row',
    paddingBottom: '10%',
  },
  itemTop: {
    backgroundColor: '#ffffc2',
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  itemBottom: {
    backgroundColor: '#4f82c0',
    flex: 1,
    borderRadius: 20,
    margin: '10%',
  },
});
export default App;
