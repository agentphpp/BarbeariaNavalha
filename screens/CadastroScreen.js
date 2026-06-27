// screens/CadastroScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// CORREÇÃO DO IMPORT: Ajustado para o caminho correto baseado na estrutura das suas pastas
import { api } from '../services/api'; 

const CadastroScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCadastro = async () => {
    if (!user || !senha || !confirmarSenha) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }

    setLoading(true);
    
    const novoCliente = {
      user: user.trim(),
      senha: senha,
    };

    try {
      // Faz a chamada segura para a API
      const resultado = await api.cadastrarCliente(novoCliente);
      
      if (resultado) {
        Alert.alert('Sucesso', 'Sua conta foi criada com sucesso!', [
          { text: 'Ir para o Login', onPress: () => navigation.goBack() }
        ]);
      } else {
        Alert.alert('Erro', 'Não foi possível realizar o cadastro no servidor do MockAPI.');
      }
    } catch (error) {
      console.error('Erro interno ao cadastrar:', error);
      Alert.alert('Erro', 'Ocorreu um problema inesperado.');
    } finally {
      // O 'finally' roda OBRIGATORIAMENTE no fim, destravando o botão de carregamento
      setLoading(false);
    }
  };

  return (
    
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>← Voltar</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            
            <Text style={styles.logoTitle}>Criar Conta</Text>
            <View style={styles.divider} />
            <Text style={styles.logoSubtext}>Seja bem-vindo à nossa barbearia</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Usuário</Text>
              <TextInput
                style={styles.input}
                placeholder="Escolha um nome de usuário"
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
                placeholder="Crie uma senha"
                placeholderTextColor="#666"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirmar Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Repita a senha criada"
                placeholderTextColor="#666"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
            </View>

            <TouchableOpacity
              style={styles.cadastrarButton}
              onPress={handleCadastro}
              disabled={loading}
            >
              <Text style={styles.cadastrarText}>
                {loading ? 'Cadastrando...' : 'Cadastrar'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  backgroundImage: { opacity: 0.3 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.88)' },
  container: { paddingHorizontal: 30, paddingTop: 20, paddingBottom: 40 },
  backButton: { marginTop: 10 },
  backText: { color: '#C5A059', fontSize: 16, fontWeight: '600' },
  logoContainer: { alignItems: 'center', marginTop: 20, marginBottom: 30 },
  logoIcon: { fontSize: 50 },
  logoTitle: { fontSize: 32, fontWeight: 'bold', color: '#C5A059', letterSpacing: 2 },
  divider: { width: 60, height: 2, backgroundColor: '#C5A059', marginVertical: 12 },
  logoSubtext: { color: '#999', fontSize: 14, letterSpacing: 1, textAlign: 'center' },
  form: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 20, padding: 24, borderWidth: 1, borderColor: 'rgba(197,160,89,0.2)' },
  inputContainer: { marginBottom: 18 },
  label: { color: '#C5A059', fontSize: 12, fontWeight: '600', marginBottom: 6, letterSpacing: 1 },
  input: { backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 12, paddingVertical: 14, paddingHorizontal: 16, color: '#FFFFFF', fontSize: 16, borderWidth: 1, borderColor: 'rgba(197,160,89,0.2)' },
  cadastrarButton: { backgroundColor: '#C5A059', borderRadius: 25, paddingVertical: 16, alignItems: 'center', marginTop: 10 },
  cadastrarText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 },
});

export default CadastroScreen;