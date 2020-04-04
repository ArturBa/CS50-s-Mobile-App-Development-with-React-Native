import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { Constants } from 'expo';
import { vibrate} from './utils/'

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
        ;
    }

    componentWillUnmount() {
        this.stop();
    }

    setUpTime() {
        console.log(this.state.work_time);
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

    start() {
        if (!this.state.running){
            if (this.state.time === 0){
                this.setUpTime();
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

    incWorkTime = () => {
        this.setState(prevState => ({
            work_time: prevState.work_time + 1,
        }));
        console.log(`inc work time: ${this.state.work_time}`);
    }

    decWorkTime = () => {
        this.setState(prevState => ({
            work_time: prevState.work_time - 1,
        }));
    }

    incBreakTime = () => {
        this.setState(prevState => ({
            break_time: prevState.break_time + 1,
        }));
    }

    decBreakTime = () => {
        this.setState(prevState => ({
            break_time: prevState.break_time - 1,
        }));
    }

    render() {
        let button;
        let status;
        if (this.state.running){
            button = <Button onPress={() => {this.pause()}} title="Pause" color="#1122ff" />;
        } else {
            button = <Button onPress={() => {this.start()}} title="Start" color="#22ff22" />;
        }
        if (this.state.work){
            status="Working";
        } else {
            status="Break";
        }
        return(
            <View style={styles.view}>
            <Text style={styles.text}> {status} </Text>
            <Text style={styles.text}>
                {Math.floor(this.state.time/60)}:
                {this.state.time%60 < 10 ? 
                    "0" + this.state.time%60 :
                    this.state.time%60}
            </Text>
            <View style={styles.row}>
                {button}
                <Button onPress={() => {this.stop()}} title="Stop" color="#ff1100"/>
            </View>
            <View style={styles.row}>
                <Text> Working time {this.state.work_time} min </Text>
                <Button onPress={() => {this.incWorkTime()}} title="+" />
                <Button onPress={() => {this.decWorkTime()}} title="-" />
            </View>
            <View style={styles.row}>
                <Text> Break time {this.state.break_time} min </Text>
                <Button onPress={() => {this.incBreakTime()}} title="+" />
                <Button onPress={() => {this.decBreakTime()}} title="-" />
            </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        padding: 20,
    },
    button: {
        color: '#841584',
        padding: 10,
        fontSize: 48,
    },
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    text: {
        fontSize: 48,
    }
});

export default Timer;
