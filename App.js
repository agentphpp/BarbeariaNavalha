// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelecaoPerfil from './screens/SelecaoPerfil';
import ClienteSelecaoLogin from './screens/PerfilEscolha/ClienteSelecaoLogin';
import BarbeiroSelecaoLogin from './screens/PerfilEscolha/BarbeiroSelecaoLogin';
import HomeScreenCliente from './screens/Home/HomeScreenCliente';
import HomeScreenBarbeiro from './screens/Home/HomeScreenBarbeiro';
import CadastroScreen from './screens/CadastroScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SelecaoPerfil"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="SelecaoPerfil" component={SelecaoPerfil} />
        <Stack.Screen name="ClienteSelecaoLogin" component={ClienteSelecaoLogin} />
        <Stack.Screen name="BarbeiroSelecaoLogin" component={BarbeiroSelecaoLogin} />
        <Stack.Screen name="HomeCliente" component={HomeScreenCliente} />
        <Stack.Screen name="HomeBarbeiro" component={HomeScreenBarbeiro} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;