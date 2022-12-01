import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tables from '../../components/Tables';
// data
import { Suplierheader, SuplierRows } from '../../data.js';
import FilterCard from '../../components/FilterCard';
import Number from '../../atoms/Number';
import Search from '../../atoms/Search';
import AddingButton from '../../atoms/AddingButton';
import Header from '../../atoms/Header';
import Totals from '../../atoms/Totals';
import ChangeRadio from '../../atoms/ChangeRadio';

const سداد = () =>
{
  const [serach, setSearch] = useState(false);
  
  return (
    <Container className="mt-3">
      <Row>
        <Header headLine={'سند التوريد'} />
        <Row>
          <div className="d-flex flex-sm-column flex-lg-row justify-content-between">
            <div className="d-flex gap-2">
              <Totals totalsLine={'مجموع السندات :'} />
              <Number num={10} />
              <Search setSearch={setSearch} serach={serach} />
            </div>
            <div className="d-flex gap-2">
              <AddingButton link={'/Addسداد'} linktitle={' إضافة سند'} />
            </div>
          </div>
        </Row>
        <Row>
          <ChangeRadio
            name={'تغيير'}
            radio1={'الكل'}
            radio2={'مباشر'}
            radio3={'سداد وسيط'}
          />
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
