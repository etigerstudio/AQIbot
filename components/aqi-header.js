
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export class AQIHeader extends Component {
    render() {
        return (
            <View style={{marginTop: 44, height: 209, width: 209,}}>
                <Image style={{position: 'absolute', top: 0, left: 0, height: 209, width: 209,}}
                 source={require('../images/circle.png')}></Image>
            </View>
        )
    }
}

export default AQIHeader;
