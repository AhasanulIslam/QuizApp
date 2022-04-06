import React, { useState } from 'react'
import SignupFrom from './SignupFrom'
import "D:/V2 Project/quiz-project/src/App.css";

import SignupFromSuccess from './SignupFromSuccess';

const From = () => {
    const [fromIsSubmited, setFromIsSubmitted] = useState(false);
  
    const submitFrom = () => {
        setFromIsSubmitted(true);
    }
    return (
    <div>
        { !fromIsSubmited ? <SignupFrom submitFrom={submitFrom}/> : <SignupFromSuccess/>}
        <SignupFrom />
    </div>
  )
}

export default From