import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoAddOutline } from 'react-icons/io5';
import AddNewForm from './AddNewForm';

const AddNew = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="outline-light"
        className=" bg-info bg-opacity-75"
        size="sm"
        onClick={handleShow}
      >
        <IoAddOutline />
        إضافة مورد
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="bg-secondary ">
        <Offcanvas.Header>
          <Offcanvas.Title className="bg-light p-2">
            <div
              style={{
                width: '100%',
              }}
              className=" d-flex  justify-content-between p-1 align-items-center"
            >
              <div className="d-flex  justify-content-center align-items-center gap-2">
                <Button variant="danger">العودة</Button>{' '}
                <Button variant="success">حفظ </Button>{' '}
              </div>
              <p className="fs-2 fw-bolder text-info ms-5 ">Altebr</p>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body  closeButton>
         <AddNewForm/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default AddNew;
