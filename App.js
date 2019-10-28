import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './components/Auth';
import Home from './components/Home';

const AppNavigator = createStackNavigator(
  {
  Home: {screen: Home},
  Auth: {screen: Auth},
  },
  {
    initialRouteName: 'Auth',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
 
  state = {
    isAuthenticated: false
  }

  authenticate = (username, password) => {
    if(username === "user01" && password === "Password1") {
      this.setState({ isAuthenticated: true })
    }
  }
  render() {
  return (
    <AppContainer >
      <View style={styles.container}>
        <Text> Welcome!</Text>
        {/* <Auth setUserData={this.setUserData} authenticate={this.authenticate}/> */}
      </View>
    </AppContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
