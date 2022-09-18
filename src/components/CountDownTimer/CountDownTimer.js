import { useEffect, useState } from 'react';
import './CountDownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountDownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountDownTimer = ({countDownTimestampMs}) => {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countDownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId)
    }, [countDownTimestampMs])

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className='countdown-timer'>
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span className='two-numbers'>{remainingTime.hours}</span>
            <span>hours</span>
            <span className='two-numbers'>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span className='two-numbers'>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    );
}

export default CountDownTimer;