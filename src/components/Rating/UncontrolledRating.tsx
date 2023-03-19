import React, {useState} from 'react';

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean
    // value: 1 | 2 | 3 | 4 | 5
    setValue: () => void
}

const UncontrolledRating: React.FC<UncontrolledRatingPropsType> = () => {
    const [value, setValue] = useState<number>(0)


    return (
        <div>
            <MemoizedStar selected={value > 0} setValue={()=>setValue(1)}/>
            <MemoizedStar selected={value > 1} setValue={()=>setValue(2)}/>
            <MemoizedStar selected={value > 2} setValue={()=>setValue(3)}/>
            <MemoizedStar selected={value > 3} setValue={()=>setValue(4)}/>
            <MemoizedStar selected={value > 4} setValue={()=>setValue(5)}/>
        </div>
    )
};


const Star: React.FC<StarPropsType> = ({
                                           selected,
                                           setValue,
                                       }) => {
    return (
        <span onClick={setValue}>
            {selected ? <b>star </b> : 'star '}
        </span>
    )
}
const MemoizedStar = React.memo(Star)

export default UncontrolledRating;