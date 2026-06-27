// screens/SelecaoPerfil.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelecaoPerfil = () => {
  const navigation = useNavigation();

  return (
    
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Logo */}
          <View style={styles.logoContainer}>
           
            <Text style={styles.logoTitle}>NAVALHA</Text>
            <View style={styles.divider} />
       
     
          </View>

          <Text style={styles.title}>Como deseja entrar?</Text>

          {/* Botões */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonUsuario}
              onPress={() => navigation.navigate('ClienteSelecaoLogin')}
            >
              <Text style={styles.buttonTitle}>Cliente</Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonUsuario}
              onPress={() => navigation.navigate('BarbeiroSelecaoLogin')}
            >

              <Text style={styles.buttonTitle}>Barbeiro</Text>

            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Desenvolvido por Vitor e Paulo</Text>
          </View>
        </View>
      </View>
 
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoIcon: {
    fontSize: 50,
  },
  logoTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#C5A059',
    letterSpacing: 4,
    marginTop: 5,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: '#C5A059',
    marginVertical: 12,
  },
  logoSubtext: {
    color: '#999',
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    letterSpacing: 1,
  },
  buttonsContainer: {
    width: '100%',
    gap: 16,
  },
  buttonCliente: {
    backgroundColor: 'rgba(197,160,89,0.15)',
    borderWidth: 1.5,
    borderColor: '#C5A059',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    width: '100%',
  },
  buttonUsuario: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    width: '100%',
  },
  buttonIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  buttonSubtext: {
    color: '#999',
    fontSize: 13,
    marginTop: 4,
  },
  footer: {
    marginTop: 40,
  },
  footerText: {
    color: '#444',
    fontSize: 11,
  },
});

export default SelecaoPerfil;