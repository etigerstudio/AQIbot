/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Cards from './components/cards'
import AQIHeader from './components/aqi-header'
import Caption from './components/caption'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.backView}>
             <Image style={styles.backImage} source={require('./images/background.jpg')}>
             </Image>
         </View>
         <AQIHeader></AQIHeader>
         <Caption text='Miami 9:38'></Caption>
         <Cards></Cards>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backView: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      right: 0,
  },
  backImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
  },
});
/*const styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/
