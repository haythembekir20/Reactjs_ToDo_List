import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title , onAdd, showadd}) => {
    
    return (
        <header className='header'>
            <h1 > {title} </h1>
            <Button 
             color={showadd ? 'red' : 'green'}
          text={showadd ? 'Close' : 'Add'}
          onClick={onAdd} />
           
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker',
  }

Header.prototype = {
title: PropTypes.string.isRequired,
}
/*
const headingstyle ={
    color : 'red',
    background : 'black'
}
*/
export default Header
