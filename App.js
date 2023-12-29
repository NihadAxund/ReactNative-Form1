import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, TextInput, View, StyleSheet, SafeAreaView } from 'react-native';
import TextPassword from './pages/components/TextPassword';
import TextUserName from './pages/components/TextUserName';
import LoginPage from './pages/loginpage/LoginPage';

export default function App() {

  return (
    <SafeAreaView>
      <LoginPage></LoginPage>
    </SafeAreaView>
  );
}


