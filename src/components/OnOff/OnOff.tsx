import React from 'react';
import styles from "./OnOff.module.css";

type OnOffPropsType = {
    on: boolean
    changeOnState: (stateValue: boolean) => void
}

const OnOff: React.FC<OnOffPropsType> = ({
                                             on,
                                             changeOnState,
                                         }) => {
    const onStyle = {
        backgroundColor: on ? 'greenyellow' : 'white',
        cursor: 'pointer',
    }
    const offStyle = {
        backgroundColor: !on ? 'orangered' : 'white',
        cursor: 'pointer',
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: on ? 'greenyellow' : 'orangered',
    }

    const onOnClick = () => {
        changeOnState(true)
    }
    const onOffClick = () => {
        changeOnState(false)
    }

    return (
        <div className={styles.container}>
            <button style={onStyle} onClick={onOnClick}>On</button>
            <button style={offStyle} onClick={onOffClick}>Off</button>
            <span style={indicatorStyle}></span>
        </div>
    );
};

export const MemoizedOnOff = React.memo(OnOff)

export default OnOff;