import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from './Component/Button';

export default function App() {
  const [display, setDisplay] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button onPress={() => handleButtonPress('C')} value="C" />
        <Button onPress={() => handleButtonPress('+/-')} value="+/-" />
        <Button onPress={() => handleButtonPress('%')} value="%" />
        <Button onPress={() => handleButtonPress('/')} value="/" />

        <Button onPress={() => handleButtonPress('7')} value="7" />
        <Button onPress={() => handleButtonPress('8')} value="8" />
        <Button onPress={() => handleButtonPress('9')} value="9" />
        <Button onPress={() => handleButtonPress('*')} value="*" />

        <Button onPress={() => handleButtonPress('4')} value="4" />
        <Button onPress={() => handleButtonPress('5')} value="5" />
        <Button onPress={() => handleButtonPress('6')} value="6" />
        <Button onPress={() => handleButtonPress('-')} value="-" />

        <Button onPress={() => handleButtonPress('1')} value="1" />
        <Button onPress={() => handleButtonPress('2')} value="2" />
        <Button onPress={() => handleButtonPress('3')} value="3" />
        <Button onPress={() => handleButtonPress('+')} value="+" />

        <Button onPress={() => handleButtonPress('0')} value="0" />
        <Button onPress={() => handleButtonPress('.')} value="." />
        <Button onPress={() => handleButtonPress('=')} value="=" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  displayContainer: {
    width: '80%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#333',
  },
  displayText: {
    fontSize: 40,
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',   
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 30,
    paddingHorizontal: 5,   
  },
});
