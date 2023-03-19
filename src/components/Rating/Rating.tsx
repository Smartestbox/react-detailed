import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (ratingValue: RatingValueType) => void
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (ratingValue: RatingValueType) => void
}

const Rating: React.FC<RatingPropsType> = ({
                                               value,
                                               onClick,
                                           }) => {
    return (
        <div>
            <MemoizedStar selected={value > 0} value={1} onClick={onClick}/>
            <MemoizedStar selected={value > 1} value={2} onClick={onClick}/>
            <MemoizedStar selected={value > 2} value={3} onClick={onClick}/>
            <MemoizedStar selected={value > 3} value={4} onClick={onClick}/>
            <MemoizedStar selected={value > 4} value={5} onClick={onClick}/>
        </div>
    )
};


const Star: React.FC<StarPropsType> = ({
                                           selected,
                                           value,
                                           onClick,
                                       }) => {
    return (
        <span onClick={()=>onClick(value)}>
            {selected ? <b>star </b> : 'star '}
        </span>
    )
}

const MemoizedStar = React.memo(Star)

export default Rating;