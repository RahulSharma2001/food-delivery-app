import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
      <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                 <h1 className='brand-logo'>FastFood</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero enim perspiciatis corrupti tenetur, alias assumenda molestias cupiditate odio voluptas quae, voluptatem, officiis veritatis cum dignissimos nam illum provident reiciendis?</p>
                  <div className='footer-social-icons'>
                      <img src={assets.facebook_icon} alt="" />
                      <img src={assets.twitter_icon} alt="" />
                      <img src={assets.linkedin_icon} alt="" />
                  </div>
              </div>
              <div className="footer-content-center">
                  <h2>COMPANY</h2>
                  <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
                  </ul>
              </div>
              <div className="footer-content-right"
        
              >
                  <h2>GET IN TOUCH</h2>
                  <ul>
                    <li>+91 1235-1256-5322</li>
                    <li>contact@fastfood.com</li>
                  </ul>
              </div>
          </div>
          <hr />
          <p>Copyright 2024 @ FastFood</p>
    </div>
  )
}

export default Footer
