import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="menu" size={24} color="#24e35a" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Aplicativo Multifuncional</Text>
        <Text style={styles.subtitle}>
          Nosso app tem o objetivo de oferecer funcionalidades práticas e simples.
        </Text>
        <View style={styles.funcionalidades}>
          <View style={styles.funcionalidade}>
            <Ionicons name="calculator" size={60} color="#24e35a" />
            <View>
            <Text style={styles.funcionalidadeText}>Calculadora</Text>
            <Text style={styles.funcionalidadeDescricao}>
              Realize operações matemáticas básicas.
            </Text>
            </View>
          </View>
          <View style={styles.funcionalidade}>
            <Ionicons name="add-circle-outline" size={60} color="#24e35a" />
            <View>
            <Text style={styles.funcionalidadeText}>Contador</Text>
            <Text style={styles.funcionalidadeDescricao}>
              Um contador simples para somar e subtrair.
            </Text>
            </View>
          </View>
          <View style={styles.funcionalidade}>
            <Ionicons name="lock-closed-outline" size={60} color="#24e35a" />
            <View>
            <Text style={styles.funcionalidadeText}>Gerador de Senhas</Text>
            <Text style={styles.funcionalidadeDescricao}>
              Crie senhas fortes e seguras automaticamente.
            </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    paddingTop: 50,
    alignItems: "center",
  },
  menuButton: {
    padding: 15,
    backgroundColor: "#368f49",
    borderRadius: 50,
    marginLeft: 20,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#b0b0b0",
    textAlign: "center",
    marginBottom: 20,
  },
  funcionalidades: {
    flexDirection: "collumn",
    justifyContent: "space-between",
    width: "100%",
  },
  funcionalidade: {
    backgroundColor: "#2a2a3d",
    flexDirection: "row",
    borderRadius: 15,
    padding: 20,
    margin: 10,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  funcionalidadeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  funcionalidadeDescricao: {
    fontSize: 14,
    color: "#b0b0b0",
    textAlign: "center",
  },
});
