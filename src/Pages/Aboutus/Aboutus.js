import { Container } from 'react-bootstrap';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import NoticeSection from '../../Components/NoticeSection';
import "./Aboutus.css";
import { AboutUsCardItemData } from "../../utils/Data";
import OurLocation from "../../Components/OurLocation";
const Aboutus = () => {

  // const [activeCard, setActiveCard] = useState(0);
  const AboutUsCard = ({ id, imgURL, heading, desc }) => {
    return (<div
      // onClick={() => setActiveCard(id)}
      className="handover-shadow-div details3 p-4 d-flex flex-column 
          align-items-center 
          justify-content-center"
      style={{
        width: "250px",
        // backgroundColor: activeCard === id ? "#007DC4" : "#ffffff",
        // color: activeCard === id && "#ffffff",
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
          <h1 className='fw-bold'>handover</h1>
          <h1 className='fw-bold' style={{ color: "#F6911E" }}>Your Delivery Partner</h1>
        </div>
        <div style={{ width: "100%" }}>
          <img src="./aboutus-banner.png" alt="About us banner" width="100%" />
        </div>
      </Container>
      {/* Second Section */}
      <Container className="p-3">
        <div className='row mt-5 mb-5'>
          <div className='col-md-3 d-flex flex-column flex-wrap gap-2 justify-content-center '>
            <h4 className='fw-bold'>About Us</h4>
            <p className='m-0 p-0' style={{ fontWeight: "300" }}>
              Handover is a low-cost, safe and reliable delivery service provider to businesses across 35 cities of India. It has 1000+ registered Delivery Partners who deliver products through an extensive logistics fleet comprising trucks, electric vehicles and 3-wheelers.
            </p>
          </div>
          <div className='col-md-9 d-flex flex-wrap gap-2 justify-content-evenly' >{
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
        <h3 className='mt-4 mb-4 fw-bold'>Our Values</h3>
        <div style={{ width: "100%" }}>
          <img src="./our_values.png" alt="Our Values" width="100%" />
        </div>
      </Container>

      {/* Testimonial */}
      <Container fluid className="d-flex justify-content-center"
        style={{ background: "#0d6efd", minHeight: "400px" }}>
        <Container className="p-0 m-0 d-flex flex-wrap align-items-center justify-content-center">
          <div className="col-md-6 col-12 d-flex align-items-center justify-content-center" >
            <div style={{ width: "375px" }}>
              <img src="./testimonial.png" alt="Testimonial" width="100%"
                style={{ position: "relative", bottom: "-60px" }}></img>
            </div>
          </div>
          <div className="col-md-6 col-12" >
            <div style={{ position: "relative" }}>
              <img src="./blockquote_up.png" alt="blockquote_up"></img>
              <p className="mt-5 mb-5 p-0" style={{ color: "#ffffff" }}>
                The brand chose an unusual business model: pre-order. Asphalte's
                team decided to make clothes solely based on the preferences of
                customers, without charging them upfront.
              </p>
              <img src="./blockquote_down.png" alt="blockquote_down"
                style={{ position: "absolute", right: "0" }}></img>
            </div>
          </div>
        </Container>
      </Container>

      {/* Location Section */}
      <OurLocation />
      {/* News Section */}
      {/* <NoticeSection /> */}

      <Footer />
    </section>)
}

export default Aboutus;