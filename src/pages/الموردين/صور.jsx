import React from 'react';
import {  Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import holder from '../../assets/holder.png';
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
        <div className="container">
          <div
            className="d-flex  flex-wrap w-100 "
            style={{ columnGap: '5px', rowGap: '20px' }}
          >
            <div className="col p-0">
              <img src={holder} width={'250px'} alt="" />
            </div>
            <div className="col p-0">
              <img src={holder} width={'250px'} alt="" />
            </div>
            <div className="col p-0">
              <img src={holder} width={'250px'} alt="" />
            </div>
            <div className="col p-0">
              <img src={holder} width={'250px'} alt="" />
            </div>
            <div className="col p-0">
              <img src={holder} width={'250px'} alt="" />
            </div>
            <div className="col p-0">
              <img src={holder} width={'250px'} alt="" />
            </div>
            <div className="col p-0">
              <img src={holder} width={'250px'} alt="" />
            </div>
            <div className="col p-0">
              <img src={holder} width={'250px'} alt="" />
            </div>
            <div className="col p-0">
              <img src={holder} width={'250px'} alt="" />
            </div>
          </div>
        </div>
        {/* <Row>
          <Card style={{ width: '15rem', border: 'none' }}>
            <Card.Img variant="top" src={holder} />
          </Card>
        </Row> */}
      </div>
    </Container>
  );
};

export default صور;
