import React from 'react'
import './footer.css'
import { getAboutMe } from '../Data/data'
export default function Footer() {
  return (
    <div className='footer-container'>
        <h3>Designed By {getAboutMe().name} | <i class="ri-copyright-line"></i> 2023 All rights reserved</h3>
    </div>
  )
}
