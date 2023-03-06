import React from 'react';

type AccordionPropsType = {
    title: string
}

const Accordion: React.FC<AccordionPropsType> = ({
                                                     title
                                                 }) => {
    return (
        <div>
            <AccordionTitle title={title}/>
            <AccordionBody/>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({
                                                               title
                                                           }) => {
    return (
        <h3>{title}</h3>
    )
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion;