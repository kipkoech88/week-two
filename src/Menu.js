import Link from 'next/link'
import React from 'react'

function Menu() {
  return (
    <div className='navbar navbar-expand-sm bg-dark navbar-dak'>
      <div className='navbar'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link>Home</Link>
            </li>
            <li className='nav-item'>
                <Link href='/Speakers'>
                    <a>Speakers</a>
                </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu