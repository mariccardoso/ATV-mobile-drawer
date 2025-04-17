import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="lock-closed-outline" size={54} color="#24e35a" />
      </TouchableOpacity>

      <View style={styles.passwordGenerator}>
        <Text style={styles.passwordLabel}>Senha Gerada:</Text>
        <Text style={styles.password}>{password || 'Clique para gerar'}</Text>
        <TouchableOpacity style={styles.generateButton} onPress={generatePassword}>
          <Text style={styles.generateButtonText}>Gerar Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    padding: 20,
    alignSelf: 'flex-start',
    bottom: 300
  },
  passwordGenerator: {
    marginTop: 20,
    alignItems: 'center',
    gap: 10,
    
  },
  passwordLabel: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#24e35a',
  },
  password: {
    padding: 15,
    backgroundColor: '#2a2a3d',
    borderRadius: 25,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    fontSize: 26,
    color: '#24e35a',
    marginVertical: 10,
  },
  generateButton: {
    backgroundColor: '#24e35a',
    padding: 10,
    borderRadius: 35,
  },
  generateButtonText: {
    color: '#00',
    fontSize: 20,
    fontWeight: 'bold',
  },
});