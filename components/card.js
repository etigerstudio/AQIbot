
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export class Card extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>'PM2.5'</Text>
                <Text style={styles.text}>'58'</Text>
                <Text style={styles.text}>'mg/L'</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 15,
    },
});

export default Card;
