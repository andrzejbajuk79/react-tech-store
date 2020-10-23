import React from 'react'
import {FaBars,FaCartPlus} from 'react-icons/fa'
import styled from 'styled-components'
import {ProductState} from '../context'
import logo from '../images/logo.svg'

const NavWrapper= styled.nav`

`

const Navbar = props => {
 const {cartItems,handleSidebar,handleCart} = ProductState()
 return (
  <NavWrapper>
 <div className="nav-center">
  <FaBars className='nav-icon'onClick={handleSidebar}/>
  <img src={logo} alt='tech store logo'/>
  <div className="nav-cart">
   <FaCartPlus className='nav-icon' onClick={handleCart}/>
   <div className="cart-items">{cartItems}</div>
  </div>
 </div>
 </NavWrapper>
 )
}

export default Navbar


