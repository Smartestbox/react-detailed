import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <AppTitle />
            <Rating />
            <Accordion />
        </div>
    );
}

const AppTitle = () => {
    return (
        <>
            App component
        </>
    )
}

const Star = () => {
    return (
        <div>
            <div>star</div>
        </div>
    )
}
const Rating = () => {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    )
}

export default App;
