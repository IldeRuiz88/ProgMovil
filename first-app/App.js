import React from 'react';
import { Button, StyleSheet, Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import Finder from './components/Finder';

export default function App() {

  return (
    <View style={styles.container}>
      
      <View style={styles.taskContainer}>
          <Text style={styles.title}>Lista de Tareas</Text>
        <View style={styles.writeTaskWrapper }>
          <TextInput style={styles.input} placeholder={'Ingresa Tarea'} />

          <TouchableOpacity>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.items}>
        
        <Finder text={'Hacer Tarea'}/>
        <Finder text={'Subir Codigo'}/>
        <Finder text={'Agregar Repositorio'}/>
        
        </View>
      
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#ffffffff",
    textAlign: 'center',
  },
  taskContainer: {
    paddingTop: 80,
    paddingHorizontal: 20, 
  },
  items: {
    marginTop: 20,
  },
  text: {
    color: "#ffffffff",
    fontSize: 20,
  },
  writeTaskWrapper: {
    top: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 85,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    borderColor: '#1c853cff',
    borderWidth: 1,
    width: 250, 
  },
  addWrapper: {
    width: 60, 
    height: 60, 
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    borderColor: '#1c853cff',
    borderWidth: 1,
  },
  addText: {},
});
