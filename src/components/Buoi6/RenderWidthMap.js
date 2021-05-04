import React, {Component} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  LoveIcon,
  AngryIcon,
  CareIcon,
  HahaIcon,
  LikeIcon,
  SadIcon,
} from '../../assets';
import IconButton from '../Buoi6/IconButton';
import gameData from '../../Data/gameData';
export default class RenderWidthMap extends Component {
  state = {
    icon: LoveIcon,
  };

  arrIcon = [LoveIcon, AngryIcon, CareIcon, HahaIcon, LikeIcon, SadIcon];
  handleOnPressIcon = icon => {
    this.setState({icon});
  };

  render() {
    return (
      <View style={styles.Container}>
        <Image source={this.state.icon} />
        <View style={styles.ButtonContainer}>
          {this.arrIcon.map((item, index) => {
            return (
              <IconButton
                key={index}
                image={item}
                changeIcon={this.handleOnPressIcon}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainer: {
    marginTop: 50,
    flexDirection: 'row',
  },
  ButtonIcon: {
    marginHorizontal: 5,
    height: 50,
    width: 50,
  },
});
