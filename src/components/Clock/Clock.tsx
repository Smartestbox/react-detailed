import React, {useEffect, useState} from 'react';

const getTwoDigitTime = (time: number) => time < 10 ? '0' + time : time

export const Clock = () => {

    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const id = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

    const secondsString = getTwoDigitTime(date.getSeconds())
    const minutesString = getTwoDigitTime(date.getMinutes())
    const hoursString = getTwoDigitTime(date.getHours())
    return (
        <div>
            <span>{hoursString}:</span>
            <span>{minutesString}:</span>
            <span>{secondsString}</span>
        </div>
    );
};

export const ResetEffectExample = () => {

    const [count, setCount] = useState(0)

    console.log('Component rendered with ', count)

    useEffect(() => {
        console.log('Effect occurred ', count)

        return () => {
            console.log('Reset effect ', count)
        }
    }, [count])

    const onIncrease = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={onIncrease}>increase</button>
        </div>
    );
};


