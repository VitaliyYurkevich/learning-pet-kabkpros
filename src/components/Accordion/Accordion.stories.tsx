import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onClick={onClickCallback} onChange={callback}
                                                     items={[{title: 'Dimych', values: 1},
                                                         {title: 'Valera', values: 2},
                                                         {title: 'Artem', values: 3},
                                                         {title: 'Victor', values: 4}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}  collapsed={value} onChange={() => setValue(!value)} items={
        [{title: 'Dimych', values: 1},
            {title: 'Valera', values: 2},
            {title: 'Artem', values: 3},
            {title: 'Victor', values: 4}]}
                      onClick={(values)=>{alert(values +'sdasda')}}

    />
}