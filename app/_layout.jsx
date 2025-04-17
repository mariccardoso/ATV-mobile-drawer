import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Início',
          title: 'Home',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="calculadora"
        options={{
          drawerLabel: 'Calculadora',
          title: 'Calculadora',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="calculator" size={size} color={color} />
          ),
        }}
      />
            <Drawer.Screen
        name="contador"
        options={{
          drawerLabel: 'Contador',
          title: 'Contador',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
            <Drawer.Screen
        name="geradorSenha"
        options={{
          drawerLabel: 'Gerador de Senha',
          title: 'Gerador de Senha',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Drawer>

  );
}