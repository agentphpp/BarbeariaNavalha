// screens/PerfilEscolha/BarbeiroSelecaoLogin.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';

const BarbeiroSelecaoLogin = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!user || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    setLoading(true);
    const usuario = await api.loginBarbeiro(user, senha);
    setLoading(false);

    if (usuario) {
      Alert.alert('Sucesso', `Bem-vindo, Barbeiro ${usuario.user}!`);
      navigation.replace('HomeBarbeiro', { usuario });
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    }
  };

  return (
    
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Botão voltar */}
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>← Voltar</Text>
          </TouchableOpacity>

          {/* Logo */}
          <View style={styles.logoContainer}>
            
            <Text style={styles.logoTitle}>Barbeiro</Text>
            <View style={styles.divider} />
            <Text style={styles.logoSubtext}>Acesse sua agenda</Text>
          </View>

          {/* Formulário */}
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Usuário</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu usuário"
                placeholderTextColor="#666"
                value={user}
                onChangeText={setUser}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#666"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.loginText}>
                {loading ? 'Entrando...' : 'Entrar'}
              </Text>
            </TouchableOpacity>

            {/* Usuários de exemplo */}
            <View style={styles.exemplosContainer}>
              <Text style={styles.exemplosTitle}>📋 Barbeiros de teste:</Text>
              <Text style={styles.exemploText}>• Devin Jones / FRxtX9W5qAp2iM2</Text>
              <Text style={styles.exemploText}>• Francis Kuphal / Z4ikYgQ9pZbkQNa</Text>
            </View>
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
    backgroundColor: 'rgba(0,0,0,0.88)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  backButton: {
    marginTop: 10,
  },
  backText: {
    color: '#C5A059',
    fontSize: 16,
    fontWeight: '600',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  logoIcon: {
    fontSize: 50,
  },
  logoTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#C5A059',
    letterSpacing: 2,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: '#C5A059',
    marginVertical: 12,
  },
  logoSubtext: {
    color: '#999',
    fontSize: 14,
    letterSpacing: 1,
  },
  form: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(197,160,89,0.2)',
  },
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    color: '#C5A059',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'rgba(197,160,89,0.2)',
  },
  loginButton: {
    backgroundColor: '#C5A059',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  exemplosContainer: {
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
  },
  exemplosTitle: {
    color: '#999',
    fontSize: 12,
    marginBottom: 8,
    fontWeight: '600',
  },
  exemploText: {
    color: '#666',
    fontSize: 11,
    marginBottom: 2,
  },
});

export default BarbeiroSelecaoLogin;