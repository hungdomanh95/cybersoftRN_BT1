import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import IconButton from './IconButton';
const dataImage = [
  {
    id: 1,
    imageUrl: require('../../assets/images/love.png'),
    animationScale: [1, 1.1, 1, 1.1, 1],
    animationRotate: ['0deg', '0deg', '0deg', '0deg', '0deg'],
  },
  {
    id: 2,
    imageUrl: require('../../assets/images/care.png'),
    animationScale: [1, 1.1, 1, 1.1, 1],
    animationRotate: ['0deg', '-10deg', '0deg', '10deg', '0deg'],
  },
  {
    id: 3,
    imageUrl: require('../../assets/images/haha.png'),
    animationScale: [1, 1.1, 1, 1.1, 1],
    animationRotate: ['0deg', '-20deg', '0deg', '20deg', '0deg'],
  },
  {
    id: 4,
    imageUrl: require('../../assets/images/like.png'),
    animationScale: [1, 1, 1, 1, 1],
    animationRotate: ['0deg', '20deg', '-20deg', '0deg', '0deg'],
  },
  {
    id: 5,
    imageUrl: require('../../assets/images/angry.png'),
    animationScale: [1, 1, 1, 1, 1],
    animationRotate: ['0deg', '-20deg', '0deg', '20deg', '0deg'],
  },
  {
    id: 6,
    imageUrl: require('../../assets/images/sad.png'),
    animationScale: [1, 1.01, 1, 1.01, 1],
    animationRotate: ['0deg', '-10deg', '0deg', '10deg', '0deg'],
  },
];
export default class RenderIcon extends Component {
  nameIcon = 'angry';
  state = {
    animated: new Animated.Value(0),
    itemChoose: {
      id: 1,
      imageUrl: require('../../assets/images/love.png'),
      animationScale: [1, 1.1, 1, 1.1, 1],
      animationRotate: ['0deg', '0deg', '0deg', '0deg', '0deg'],
    },
  };
  changeIcon = item => {
    this.setState({
      itemChoose: item,
    });
  };
  componentDidMount = () => {
    Animated.loop(
      Animated.timing(this.state.animated, {
        toValue: 4,
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  };
  render() {
    console.log(`../../assets/images/${this.nameIcon}.png`);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>How do you feel ?</Text>
        <Animated.Image
          source={this.state.itemChoose.imageUrl}
          style={{
            transform: [
              {
                scale: this.state.animated.interpolate({
                  inputRange: [0, 1, 2, 3, 4],
                  outputRange: this.state.itemChoose.animationScale,
                }),
              },
              {
                rotate: this.state.animated.interpolate({
                  inputRange: [0, 1, 2, 3, 4],
                  outputRange: this.state.itemChoose.animationRotate,
                }),
              },
            ],
          }}
        />
        {/* <View style={styles.listIcon}>
          {dataImage.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => this.changeIcon(item)}>
                <IconButton icon={item} />
              </TouchableOpacity>
            );
          })}
        </View> */}
        <View style={styles.listIcon}>
          {dataImage.map((item, index) => {
            return (
              <IconButton
                icon={item}
                key={index}
                changeIcon={this.changeIcon}
              />
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  listIcon: {
    marginTop: 30,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    marginBottom: 30,
  },
});
