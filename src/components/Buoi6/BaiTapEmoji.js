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

export default class BaiTapEmoji extends Component {
  state = {
    icon: LoveIcon,
  };

  arrIcon = [LoveIcon, AngryIcon, CareIcon, HahaIcon, LikeIcon, SadIcon];
  handleOnPressIcon = icon => {
    console.log('handleOnPressIcon');
    this.setState({icon});
  };

  render() {
    return (
      <View style={styles.Container}>
        <Image source={this.state.icon} />
        <View style={styles.ButtonContainer}>
          <IconButton image={LoveIcon} changeIcon={this.handleOnPressIcon} />
          <IconButton image={AngryIcon} changeIcon={this.handleOnPressIcon} />
          <IconButton image={CareIcon} changeIcon={this.handleOnPressIcon} />
          <IconButton image={HahaIcon} changeIcon={this.handleOnPressIcon} />
          <IconButton image={LikeIcon} changeIcon={this.handleOnPressIcon} />
          <IconButton image={SadIcon} changeIcon={this.handleOnPressIcon} />
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
