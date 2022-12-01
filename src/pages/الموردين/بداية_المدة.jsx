import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tables from '../../components/Tables';
import FilterCard from '../../components/FilterCard';
import Number from '../../atoms/Number';
import Search from '../../atoms/Search';
import AddingButton from '../../atoms/AddingButton';
// data
import { Suplierheader, SuplierRows } from '../../data.js';
import Totals from '../../atoms/Totals';
import Header from '../../atoms/Header';
import ChangeRadio from '../../atoms/ChangeRadio';
const بداية_المدة = () => {
  const [serach, setSearch] = useState(false);

  return (
    <Container className="mt-3">
      <Row>
        <Header headLine={'سندات بداية المدة و زيادة الرصيد'} />
        <Row>
          <div className="d-flex flex-sm-column flex-lg-row justify-content-between">
            <div className="d-flex gap-2">
              <Totals totalsLine={'مجموع السندات :'} />
              <Number num={10} />
              <Search setSearch={setSearch} serach={serach} />
            </div>
            <div className="d-flex gap-2">
              <AddingButton link={'/Addمده'} linktitle={' إضافة سند'} />
            </div>
          </div>
        </Row>
        <Row>
          <ChangeRadio
            name={'تغيير'}
            radio1={'الكل'}
            radio2={'بداية مدة'}
            radio3={'زيادة رصيد'}
          />
        </Row>
      </Row>
      <div className="d-flex gap-4">
        <Col lg={3} className={serach ? 'd-block my-2' : 'd-none'}>
          <FilterCard />
        </Col>
        <Col lg={serach ? 9 : 12}>
          <Tables
            edit={'/Editالمده'}
            SuplierRows={SuplierRows}
            Suplierheader={Suplierheader}
          />
        </Col>
      </div>
    </Container>
  );
};

export default بداية_المدة;
