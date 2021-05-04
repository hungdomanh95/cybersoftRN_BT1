import React from 'react';
import {View, StyleSheet} from 'react-native';
import RenderIcon from './src/components/Buoi5/RenderIcon';
import RenderWidthState from './src/components/Buoi5/RenderWidthState';
import Buoi3 from './src/components/Buoi3';
import Touched from './src/components/Buoi5/Touched';
import BaiTapEmoji from './src/components/Buoi6/BaiTapEmoji';
import RenderWidthMap from './src/components/Buoi6/RenderWidthMap';
import BaiTapRenderWidthMap from './src/components/Buoi6/BaiTapRenderWidthMap';
import GameScrollView from './src/components/Buoi6/GameScrollView';
import BaiTapScrollView from './src/components/Buoi6/BaiTapScrollView';
import BaiTapZalo from './src/components/BaiTapZalo/BaiTapZalo';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <Buoi3 /> */}
      {/* <Touched /> */}
      {/* <RenderWidthState /> */}
      {/* <RenderIcon /> */}
      {/* <BaiTapEmoji /> */}
      {/* <RenderWidthMap /> */}
      {/* <BaiTapRenderWidthMap /> */}
      {/* <GameScrollView /> */}
      {/* <BaiTapScrollView /> */}
      <BaiTapZalo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
