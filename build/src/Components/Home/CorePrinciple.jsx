import React from 'react'
import './CorePrinciple.css'

function CorePrinciple() {
    return(
        <section className="core-principle">
        <div className='z-background'>
         <h2>Descover the Core Principles That Guide Us </h2>
          <div className='principle-container'>
           <div className='vission-mission'>
            <div className='our-vision'>
              <h3>Our Vision</h3>
              <p>To be Zimbabwe's leading digital platform for connecting people with
                 trusted, skilled service providers in the construction, plumbing, and
                 electrical sectors—empowering communities through accessible,
                 reliable, and professional services. </p>
            </div>
            <div>
             <h3>Our Values</h3>
             <p>Integrity, innovation, and inclusivity guide everything we do. We
                 believe in building trust, embracing new technology, and ensuring
                 equal opportunities for both clients and service providers.</p>
            </div>
            
           </div>
           <div className='stats'>
            <div className='stat-item'>
              <p>290 K</p>
              <small>lines of code </small>
            </div>
            <div className='stat-item'>
                <p>1,5500</p>
                <small>Projects Done</small>
                </div>
            <div className='stat-item'>
                <p>98%</p>
                <small>Success Rate</small>
                </div>
            <div className='stat-item'>
                <p>25</p>
                <small>Years of Experience</small>
                </div>
           </div>
           </div>
          </div>
        
        
        </section>
    )
}
export default CorePrinciple;