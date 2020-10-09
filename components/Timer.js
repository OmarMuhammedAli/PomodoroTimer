import React from 'react';
import {Text, View } from 'react-native';

export default class Timer extends React.Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 48}}>{this.props.intervalDisplay}</Text>
                <Text style={{fontSize: 30}}>{this.props.message}</Text>
            </View>
        )
    }
}

