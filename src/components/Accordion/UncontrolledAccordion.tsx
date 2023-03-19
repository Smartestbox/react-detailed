import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UncontrolledAccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({
                                                                             title,
                                                                         }) => {
    // const [collapsed, setCollapsed] = useState<boolean>(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle
                title={title}
                // setCollapsed={()=>setCollapsed(!collapsed)}
                onClick={()=>dispatch({type: TOGGLE_COLLAPSED})}
            />
            {
                !state.collapsed && <AccordionBody/>
            }
        </div>
    );
};


const AccordionTitle: React.FC<AccordionTitlePropsType> = ({
                                                               title,
                                                               onClick,
                                                           }) => {
    return (
        <h3 onClick={onClick}>{title}</h3>
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