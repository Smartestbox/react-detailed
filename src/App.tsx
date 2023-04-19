import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff, {MemoizedUncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import Accordion, {MemoizedAccordion} from "./components/Accordion/Accordion";
import OnOff, {MemoizedOnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion, {MemoizedUncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import UncontrolledInput, {MemoizedUncontrolledInput} from "./components/Input/UncontrolledInput";
import Input, {MemoizedInput} from "./components/Input/Input";
import Checkbox, {MemoizedCheckbox} from "./components/Checkbox/Checkbox";
import Select from "./components/Select/Select";
import {HelpsForReactMemo, UseCallbackExample} from "./components/ReactMemoExample/ReactMemoExample";
import UseState from "./components/UseState/UseState";
import UseEffect from "./components/UseEffect/UseEffect";
import Clock from "./components/Clock/Clock";

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
            {/*<MemoizedOnOff on={on} changeOnState={changeOnState}/>*/}
            {/*<MemoizedUncontrolledOnOff onChange={setOn}/>*/}
            {/*<MemoizedUncontrolledAccordion title={'Some text'} />*/}
            {/*<MemoizedUncontrolledInput />*/}
            {/*<MemoizedInput />*/}
            {/*<MemoizedCheckbox />*/}
            {/*/!*<Select />*!/*/}
            {/*<MemoizedAccordion*/}
            {/*    title={'Menu'}*/}
            {/*    collapsed={collapsed}*/}
            {/*    changeCollapsed={changeCollapsed}*/}
            {/*    items={[{title: 'Dimych', value: '1'}, {title: 'Valera', value: '2'}, {title: 'Viktor', value: '3'}]}*/}
            {/*    onLiClickHandler={onLiClickHandler}*/}
            {/*/>*/}
            {/*<ReactMemoExample />*/}
            {/*<HelpsForReactMemo/>*/}
            {/*<UseCallbackExample />*/}
            {/*<UseEffect />*/}
            <Clock />
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
const MemoizedPageTitle = React.memo(PageTitle)

export default App;
