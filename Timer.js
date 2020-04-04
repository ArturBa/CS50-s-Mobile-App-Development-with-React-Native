import React from 'react';
import {View, Text, Button} from 'react-native'
import {vibrate} from './utils/'

export class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            time: 10,
            running: false,
        }
    }

    start() {
        if (!this.state.running){
            this.interval = setInterval(this.timeInc, 1000);
            this.setState({
                running: true,
            });
        }

    }

    pause () {
        if (this.state.running){
            clearInterval(this.interval);
            this.setState({
                running: false,
            });
        }
    }

    stop () {
        this.pause();
        this.setState({
            time: 25 * 60,
        });

    }

    componentWillUnmount () {
        this.pause();
    }

    timeInc = () => {
        this.setState(prevState => ({
            time: prevState.time - 1,
        }));
        if (this.state.time === 0){
            this.stop();
            vibrate();

        }
    }

    render() {
        return(
            <View>
            <Text>
              {Math.floor(this.state.time/60)}:{this.state.time%60}
            </Text>
            <Button onPress={() => {this.start()}} title="Start" color="#841584"
                accessibilityLabel="Learn more about this purple button" />
            <Button onPress={() => {this.pause()}} title="Pause" color="#841584"
                accessibilityLabel="Learn more about this purple button" />
            <Button onPress={() => {this.stop()}} title="Stop" color="#841584"
                accessibilityLabel="Learn more about this purple button" />
            </View>

        );
    }
}

export default Timer;
