import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";

function App() {
    return (
        <div className="App">
            {/*<Accordion title={'Menu'} collapsed={true}/>*/}
            {/*<Accordion title={'Users'} collapsed={false}/>*/}
            <UncontrolledAccordion title={'Uncontrolled Accordion'} />
            <UncontrolledAccordion title={'Uncontrolled Accordion'} />
            <UncontrolledRating />
        </div>
    );
}

type PagePropsType = {
    title: string
}

const PageTitle: React.FC<PagePropsType> = ({
                                                title
                                            }) => {
    return (
        <h1>{title}</h1>
    )
}

export default App;
