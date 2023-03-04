import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Rating, {RatingValueType} from "./components/Rating";
import OnOff from "./components/OnOff";


type PageTitlePropsType = {
    title: string
}



function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
let [onOff, setOnOff] = useState<boolean>(false)

    return (
        <div>
           <PageTitle title={'This is APP component'}/>
            <PageTitle title={'USER'}/>
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            <Accordion titleValue={'Users'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={onOff} onChange={setOnOff}/>
        </div>
    );

}

export default App;






function PageTitle(props: PageTitlePropsType) {
    return (
        <div><h1>{props.title}</h1></div>
    )
}

