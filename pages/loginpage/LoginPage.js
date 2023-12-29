import React, { useState, useEffect } from 'react';
import { Alert, Modal, Pressable, TouchableOpacity, Text, TextInput, View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import TextUserName from '../components/TextUserName';
import TextPassword from '../components/TextPassword';
import LoginBtn from './components/LoginBtn';
import { WebView } from 'react-native-webview';
import SignupBtn from './components/SignupBtn';

export default function LoginPage() {
  const [modalVisible, setModalVisible] = useState(false);

  const ModalVisibleChange = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <SafeAreaView>
      <ImageBackground
        source={{ uri: 'https://media3.giphy.com/media/yPzJdJ11dAkgbYbjsi/giphy.gif?cid=ecf05e47dfgk42stgxi05r314slnrhlnbi1a7agfmmbt8z72&ep=v1_gifs_search&rid=giphy.gif&ct=g' }}
        style={LoginPageStyles.container}
      >
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={LoginPageStyles.container1}>
          <SignupBtn title={"signup"} onPress={ModalVisibleChange}></SignupBtn>
        </View>

        <View style={LoginPageStyles.container2}>
          <TextUserName></TextUserName>
          <TextPassword></TextPassword>
          <LoginBtn title={'Login'}></LoginBtn>
        </View>

        <View style={LoginPageStyles.container3}>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const LoginPageStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#353738',
  },
  container1: {
    width: '100%',
    height: '35%',
    display: 'flex',
    alignItems: 'flex-end',
    padding: 20
  },
  container2: {
    width: '100%',
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.7
  },
  container3: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: 270,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    color: '#fff',
    backgroundColor: '#585B5C',
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
