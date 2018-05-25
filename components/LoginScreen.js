import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import { Platform, TouchableOpacity, StyleSheet, Alert, Text, View, Image } from "react-native";
import { loginUser } from "../actions";
import icon from '../assets/images/wemo_login.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';

class FormLogin extends Component {
  // static navigationOptions = {
  //   title: "Login"
  // };

  login = () => {
    let username='aditiap';
    let password='aditia';
    this.props.loginUser(username, password);
  };

  navigateToRegisterScreen = () => {
    this.props.register();
  };

  render() {
    Alert.alert('JUDUL', 'PESAN');
    console.log('Login screen '+JSON.stringify(this.props));
    const { user: { isLoggedIn } }=this.props;
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>{'Login : '+isLoggedIn}</Text>
        <Text>CCC</Text>
        <Text>AAA</Text>
        <Text>AAA</Text>
        <Text>AAA</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = () => ({ loginUser });

const ComponentFormLogin= connect(mapStateToProps, mapDispatchToProps)(FormLogin);

class LoginScreen extends Component {
  static navigationOptions = () => ({
    title: 'Capo Keys',
    headerStyle: {
      height: Platform.OS === 'android' ? 40 + STATUS_BAR_HEIGHT : 40,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: 'white'
    },
    headerLeft: (
      <Image
        source={icon}
        style={styles.imageStyle}
      />
    )
  });

  render() {
    const { containerStyle, dividerStyle, buttonContainerStyle } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: '#444' }}>
          <ComponentFormLogin />
          <Text>ZZZZ</Text>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  dividerStyle: {
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: '#2196F3'
  },
  buttonContainerStyle: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  }
};

export default LoginScreen;