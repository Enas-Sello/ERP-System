import React from 'react'
import { Row } from 'react-bootstrap';
import AddingButton from '../atoms/AddingButton';
import Header from '../atoms/Header';
import Number from '../atoms/Number';
import Search from '../atoms/Search';
import Totals from '../atoms/Totals';

const Head = ({
  headLine,
  totalsLine,
  num,
  link,
  setSearch,
  serach,
  linktitle,
}) => {
  return (
    <Row>
      <Header headLine={headLine} />
      <Row>
        <div className="d-flex flex-sm-column flex-lg-row justify-content-between">
          <div className="d-flex gap-2">
            <Totals totalsLine={totalsLine} />
            <Number num={num} />
            <Search setSearch={setSearch} serach={serach} />
          </div>
          <div className="d-flex gap-2">
            <AddingButton link={link} linktitle={linktitle} />
          </div>
        </div>
      </Row>
    </Row>
  );
};

export default Head