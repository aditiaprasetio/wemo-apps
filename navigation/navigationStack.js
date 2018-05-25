import { StackNavigator, TabNavigator } from "react-navigation";

import Login from "../screens/LoginScreen";
// import Register from "../components/RegisterScreen";
import Home from "../components/HomeScreen";
import Hoho from "../screens/Hoho";

export const Tabs = TabNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Main",
        title: "Main"
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const navigator = StackNavigator(
{
  hoho: {
    screen: Hoho,
    navigationOptions: {
      tabBarLabel: "Hoho",
      title: "Hoho"
    }
  },
  login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: "Login",
      title: "Login"
    }
  }
},
{
    headerMode: "screen",
    headerVisible: true,
    lazy:true
});

export default navigator;