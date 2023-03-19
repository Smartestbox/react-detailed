import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledInput from "./components/Input/UncontrolledInput";
import Input from "./components/Input/Input";
import Checkbox from "./components/Checkbox/Checkbox";
import Select from "./components/Select/Select";
import ReactMemoExample from "./components/ReactMemoExample/ReactMemoExample";

type PageTitlePropsType = {
    title: string
}

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const changeOnState = (stateValue: boolean) => {
        setOn(stateValue)
    }
    const onLiClickHandler = (value: string) => {
        console.log(`Item with title ${value} was clicked`)
    }

    return (
        <div className="App">
            {/*<OnOff on={on} changeOnState={changeOnState}/>*/}
            {/*<UncontrolledOnOff onChange={setOn}/>*/}
            {/*<UncontrolledAccordion title={'Some text'} />*/}
            {/*<UncontrolledInput />*/}
            {/*<Input />*/}
            {/*<Checkbox />*/}
            {/*<Select />*/}
            {/*<Accordion*/}
            {/*    title={'Menu'}*/}
            {/*    collapsed={collapsed}*/}
            {/*    changeCollapsed={changeCollapsed}*/}
            {/*    items={[{title: 'Dimych', value: '1'}, {title: 'Valera', value: '2'}, {title: 'Viktor', value: '3'}]}*/}
            {/*    onLiClickHandler={onLiClickHandler}*/}
            {/*/>*/}
            <ReactMemoExample />
        </div>
    );
}

const PageTitle: React.FC<PageTitlePropsType> = ({
                                                title
                                            }) => {
    return (
        <h1>{title}</h1>
    )
}

export default App;
