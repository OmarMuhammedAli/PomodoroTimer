import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TimerButtons extends React.Component {
    
    render() {
        if (this.props.isRunning) {
            return (
                <View style={styles.container}>
                    <Button title='Pause' onPress={this.props.pause} />
                    <Button title='reset' onPress={this.props.reset} />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Button title='Start' onPress={this.props.start} />
                    <Button title='reset' onPress={this.props.reset} />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent: 'space-evenly',
    }
})
