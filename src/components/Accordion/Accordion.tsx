import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    changeCollapsed: (onState: boolean) => void
    items: ItemType[]
    onLiClickHandler: (value: string) => void
}
type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    changeCollapsed: (onState: boolean) => void
}
type AccordionBodyPorpsType = {
    items: ItemType[]
    onLiClickHandler: (value: string) => void
}

const Accordion: React.FC<AccordionPropsType> = ({
                                                     title,
                                                     collapsed,
                                                     changeCollapsed,
                                                     items,
                                                     onLiClickHandler
                                                 }) => {
    return (
        <div>
            <MemoizedAccordionTitle
                title={title}
                collapsed={collapsed}
                changeCollapsed={changeCollapsed}/>
            {
                !collapsed && <MemoizedAccordionBody items={items} onLiClickHandler={onLiClickHandler}/>
            }
        </div>
    )
}

export const MemoizedAccordion = React.memo(Accordion)

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
const MemoizedAccordionTitle = React.memo(AccordionTitle)

const AccordionBody: React.FC<AccordionBodyPorpsType> = ({
                                                             items,
                                                             onLiClickHandler
                                                         }) => {

    return (
        <ul>
            {items.map((item, index) => {
                const onLiClick = () => {
                    onLiClickHandler(item.value)
                }
                return (
                    <li onClick={onLiClick} key={index}>{item.title}</li>
                )
            })}
        </ul>
    )
}
const MemoizedAccordionBody = React.memo(AccordionBody)


export default Accordion;