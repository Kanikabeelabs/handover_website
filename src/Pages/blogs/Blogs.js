import { Container, Button } from 'react-bootstrap';
import "./Blogs.css";
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';

import React from 'react';

const blogs = () => {
  return (
    <section className='Handover_blogpage'>
        <Container>
            
                {/* ---------------------------Header--------------------------- */}
                <Header />

                {/* -------------------------------first section--------------------- */}

                <div className='div1'>
                    <img className='img1' src='./b_img1.svg'></img>
                    <div className='about'> About</div>
                    <div className='handover'>Handover</div>
                </div>
            
            
            
        </Container>

    </section>
  )
}

export default blogs