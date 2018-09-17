/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';

import Cards from './components/cards'
import AQIHeader from './components/aqi-header'
import Caption from './components/caption'
import Fetcher from './classes/fetcher'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount(){
        Fetcher.fetchData((data) => this.fetchSuccess(data), (error) => this.fetchFailure(error));
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.backView}>
                    <Image style={styles.backImage} source={require('./images/background.jpg')}>
                    </Image>
                </View>
                {this.state.isLoading &&
                    <View style={styles.indicator}>
                        <ActivityIndicator />
                        <Text style={styles.textWait}>数据获取中...</Text>
                    </View>
                }
                {!this.state.isLoading &&
                    [<AQIHeader key='aqi-header' aqi={this.state.data.aqi.value} desc={this.state.data.aqi.desc}></AQIHeader>,
                    <Caption key='caption' text={this.state.data.caption}></Caption>,
                    <Cards key='cards' data={this.state.data.pollutants}></Cards>,]
                }
            </View>
        );
    }

    fetchSuccess(data) {
        console.log('Data fetched.');
        this.setState({isLoading: false, data: {aqi: data.aqi, pollutants: data.pollutants, caption: data.caption}});
        //setTimeout(() => this.setState({isLoading: false, data: {aqi: data.aqi, pollutants:data.pollutants}}), 2000);
    }

    fetchFailure(error) {
        console.log('Failed to fetch data.');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
    },
    textWait: {
        paddingTop: 14,
        color: 'rgba(237, 201, 255, 0.7)',
        fontSize: 16,
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
