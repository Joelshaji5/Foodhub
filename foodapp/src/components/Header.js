import React from 'react'
import "./Style.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul className='navul'>
         <li>  <Link to="/"> Home</Link> </li>
           <li>   <Link to="/contact"> Contact</Link>  </li>

           <li>   <Link to="/about"> About us</Link>  </li>

          <input type='text'></input>
          <button >Search</button>
        </ul>
        
    </div>
  )
}

export default Header