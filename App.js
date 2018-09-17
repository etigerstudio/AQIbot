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

export default class App extends Component {

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
