// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import { Platform } from 'react-native';

// IMPORTAÇÃO DE TODAS AS TELAS DO PROJETO
import SelecaoPerfil from './screens/SelecaoPerfil';
import ClienteSelecaoLogin from './screens/PerfilEscolha/ClienteSelecaoLogin';
import BarbeiroSelecaoLogin from './screens/PerfilEscolha/BarbeiroSelecaoLogin'; // 👈 Faltava este import
import CadastroScreen from './screens/CadastroScreen';
import HomeScreenCliente from './screens/Home/HomeScreenCliente';
import HomeScreenBarbeiro from './screens/Home/HomeScreenBarbeiro'; // 👈 Faltava este import

const Stack = createStackNavigator();

// Segurança contra erros de manipulação de DOM na versão Web
if (Platform.OS === 'web') {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function (child) {
    if (child && child.parentNode === this) {
      return originalRemoveChild.call(this, child);
    }
    return child;
  };
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SelecaoPerfil">
          <Stack.Screen name="SelecaoPerfil" component={SelecaoPerfil} />
          <Stack.Screen name="ClienteSelecaoLogin" component={ClienteSelecaoLogin} />
          <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
          <Stack.Screen name="HomeCliente" component={HomeScreenCliente} />
          <Stack.Screen name="BarbeiroSelecaoLogin" component={BarbeiroSelecaoLogin} />
          <Stack.Screen name="HomeBarbeiro" component={HomeScreenBarbeiro} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}