// components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ title, showBack, onBack }) => {
  return (
    <View style={styles.header}>
      {showBack && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'rgba(26,26,26,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(197,160,89,0.2)',
  },
  backButton: {
    padding: 8,
  },
  backText: {
    color: '#C5A059',
    fontSize: 24,
  },
  title: {
    color: '#C5A059',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  placeholder: {
    width: 40,
  },
});

export default Header;