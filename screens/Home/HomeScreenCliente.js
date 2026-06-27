// screens/Home/HomeScreenCliente.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  ScrollView,
  Platform, // 👈 1. IMPORTANTE: Adicionado para identificar se é Web ou Celular
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const HomeScreenCliente = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { usuario } = route.params || {};

  const handleLogout = () => {
    // Função isolada que faz o redirecionamento
    const efetuarRedirectSair = () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'SelecaoPerfil' }],
      });
    };

    // 👈 2. CORREÇÃO COMPATÍVEL COM WEB:
    if (Platform.OS === 'web') {
      // No navegador/Web, o Alert com múltiplos botões falha. Usamos o confirm padrão do navegador:
      const confirmado = window.confirm('Deseja realmente sair da sua conta?');
      if (confirmado) {
        efetuarRedirectSair();
      }
    } else {
      // No celular (Android/iOS), roda o Alert nativo customizado perfeitamente:
      Alert.alert(
        'Sair',
        'Deseja realmente sair da sua conta?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { 
            text: 'Sair', 
            onPress: efetuarRedirectSair,
            style: 'destructive'
          },
        ]
      );
    }
  };

  const handleNewAppointment = () => {
    if (Platform.OS === 'web') {
      window.alert('Funcionalidade em desenvolvimento!');
    } else {
      Alert.alert('Novo Agendamento', 'Funcionalidade em desenvolvimento!', [{ text: 'OK' }]);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/Straight-Razor.png')}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.greeting}>Olá,</Text>
              <Text style={styles.greetingName}>
                {usuario?.user || 'Cliente'}! 👋
              </Text>
            </View>
            <TouchableOpacity 
              style={styles.logoutButton} 
              onPress={handleLogout}
              activeOpacity={0.7}
            >
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </View>

          {/* Informações do perfil */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>📅 Área do Cliente</Text>
            <Text style={styles.infoSubtext}>
              Agende seus horários e acompanhe seus serviços
            </Text>
          </View>

          {/* Conteúdo Principal */}
          <ScrollView 
            style={styles.scrollView} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Botão Novo Agendamento */}
            <TouchableOpacity 
              style={styles.newAppointmentButton} 
              onPress={handleNewAppointment}
              activeOpacity={0.7}
            >
              <Text style={styles.newAppointmentText}>+ Novo Agendamento</Text>
            </TouchableOpacity>

            <View style={styles.spacer} />
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Cliente - {usuario?.user || 'Usuário'}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(197,160,89,0.2)',
  },
  greeting: {
    color: '#999',
    fontSize: 14,
  },
  greetingName: {
    color: '#C5A059',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: 'rgba(197,160,89,0.15)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(197,160,89,0.3)',
    // Adicionado cursor pointer para ajudar na usabilidade web
    ...Platform.select({
      web: { cursor: 'pointer' }
    })
  },
  logoutText: {
    color: '#C5A059',
    fontSize: 13,
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: 'rgba(197,160,89,0.08)',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(197,160,89,0.15)',
  },
  infoTitle: {
    color: '#C5A059',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoSubtext: {
    color: '#999',
    fontSize: 13,
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  newAppointmentButton: {
    backgroundColor: '#C5A059',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
    ...Platform.select({
      web: { cursor: 'pointer' }
    })
  },
  newAppointmentText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  spacer: {
    height: 20,
  },
  footer: {
    paddingVertical: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.05)',
  },
  footerText: {
    color: '#444',
    fontSize: 11,
  },
});

export default HomeScreenCliente;