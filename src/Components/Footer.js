import { Container } from "react-bootstrap";

const Footer = () => {
    return (<>
        <div style={{
            color: "#ffffff",
            background: " #272727",
        }}>
            <Container className="footer-menu-item p-5 d-flex gap-3 justify-content-between flex-wrap" style={{ maxWidth: "1800px" }}>
                <div className="d-flex flex-column gap-3 col-md-2"  >
                    <div><img src="./handover-logo.png" alt="HandOverLogo" /></div>
                    <p style={{
                        fontWeight: "300",
                        maxWidth: "300px"
                    }}>Lorem ipsum dolor amet, consectetur
                        adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat.
                        Cursus sed massa non nisi, placerat.
                    </p>
                    <ul className="media">
                        <li><a href="https://www.facebook.com/HandoverDelivery" ><img src="./facebook.png"></img></a></li>
                        <li><a href="https://twitter.com/"><img src="./twitter.png"></img></a></li>
                        <li><a href="https://www.instagram.com/handover.in/"><img src="./insta.png"></img></a></li>
                    </ul>
                </div>
                <div className="d-flex flex-column gap-3 col-md-2" >
                    <p>Customer Service</p>
                    <ul className='d-flex flex-column gap-1'>
                        <li><a href="">Home</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact US</a></li>
                    </ul>
                </div>
                <div className="d-flex flex-column gap-3 col-md-2" >
                    <p>Customer Service</p>
                    <ul className='d-flex flex-column gap-1'>
                        <li><a href="">Food delivery</a></li>
                        <li><a href="">Parcel delivery</a></li>
                    </ul>
                </div>
                <div className="d-flex flex-column gap-3 col-md-2" >
                    <p>Links</p>
                    <ul className='d-flex flex-column gap-1'>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
            </Container>
        </div>
        <div style={{
            background: "#3D3D3D", height: "50px"
        }}></div></>)
}
export default Footer;