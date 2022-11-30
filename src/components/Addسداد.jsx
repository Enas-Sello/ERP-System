import React, { useState } from 'react';
import { Button, Container, Dropdown } from 'react-bootstrap';
import { BsCalendarEvent } from 'react-icons/bs';
import { IoAddOutline } from 'react-icons/io5';

import Calendars from './Calenders';

const Addسداد = () => {
  const [calender, setCalender] = useState(false);
  return (
    <Container className="my-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex  ">
          <p className="fs-5 fw-bold">إضافة سند السداد</p>
        </div>
        <div className="d-flex text-start">
          <Button className=" border bg-success border-0 ms-2 ">حفظ</Button>

          <Button className="border border-0 bg-danger ms-2">العودة</Button>
        </div>
      </div>
      <div class="d-flex gap-4 ">
        <p className="text-danger fw-bold"> إختار نوع العملية : </p>
        <div class="form-check ">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            بداية مدة
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
            زيادة رصيد{' '}
          </label>
        </div>
      </div>

      <div className="d-flex">
        {/* form */}
        <div className="bg-white rounded  mx-4 p-2">
          <form className="row g-2 mb-5">
            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                إسم المستخدم{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-6 position-relative">
              <label for="staticEmail2" className="form-label">
                تاريخ التسجيل{' '}
              </label>
              <div className="d-flex secbgColor border border-2 rounded align-items-center ">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 "
                  id="staticEmail2"
                  value=""
                />
                <BsCalendarEvent
                  className="ms-2 secbgColor "
                  onClick={() => setCalender(!calender)}
                />
              </div>
              <div
                className={
                  calender ? 'd-block position-absolute end-0' : 'd-none'
                }
              >
                {/* <Calendars /> */}
              </div>
            </div>

            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                تاريخ السند{' '}
              </label>
              <div className="d-flex secbgColor border border-2 rounded align-items-center ">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 "
                  id="staticEmail2"
                  value=""
                />
                <BsCalendarEvent
                  className="ms-2 secbgColor "
                  onClick={() => setCalender(!calender)}
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
                إسم المشترى{' '}
              </label>
              <input
                className="form-control secbgColor"
                type="text"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                رقم السند المرفق{' '}
              </label>
              <input
                className="form-control secbgColor"
                type="text"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                إسم المورد{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                سعر الذهب{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
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
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                اجمالي الاجور{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                إجمالي حسب الاسهم{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                إجمالي الضريبة{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                اجمالي الخصم{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
          </form>
        </div>
        {/*end form */}

        {/*form */}
        <div className="bg-white rounded p-2 col-8">
          <div className="d-flex align-items-center justify-content-between w-100">
            <p className="logoColor fs-6 fw-bold">تفاصيل سند التوريد</p>
            <Button
              variant="outline-light"
              className=" secButtonColor "
              size="sm"
            >
              <IoAddOutline className="text-light" />
              إضافة سطر جديد
            </Button>
          </div>
          <form className="row g-4 mb-5 ">
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                الوزن{' '}
              </label>
              <input
                className="form-control secbgColor"
                type="text"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                العيار{' '}
              </label>
              <Dropdown className="w-100 ">
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="d-flex align-items-center justify-content-between w-100 border border-2 rounded "
                >
                  - - - - - - - - - - - -
                </Dropdown.Toggle>

                <Dropdown.Menu className="w-100">
                  <Dropdown.Item className="w-100" href="#/action-1">
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item className="w-100" href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item className="w-100" href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label ">
                الاسهم{' '}
              </label>
              <div className="d-flex align-items-center ">
                <input
                  style={{ borderRadius: '0' }}
                  className="form-control secbgColor rounded-end"
                  type="text"
                  id="staticEmail2"
                  value=""
                />
                <Button
                  style={{ borderRadius: '0', padding: '.45rem .75rem' }}
                  className="border border-0 buttonColor ms-2 rounded-start "
                >
                  تغيير
                </Button>
              </div>
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                النقدية{' '}
              </label>
              <input
                className="form-control secbgColor"
                type="text"
                id="staticEmail2"
                value=""
              />
            </div>

            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                الخصم{' '}
              </label>
              <input
                className="form-control secbgColor"
                type="text"
                id="staticEmail2"
                value=""
              />
            </div>
          </form>
        </div>
        {/*end form2 */}
      </div>
    </Container>
  );
};

export default Addسداد;
