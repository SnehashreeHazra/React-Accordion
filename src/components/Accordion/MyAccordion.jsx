import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function MyAccordion({questions,answer}) {
  const[show,setShow] = useState(false);
  return (
    <>
      <div className='main-heading'>
          <h3>{questions}</h3>
          <p onClick={()=>setShow(!show)}> 
            <FontAwesomeIcon icon={show ? faAngleUp : faAngleDown} />
          </p>
      </div>
      {show && <p className='answers'>{answer}</p>}
      
    </>
  )
}

export default MyAccordion
