import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'


const Header = () => {
  return (
    <div className='header'>
      <h1>Header</h1>

      <IconButton>
        <PersonIcon
          fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  )
}

export default Header
