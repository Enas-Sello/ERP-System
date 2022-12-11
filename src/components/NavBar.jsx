import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// icons
import { BiSearchAlt } from 'react-icons/bi';
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineSettingsSuggest } from 'react-icons/md';

// assets
import placeholder from '../assets/placeholder.jpg';
import logo from '../assets/INVOICE_logo.png';

function NavBar() {
  return (
    <Navbar className="p-0" bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand href="/" className="fs-2 fw-bolder ms-5 ">
          <img
            src={logo}
            style={{ width: '50px', height: '50px', objectFit: 'contain' }}
            alt="logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex border border-1 bg-light rounded">
            <Form.Control
              type="search"
              placeholder="بحث"
              className="me-2 ms-2 border-0 bg-transparent"
              aria-label="Search"
            />
            <Button variant=" ">
              <BiSearchAlt />
            </Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="">
              <MdOutlineSettingsSuggest
                className="textDarkyellow"
                style={{ width: '25px', height: '25px' }}
              />
            </Nav.Link>
            <Nav.Link href="#action2">
              <div className=" position-relative">
                <IoMdNotificationsOutline
                  className="textDarkyellow"
                  style={{ width: '28px', height: '28px' }}
                />
                <span
                  className="position-absolute  translate-middle badge rounded-pill bgDarkYellow"
                  style={{ top: '6px', left: '85%',fontSize:'10px' }}
                >
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
