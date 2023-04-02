import React, {ChangeEvent, useRef, useState} from 'react';


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

}

export default {
    title: 'UncontrolledInput',
    component: UncontrolledInput
}