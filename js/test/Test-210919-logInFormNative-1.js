import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [petName, setPetName] = useState('');
  const [petDateOfBirth, setPetDateOfBirth] = useState('');
  const [breed, setBreed] = useState('');
  const [favoriteToy, setFavoriteToy] = useState('');

  return (
    <View style = {{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
    <View style = {{height: 400,}}>
    <ScrollView>
      <View style = {styles.textBox}>
        <Text style = {styles.textQuestion}>
          {email ? `Your email is ${email}!` : "What is your email?"
          }
        </Text>
        <TextInput style = {styles.textInput}
          onChangeText = {text => setEmail(text)}
        />
      </View>

      <View style = {styles.textBox}>
        <Text style = {styles.textQuestion}>
          {password.length != 0 && password === checkPassword ? `checked!` 
          : "What is your password?"
          }
        </Text>
        <TextInput style = {styles.textInput} 
          onChangeText = {text => setPassword(text)}
          secureTextEntry
        />
        <TextInput style = {styles.textInput} 
          onChangeText = {text => setCheckPassword(text)}
          secureTextEntry
        />
      </View>

      <View style = {styles.textBox}>
        <Text style = {styles.textQuestion}>
          {petName ? `${petName}! What a cute name!` 
          : "What is your pet's name?"
          }
        </Text>
        <TextInput 
          style = {styles.textInput} 
          onChangeText = {text => setPetName(text)}
          
        />
      </View>

      <View style = {styles.textBox}>
        <Text style = {styles.textQuestion}>
          {petDateOfBirth ? `${petDateOfBirth}!` : "What is your pet's date of birth"}
        </Text>
        <TextInput 
          style = {styles.textInput}
          onChangeText = {text => setPetDateOfBirth(text)}
        />
      </View>

      <View style = {styles.textBox}>
        <Text style = {styles.textQuestion}>
          {breed ? `${breed}` : "What is breed?"}
        </Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {text => setBreed(text)}
        />
      </View>
      <View style = {styles.textBox}>
        <Text style = {styles.textQuestion}>
          {favoriteToy ? `${favoriteToy}! I knew it!`
            : "What is your favorite toy?"}
        </Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {text => setFavoriteToy(text)}
        />
      </View>
      </ScrollView>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  textQuestion: {
    padding: 2,
    fontSize: 18
  },
  textInput: {
    backgroundColor: "yellow",
    width: 100,
    margin: 2,
    padding: 2,
    fontSize: 18
  },
  textBox: {
    padding: 16
  }
})

export default App;
