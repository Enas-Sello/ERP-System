import React, { useState } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import AddNew from '../../components/AddNew';
import Tables from '../../components/Tables';
// icons
import { SlOptionsVertical } from 'react-icons/sl';
import { BiFilterAlt } from 'react-icons/bi';
import { BiSearchAlt } from 'react-icons/bi';

// data
import { Suplierheader, SuplierRows } from '../../data.js';
import Card from 'react-bootstrap/Card';

const المورد = () => {
  const [serach, setSearch] = useState(false);
  console.log(serach);

  return (
    <Container fluid>
      <Row>
        <h2>المورد</h2>
        <Row>
          <div className="d-flex flex-sm-column flex-lg-row justify-content-between">
            <div className="d-flex gap-2">
              <h4>مجموع الموردين :</h4>
              <Button variant="outline-light" size="sm" className="buttonColor">
                20
              </Button>
              <Button
                variant="outline-light"
                size="sm"
                className="bgColor"
                onClick={() => setSearch(!serach)}
              >
                <BiFilterAlt />
                بحث
              </Button>
            </div>
            <div className="d-flex gap-2">
              <span className="textColor fs-4 fw-bold">3</span>
              <h4>مجموع مختارين</h4>
              <Button variant="outline-light" size="sm" className="bgColor">
                <SlOptionsVertical />
              </Button>

              <AddNew />
            </div>
          </div>
        </Row>
      </Row>
      <div className="d-flex gap-4">
        <Col lg={3} className={serach ? 'd-block my-2' : 'd-none'}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>FILTER OPTIONS</Card.Title>
                <div className="d-flex gap-2 p-1  justify-content-center align-items-center rounded-pill bg-secondary bg-opacity-25">
                  <BiSearchAlt />
                  <input
                    className="border border-0  bg-transparent outine-light"
                    type="text"
                    placeholder="بحث"
                  />
                </div>
              <Card.Text>

                <p>تغيير :</p>
                <select
                  className="form-select form-select-sm"
                  aria-label="Default select example"
                >
                  <option selected>--------------</option>
                  <option value="1">إظهار</option>
                  <option value="2">عدم إظهار</option>
                  <option value="3">وسيط</option>
                </select>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col lg={serach ? 9 : 12}>
          <Tables SuplierRows={SuplierRows} Suplierheader={Suplierheader} />
        </Col>
      </div>
    </Container>
  );
};

export default المورد;
