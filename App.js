// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, Animated } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonScale] = useState(new Animated.Value(1));

  const handleLogin = () => {
    if (username === 'rex' && password === 'salvani') {
      Alert.alert('Success', 'Valid credentials');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  const handleSignUp = () => {
    // Simulating registration process
    Alert.alert('Sign Up', 'Sign up successful!');
  };

  const animateButtonPress = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleButtonPress = () => {
    animateButtonPress();
    handleLogin();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.loginBox}>
          {/* Avatar Icon */}
          <Image
            source={{ uri: 'https://www.w3schools.com/w3images/avatar2.png' }} // New avatar image
            style={styles.avatar}
          />
          
          {/* Title */}
          <Text style={styles.title}>Login</Text>
          
          {/* Input Fields */}
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#777"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#777"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          {/* Custom Log In Button */}
          <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
            <TouchableOpacity style={styles.loginButton} onPress={handleButtonPress}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </Animated.View>
          
          {/* Sign Up Button */}
          <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </Animated.View>
          
          {/* Forgot Password */}
          <TouchableOpacity onPress={() => Alert.alert('Password Reset', 'Reset link sent to your email.')}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background set to white
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '85%',
    alignItems: 'center', // Center items without a background box
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000', // Black title
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    color: '#000', // Black text color in inputs
  },
  loginButton: {
    backgroundColor: '#000', // Black login button
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff', // White text for the login button
    fontSize: 16,
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: '#000', // Black sign-up button, same style as log in
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#fff', // White text for the sign-up button
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPasswordText: {
    color: '#000', // Black text for forgot password
    fontSize: 14,
    marginTop: 15,
    textDecorationLine: 'underline',
  },
});
