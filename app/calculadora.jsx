import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Calculator() {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const handlePress = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('0');
    } else if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult('Erro');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', 'C', '+'],
    ['='],
  ];

  const operators = ['/', '*', '-', '+', '='];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="calculator" size={60} color="#24e35a" />
      </TouchableOpacity>

      <View style={styles.calculatorSection}>
        <View style={styles.display}>
          <Text style={styles.inputText}>{input}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          {buttons.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((btn) => (
                <TouchableOpacity
                  key={btn}
                  style={[
                    styles.button,
                    operators.includes(btn) ? styles.operatorButton : styles.normalButton,
                  ]}
                  onPress={() => handlePress(btn)}
                >
                  <Text style={styles.buttonText}>{btn}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adf7bd',
    justifyContent: 'space-between',
    padding: 20,
  },
  menuButton: {
    padding: 20,
    alignSelf: 'flex-start',
  },
  calculatorSection: {
    height: '80%',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  display: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: "30px",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
  inputText: {
    color: '#aaa',
    fontSize: 32,
  },
  resultText: {
    color: '#24e35a',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    borderRadius: 40,
  },
  normalButton: {
    backgroundColor: '#f4f4f4',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',

  },
  operatorButton: {
    backgroundColor: '#24e35a',
    color: '#fff',
  },
  buttonText: {
    color: "#368f49",
    fontSize: 28,
  },
});
