import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

const Accordion: React.FC<AccordionPropsType> = ({
                                                     title,
                                                     collapsed
                                                 }) => {
    return (
        <div>
            <AccordionTitle title={title}/>
            {
                !collapsed && <AccordionBody />
            }
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