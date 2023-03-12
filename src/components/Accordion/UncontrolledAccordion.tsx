import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    title: string
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

const UncontrolledAccordion: React.FC<UncontrolledAccordionPropsType> = ({
                                                                             title,
                                                                         }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle
                title={title}
                setCollapsed={()=>setCollapsed(!collapsed)}
            />
            {
                !collapsed && <AccordionBody/>
            }
        </div>
    );
};


const AccordionTitle: React.FC<AccordionTitlePropsType> = ({
                                                               title,
                                                               setCollapsed,
                                                           }) => {
    return (
        <h3 onClick={setCollapsed}>{title}</h3>
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