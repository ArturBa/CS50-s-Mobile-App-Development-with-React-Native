import React from 'react';
import {View, Text, Button} from 'react-native'
// import {vibrate} from './utils'

export class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            work_time: 25 * 60,
            break_time: 5 * 60,
        }
    }

    start() {
        this.interval = setInterval(this.timeInc, 1000);

    }

    timeInc = () => {
        this.setState(prevState => ({
            work_time: prevState.work_time - 1,
        }));
    }

    render() {
        return(
            <View>
            <Text>
              {(this.state.work_time/60).toFixed(0)}:{this.state.work_time%60}
            </Text>
            <Button onPress={() => {this.start()}} title="Start" color="#841584"
                accessibilityLabel="Learn more about this purple button" />
            </View>

        );
    }
}

export default Timer;
