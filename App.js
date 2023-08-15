
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Hero from './screens/Hero';

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <AppStack.Navigator>
        <AppStack.Screen options={() => ({
          title: 'Login',
          header:() => false
        })} name="Login" component={Login} />
         <AppStack.Screen options={() => ({
          title: 'Login',
          header:() => false
        })} name="Hero" component={Hero} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
