import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    let [value, setValue] = useState('')
const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
}

    return (
        <><input onChange={onChange}/>---{value}</>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    let [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement

        setValue(el.value)
    }

    return (

        <><input ref={inputRef}/>
            <button onClick={save}>SAVE</button>
            -Actual value-{value}</>
    )
}


export const ControlledInputWithFixedValue = () => <input value={'Abu'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }
return <input value={parentValue} onChange={onChange}/>

}




export default {
    title: 'UncontrolledInput',
    component: UncontrolledInput
}