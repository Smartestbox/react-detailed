import React, {ChangeEvent, useState} from 'react';

const Select = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <div>

        </div>
    )
};

export default Select;