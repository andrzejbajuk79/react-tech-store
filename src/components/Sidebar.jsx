import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {ProductState} from '../context'

const SideWrapper = styled.nav`
position:fixed;
top:61px;
left:0;
width:100%;
height:100%;
background:var(--mainGrey);
z-index:1;
border-right:4px solid var(--primaryColor);
transition:var(--mainTransition) ;
transform: translateX(${
		props => {
			console.log('props.show:', props.show);
			return props.show ? '0' : '-100%'
		}
	});


/* transform: ${props=>props.show?'translateX(0)':'translateX(-100%)'}; */
ul {
 list-style-type:none;
 padding:0 !important;
}
.sidebar-link {
 display:block;
 font-size:1.5rem;
 text-transform:capitalize;
 color:var(--mainBlack);
 padding:0.5rem 1.5rem;
 background:transparent;
 transition:var(--mainTransition);

  &:hover {
   background:var(--primaryColor);
   color:var(--mainWhite);
   padding:0.5rem 1.5rem 0.5rem 2.5rem;
   text-decoration:none;
 }
}
@media (min-width:576px){
 width:20rem
}

`


const Sidebar = props => {
 const {links,sidebarOpen,handleSidebar} = ProductState()
 return (
  
  <SideWrapper show={sidebarOpen}>
  <ul>
  {links.map(link=>{
    return (
     <li key={link.id}>
      <Link className='sidebar-link'  //
      onClick={handleSidebar} to={link.path}>{link.text}</Link>
     </li>
    )
   })}
  </ul>
 </SideWrapper>
 )
}




Sidebar.propTypes = {
 sidebarOpen: PropTypes.bool,
 handleSidebar: PropTypes.func
}

export default Sidebar
