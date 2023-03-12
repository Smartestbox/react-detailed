import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";

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

    return (
        <div className="App">
            {/*<OnOff on={on} changeOnState={changeOnState}/>*/}
            <UncontrolledOnOff onChange={setOn}/>
            {on.toString()}
            <UncontrolledAccordion title={'Some text'} />
            {/*<Accordion*/}
            {/*    title={'Menu'}*/}
            {/*    collapsed={collapsed}*/}
            {/*    changeCollapsed={changeCollapsed}*/}
            {/*/>*/}
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
