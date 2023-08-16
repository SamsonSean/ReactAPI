import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, style, ActivityIndicator } from 'react-native';
import { API_URL } from '../url/APIurl';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Field from './Template/Field';
import Btn from './Template/Button';

const Login = ({ navigation }) => {
  const [uname, setUsername] = useState('');
  const [passw, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const saveToken = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true
    } catch (error) {
      return false
    }
  }

  const handleLogin = () => {
    setLoading(true);
    try {
      fetch(API_URL + 'Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "username": uname,
          "password": passw
        })
      }) 
        .then((response) => {
          console.log(JSON.stringify(response))
          return response.json();
        })
        .then((response) => {
          if (response.data !== null) {
            if (saveToken('token', response.data)) {
              navigation.navigate('Hero');
            } else {
              console.log('Error');
            }
          } else {
            console.log('Login Failed');
          }

        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log('erors');
    }
  }

  return (
    <View style={{ alignItems: "center", width: 400 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 190 }}>
        <Text style={{ fontSize: 64, fontWeight: "bold" }}>HEROES</Text>
      </View>

      {isLoading ? <ActivityIndicator size="large" color="black" /> : (
        <View style={{ height: 700, width: 460, alignItems: "center" }}>
          <Field style={inputStyle.inputField} placeholder="Username" value={uname} onChangeText={setUsername}></Field>
          <Field style={inputStyle.inputField} placeholder="Password" value={passw} onChangeText={setPassword} secureTextEntry={true}  ></Field>
          <Btn
            style={inputStyle.buttonStyle} textColor='white' btnLabel="Login" onPress={handleLogin}></Btn>
        </View>
      )
      }


    </View>
  );
};

const inputStyle = StyleSheet.create({
  inputField: {
    textAlign: 'center',
    height: 50,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: "white",
    paddingHorizontal: 10,
    width: '75%',
    marginVertical: 5
  },
  buttonStyle: {
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    width: 350,
    height: 50,
    paddingVertical: 5,
    marginTop: 15,
  }
})


export default Login;