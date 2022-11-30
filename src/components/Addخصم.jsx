import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoAddOutline } from 'react-icons/io5';
import { BsCalendarEvent } from 'react-icons/bs';
import Calendars from './Calenders';

const Addخصم = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [calender, setCalender] = useState(false);

  return (
    <>
      <Button
        variant="outline-light"
        className=" secButtonColor "
        size="sm"
        onClick={handleShow}
      >
        <IoAddOutline className="text-light" />
        إضافة خصم{' '}
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="secbgColor ">
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
              <p className="fs-2 fw-bolder logoColor ms-5 ">Altebr</p>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <AddNewForm /> */}
          <div className="bg-light p-2 text-end rounded h-100">
            <p className="fs-5 fw-bold"> سند الخصم</p>
            <div className="d-flex align-items-center gap-2  p-2">
              <form className="row g-2">
                <div className="col-6 position-relative">
                  <label for="staticEmail2" className="form-label">
                    تاريخ التسجيل{' '}
                  </label>
                  <div className="d-flex secbgColor border border-2 rounded align-items-center ">
                    <BsCalendarEvent
                      className="ms-2 secbgColor "
                      onClick={() => setCalender(!calender)}
                    />
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 "
                      id="staticEmail2"
                      value=""
                    />
                  </div>
                  <div
                    className={
                      calender ? 'd-block position-absolute start-50' : 'd-none'
                    }
                  >
                    <Calendars />
                  </div>
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    إسم المستخدم{' '}
                  </label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value="إسم المستخدم"
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    إسم المورد{' '}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                </div>
                <div className="col-6 position-relative">
                  <label for="staticEmail2" className="form-label">
                    تاريخ السند{' '}
                  </label>
                  <div className="d-flex secbgColor border border-2 rounded align-items-center ">
                    <BsCalendarEvent
                      className="ms-2 secbgColor "
                      onClick={() => setCalender(!calender)}
                    />
                    <input
                      type="text"
                      className="form-control bg-transparent border-0 "
                      id="staticEmail2"
                      value=""
                    />
                  </div>
                  <div
                    className={
                      calender ? 'd-block position-absolute end-0' : 'd-none'
                    }
                  >
                    <Calendars />
                  </div>
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    رقم سند التوريد{' '}
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="staticEmail2"
                    value=""
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    المبلغ{' '}
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="staticEmail2"
                    value=""
                  />
                </div>

                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    ملاحظة{' '}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    رقم السند المرفق{' '}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                </div>
              </form>
            </div>
          </div>

          {/* <AddNewForm /> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Addخصم;
