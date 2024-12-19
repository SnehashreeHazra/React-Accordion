import React, { useState } from 'react'
import {questions} from '../api';
import './Accordion.css';
import MyAccordion from './MyAccordion';

function Accordion() {
  const [data,setData] = useState(questions);
  return (
    <>
    <section className='main-div'>
    <h1>FREQUENTLY ASKED QUESTIONS</h1>
    {data.map((curEle)=>{
        const {id}= curEle;
            return <MyAccordion key={id} {...curEle}/>;
      })}
    </section>
    </>
  )
}

export default Accordion
