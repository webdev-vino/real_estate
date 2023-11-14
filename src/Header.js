import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import "./header.css"

const Header = () => {
  return (
    <header className='header'>
    <div className='content'>
      <Navbar />
      <h1>Let's find your perfect home for you</h1>
      <Searchbar />  
      </div> 
    </header> 
  )
}

export default Header