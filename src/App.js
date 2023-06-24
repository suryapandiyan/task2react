// import logo from './logo.svg';
 import './styles.css';
 import{Route, BrowserRouter as Router} from "react-router-dom";
 import Navbar  from './component/Navbar';
 import Header  from './component/Header';
 import Section from'./component/Section';
 import Footer from './component/Footer';
import { useState } from 'react';


 

function App() {
  return (
  // const [cartItems ,setCartItems]=useState([]);
      
        <div>
          
        <Navbar />
        <Header />
        <Section />
        <Footer />
        
        </div>
       
       
        
         
        
         
        
        

        
     
  );
}

export default App;
