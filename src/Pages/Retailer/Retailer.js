import React from 'react'
import Header from '../../Components/Header'
import "./Retailer.css"

const Retailer = () => {
    return (
        <section className="retailer-section">
            <Header />
            <div className='del1'>
                <img className='background1' src='./background1.png'></img>
                <img className='img1' src='./img1.png'></img>
                <div className='del1A'>
                    <div className='del1b'>Get In Touch</div>
                </div>    
                <div className='heading1'>Get In</div>
                <div className='heading2'>Touch</div>
                <div className='content1'>Lorem Ipsum is simply dummy text of<br /> the printing and typesetting industry.</div>
                
            </div>

            <div className='del2'>
                <div className='del2a'>Handover में Delivery Partner बनने के फायदे</div>
                <div className='del2b'>
                    <img className='img2' src='./img2.png'></img>
                </div>    

            </div>


            
        </section>
        

  )
}

export default Retailer