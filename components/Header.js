import React from 'react';
import {TextInput, Keyboard ,StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Set Work Time</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder='ex: 25'
                        numeric value
                        keyboardType='numeric'
                        value={this.props.work.toString(10)}
                        onChangeText={this.props.handleWorkTime}
                        />
                    </View>
                    
                </View>
                <View>
                <Text style={styles.header}>Set Break Time</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder='ex: 5'
                        numeric value
                        keyboardType='numeric'
                        value={this.props.break.toString(10)}
                        onChangeText={this.props.handleBreakTime}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 45,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },

    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },
    inputContainer: {
        paddingTop: 15,
        
    },
    textInput: {
    borderColor: '#071814',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    width: 'auto',
    fontSize: 25,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
    }
});