// screens/Home/HomeScreenBarbeiro.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';

const HomeScreenBarbeiro = ({ navigation, route }) => {
  const { usuario } = route.params || {};

 const handleLogout = () => {
  // Criamos a função que limpa a navegação e desloga
  const deslogarUsuario = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'SelecaoPerfil' }],
    });
  };

  // 🕵️‍♂️ Aqui acontece a mágica da separação:
  if (Platform.OS === 'web') {
    // Código exclusivo para Web (Navegador)
    const confirmar = window.confirm('Deseja realmente sair da sua conta?');
    if (confirmar) {
      deslogarUsuario();
    }
  } else {
    // Código exclusivo para Mobile (Android/iOS)
    Alert.alert(
      'Sair',
      'Deseja realmente sair da sua conta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: deslogarUsuario, style: 'destructive' },
      ]
    );
  }
};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Área do Barbeiro</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo Principal */}
      <View style={styles.content}>
        <View style={styles.welcomeCard}>
         
          <Text style={styles.welcomeTitle}>
            Bem-vindo, Barbeiro!
          </Text>
          <Text style={styles.welcomeName}>
            {usuario?.user || 'Usuário'}
          </Text>
          <View style={styles.divider} />
          <Text style={styles.welcomeSubtext}>
            Gerencie sua agenda e atendimentos
          </Text>
        </View>

        {/* Cards de informações rápidas */}
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardIcon}>📅</Text>
            <Text style={styles.cardTitle}>Agendamentos</Text>
            <Text style={styles.cardValue}>8</Text>
            <Text style={styles.cardSubtext}>Hoje</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>👤</Text>
            <Text style={styles.cardTitle}>Clientes</Text>
            <Text style={styles.cardValue}>12</Text>
            <Text style={styles.cardSubtext}>Total</Text>
          </View>
        </View>

        {/* Dica */}
        <View style={styles.tipContainer}>
          <Text style={styles.tipText}>💡 Dica: Toque em "Agendamentos" para ver todos os horários</Text>
        </View>
      </View>
    </View>
  );
};

// ✅ ESTILOS AQUI!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'rgba(26,26,26,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(197,160,89,0.2)',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C5A059',
    letterSpacing: 1,
  },
  logoutButton: {
    backgroundColor: 'rgba(197,160,89,0.15)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(197,160,89,0.3)',
  },
  logoutText: {
    color: '#C5A059',
    fontSize: 13,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeCard: {
    backgroundColor: 'rgba(197,160,89,0.08)',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(197,160,89,0.15)',
    marginBottom: 24,
  },
  welcomeIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  welcomeTitle: {
    fontSize: 18,
    color: '#C5A059',
    fontWeight: '600',
  },
  welcomeName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
  divider: {
    width: 60,
    height: 2,
    backgroundColor: '#C5A059',
    marginVertical: 12,
  },
  welcomeSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  cardTitle: {
    color: '#999',
    fontSize: 12,
    marginBottom: 4,
  },
  cardValue: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  cardSubtext: {
    color: '#666',
    fontSize: 11,
    marginTop: 2,
  },
  tipContainer: {
    backgroundColor: 'rgba(197,160,89,0.05)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(197,160,89,0.1)',
  },
  tipText: {
    color: '#888',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default HomeScreenBarbeiro;