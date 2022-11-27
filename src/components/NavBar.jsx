import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// icons
import { BiSearchAlt } from 'react-icons/bi';
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io';
// assets
import placeholder from '../assets/placeholder.jpg';
function NavBar() {
  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand href="/" className="fs-2 fw-bolder text-info ms-5 ">
          Altebr
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 ms-2 bg-transparent"
              aria-label="Search"
            />
            <Button variant="outline-dark">
              <BiSearchAlt />
            </Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="">
              <h6>البلد</h6>
            </Nav.Link>
            <Nav.Link href="#action2">
              <div className=" position-relative">
                <IoMdNotificationsOutline
                  style={{ width: '25px', height: '25px' }}
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  10
                </span>
              </div>
            </Nav.Link>

            <Nav.Link href="#">
              <div className="d-flex gap-2 ">
                <img src={placeholder} alt="placeholder" className="images" />
                <div className="d-flex gap-2 align-items-center">
                  <h6>اسم المستخدم</h6>
                  <IoIosArrowDown />
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
