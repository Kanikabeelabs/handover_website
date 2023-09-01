import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
    return (<>
        <div style={{
            color: "#ffffff",
            background: " #272727",
        }}>
            <Container className="footer-menu-item p-5 d-flex gap-3 justify-content-between flex-wrap" style={{ maxWidth: "1800px" }}>
                <div className="d-flex flex-column gap-3 col-md-2"  >
                    <div><img src="./handover_logo_footer.png" alt="HandOverLogo" /></div>
                    <p style={{
                        fontWeight: "300",
                        maxWidth: "300px"
                    }}>HANDOVER MOBILITY PRIVATE LIMITED <br/>
                        U52219DL2023PTC412868 <br/>
                        216-A, IV/F, L/S GAUTAM NAGAR New Delhi <br/>
                        Delhi 110049<br/>
                        Contact – 093113 39816
                    </p>
                    <ul className="media">
                        <li><a href="https://www.facebook.com/HandoverDelivery" >
                            <img src="./facebook.png" alt="Facebook"></img></a></li>
                        <li><a href="https://twitter.com/"><img src="./twitter.png" alt="Twitter"></img></a></li>
                        <li><a href="https://www.instagram.com/handover.in/"><img src="./insta.png" alt="Instagram"></img></a></li>
                    </ul>
                </div>
                <div className="d-flex flex-column gap-3 col-md-2" >
                    <p>Customer Service</p>
                    <ul className='d-flex flex-column gap-1'>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">About us</Link></li>
                        <li><Link to="">Blog</Link></li>
                        <li><Link to="">Contact US</Link></li>
                    </ul>
                </div>
                <div className="d-flex flex-column gap-3 col-md-2" >
                    <p>Customer Service</p>
                    <ul className='d-flex flex-column gap-1'>
                        <li><Link to="">Food delivery</Link></li>
                        <li><Link to="">Parcel delivery</Link></li>
                    </ul>
                </div>
                <div className="d-flex flex-column gap-3 col-md-2" >
                    <p>Links</p>
                    <ul className='d-flex flex-column gap-1'>
                        <li><Link to="">Pricing</Link></li>
                        <li><Link to="">Services</Link></li>
                        <li><Link to="">FAQ</Link></li>
                    </ul>
                </div>
            </Container>
        </div>
        <div style={{
            background: "#3D3D3D", height: "50px"
        }}></div></>)
}
export default Footer;