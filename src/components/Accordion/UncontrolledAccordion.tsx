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
            <MemoizedAccordionTitle
                title={title}
                // setCollapsed={()=>setCollapsed(!collapsed)}
                onClick={()=>dispatch({type: TOGGLE_COLLAPSED})}
            />
            {
                !state.collapsed && <MemoizedAccordionBody/>
            }
        </div>
    )
}

export const MemoizedUncontrolledAccordion = React.memo(UncontrolledAccordion)


const AccordionTitle: React.FC<AccordionTitlePropsType> = ({
                                                               title,
                                                               onClick,
                                                           }) => {
    return (
        <h3 onClick={onClick}>{title}</h3>
    )
}
const MemoizedAccordionTitle = React.memo(AccordionTitle)

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
const MemoizedAccordionBody = React.memo(AccordionBody)

export default UncontrolledAccordion;