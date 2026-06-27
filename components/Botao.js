// components/Botao.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ title, onPress, type = 'primary', disabled = false }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'primary' && styles.buttonPrimary,
        type === 'secondary' && styles.buttonSecondary,
        type === 'outline' && styles.buttonOutline,
        disabled && styles.buttonDisabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          type === 'primary' && styles.textPrimary,
          type === 'secondary' && styles.textSecondary,
          type === 'outline' && styles.textOutline,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
  },
  buttonPrimary: {
    backgroundColor: '#C5A059',
  },
  buttonSecondary: {
    backgroundColor: '#0A0A0A',
    borderWidth: 1,
    borderColor: '#C5A059',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#C5A059',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  textPrimary: {
    color: '#FFFFFF',
  },
  textSecondary: {
    color: '#C5A059',
  },
  textOutline: {
    color: '#C5A059',
  },
});

export default Botao;