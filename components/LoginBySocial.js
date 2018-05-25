import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { BUTTON_GROUP_STYLES } from '../constants';

class LoginBySocial extends Component {
  render() {
    const { user: { isLoggedIn } } = this.props;
    
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>LOGIN BY SOCIAL</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('PROPS STATE LOGIN SCREEN '+JSON.stringify(state))
  return {
    user: state.user,
    nav: state.nav
  };
};
const mapDispatchToProps = () => ({ loginUser });

export default connect(mapStateToProps, mapDispatchToProps)(LoginBySocial);
