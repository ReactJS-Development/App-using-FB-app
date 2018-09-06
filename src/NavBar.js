import React, { Component } from 'react';
import './App.css';

class NavBar extends Component {
  render() {
    return (

  <div className="navClass">
    <ul>
        <li>Electronics
            <ul className="sub-menu">
                <li>Mobiles</li>
                <li>Laptops</li>
                <li>Tablet</li>
                <li>Mobile Accessories</li>
                <li>Smart Watch</li>
                <li>Camera</li>
                <li>Desktop PCs</li>
                <li>Health Care Appliances</li>
                <li>Featured</li>
            </ul>
            <span className="arrow">&#9660;</span>
        </li>
         <li>Tv & Appliances
                <ul className="sub-menu">
                <li>Telivision</li>
                <li>Washing Machine</li>
                <li>Refrigertor</li>
                <li>Top Brands</li>
                <li>Air Conditioner</li>
                <li>New Launches</li>
                <li>Buying Guide</li>
                <li>Monsoon Cooking</li>
                <li>Featured</li>
                </ul>
                <span className="arrow">&#9660;</span>
          </li>
           <li>Men
             <ul className="sub-menu">
                <li>Footwear</li>
                <li>Top wear</li>
                <li>Bottom wear</li>
                <li>Men's Grooming</li>
                <li>Sports wear</li>
                <li>Inner wear</li>
                <li>Winter wear</li>
                <li>Accessories</li>
                <li>Featured</li>
              </ul>
            <span className="arrow">&#9660;</span>
          </li>
        <li>Women
            <ul className="sub-menu">
                <li>Clothing</li>
                <li>Ethnic wear</li>
                <li>Footwear</li>
                <li>Jewellery</li>
                <li>Sports wear</li>
                <li>Beauty & Grooming</li>
                <li>Winter wear</li>
                <li>Accessories</li>
                <li>Featured</li>
            </ul>
            <span className="arrow">&#9660;</span>
        </li>
        <li>Baby & Kids
            <ul className="sub-menu">
                <li>Kids Footwear</li>
                <li>Kids Clothing</li>
                <li>Toys</li>
                <li>Baby Care</li>
                <li>Accessories</li>
                <li>Featured Brand</li>
            </ul>
            <span className="arrow">&#9660;</span>
        </li>
        <li>Home & Furniture
            <ul className="sub-menu">
                <li>Kitchen & Dining</li>
                <li>Furniture</li>
                <li>Furnishing</li>
                <li>Lighting</li>
                <li>Tools & Hardware</li>
                <li>Gardening Store</li>
                <li>Bakeware Store</li>
                <li>Perfect Home Store</li>
                <li>Featured</li>
            </ul>
            <span className="arrow">&#9660;</span>
        </li>
        <li>Sports, Books & More
            <ul className="sub-menu">
                <li>Books</li>
                <li>Gaming</li>
                <li>Music</li>
                <li>Musical Instruments</li>
                <li>Exercise & Fitness</li>
                <li>Grocery</li>
                <li>Health & Nutrition</li>
                <li>Cars & Bike Accessories</li>
                <li>Featured</li>
            </ul>
            <span className="arrow">&#9660;</span>
        </li>
        <li>Offer Zone</li>
      </ul>

  </div>



    );
  }
}

export default NavBar;
