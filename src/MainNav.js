import React, { Component } from 'react';
import './App.css';

class MainNav extends Component {
  render() {
    return (
      <div className="MainNav">
       	<img src="/logo.jpg" className="Logo" />
        <input className = "SearchBar" type="text" name="SearchBar" placeholder="Search for Products, Brands and More" />
		    <a href="https://www.flipkart.com/account/login?ret=%2Fwishlist" className="login"><b>Login & Signup</b></a>
		    <a href="https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click" className="login"><b>Cart</b></a>
		  <div className="dropdown">
        <button className="dropbtn"><b>More</b> &nabla;
        </button>

    <div className="dropdown-content" tabindex="1">

    <tr className="tr"><a href="https://seller.flipkart.com/?utm_source=flipkart&utm_medium=website&utm_campaign=sellbutton">Sell on Flipkart</a></tr>
    <tr className="tr"><a href="https://brands.flipkart.com/?otracker=ch_vn_advertise_header">Advertise</a></tr>
    <tr className="tr"><a href="https://www.flipkart.com/mobile-apps?otracker=ch_vn_mobile_apps">Download App</a></tr>
    <tr className="tr"><a href="https://www.flipkart.com/helpcentre">24x7 Customer Care</a></tr>
      
 		</div>
 		</div>
 		</div>
 	     
      
 
 


  
    
    );
  }
}

export default MainNav;
