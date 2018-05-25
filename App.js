import React, { Component } from "react";
import { BackHandler, View, Text } from "react-native";
import { Provider, connect } from "react-redux";
import { NavigationActions, addNavigationHelpers } from "react-navigation";
import NavigationStack from "./navigation/navigationStack";

import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import {createStore, applyMiddleware, compose} from 'redux';  
import reducers from './reducers';  
import { navReducers } from './reducers/navigationReducer';  
import thunk from 'redux-thunk';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
  'app',
  state => state.nav,
);
const addListener = createReduxBoundAddListener('app');

class AppNavigation extends Component {
  componentDidMount() {
    // BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    // BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  // onBackPress = () => {
  //   const { dispatch, nav } = this.props;
  //   if (nav.stateForLoggedIn.index <= 1) {
  //     BackHandler.exitApp();
  //     return;
  //   }
  //   dispatch(NavigationActions.back());
  //   return true;
  // };

  render() {
  	console.log('PROPS App : '+JSON.stringify(this.props))
  	const { dispatch, nav } = this.props;
  	const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener,
    });
    return (
        <NavigationStack navigation={navigation} />
    );
  }
}

const mapStateToProps = state => {
  console.log('PROPS STATE'+JSON.stringify(state))
  return {
    isLoggedIn: state.user.isLoggedIn,
    nav: state.nav
  };
};

const AppNavigator= connect(mapStateToProps,null)(AppNavigation);

const store = createStore(
  reducers,
  applyMiddleware(middleware)
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
       	 <AppNavigator />
      </Provider>
    );
  }
}
