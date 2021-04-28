import React, {Component, Fragment} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class RenderWidthState extends Component {
  state = {
    isLogin: false,
  };
  // isLogin = true;
  handleLogout = () => {
    this.setState(
      {
        isLogin: false,
      },
      () => {
        console.log('this.isLogin: ', this.state.isLogin);
      },
    );
  };
  handleLogin = () => {
    this.setState(
      {
        isLogin: true,
      },
      () => {
        console.log('this.isLogin: ', this.state.isLogin);
      },
    );
  };
  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <Fragment>
          <Text> RenderWidthState </Text>
          <Text> Hello RN02 </Text>
          <TouchableOpacity
            style={[styles.button, styles.buttonRed]}
            onPress={this.handleLogout}>
            <Text style={styles.text}>Log out</Text>
          </TouchableOpacity>
        </Fragment>
      );
    } else {
      return (
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
      );
    }
  };

  render() {
    return <View style={styles.container}>{this.renderLogin()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    marginVertical: 20,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  buttonRed: {
    backgroundColor: '#e74c3c',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
