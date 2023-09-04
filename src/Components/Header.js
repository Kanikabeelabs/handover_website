import { Navbar, Nav, Container } from "react-bootstrap";
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
                    <Nav className="d-flex flex-wrap col-md-12 justify-content-end gap-md-5 gap-2 p-md-0 p-2"
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
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;