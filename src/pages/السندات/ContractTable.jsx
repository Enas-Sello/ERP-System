import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Tables from '../../components/Tables';
// icons
import { SlFrame } from 'react-icons/sl';

// data
import { Suplierheader, SuplierRows } from '../../data.js';
import { BsPrinter } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';
import TableHeader from '../../components/TableHeader';
import MuiTable from '../../components/MuiTable';

const ContractTable = () => {
  return (
    <Container className="mt-3  d-flex justify-content-center align-items-center bglight">
      <div className="bgLight  w-100 h-100 borderRadius p-3">
        <div className="d-flex justify-content-between mb-5 mb-md-3">
          <div className="fw-bold">معاينه</div>
          <div className="d-flex gap-2 textDarkyellow">
            <BsPrinter style={{ width: '20px', height: '20px' }} />
            <VscFilePdf style={{ width: '20px', height: '20px' }} />
            <SlFrame style={{ width: '20px', height: '20px' }} />
          </div>
        </div>
        <div className="bglightGray w-100 h-75 borderRadius d-flex align-items-center justify-content-center ">
          {' '}
          <MuiTable headCells={Suplierheader} rows={SuplierRows} />
        </div>
      </div>
    </Container>
  );
};

export default ContractTable;
