import React from 'react';
import {View, StyleSheet} from 'react-native';
import RenderIcon from './src/components/Buoi5/RenderIcon';
import RenderWidthState from './src/components/Buoi5/RenderWidthState';
// import Buoi3 from './src/components/Buoi3';
import Touched from './src/components/Buoi5/Touched';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <Buoi3 /> */}
      {/* <Touched /> */}
      {/* <RenderWidthState /> */}
      <RenderIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
