import React from 'react';

type AccordionPropsType = {
    title: string
    collapsed: boolean
    changeCollapsed: (onState: boolean) => void
}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    changeCollapsed: (onState: boolean) => void
}


const Accordion: React.FC<AccordionPropsType> = ({
                                                     title,
                                                     collapsed,
                                                     changeCollapsed,
                                                 }) => {
    return (
        <div>
            <AccordionTitle
                title={title}
                collapsed={collapsed}
                changeCollapsed={changeCollapsed}/>
            {
                !collapsed && <AccordionBody/>
            }
        </div>
    )
}


const AccordionTitle: React.FC<AccordionTitlePropsType> = ({
                                                               title,
                                                               collapsed,
                                                               changeCollapsed
                                                           }) => {
    const changeOnState = () => {
        changeCollapsed(!collapsed)
    }
    return (
        <h3 onClick={changeOnState}>{title}</h3>
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