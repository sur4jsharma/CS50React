import Constants from 'expo-constants'
import React from 'react';
import {View, Button, Text, StyleSheet,Vibration} from 'react-native'
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
  },
  count: {
    fontSize: 48,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

class Study extends React.Component {
  constructor() {
    super()
    this.state = {
      minutes: 0,
      seconds: 20,
      isStudy: false,
      isRunning:false,
    }
  }

  startCounter = () => {
        // clearInterval(this.interval) 
        if(!this.state.isRunning)
        {
          this.setState({isRunning:true,})
          this.interval = setInterval(this.timer, 1000)
        }
}

  resetCounter = () => {
        clearInterval(this.interval)
        this.setState({
        minutes: 0,
        seconds: 20,
        isRunning:false,
        });
  }

  stopCounter = () => {
        this.setState({isRunning:false,})
        clearInterval(this.interval)
  }

  timer = () => {
    if(this.state.minutes === 0 && this.state.seconds ===0)
    {
      Vibration.vibrate(500,500,500)
      if(this.state.isStudy)
      {
        this.setState({
        minutes: 0,
        seconds: 20,
        isStudy: false,
        });
      }
      else
      {
        this.setState({
        minutes: 0,
        seconds: 10,
        isStudy: true,
        });
      }
    }
    else if(this.state.seconds === 0)
    {
      this.setState(prevState => ({
        minutes: prevState.minutes - 1,
        seconds: 59,
      }));
    }
    else
    {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
          }));
    }
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <View style = {styles.todoContainer}>
          <Button color="#00A000" title = "Start" onPress={this.startCounter} />
          <Button title="Reset" onPress={this.resetCounter} />
          <Button color="#FA0000" title="Stop" onPress={this.stopCounter} />
        </View>
        <Text style={styles.count}>{this.state.minutes}:{this.state.seconds} </Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={[styles.appContainer,styles.todoContainer]}>
        {<Study />}
      </View>
    )
  }
}