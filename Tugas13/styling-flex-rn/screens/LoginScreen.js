import React from 'react'
import {View, Text, StyleSheet, Image, Button, TextInput} from 'react-native'
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/logo.png')} style={styles.image}/>
      </View>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Username
        </Text>
        <TextInput style={styles.input}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Password
        </Text>
        <TextInput style={styles.input}/>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Masuk
        </Text>
      </View>
      <View style={styles.atauContainer}>
        <Text style={styles.atauText}>
          atau
        </Text>
      </View>

      <View style={{...styles.button, ...{backgroundColor: '#003366', borderColor: '#003366'}} }>
        <Text style={styles.buttonText}>
          Daftar?
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 100
  },
  image: {
    height: 100,
    width: 300
  },
  title: {
    marginTop: 25,
    fontSize: 25,
    marginBottom: 25
  },
  inputContainer: {
    marginBottom: 25,
    width: '80%'
  },
  inputLabel: {

  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  button: {
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#3EC6FF',
    borderColor: '#3EC6FF',
    paddingVertical: 4,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  atauText: {
    color: '#3EC6FF'
  },
  atauContainer: {
    marginVertical: 25
  }

})

export default LoginScreen;