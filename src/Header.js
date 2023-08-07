import React from 'react'
import SignMeUp from './SignMeUp'

function Header() {
    const signupCallback = (email)=>{
        return console.log(email)
    }
  return (
    <div className='jumbotron jumbotronheight'>
    <div className='row'>
        <div className='col-12 col-sm-4 text-center'>
            <h6>October, 07 2023</h6>
            <h6>Meru, Kenya</h6>
        </div>
        <div className='col-12 col-sm-8 text-lg-right'>
            <h2>HoseaCamp</h2>
            <h2>Meru Valley Code camp</h2>
            <div className='row col-12 text-lg-right'>
                <SignMeUp signupCallback={signupCallback}/>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Header
