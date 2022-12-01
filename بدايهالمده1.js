import React, { useState } from 'react';
import { Button, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendars from './Calenders';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { BsCalendarEvent } from 'react-icons/bs';
import { IoAddOutline } from 'react-icons/io5';

const Addمردود_توريد = () => {
  const [calender, setCalender] = useState(false);
  // store input
  const [detail, setDetail] = useState({
    name: '',
    number: '',
    account: '',
    tex_name: '',
    mobile: '',
    national_adress: '',
    tax_number: '',
    salery_value: '',
    email: '',
    commercial_number: '',
    adress: '',
    fax: '',
    web: '',
    iban: '',
    status: '',
    country: '',
    type: '',
    show: '',
    bank_name: '',
  });
  const handelChang = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // send to back end
  const handelSubmit = (e) => {
    e.preventDefault();
    //conect to api here
    console.log(detail);
  };
  console.log(detail);
  return (
    <Container className="p-2">
      <div className="d-flex justify-content-between mb-2">
        <div className="d-flex ">
          <p className="fs-5 fw-bold">إضافة سند التوريد</p>
        </div>
        <div className="d-flex text-start">
          <Button className="bg-success border  border-0 ms-2 " type="submit">
            حفظ
          </Button>
          <Button className="border border-0 bg-danger ms-2">
            <Link to="/بداية المدة">العودة</Link>
          </Button>
        </div>
      </div>

      <div className="d-flex flex-column flex-lg-row">
        {/* form */}
        <div className="bg-white rounded mb-1  mx-4 p-2">
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
        <div className="bg-white mb-1 rounded p-2">
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
                الصنف{' '}
              </label>{' '}
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
              <label for="staticEmail2" className="form-label">
                الفئة{' '}
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
                المعدن{' '}
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
              <label for="staticEmail2" className="form-label">
                الأسهم{' '}
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
                الأجرة{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                ضريبة الاجور{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                ضريبة الذهب{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                قيمة الالماس{' '}
              </label>
              <div className="d-flex align-items-center ">
                <input
                  className="form-control secbgColor "
                  type="text"
                  id="staticEmail2"
                  value=""
                />
                <Button className="border border-0 buttonColor ms-2  ">
                  <div className="d-flex align-items-center gap-2 p-1 ">
                    <MdOutlineKeyboardArrowDown />
                    <MdOutlineKeyboardArrowUp />
                  </div>
                </Button>
              </div>
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                عدد الالماس{' '}
              </label>
              <div className="d-flex align-items-center ">
                <input
                  className="form-control secbgColor "
                  type="text"
                  id="staticEmail2"
                  value=""
                />
                <Button className="border border-0 buttonColor ms-2  ">
                  <div className="d-flex align-items-center gap-2 p-1 ">
                    <MdOutlineKeyboardArrowDown />
                    <MdOutlineKeyboardArrowUp />
                  </div>
                </Button>
              </div>
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                الخصم{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                ضريبة قيمة الالماس{' '}
              </label>
              <div className="d-flex align-items-center ">
                <input
                  className="form-control secbgColor "
                  type="text"
                  id="staticEmail2"
                  value=""
                />
                <Button className="border border-0 buttonColor ms-2  ">
                  <div className="d-flex align-items-center gap-2 p-1 ">
                    <MdOutlineKeyboardArrowDown />
                    <MdOutlineKeyboardArrowUp />
                  </div>
                </Button>
              </div>
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                وزن حجر الالماس{' '}
              </label>
              <div className="d-flex align-items-center ">
                <input
                  className="form-control secbgColor "
                  type="text"
                  id="staticEmail2"
                  value=""
                />
                <Button className="border border-0 buttonColor ms-2  ">
                  <div className="d-flex align-items-center gap-2 p-1 ">
                    <MdOutlineKeyboardArrowDown />
                    <MdOutlineKeyboardArrowUp />
                  </div>
                </Button>
              </div>
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                قيمة البضاعة الخارجية{' '}
              </label>
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className=" d-flex  justify-content-center align-items-center gap-2">
              <div className="col-5 d-flex  justify-content-center align-items-center gap-2">
                <div className="">
                  <label for="staticEmail2" className="form-label me-4">
                    18{' '}
                  </label>
                  <input
                    type="text"
                    className="form-control secbgColor"
                    id="staticEmail2"
                    value=""
                  />
                </div>
                <div className="">
                  <label for="staticEmail2" className="form-label me-4">
                    21{' '}
                  </label>
                  <input
                    type="text"
                    className="form-control secbgColor"
                    id="staticEmail2"
                    value=""
                  />
                </div>
                <div className="">
                  <label for="staticEmail2" className="form-label me-4">
                    24{' '}
                  </label>
                  <input
                    type="text"
                    className="form-control secbgColor"
                    id="staticEmail2"
                    value=""
                  />
                </div>
                <div className="">
                  <label for="staticEmail2" className="form-label me-3">
                    القائم{' '}
                  </label>
                  <input
                    type="text"
                    className="form-control secbgColor"
                    id="staticEmail2"
                    value=""
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/*end form2 */}
      </div>
    </Container>
  );
};

export default Addمردود_توريد;
