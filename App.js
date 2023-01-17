import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');
  let [result, setResult] = React.useState(0);

  const minusButton = () => {
    let minus = ((input1) - (input2));
    setResult(minus);
  };

  const plusButton = () => {
    let plus = ((+input1) + (+input2));
    setResult(plus);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setInput1(text)}
        value={input1}
        keyboardType="numeric"
      />
      <TextInput
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setInput2(text)}
        value={input2}
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
        <View style={styles.buttonContainer}>
          <View style={{marginRight: 20}}>
            <Button color="blue" onPress={plusButton} title="+" />
          </View>
          <View>
            <Button color="blue" onPress={minusButton} title="-" />
          </View>
        </View>
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
  buttonContainer: {
    margin: 20,
    maxWidth: '100%',
    flexDirection: "row",

  },
});
