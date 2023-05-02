import React, {useEffect, useState} from 'react';

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const keyHandler = (e: KeyboardEvent) => {
            console.log(e.key)

            setText(text + e.key)
        }

        window.document.addEventListener('keypress', keyHandler)

        return () => {
            window.document.removeEventListener('keypress', keyHandler)
        }
    }, [text])

    return (
        <div>
            Typed text: {text}
        </div>
    );
};
