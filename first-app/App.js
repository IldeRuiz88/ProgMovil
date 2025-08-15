import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  var texto = "Ilde Ruiz";

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto}</Text>
      <Text style={styles.texto}>Hola Mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: "#ffffffff",
    fontSize: 20,
  }
});
