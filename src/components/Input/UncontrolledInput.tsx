import React, {ChangeEvent, useState} from 'react';

const UncontrolledInput = () => {
    const [value, setValue] = useState<string>('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input onChange={onInputChange}/>
            {value}
        </div>
    );
};

export default UncontrolledInput;