import React from 'react'
import "../../Assets/CSS/Nav.css"
import {useNavigate} from "react-router-dom"

const Nav = () => {
  const navigate = useNavigate();



  return (
    <>
    <div className='mainmenu'>
    <div className='menu1'>
<p onClick={()=>navigate("/")}>Home</p>
<p onClick={()=>navigate("/Blog")}>Blog</p>

    </div>
    <div>
    <h1 className='port_title' onClick={()=>navigate("/")}>GAUTHAM</h1>
    </div>
    <div className='menu2'>

<p onClick={()=>navigate("/About")}>About</p>
<p onClick={()=>navigate("/Contact")}>Contacts</p>
    </div> 
    </div>
    </>
  )
}

export default Nav