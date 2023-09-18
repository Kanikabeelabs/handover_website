import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeaderMenu } from "../utils/Data";
import { getCurrentPage } from "../utils/functions";
const Header = ({ page_name }) => {
    return (
        <Navbar expand="lg" >
            <Container fluid className="website-header">
                <Navbar.Brand as={Link} to="/" style={{ marginRight: "0px" }}>
                    <img src="./handover_logo.png" alt="HandOverLogo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex flex-wrap col-md-9 justify-content-end gap-xl-4 gap-2 p-md-0 p-2"
                        style={{ marginRight: "0px !important" }}>
                        {HeaderMenu.map((item) => {
                            return (<Nav.Link key={item.id}
                                as={Link}
                                to={item.link_url}
                                style={{ color: getCurrentPage() === item.link_url ? "#F6911E" : "inherit" }}>
                                {item.menu_name}</Nav.Link>
                            )
                        })}
                    </Nav>
                    <div className="col-2 d-flex align-items-center gap-4 mx-md-5 mx-0">
                        <a href="" style={{
                            display: 'flex', alignItems: "center", color: "#000000",
                            textDecoration: "none"
                        }}>
                            <img src="./whatsapp.png" alt="whatsapp"></img>
                            <h6 className="m-0">WhatsApp</h6>
                        </a>

                        <a href="">
                            <img src="./GooglePlayLogo.png" alt="Playstore" />
                        </a>
                    </div>

                    {/* {(page_name === "home" || page_name === "about-us" ||
                        page_name === "delivery_partner" || page_name === "retailer") && <Button className='handover-button'>Get it on google play link</Button>}
                    {(page_name === "delivery_fee" || page_name === "delivery_fee_form") && <Button className='rounded-pill handover-button' >Cities We Serve</Button>} */}
                </Navbar.Collapse>



            </Container>
        </Navbar >
    )
}

export default Header;