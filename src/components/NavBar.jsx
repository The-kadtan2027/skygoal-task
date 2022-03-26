
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import "./styles.css"

function NavBar() {
  return (
    <nav className='nav'>
        <div className='nav-link'>

            <p >Services</p>
            <p >Product</p>
            <p >Technology</p>
            <p >About</p>
            <p >Client</p>
            <p >Partner</p>
        <div className="nav-contact">

          <HomeOutlinedIcon />
          <MailOutlinedIcon />
          <ShuffleOutlinedIcon />
        </div>
        </div>
    </nav>
  )
}

export default NavBar