import React, {ChangeEvent, useState} from 'react';

const Checkbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <div>
            <input type='checkbox' checked={parentValue} onChange={onInputChange}/>
        </div>
    )
};

export default Checkbox;