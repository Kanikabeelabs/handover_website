import { Container } from 'react-bootstrap';
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import BlogDiv from './Components/BlogDiv';
import React from 'react';

const Blogs = () => {

  return (
    <section className='Handover_blogpage'>
      {/* ---------------------------Header--------------------------- */}
      <Header />
      {/* -------------------------------first section--------------------- */}
      <Container
        fluid className="p-5" style={{
          backgroundImage: `url("./blog.png")`,
          backgroundSize: 'cover',
          height: "500px"
        }}>
        <div className='d-flex gap-2'>
          <h1 className='fw-bold'>Handover</h1>
          <h1 className='fw-bold' style={{ color: "#F6911E" }}>Blogs</h1>

        </div>
        <p className='mt-3' style={{ fontWeight: "300" }}>
          Lorem Ipsum is simply dummy text of the<br></br>
          printing and typesetting industry.
        </p>
      </Container>

      {/* Second Section */}
      <Container className='p-3 mt-3' style={{ maxWidth: "1500px" }}>
        <div className='d-flex justify-content-between'>
          <h3>Top List</h3>
          <p style={{ color: "#F6911E" }}>View More</p>
        </div>
        <div className='d-flex row'>
          <div className='col-md-6 col-12'>
            <BlogDiv />
          </div>
          <div className='col-md-6 col-12 d-flex flex-column align-items-center gap-3'>
            <div className='row w-100'>
              <div className='col-md-6 col-12'>
                <BlogDiv />
              </div>
              <div className='col-md-6 col-12'>
                <BlogDiv />
              </div>
            </div>

            <div className='row w-100'>
              <div className='col-md-6 col-12'>
                <BlogDiv />
              </div>
              <div className='col-md-6 col-12'>
                <BlogDiv />
              </div>
            </div>

          </div>
        </div>
      </Container>

      {/* Third Section */}
      <Container className='py-3 mt-3' style={{ maxWidth: "1500px" }}>
        <div className='d-flex justify-content-between my-3'>
          <h3>Top List</h3>
          <p style={{ color: "#F6911E" }}>View More</p>
        </div>
        <div className='d-flex gap-2 flex-wrap justify-content-between'>
          {[1, 2, 3, 4].map((item) => {
            return (<div key={item} style={{ maxWidth: "350px" }}><BlogDiv /></div>)
          })}
        </div>
      </Container>

      {/* Fourth Section */}
      <Container className='py-3 mt-3' style={{ maxWidth: "1500px" }}>
        <div className='d-flex justify-content-between my-3'>
          <h3>Top List</h3>
          <p style={{ color: "#F6911E" }}>View More</p>
        </div>
        <div className='d-flex gap-2 flex-wrap justify-content-between'>
          {[1, 2, 3, 4].map((item) => {
            return (<div key={item} style={{ maxWidth: "350px" }}><BlogDiv /></div>)
          })}
        </div>
      </Container>

      {/* Fifth Section */}
      <Container className='p-3 mt-3' style={{ maxWidth: "1500px" }}>
        <img src="./blog_playstore.png" alt="Playstore" width="100%" />
      </Container>

      <Footer />
    </section >
  )
}

export default Blogs;