/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CallDetectorManager from 'react-native-call-detection';


/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

type Props = {};
export default class App extends Component<Props> {
  startListenerTapped(){
    console.log('Detector Started!');
    this.callDetector = new CallDetectorManager((event)=> {
      let startTime;
      if (event === 'Incoming') {
          console.log('Call  Incoming!');
        } 
        else if (event === 'Connected') {
          console.log('Call  Connected!');
        } 
        else if (event === 'Offhook') {
          console.log('Call  Offhook!');
          startTime = new Date().toLocaleTimeString();
          console.log(startTime);
        }
        else if (event === 'Disconnected') {
          console.log('Call  Disconnected!');
          let endTime = new Date().toLocaleTimeString();
          console.log(endTime);        
        }
        else if (event === 'Dialing') {
          console.log('Call  Dialing!');
        } 
        else if (event === 'Missed') {
          console.log('Call  Missed!');
        }
      },
      true, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
      ()=>{
        
      }, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
        {
          title: 'Phone State Permission',
          message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
        } // a custom permission request message to explain to your user, why you need the permission [recommended] - this is the default one
      )
    }
    stopListenerTapped() {
      this.callDetector && this.callDetector.dispose();
        console.log('Detector disposed!');
      }
  render() {
    console.log('still a test');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to phoneLogger!</Text>
        <TouchableOpacity style={styles.btn} onPress={this.startListenerTapped}>
          <View>
            <Text style={styles.welcome}>Start Call detector</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.stopListenerTapped}>
          <View>
            <Text style={styles.welcome}>Stop Call detector</Text>
          </View>
        </TouchableOpacity>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  btn: {
    textAlign: 'center',
    color: '#333333',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginBottom: 5,
  },
});
