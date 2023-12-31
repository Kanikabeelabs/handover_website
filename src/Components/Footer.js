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
                    }}>HANDOVER MOBILITY PRIVATE LIMITED <br />
                        U52219DL2023PTC412868 <br />
                        216-A, IV/F, L/S GAUTAM NAGAR New Delhi <br />
                        Delhi 110049<br />
                        Contact – 093113 39816
                    </p>
                    <ul className="media">
                        <li><a href="https://www.facebook.com/HandoverDelivery" >
                            <img src="./facebook.png" alt="Facebook"></img></a></li>
                        <li><a href="https://twitter.com/"><img src="./twitter.png" alt="Twitter"></img></a></li>
                        <li><a href="https://www.instagram.com/handover.in/"><img src="./insta.png" alt="Instagram"></img></a></li>
                        <li><a href="https://www.linkedin.com/company/handoverin/"><img src="./linkedin.png" alt="LinkedIn"></img></a></li>
                        <li><a href="https://www.youtube.com/@handoverdelivery"><img src="./youtube.png" alt="Youtube"></img></a></li>
                    </ul>
                </div>
                <div className="d-flex flex-column gap-3 col-md-2" style={{ marginTop: '22px' }}>
                    <p>Customer Service</p>
                    <ul className='d-flex flex-column gap-1'>
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">About us</Link></li>
                        {/* <li><Link to="">Blog</Link></li>
                        <li><Link to="">Contact US</Link></li> */}

                    </ul>
                </div>
                {/* <div className="d-flex flex-column gap-3 col-md-2" style={{ marginTop: '22px' }}>
                    <p>Our Services</p>


                    <ul className='d-flex flex-column gap-1'>
                        <li><Link to="">Apparels & Lifestyle</Link></li>
                        <li><Link to="">Bakery & Confectioneries</Link></li>
                        <li><Link to="">Cooked Food</Link></li>
                        <li><Link to="">Electronic Items</Link></li>
                        <li><Link to="">Frozen Food & Vegetables</Link></li>
                        <li><Link to="">Furniture</Link></li>
                        <li><Link to="">Gifts & Flowers</Link></li>
                        <li><Link to="">Groceries</Link></li>
                        <li><Link to="">Pharmacy</Link></li>
                        <li><Link to="">Stationery</Link></li>
                        <li><Link to="">Utilities Services</Link></li>
                    </ul>
                </div> */}
                <div className="d-flex flex-column gap-3 col-md-2" style={{ marginTop: '22px' }}>
                    <p>Terms and Conditions</p>

                    <ul className='d-flex flex-column gap-1'>
                        <li><Link to="/privacy-policy-handover-business-app">Handover Business App</Link></li>
                        <li><Link to="/privacy-policy-handover-rider-app">Handover Rider App</Link></li>
                        <li><Link to="/terms-business-retailers">Business & Retailers</Link></li>
                        <li><Link to="/rider-terms-condition">Rider Terms & Condition</Link></li>
                    </ul>
                </div>
                <div className="d-flex flex-column gap-3 col-md-2" style={{ marginTop: '22px' }}>
                    <p>Our Apps</p>
                    <ul className='d-flex flex-column gap-1'>
                        <li><Link to="https://play.google.com/store/apps/details?id=com.handover.retailer">
                          HandOver Business
                            </Link></li>
                            <li><Link to="https://play.google.com/store/apps/details?id=com.handover.rider">
                          HandOver Partner
                            </Link></li>
                        {/* <li><Link to="">Services</Link></li>
                        <li><Link to="">FAQ</Link></li> */}
                    </ul>
                </div>
                <div className="d-flex flex-column gap-3 col-md-2" style={{ marginTop: '22px' }}>
                    <p>Support</p>
                    <ul className='d-flex flex-column gap-1'>
                        <div className='div1'>
                            <img className='imagee1' src="./imagee1.png"></img>
                            <li><Link to="">info@handover.in</Link></li>

                        </div>
                        <div className='div2'>
                            <img className='imagee2' src="./imagee2.png"></img>
                            <li><Link to="">+91 93113 39816</Link></li>
                        </div>

                        <div className='div3'>
                            <img className='imagee3' src="./imagee3.png"></img>
                            <img className='imagee4' src="./imagee4.png"></img>
                        </div>
                    </ul>
                </div>
            </Container>
        </div>
        <div style={{
            background: "#3D3D3D", height: "50px"
        }}></div></>)
}
export default Footer;