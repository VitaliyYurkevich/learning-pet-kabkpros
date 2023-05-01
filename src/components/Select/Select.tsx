import React from "react";
import {RatingValueType} from "../Rating/Rating";

type itemType = {
    title: string
    values: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any ) => void
    items: itemType[]
}

function Select(props: SelectPropsType) {

    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}