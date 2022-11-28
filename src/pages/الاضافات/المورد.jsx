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

const المورد = () => {
  const [serach, setSearch] = useState(false);
  console.log(serach);

  return (
    <Container >
      <Row>
        <p className='fs-5 fw-bold'>المورد</p>
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
              <Button
                variant="outline-light"
                size="sm"
                className="secButtonColor"
              >
                <SlOptionsVertical/>
              </Button>

              <AddNew />
            </div>
          </div>
        </Row>
      </Row>
      <div className="d-flex gap-4">
        <Col lg={3} className={serach ? 'd-block my-2' : 'd-none'}>
          <FilterCard/>
        </Col>
        <Col lg={serach ? 9 : 12}>
          <Tables SuplierRows={SuplierRows} Suplierheader={Suplierheader} />
        </Col>
      </div>
    </Container>
  );
};

export default المورد;
