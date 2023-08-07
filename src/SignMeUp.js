import React, { useState } from 'react'

function SignMeUp({signupCallback}) {
    const [email, setEmail]=useState("");
    
  return (
    <div className='container'>
    <div>
        <div className='content'>
            <input type='email' placeholder='enter the email' name='email'>

            </input>
            <button className='btn' 
            disabled={!email.includes('@')}
            onClick={signupCallback(email)}
            type='submit'>Get updates</button>
        </div>
    </div>
      
    </div>
  )
}

export default SignMeUp
