import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native';
import Expo from 'expo';
import FormLogin from '../components/FormLogin';
import LoginBySocial from '../components/LoginBySocial';
import icon from '../assets/images/wemo_login.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

const cacheImages = images => images.map(image => {
  if (typeof image === 'string') return Image.prefetch(image);
  return Expo.Asset.fromModule(image).downloadAsync();
});

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

  state = {
    appIsReady: false
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([icon]);
    await Promise.all([...imageAssets]);
    this.setState({ appIsReady: true });
  }

  render() {
    console.log('Login Screen '+JSON.stringify(this.props))
    const { user: { isLoggedIn } } = this.props;
    const { containerStyle, dividerStyle, buttonContainerStyle } = styles;
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
          <FormLogin />

          <LoginBySocial />
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

const mapStateToProps = state => {
  console.log('PROPS STATE LOGIN SCREEN '+JSON.stringify(state))
  return {
    user: state.user,
    nav: state.nav
  };
};

export default connect(mapStateToProps, null)(LoginScreen);
