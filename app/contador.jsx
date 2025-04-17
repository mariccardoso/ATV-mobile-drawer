import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
<Ionicons name="add-circle-outline" size={60} color="#24e35a" />
</TouchableOpacity>

      {/* <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.avatar}
        />
      </View> */}
      <View style={styles.counterContainer}>
      <Text style={styles.counter}>Contador</Text>
      <Text style={styles.counterText}>{count}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={() => setCount(0)}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
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
    padding: 10,

  },
  menuButton: {
    padding: 20,
    alignSelf: 'flex-start',
    color: '#333',
  },
  profileHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
    backgroundColor: '#Ffffff',
    // width: '100%',
    // height: 200,
  },
  counterContainer: {
    flex: 1,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e2f',
    width: '100%',
    height: '100%',
  },
  counter: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginBottom: 20,
    color: '#24e35a',
    textAlign: 'center',
  },
  counterText: {
    fontSize: 50,
    fontFamily: 'Arial',
    marginBottom: 50,
    justifyContent: 'center',
    color: '#368f49',
    fontWeight: 'bold',
    backgroundColor: 'rgba(94, 255, 140, 0.2)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    textAlign: 'center',
    padding: 10,
    width: 100,
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
  counterButton: {
    backgroundColor: '#24e35a',
    padding: 25,
    borderRadius: 50,
    marginHorizontal: 5,
    
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 18,
  },
  buttonTextDisabled: {
    color: '##cae324',
  },
  buttonTextEnabled: {
    color: '#cae322',
  },
  buttonTextReset: {
    color: '##24e3c0',
  },
  buttonTextResetDisabled: {
    color: '#ccc',
  },
  buttonTextResetEnabled: {
    color: '#FF0000',
  },
});
