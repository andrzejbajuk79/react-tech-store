import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';
import Contact from './pages/ContactPage';
import Default from './pages/DefaultPage';
import Cart from './pages/CartPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Sidecart from './components/Sidecart';


function App() {
 return (
  <>
  <Navbar/>
  <Sidebar/>
  <Sidecart/>
   <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/about'  component={About}/>
    <Route path='/contact'  component={Contact}/>
    <Route path='/products'  exact component={Products}/>
    <Route path='/products/:id'   component={SingleProduct}/>
    <Route path='/cart'   component={Cart}/>
    <Route  component={Default}/>
   </Switch>
  <Footer/>
    
  </>
 );
}

export default App;
