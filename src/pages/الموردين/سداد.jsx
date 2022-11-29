import React, { useState } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Tables from '../../components/Tables';
// icons
import { BiFilterAlt } from 'react-icons/bi';

// data
import { Suplierheader, SuplierRows } from '../../data.js';
import FilterCard from '../../components/FilterCard';
import { Link } from 'react-router-dom';
import { IoAddOutline } from 'react-icons/io5';

const سداد = () =>
{
  const [serach, setSearch] = useState(false);
  
  return (
    <Container className="mt-3">
      <Row>
        <p className="fs-5 fw-bold">سند التوريد</p>
        <Row>
          <div className="d-flex flex-sm-column flex-lg-row justify-content-between">
            <div className="d-flex gap-2">
              <h4> مجموع السندات</h4>
              <Button variant="outline-light" size="md" className="buttonColor">
                10
              </Button>
              <Button
                variant="outline-light"
                size="md"
                className="bgColor"
                onClick={() => setSearch(!serach)}
              >
                <BiFilterAlt />
                بحث
              </Button>
            </div>
            <div className="d-flex gap-2">
              <Button
                variant="outline-light"
                size="md"
                className="secButtonColor"
              >
                <IoAddOutline className="ms-1" />
                <Link className="" to="/Addbill">
                  إضافة سند
                </Link>
              </Button>
            </div>
          </div>
          <div class="d-flex gap-4 mt-2 ">
            <p className="logoColor fw-bold">تغيير </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault2">
                الكل{' '}
              </label>
            </div>
            <div class="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                بداية مدة
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault2">
                زيادة رصيد{' '}
              </label>
            </div>
          </div>
        </Row>
      </Row>
      <div className="d-flex gap-4">
        <Col lg={3} className={serach ? 'd-block my-2' : 'd-none'}>
          <FilterCard />
        </Col>
        <Col lg={serach ? 9 : 12}>
          <Tables
            edit={'/Editسداد'}
            SuplierRows={SuplierRows}
            Suplierheader={Suplierheader}
          />
        </Col>
      </div>
    </Container>
  );
};

export default سداد;
