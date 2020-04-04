import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'
import {vibrate} from './utils/'

export class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            work_time: 25,// * 60,
            break_time: 5,// * 60,
            time: 0,
            running: false,
            work: true,
        }
    }

    componentDidMount() {
        this.setUpTime();
    }

    componentWillUnmount() {
        this.stop();
    }

    setUpTime() {
        if (this.state.time == 0){
            if (this.state.work){
                this.setState({
                    time: this.state.work_time,
                })
            } else {
                this.setState({
                    time: this.state.break_time,
                })

            }
        }
    }

    start() {
        if (!this.state.running){
            this.setUpTime();
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
                time: 0,
            });
        } else {
            this.setState({
                work: true,
                time: 0,
            });
        }

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
        let button;
        if (this.state.running){
            button = <Button onPress={() => {this.pause()}} title="Pause" color="#841584"
                    accessibilityLabel="Learn more about this purple button" />;
        } else {
            button = <Button onPress={() => {this.start()}} title="Start" color="#841584"
                    accessibilityLabel="Learn more about this purple button" />;

        }
        return(
            <View>
            <Text>
                {Math.floor(this.state.time/60)}:
                {this.state.time%60 < 10 ? 
                    "0" + this.state.time%60 :
                    this.state.time%60}
            </Text>
            <View style={styles.row}>
                {button}
                <Button onPress={() => {this.stop()}} title="Stop" color="#841584"
                    accessibilityLabel="Learn more about this purple button" />
            </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
});

export default Timer;
