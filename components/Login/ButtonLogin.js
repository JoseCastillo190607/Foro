import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from "react-native";
import { LinearGradient } from 'react-native-svg';

export default function ButtonLogin() {
  return (
    <TouchableOpacity style={styles.btn}>
      <LinearGradient color={['#000', '#fff', '#000']}
      start={{x:0, y:1}}
      end={{x:1, y:1}}
      style={styles.btn}
      >
      <Text style={styles.btnText}>Iniciar Sesión</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn:{
    borderRadius: 15,
    backgroundColor: '#red',
  },
  btnText: {
    fontSize: 15,
    color: "#1C304A",
    fontWeight: "bold",
    marginBottom: 15,
  },
});
