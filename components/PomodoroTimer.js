import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {vibrate} from '../utils'
import Timer from './Timer'
import TimerButtons from './TimerButtons'
import Header from './Header'

export default class PomodoroTimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: this.props.work * 60,
            timerTextDisplay: `${this.props.work}:00`,
            message: 'Work Time!',
            isWorkTime: true,
            isRunning: true
        }
    } 

    countdown = () => {
        this.setState(prevState => {
            const minutes = (prevState.timer - 1) / 60 < 10 ? '0' + Math.floor((prevState.timer - 1) / 60) : '' + Math.floor((prevState.timer - 1) / 60)
            const secs = (prevState.timer - 1) % 60 < 10 ? '0' + (prevState.timer - 1) % 60 : '' + (prevState.timer - 1) % 60
            if (prevState.timer === 0){
                vibrate()
                return this.toggleTimers()
            } 
            
            return {
                timer: prevState.timer - 1,
                timerTextDisplay: `${minutes}:${secs}`
            }
        })
    }

    toggleTimers = () => {

        if (this.state.isWorkTime) this.setState({
            timer: this.props.break * 60,
            timerTextDisplay: `${this.props.break}:00`,
            message: 'Break Time!',
            isWorkTime: false
        })
        else this.setState({
            timer: this.props.work * 60,
            timerTextDisplay: `${this.props.work}:00`,
            message: 'Work Time!',
            isWorkTime: true
        })
        
    }

    pause = () => {
        clearInterval(this.timer)
        this.setState({
            isRunning: false
        })
    }

    start = () => {
        this.setState({
            isRunning: true
        })
        this.timer = setInterval(this.countdown, 1000)
    }

    reset = () => {
        clearInterval(this.timer)
        this.setState({
            isRunning: false,
            timer: this.props.work * 60,
            timerTextDisplay: `${this.props.work}:00`,
            message: 'Work Time!',
            isWorkTime: true,
        })
    }

    componentDidMount() {
        this.timer = setInterval(this.countdown, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
      }

    render() {
        let style
        if (this.state.isWorkTime) {
            style = styles.containerWorkTime
        } else {
            style = styles.containerBreakTime
        }
        return (
            <View style={style}>
                {!this.state.isRunning && 
                <Header 
                work={this.props.work}
                break={this.props.break}
                handleWorkTime={this.props.handleWorkTime}
                handleBreakTime={this.props.handleBreakTime}
                />
                }
                <Timer 
                intervalDisplay={this.state.timerTextDisplay}
                message={this.state.message} 
                />
                <TimerButtons 
                pause={this.pause} 
                isRunning={this.state.isRunning} 
                start={this.start}
                reset={this.reset}
                />
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerWorkTime: {
        flex: 1,
        backgroundColor: '#728bd4',
        justifyContent: 'center'
    },
    containerBreakTime: {
        flex: 1,
        backgroundColor: '#72d4bb',
        justifyContent: 'center'
    }
 });
