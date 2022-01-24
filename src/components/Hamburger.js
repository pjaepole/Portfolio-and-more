import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown
} from "react-bootstrap";
import { connect } from 'react-redux'
import '../components/Todo.css'

function Hamburger(props) {
    const {dtheme}=props
  return (
    <div className='hamburger_main_div' >
      <Navbar expand={false} className={dtheme?'dark':''}>
        <Container fluid >
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className={dtheme?'dark':''}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Useful Link for me
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/jaehun-park/" target="_blank">My LinkedIn</Nav.Link>
                <Nav.Link href="https://github.com/pjaepole" target="_blank">My GitHub</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="https://calendar.google.com/" target="_blank">Google Calendar</NavDropdown.Item>
                  <NavDropdown.Item href="https://docs.google.com/" target="_blank">
                    Google Doc
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="https://github.com/pjaepole/Portfolio-and-more" target="_blank">About this project</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state)=>{
    return {
      dtheme:state.todoReducer.darkmode
    }
}
export default connect(mapStateToProps)(Hamburger);
