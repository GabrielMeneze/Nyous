import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Navegation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
//Paginas
import Login from './pages/Login'
import Home from './pages/Home'


const autenticado = () => {
  return(
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Logout" component={Logout}/>
    </Drawer.Navigator>
  )
}

const Logout = ({navigation}) =>{
  return(
    <View>
      <Text>Deseja realmente sair da aplicação?</Text>
      <Button onPress={()=>{
        AsyncStorage.removeItem('@jwt');
        navigation.push('Login');
      }}Title="SAIR"></Button>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
         <Stack.Screen name="Login" component={Login}></Stack.Screen>
         <Stack.Screen name="autenticado" component={autenticado}></Stack.Screen>
      </Stack.Navigator>
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
