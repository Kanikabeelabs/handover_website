import { Container } from 'react-bootstrap';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import NoticeSection from '../../Components/NoticeSection';
import LocationItem from '../../Components/LocationItem';
import "./Aboutus.css";
import { AboutUsCardItemData } from "../../utils/Data";
import { useState } from 'react';
const AboutUs = () => {
  const [activeCard, setActiveCard] = useState(2);
  const AboutUsCard = ({ id, imgURL, heading, desc }) => {
    return (<div
      onClick={() => setActiveCard(id)}
      className="handover-shadow-div p-4 d-flex flex-column 
          align-items-center 
          justify-content-center"
      style={{
        width: "250px",
        backgroundColor: activeCard === id ? "#007DC4" : "#ffffff",
        color: activeCard === id && "#ffffff",
        cursor: "pointer"
      }}>
      <img src={imgURL} alt={heading} />
      <p className="fw-semi-bold">{heading}</p>
      <p style={{ fontWeight: "200" }}>{desc}</p>
    </div>)
  }
  return (
    <section className='about-us-section'>
      <Header page_name="about-us" />
      <Container fluid className="p-0" style={{ position: "relative" }}>
        <div style={{
          position: "absolute",
          top: "10%",
          left: "10%"
        }}>
          <h1 className='fw-bold'>About</h1>
          <h1 className='fw-bold' style={{ color: "#F6911E" }}>Handover</h1>
        </div>
        <div style={{ width: "100%" }}>
          <img src="./aboutus-banner.png" alt="About us banner" width="100%" />
        </div>
      </Container>
      {/* Second Section */}
      <Container className="p-0">
        <div className='row mt-5 mb-5'>
          <div className='col-md-3 d-flex flex-column flex-wrap gap-2 justify-content-center '>
            <h4 className='fw-bold'>About Us</h4>
            <p className='m-0 p-0' style={{ fontWeight: "300" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className='col-md-9 d-flex flex-wrap justify-content-evenly' >{
            AboutUsCardItemData.map((item) => {
              return (<AboutUsCard key={item.id}
                imgURL={item.img_url}
                heading={item.heading}
                desc={item.desc}
                id={item.id} />)
            })}</div>
        </div>

      </Container>
      {/* Our Journey */}
      <Container className="p-0 d-flex flex-column align-items-center justify-content-center">
        <h3 className='mt-4 mb-4'>Explore Our Journey</h3>
        <div style={{ width: "100%" }}>
          <img src="./our_journey.png" alt="Our Journey" width="100%" />
        </div>
      </Container>

      {/* Our Values */}
      <Container fluid className="p-0 d-flex flex-column align-items-center justify-content-center">
        <h3 className='mt-4 mb-4'>Our Values</h3>
        <div style={{ width: "100%" }}>
          <img src="./our_values.png" alt="Our Values" width="100%" />
        </div>
      </Container>

      <Container fluid className="p-0 d-flex flex-column align-items-center justify-content-center">
        <h3 className='mt-4 mb-4'>Our Offices</h3>
        <div className='d-flex flex-row flex-wrap'>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (<LocationItem key={index} />)
          })}
        </div>
      </Container>

      {/* News Section */}
      <NoticeSection />



      {/* <div className="del1">
        <img className="image1" src="./image1.png"></img>
        <div className='about'>About</div>
        <div className='handover'>Handover</div>
      </div>
      <div className="del2">
        <div className="del3">
          <b><div className="del3a">About Us</div></b>
          <div className="del3b">lorem Ipsum is simply dummy text of the<br />printing and typesetting industry </div>
        </div>
        <div className="del4">
          <img className="Frame1" src='./Frame1.svg'></img>
          <b><div className="del4a">Our Purpose</div></b>
          <div className="del4b">Lorem Ipsum is simply<br /> dummy text of the printing<br /> and typesetting industry<br /> Lorem Ipsum</div>
        </div>
        <div className="del5">
          <img className="Frame2" src='./Frame2.svg'></img>
          <b><div className="del5a">Our Vision</div></b>
          <div className="del5b">Lorem Ipsum is simply<br /> dummy text of the printing<br /> and typesetting industry.<br /> Lorem Ipsum</div>
        </div>
        <div className="del6">
          <img className="Frame3" src='./Frame3.svg'></img>
          <b><div className="del6a">Our Positioning</div></b>
          <div className="del6b">Lorem Ipsum is simply<br /> dummy text of the printing<br /> and typesetting industry.<br /> Lorem Ipsum.</div>
        </div>
      </div>
      <div>
        <div className="del7">Explore Our Journey</div>
        <img className="image3" src='./image3.png'></img>
      </div>

      <div className="del7">Our Values</div>
      <div>
        <img className="image4" src='./image4.jpg'></img>
      </div>

      <div className="del8">
        <img className="image5" src='./image5.svg'></img>
        <img className="Frame4" src='./Frame4.png'></img>
        <div className="del9">the brand choose an unusual business model: pre-order.<br /> Asphalte’s team decided to make clothes solely based on the<br /> preferences of customers, without charging them upfront.</div>
        <img className="Frame5" src='./Frame5.png'></img>

      </div>

      <div className="del10">Our Offices</div>
      <div className="del11">
        <div className="del11a">
          <img className="image6" src='./image6.png'></img>
          <img className="icon" src='./icon.png'></img>
          <div className="Noida">Noida</div>
          <div className="content1">Lorem Ipsum is simply dummy<br /> text of the printing and<br /> typesetting industry.</div>
        </div>
        <div className="del11b">
          <img className="image6" src='./image6.png'></img>
          <img className="icon" src='./icon.png'></img>
          <div className="Gurugram">Gurugram</div>
          <div className="content2">Lorem Ipsum is simply dummy<br /> text of the printing and<br /> typesetting industry.</div>
        </div>
        <div className="del11c">
          <img className="image6" src='./image6.png'></img>
          <img className="icon" src='./icon.png'></img>
          <div className="Chandigarh">Chandigarh</div>
          <div className="content3">Lorem Ipsum is simply dummy<br /> text of the printing and<br /> typesetting industry.</div>
        </div>
        <div className="del11d">
          <img className="image6" src='./image6.png'></img>
          <img className="icon" src='./icon.png'></img>
          <div className="Pune">Pune</div>
          <div className="content4">Lorem Ipsum is simply dummy<br /> text of the printing and<br /> typesetting industry.</div>
        </div>
      </div>

      <div className="del12">
        <h1 className="del13">Latest News</h1>

        <div className='imgg'>
          <div className="del14">
            <img className="image7" src='./image7.svg'></img>
            <div className="del14a">Heading 1</div>
            <div className="del14b">oct 4, 2022 | Posted by: James Lewis</div>
            <div className="del14c">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. Lorem Ipsum<br /> has been the industry's standard dummy text<br /> ever since the 1500s, when an unknown printer<br /> took a galley of type.</div>
            <div className="del14d">Read More </div>
          </div>

          <div className="del15">
            <img className="image7" src='./image8.svg'></img>
            <div className="del14a">Heading 2</div>
            <div className="del14b">oct 4, 2022 | Posted by: James Lewis</div>
            <div className="del14c">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. Lorem Ipsum<br /> has been the industry's standard dummy text<br /> ever since the 1500s, when an unknown printer<br /> took a galley of type.</div>
            <div className="del14d">Read More </div>
          </div>

          <div className="del16">
            <img className="image7" src='./image9.svg'></img>
            <div className="del14a">Heading 3</div>
            <div className="del14b">oct 4, 2022 | Posted by: James Lewis</div>
            <div className="del14c">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. Lorem Ipsum<br /> has been the industry's standard dummy text<br /> ever since the 1500s, when an unknown printer<br /> took a galley of type.</div>
            <div className="del14d">Read More </div>
          </div>

        </div>

      </div> */}






      <Footer />



      {/* <b>About Us</b>
        <div className="del3">lorem Ipsum is simply dummy text of the<br />printing and typesetting industry </div>
        
        <div className="del4">
        <b>Our Purpose</b>
          <div className="del5">lorem Ipsum is simply <br/>dummy text of the printing<br/> and typesetting industry<br/>lorem Ipsum </div>
          </div> */}
      {/* </div> */}
    </section>)
}

export default AboutUs;