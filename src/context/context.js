import React,{Component, useContext} from 'react'

const ProductContext = React.createContext();


class ProductProvider extends Component {
 state ={
  sidebarOpen:false,
  cartOpen:false,
  cartItems:0
 }
 
 handleSidebar=()=>{
  this.setState({sidebarOpen:!this.state.sidebarOpen})
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
 const ProductState = () => {
 return useContext(ProductContext);
};
// const ProductConsumer = ProductContext.Consumer

export {ProductProvider,ProductState}