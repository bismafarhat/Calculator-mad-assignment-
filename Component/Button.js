import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, value }) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={styles.btnText}>{value}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    width: '22%',  
    height: 80,    
    justifyContent: 'center', 
    alignItems: 'center',     
    margin: 5,      
    backgroundColor: '#333',  
    borderRadius: 10,         
  },
  btnText: {
    fontSize: 30,  
    color: '#fff', 
  },
});

export default Button;
