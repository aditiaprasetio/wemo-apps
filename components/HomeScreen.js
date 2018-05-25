import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { BUTTON_GROUP_STYLES } from '../constants';

class HomeScreen extends Component {
  render() {
    const { user: { isLoggedIn } } = this.props;
    
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>HOME</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ isLoggedin }) => ({ isLoggedIn });
const mapDispatchToProps = () => ({ loginUser });

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
