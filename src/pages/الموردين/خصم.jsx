import React, { useState } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import AddNew from '../../components/AddNew';
import Tables from '../../components/Tables';
// icons
import { SlOptionsVertical } from 'react-icons/sl';
import { BiFilterAlt } from 'react-icons/bi';

// data
import { Suplierheader, SuplierRows } from '../../data.js';
import FilterCard from '../../components/FilterCard';
import { Link } from 'react-router-dom';
import { IoAddOutline } from 'react-icons/io5';

const خصم = () => {
  const [serach, setSearch] = useState(false);

  return (
    <Container className="mt-3">
      <Row>
        <p className="fs-5 fw-bold">سند الخصم</p>
        <Row>
          <div className="d-flex flex-sm-column flex-lg-row justify-content-between">
            <div className="d-flex gap-2">
              <h4>مجموع السندات :</h4>
              <Button variant="outline-light" size="sm" className="buttonColor">
                10
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
              <Button
                variant="outline-light"
                size="sm"
                className="secButtonColor"
              >
                <Link to="">
                  <IoAddOutline className="ms-1" />
                  إضافة سند
                </Link>
              </Button>
            </div>
          </div>
        </Row>
      </Row>
      <div className="d-flex gap-4">
        <Col lg={3} className={serach ? 'd-block my-2' : 'd-none'}>
          <FilterCard />
        </Col>
        <Col lg={serach ? 9 : 12}>
          <Tables SuplierRows={SuplierRows} Suplierheader={Suplierheader} />
        </Col>
      </div>
    </Container>
  );
};

export default خصم;
