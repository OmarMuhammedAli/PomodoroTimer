import React from 'react';
import {TextInput, ScrollView ,StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Set Work Time</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder='25'
                        defaultValue={this.props.work}
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
      
    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },
    inputContainer: {
        paddingTop: 15
    },
    textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    fontSize: 25,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20
    }
});