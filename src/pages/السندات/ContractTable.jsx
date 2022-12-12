import React from 'react';
import { Button, Container } from 'react-bootstrap';
// icons
import { SlFrame } from 'react-icons/sl';
import { BsArrowLeftShort, BsPrinter } from 'react-icons/bs';
import { TfiBackRight } from 'react-icons/tfi';
import { VscFilePdf } from 'react-icons/vsc';
import MuiTable from '../../components/MuiTable';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
const ContractTable = () => {
  return (
    <Container className="mt-3  d-flex justify-content-center align-items-center bglight">
      <div className="bgLight  w-100 h-100 borderRadius p-3">
        <div className="d-flex justify-content-between mb-5 mb-md-3">
          <div className="fw-bold">معاينه</div>
          <div className="d-flex gap-2 textDarkyellow">
            <ReactToPrint
              trigger={() => (
                <BsPrinter style={{ width: '20px', height: '20px' }} />
              ) }
              content={ () => this.componentsRef }
              documentTitle='new document'
              pageStyle='print'
              onClick={()=>{console.log('first')}}
            />
            <VscFilePdf style={{ width: '20px', height: '20px' }} />
            <SlFrame style={{ width: '20px', height: '20px' }} />
          </div>
        </div>{' '}
        <MuiTable ref ={el=>(this.componentsRef=el)} />
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link
            to="/Add_Contract"
            className="d-flex  rounded align-items-center textDarkGreen gap-1 align-items-center"
          >
            <TfiBackRight
              className="textDarkGreen"
              // style={{ width: '25px', height: '25px' }}
            />
            <Button className="textDarkGreen p-0 m-0" variant="">
              رجوع{' '}
            </Button>
          </Link>
          <Link
            to=""
            className="d-flex bgDarkgreen rounded text-white align-items-center"
          >
            <Button size="md" className="text-white" variant="">
              ارسال
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ContractTable;
