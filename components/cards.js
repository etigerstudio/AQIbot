import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import Card from './card'

export class Cards extends Component {
    render() {
        return (
            <ScrollView style={styles.cards}>
                <Card type='CO' unit='mg/L' value='58'></Card>
                <Card type='CO' unit='mg/L' value='58'></Card>
                <Card type='CO' unit='mg/L' value='58'></Card>
                <Card type='CO' unit='mg/L' value='58'></Card>
                <Card type='CO' unit='mg/L' value='58'></Card>
                <Card type='CO' unit='mg/L' value='58'></Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cards: {
        marginTop: 23,
    },
});

export default Cards;
