import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);

  const ValueImc = () => {
    const result = Number(peso) / Math.pow(Number(altura), 2);
    setImc(result);
    //console.log(peso, altura, result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Peso</Text>
      <TextInput style={styles.textInput} onChangeText={ (value) => setPeso(value)} keyboardType='numeric'/>

      <Text style={styles.text}>Altura</Text>
      <TextInput style={styles.textInput} onChangeText={ (value) => setAltura(value)} keyboardType='numeric'/>

      <Pressable style={styles.pressable} onPress={ValueImc}>
        <Text style={{color: '#fff'}}>Calcular IMC</Text>
      </Pressable>

      <Text style={styles.text}>{imc.toFixed(2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },

  textInput: {
    width: '80%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
  },

  pressable: {
    backgroundColor: '#555',
    borderRadius: 10,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 15,
  },
});
