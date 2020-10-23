import React,{Component, useContext} from 'react'
import { linkData } from './linkData';

const ProductContext = React.createContext();


class ProductProvider extends Component {
 state ={
  sidebarOpen:false,
  cartOpen:false,
  cartItems:0,
  links:linkData
 }
 
 handleSidebar=()=>{
  console.log('sidebarOpen',this.state.sidebarOpen);
  
  this.setState(prevState => ({ sidebarOpen: !prevState.sidebarOpen }));
 }
 handleCart=()=>{
  this.setState({cartOpen:!this.state.cartOpen})
 }
 //close cart
closeCart=()=>{
 this.setState({cartOpen:false})
 }
openCart=()=>{
 this.setState({cartOpen:true})
 }
 value={
  ...this.state,
  handleSidebar:this.handleSidebar,
  handleCart :this.handleCart ,
  closeCart:this.closeCart,
  openCart:this.openCart
  
 }
 render(){
  return <ProductContext.Provider value={this.value}>
   {this.props.children}
  </ProductContext.Provider>
 }
}
 const ProductState = () => useContext(ProductContext);
 

export {ProductProvider,ProductState}