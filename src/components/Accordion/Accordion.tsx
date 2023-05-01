import React, {useState} from "react";

type itemType = {
    title: string
    values: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<itemType>
    onClick: (values: any) => void
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {

/*let items = ['Dimych', 'Valera', 'Artem', 'Victor']*/

return(
    <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange}   />
    {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>
)
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: Array<itemType>
    onClick: (values: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((t, index) => <li onClick={()=>{props.onClick(t.values)}} key={index}>{t.title}</li>)}
        </ul>
    )
}

export default Accordion