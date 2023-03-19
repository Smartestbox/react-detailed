import React, {useState} from 'react';
import styles from './OnOff.module.css'

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
}


const UncontrolledOnOff: React.FC<UncontrolledOnOffPropsType> = ({
                                                                     onChange,
                                                                 }) => {
    const [on, setOn] = useState<boolean>(false)

    const onOnClick = () => {
        if (!on) {
            setOn(true)
            onChange(true)
        }
    }
    const onOffClick = () => {
        if (on) {
            setOn(false)
            onChange(false)
        }
    }

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

    return (
        <div className={styles.container}>
            <button style={onStyle} onClick={onOnClick}>On</button>
            <button style={offStyle} onClick={onOffClick}>Off</button>
            <span style={indicatorStyle}></span>
        </div>
    );
};

export const MemoizedUncontrolledOnOff = React.memo(UncontrolledOnOff)

export default UncontrolledOnOff;