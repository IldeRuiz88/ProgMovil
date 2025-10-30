import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper';

export default function LoginScreen() {
  const [location, setLocation] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'No se puede acceder a la ubicación');
      return;
    }
    let loc = await Location.getCurrentPositionAsync({});
    setLocation(`${loc.coords.latitude.toFixed(4)}, ${loc.coords.longitude.toFixed(4)}`);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>📍 Ubicación</Text>
      <Button mode="contained" onPress={getLocation}>Actualizar ubicación</Button>
      {location && <Text style={styles.subtext}>{location}</Text>}

      <Text style={styles.label}>📸 Imagen</Text>
      <TouchableOpacity style={styles.imageBox} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.placeholder}>Toca para agregar imagen</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.label}>📝 Descripción</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe el problema que quieres reportar..."
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <Button mode="contained" style={styles.sendButton} onPress={() => Alert.alert('Reporte enviado')}>
        Enviar Reporte
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  subtext: { color: 'gray', marginBottom: 10 },
  imageBox: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  placeholder: { color: 'gray' },
  imagePreview: { width: '100%', height: '100%', borderRadius: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 100,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  sendButton: { backgroundColor: '#28a745', marginTop: 10 },
});
