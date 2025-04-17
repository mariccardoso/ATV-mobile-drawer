import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerStyle: {
            backgroundColor: '#black',
            borderTopRightRadius: 10,
            width: 250,
            paddingTop: 20,
          },
          drawerActiveBackgroundColor: '#gray',
          drawerLabelStyle: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerLabel: 'Início',
          title: 'Home',
          headerShown: false,
          headerLeft: true,
          
          drawerIcon: ({ size }) => (
            <Ionicons name="home" size={size} color="#24e35a" />
          ),
        }}
      />
      <Drawer.Screen
        name="calculadora"
        options={{
          drawerStyle: {
            backgroundColor: 'black',
            borderTopRightRadius: 10,
            width: 250,
            paddingTop: 20,
          },
          
          drawerActiveBackgroundColor: '#gray',
          drawerLabelStyle: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerLabel: 'Calculadora',
          title: 'Calculadora',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size }) => (
            <Ionicons name="calculator" size={size} color="#24e35a" />
          ),
        }}
      />
            <Drawer.Screen
        name="contador"
        options={{
          drawerStyle: {
            backgroundColor: '#black',
            borderTopRightRadius: 10,
            width: 250,
            paddingTop: 20,
          },
          drawerActiveBackgroundColor: '#gray',
          drawerLabelStyle: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerLabel: 'Contador',
          title: 'Contador',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size }) => (
            <Ionicons name="person" size={size} color="#24e35a" />
          ),
        }}
      />
            <Drawer.Screen
        name="geradorSenha"
        options={{
          drawerStyle: {
            backgroundColor: '#black',
            borderTopRightRadius: 10,
            width: 250,
            paddingTop: 20,
          },
          drawerActiveBackgroundColor: '#gray',
          drawerLabelStyle: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
          drawerLabel: 'Gerador de Senha',
          title: 'Gerador de Senha',
          headerShown: false,
          headerLeft: true,
          
          drawerIcon: ({size}) => (
            <Ionicons name="lock-closed-outline" size={size} color="#24e35a" />
          ),
        }}
      />
    </Drawer>

  );
}