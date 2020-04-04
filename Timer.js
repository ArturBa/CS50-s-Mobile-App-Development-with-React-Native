import React from 'react';
import {View, Text, Button} from 'react-native'
import {vibrate} from './utils/'

export class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            work_time: 25,// * 60,
            break_time: 5,// * 60,
            time: 25,//*60,
            running: false,
            work: true,
        }
    }

    start() {
        if (!this.state.running){
            if (this.state.work){
                this.setState({
                    time: this.state.work_time,
                })
            } else {
                this.setState({
                    time: this.state.break_time,
                })

            }
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
        if (this.state.work){
            this.setState({
                work: false,
            });
        } else {
            this.setState({
                work: true,
            });
        }

    }

    componentWillUnmount () {
        this.stop();
    }

    timeInc = () => {
        this.setState(prevState => ({
            time: prevState.time - 1,
        }));
        if (this.state.time === 0){
            vibrate();
            this.stop();
        }
    }

    render() {
        return(
            <View>
            <Text>
                {Math.floor(this.state.time/60)}:
                {this.state.time%60 < 10 ? 
                    "0" + this.state.time%60 :
                    this.state.time%60}
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
