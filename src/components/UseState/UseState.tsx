import React, {useMemo, useState} from 'react';

const generateData = () => {
    console.log('Generate Data')
    return 1
}

const UseState = () => {
    console.log('UseState')
    // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }
    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </div>
    );
};

export default UseState;