import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Rating from "./components/Rating";


type PageTitlePropsType = {
    title: string
}


function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'USER'}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;






function PageTitle(props: PageTitlePropsType) {
    return (
        <div><h1>{props.title}</h1></div>
    )
}

