import React from 'react';
import { View, StyleSheet } from 'react-native';

import PomodoroTimer from './components/PomodoroTimer'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      workMins: 25,
      breakMins: 5,
    }
  }

  handleWorkTime = (workTime) => {
    if (workTime >= 0) {
      this.setState({
        workMins: workTime
      })
    } else {
      alert('Invalid Value. Setting to default.')
      this.setState({
        workMins: 25
      })
    }
    
  }

  handleBreakTime = (breakTime) => {
    if (breakTime >= 0) {
      this.setState({
        breakMins: breakTime
      })
    } else {
      alert('Invalid Value. Setting to default.')
      this.setState({
        breakMins: 5
      })
    }
  }

  render() {
    return (
        <PomodoroTimer 
        work={this.state.workMins}
        break={this.state.breakMins}
        handleWorkTime={this.handleWorkTime}
        handleBreakTime={this.handleBreakTime}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
