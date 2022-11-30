import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoAddOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Addمورد = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // store inputs
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
    //conect to api here
    console.log(detail);
  };
  console.log(detail);
  return (
    <>
      <Button
        variant="outline-light"
        className=" secButtonColor "
        size="md"
        onClick={handleShow}
      >
        <IoAddOutline className="text-light" />
        إضافة مورد
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
                <Button variant="danger">
                  <Link to="/المورد">العودة</Link>
                </Button>{' '}
                <Button type="submit" onSubmit={handelSubmit} variant="success">
                  حفظ{' '}
                </Button>{' '}
              </div>
              <p className="fs-2 fw-bolder logoColor ms-5 ">Altebr</p>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* add from */}
          <div className="bg-light p-2 text-end rounded ">
            <p className="fs-5 fw-bold">إضافة مورد جديد</p>
            <div className="d-flex align-items-center gap-2  p-2">
              <form onSubmit={handelSubmit} className="row g-2">
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    إسم المورد{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="name"
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    رقم المورد
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="number"
                  />
                </div>
                <div className="col-6">
                  <p>حالة المورد</p>
                  <select
                    onChange={handelChang}
                    name="status"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">نشط</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  <p>دولة المورد</p>
                  <select
                    onChange={handelChang}
                    name="country"
                    className="form-select m-0 "
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      - - - - - -
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    رقم حساب المورد
                  </label>
                  <input
                    onChange={handelChang}
                    className="form-control"
                    type="text"
                    id="staticEmail2"
                    name="account"
                  />
                </div>
                <div className="col-6">
                  <p style={{ margin: '4px' }}>نوع المورد </p>
                  <select
                    onChange={handelChang}
                    name="type"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      محلي
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    الإسم الضريبى{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="tex_name"
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    الهاتف{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="mobile"
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    العنوان الوطنى{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="national_adress"
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    الرقم الضريبى{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="tax_number"
                  />
                </div>
                <div className="d-flex ">
                  <div className="form-check col-6 d-flex justify-content-end gap-5">
                    <label className="form-check-label" for="flexCheckDefault">
                      ضريبة الأجور / القيمة
                    </label>
                    <input
                      onChange={handelChang}
                      className="form-check-input"
                      type="checkbox"
                      name="salery_value"
                      id="flexCheckDefault"
                    />
                  </div>
                  <div className="form-check col-6 d-flex justify-content-end gap-5">
                    <label className="form-check-label" for="flexCheckDefault">
                      ضريبة الذهب
                    </label>
                    <input
                      onChange={handelChang}
                      className="form-check-input"
                      type="checkbox"
                      name="gold_tax"
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    البريد الالكتروني{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="email"
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    رقم السجل التجارى{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="commercial_number"
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    العنوان
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="adress"
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    الفاكس
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="fax"
                  />
                </div>
                <div className="col-6 ">
                  <p style={{ margin: '4px' }}>المدينة </p>
                  <select
                    onChange={handelChang}
                    name="town"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      - - - - - -
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    موقع الانترنت{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="web"
                  />
                </div>
                <div className="col-6 ">
                  <p style={{ margin: '4px' }}>إسم البنك </p>
                  <select
                    onChange={handelChang}
                    name="bank_name"
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      - - - - - -
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6 ">
                  <p style={{ margin: '4px' }}>اظهار </p>
                  <select
                    name="show"
                    onChange={handelChang}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      - - - - - -
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    IBAN{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="iban"
                  />
                </div>
                <div className="col-6">
                  <label for="staticEmail2" className="form-label">
                    رقم حساب البنكى{' '}
                  </label>
                  <input
                    onChange={handelChang}
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    name="bank-account"
                  />
                </div>
              </form>
            </div>
          </div>{' '}
          {/* add from */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Addمورد;
