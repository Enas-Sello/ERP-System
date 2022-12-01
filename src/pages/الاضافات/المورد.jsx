/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Addمورد from '../../components/Addمورد';
import Tables from '../../components/Tables';
import FilterCard from '../../components/FilterCard';
import Search from '../../atoms/Search';
import Number from '../../atoms/Number';
// icons
import { SlOptionsVertical } from 'react-icons/sl';

// data
import { Suplierheader, SuplierRows } from '../../data.js';
import Header from '../../atoms/Header';
import Totals from '../../atoms/Totals';
import TotalChosen from '../../atoms/TotalChosen';

const المورد = () => {
  const [serach, setSearch] = useState(false);
  console.log(serach);

  return (
    <Container className="mt-3">
      <Row>
        <Header headLine={'المورد'} />
        <Row>
          <div className="d-flex flex-sm-column flex-lg-row justify-content-between">
            <div className="d-flex gap-2">
              <Totals totalsLine={'مجموع الموردين :'} />
              <Number num={20} />
              <Search setSearch={setSearch} serach={serach} />
            </div>
            <div className="d-flex gap-2">
              <TotalChosen title={'مجموع مختارين'} num={3} />
              <Button variant="outline-light" size="md" className="bgDarkgreen">
                <SlOptionsVertical />
              </Button>

              <Addمورد />
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
            edit={'/'}
            SuplierRows={SuplierRows}
            Suplierheader={Suplierheader}
          />
        </Col>
      </div>
    </Container>
  );
};

export default المورد;
