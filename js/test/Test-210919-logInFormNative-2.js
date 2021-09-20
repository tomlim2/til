import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput } from 'react-native';
import { Formik } from 'formik';

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
    <Formik
      initialValues = {{ email:"", setEmail:"" }}
      onSubmit = {(values, {setSubmitting}) =>{}}
    >
    <ScrollView>
      <InputWithLabel
      label = "Email"
      placeholder = "What is your email?"
      value = {values.email}
      onChangeText = {handleChange('email')}
      />

      <InputWithLabel
      label = "Password"
      placeholder = "What is your password?"
      value = {password}
      onChangeText = {setPassword}
      secureTextEntry
      />

      <InputWithLabel
      label = "Confirm password"
      placeholder = "Confirm your password"
      onSubmitEditing = {(e) => 
      confirmPasswordsMatch(e.nativeText, password)}
      secureTextEntry
      />

      <InputWithLabel
      label = "Pet's name"
      placeholder = "Type your pet's name"
      value = {petName}
      onChangeText = {setPetName}
      />

      <InputWithLabel
      label = "Pet's date of birth"
      placeholder = "Type your pet's date of birth"
      value = {petDateOfBirth}
      onChangeText = {setPetDateOfBirth}
      />
      
      <InputWithLabel
      label = "breed"
      placeholder = "Type your pet's breed"
      value = {breed}
      onChangeText = {setBreed}
      />

      <InputWithLabel
      label = "Favorite toy"
      placeholder = "Type your pet's favorite toy"
      value = {favoriteToy}
      onChangeText = {setFavoriteToy}
      />
      </ScrollView>
      </Formik>
      </View>
  </View>
  );
};

const InputWithLabel = (prop) => {
  return(
    <View style = {styles.textBox}>
        <Text style = {styles.textQuestion}>
          {prop.label}
        </Text>
        <TextInput 
          style = {styles.textInput}
          placeholder = {prop.placeholder}
          onChangeText = {prop.onChangeText}
          value = {prop.value}
          secureTextEntry = {prop.secureTextEntry}
          onSubmitEditing = {prop.onSubmitEditing}
        />
    </View>
  )
};

const styles = StyleSheet.create({
  textQuestion: {
    padding: 2,
    fontSize: 18
  },
  textInput: {
    backgroundColor: "yellow",
    width: 200,
    margin: 2,
    padding: 2,
    fontSize: 18
  },
  textBox: {
    padding: 16
  }
})

function confirmPasswordsMatch (confirmationPassword, originalPassword) {
  if (confirmationPassword !== originalPassword){
    alert('Passwords do not match, please try again.');
  }
}


export default App;
