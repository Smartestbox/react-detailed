import React, {ChangeEvent, useState} from 'react';

const Input = () => {
    const [parentValue, setParentValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={parentValue} onChange={onInputChange}/>
        </div>
    );
};
export const MemoizedInput = React.memo(Input)

export default Input;