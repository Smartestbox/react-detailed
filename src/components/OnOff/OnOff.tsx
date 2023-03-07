import React from 'react';
import styles from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
}

const OnOff: React.FC<OnOffPropsType> = ({
                                             on,
                                         }) => {

    return (
        <div>
            <button className={on ? styles.on : ''}>On</button>
            <button className={!on ? styles.off : ''}>Off</button>
            <span className={on ? styles.on : styles.off}>indicator</span>
        </div>
    );
};

export default OnOff;