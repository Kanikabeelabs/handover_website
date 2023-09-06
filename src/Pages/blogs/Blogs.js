import { Container, Button } from 'react-bootstrap';
import "./Blogs.css";
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';

import React from 'react';

const Blogs = () => {
  return (
    <section className='Handover_blogpage'>
        <Container fluid>
          
            
                {/* ---------------------------Header--------------------------- */}
                <Header />

                {/* -------------------------------first section--------------------- */}

                <div className='div1'>
                    <img className='main_img' src='./blog1.svg'></img>
                    <div className='txt1'>
                      <div className='txt_hand'>Handover</div> 
                      <div className='blogs'>Blogs</div>
                    </div>
                    <div className='txt2'>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. </div>
                </div>

                <h3 className='top1'>TOP LIST</h3>
                <div className='list1'>
                  <div>
                    <img className='s_img1' src='./scooty1.png'></img>
                    <div className='dess'>
                      <div className='des1'>It is a long established fact that a reader will be <br/>distracted by the readable content of a page .</div>
                      <div className='date1'>oct 4, 2022</div>
                    </div>
                    <div>
                      <a className='read1'>Read more</a>

                    </div>
                  </div>

                  <div>
                    <div className='list2'>
                      <div className='top1'>
                        <img className='s_img2' src='./scooty2.png'></img>
                        <div className='dess2'>
                          <div className='des2'>Lorem Ipsum</div>
                          <div className='date2'>oct 4, 2022</div>
                        </div>
                        <a className='read2'>Read More</a>
                      </div>

                      <div className='top2'>
                        <img className='s_img3' src='./scooty2.png'></img>
                        <div className='dess3'>
                          <div className='des3'>Lorem Ipsum</div>
                          <div className='date3'>oct 4, 2022</div>
                        </div>
                        <a className='read2'>Read More</a>

                      </div>
                    </div>

                    <div></div>
                  </div>
                </div>
            
            
            
        </Container>

    </section>
  )
}

export default Blogs