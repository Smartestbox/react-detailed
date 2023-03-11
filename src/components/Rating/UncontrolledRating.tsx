import React, {useState} from 'react';

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

const UncontrolledRating: React.FC<UncontrolledRatingPropsType> = () => {
    const [value, setValue] = useState<number>(1)

    const onOneClick = () => {
        setValue(1)
    }
    const  onTwoClick = () => {
        setValue(2)
    }
    const onThreeClick = () => {
        setValue(3)
    }
    const onFourClick = () => {
        setValue(4)
    }
    const onFiveClick = () => {
        setValue(5)
    }
    return (
        <div>
            <Star selected={value > 0}/><button onClick={onOneClick}>1</button>
            <Star selected={value > 1}/><button onClick={onTwoClick}>2</button>
            <Star selected={value > 2}/><button onClick={onThreeClick}>3</button>
            <Star selected={value > 3}/><button onClick={onFourClick}>4</button>
            <Star selected={value > 4}/><button onClick={onFiveClick}>5</button>
        </div>
    )
};

type StarPropsType = {
    selected: boolean
}

const Star: React.FC<StarPropsType> = ({
                                           selected
                                       }) => {
    return selected ?
        <span><b>star </b></span>
        : <span>star </span>
}

export default UncontrolledRating;