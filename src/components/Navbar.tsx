import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import currency from '../assets/images/icons/currency.png'

const NavbarComponent = (props: any) => {
  return (
    <Navbar collapseOnSelect bg="primary" expand="md" fixed="top">
      <Container>

        {/* logo */}
        <Navbar.Brand href="#" onClick={() => window.scrollTo(0,0)}>
          <img
            src={currency}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        {/*  hamburger icon toggler */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link onClick={props.onClick} className="text-light fw-bold py-4 text-decoration-none" to={props.linkTo}>
              {props.authProcessLabel}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent