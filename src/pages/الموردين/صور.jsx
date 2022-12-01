import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { images } from '../../data';

const صور = () => {
  return (
    <Container className="my-3">
      <p className="fs-5 fw-bold">صور</p>
      <div className="d-flex p-4 w-100 gap-3 align-items-center bg-white rounded">
        <div className="d-flex w-100  justify-content-between flex-column">
          <p>المدينة</p>

          <Dropdown className="w-100 ">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="d-flex align-items-center justify-content-between w-100 border border-2 rounded "
            >
              - - - - - - - - - - - -
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              <Dropdown.Item className="w-100" href="#/action-1">
                Action
              </Dropdown.Item>
              <Dropdown.Item className="w-100" href="#/action-2">
                Another action
              </Dropdown.Item>
              <Dropdown.Item className="w-100" href="#/action-3">
                Something else
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex w-100  justify-content-between  flex-column">
          <p>المدينة</p>

          <Dropdown className="w-100 ">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="d-flex align-items-center justify-content-between w-100 border border-2 rounded"
            >
              - - - - - - - - - - - -
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              <Dropdown.Item className="w-100" href="#/action-1">
                Action
              </Dropdown.Item>
              <Dropdown.Item className="w-100" href="#/action-2">
                Another action
              </Dropdown.Item>
              <Dropdown.Item className="w-100" href="#/action-3">
                Something else
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex w-100  justify-content-between  flex-column">
          <p>المدينة</p>

          <Dropdown className="w-100 ">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="d-flex align-items-center justify-content-between w-100 border border-2 rounded "
            >
              - - - - - - - - - - - -
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              <Dropdown.Item className="w-100" href="#/action-1">
                Action
              </Dropdown.Item>
              <Dropdown.Item className="w-100" href="#/action-2">
                Another action
              </Dropdown.Item>
              <Dropdown.Item className="w-100" href="#/action-3">
                Something else
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="d-flex p-4 w-100 gap-3  bg-white rounded mt-4 flex-column">
        <p className="fs-4 fw-bold">عرض الصور</p>
        <p className=" text-center">
          Filter options relating to pictures shown will be displayed here
        </p>
        <Row>
          {images.map((item) => (
            <Col sm={6} md={4} lg={3}>
              {' '}
              <div className="mb-2">
                <img src={item.img} width={'250px'} alt="" />
              </div>
            </Col>
          ))}
          {/* <div
            className="d-flex  flex-wrap w-100 "
            style={{ columnGap: '5px', rowGap: '20px' }}
          >
            <div className="col p-0">
              <img src={item.img} width={'250px'} alt="" />
            </div>
          </div> */}
        </Row>
      </div>
    </Container>
  );
};

export default صور;
