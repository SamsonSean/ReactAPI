
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './screens/Login';
import Hero from './screens/Hero';
import HeroForm from './screens/HeroForm';
const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <AppStack.Navigator>
        <AppStack.Screen options={() => ({
          title: 'Login',
          header: () => false
        })} name="Login" component={Login} />
        <AppStack.Screen options={({navigation}) => ({
          title: 'Heroes',
          headerLeft: () => false,
          headerRight: () => (<TouchableOpacity
            onPress={() => {
              navigation.navigate('HeroForm');
            }}
          >
            <Icon name="person-add-sharp" size={22} color="black" />
          </TouchableOpacity>)
        })} name="Hero" component={Hero} />
        <AppStack.Screen options={() => ({
          title: 'Hero Form',
        })} name="HeroForm" component={HeroForm} />
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
