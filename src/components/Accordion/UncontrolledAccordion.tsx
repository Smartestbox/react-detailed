import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
}

const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({
                                                                             title,
                                                                         }) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggleClick = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={title}/>
            <button onClick={onToggleClick}>{collapsed ? 'Show' : 'Hide'}</button>
            {
                !collapsed && <AccordionBody />
            }
        </div>
    );
};



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

export default UncontrolledAccordion;