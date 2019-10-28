import React, { Component } from 'react';
import { TextInput, Text, View, Button } from 'react-native';
import authRequests from '../Data/authRequests';

const defaultUser = {
  email: '',
  password: ''
}

export default class Auth extends Component {
  state = {
    newUser: defaultUser,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempUser = { ...this.state.newUser };
    tempUser[name] = e.target.value;
    this.setState({ newUser: tempUser });
  }

  emailChange = e => this.formFieldStringState('email', e);

  passwordChange = e => this.formFieldStringState('password', e);

  loginUser = (e) => {
    const { newUser } = this.state;
    e.preventDefault();
    this.props.authenticate(newUser.email, newUser.password)
    .catch(err => console.error('erorr logging in', err));
  }

  render(){
    const { newUser } = this.state;
      let value1 = this.state.newUser;
      console.log(value1)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Email :</Text>
            <TextInput
              style={{ height: 50, width: 200, borderColor: 'gray', borderWidth: 1,  justifyContent: "center", alignItems: "center", margin: 10, padding: 5 }}
              placeholder="example@email.com"
              value={newUser.email}
              type="email"
              id="email"
              onChange={this.emailChange}
              autoCorrect={false}
            />
            <Text>Password :</Text>
            <TextInput
              style={{ height: 50, width: 200, borderColor: 'gray', borderWidth: 1,  justifyContent: "center", alignItems: "center", margin: 10, padding: 5  }}
              placeholder="Password"
              value={newUser.password}
              type="password"
              id="password"
              secureTextEntry={true}
              onChange={this.passwordChange}
              autoCorrect={false}
            />

          <Button
          title="Sign In"
          onPress={() => this.props.navigation.navigate('Home')}
          />

        {/* <Button
          title="Sign In"
          color="#737373"
          onPress={this.loginUser}
        /> */}
      </View>

    );
  }
}
