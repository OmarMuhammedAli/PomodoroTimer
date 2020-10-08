import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PomodoroTimer from './components/PomodoroTimer'

export default class App extends React.Component {
  render() {
    return (
      <PomodoroTimer />
    );
  }
}

