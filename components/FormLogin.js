import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { BUTTON_GROUP_STYLES } from '../constants';

class FormLogin extends Component {
  render() {
    console.log('PROPS FormLogin : '+JSON.stringify(this.props))
    const { user: { isLoggedIn } } = this.props;
    
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>FORM LOGIN</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('PROPS STATE FORM LOGIN '+JSON.stringify(state))
  return {
    user: state.user,
    nav: state.nav
  };
};
const mapDispatchToProps = () => ({ loginUser });

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
