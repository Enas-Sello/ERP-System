import React, { useState } from 'react';
import { Button, Container, Dropdown } from 'react-bootstrap';

import PopUp from './PopUp';


const Editتوريد = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container className="my-3">
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex ">
          <p className="fs-5 fw-bold">إضافة سند التوريد</p>
        </div>
        <div className="d-flex text-start">
          <Button
            className=" border bg-success border-0 ms-2 "
            onClick={() => setModalShow(true)}
          >
            حفظ
          </Button>
          <PopUp
            color={'warning'}
            text={'لا يمكن اعتماد فرق اسهم اكثر من خسين  سهم'}
            Button={false}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Button
            className="border border-0 bg-danger ms-2"
            onClick={() => setModalShow(true)}
          >
            العودة
          </Button>
          <PopUp
            color={'danger'}
            text={' سيتم الان اغلاق السند '}
            Button={true}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row">
        <div className="bg-white rounded  mx-4 p-2">
          <div className="d-flex gap-5 align-items-center">
            <p className="logoColor fs-5 fw-bold ">رقم السند</p>
            <p className="textDarkyellow fs-6 fw-bold ">325654615</p>
          </div>
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
            <div className="col-6">
              <label for="staticEmail2" className="form-label">
                تاريخ التسجيل{' '}
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
                تاريخ السند{' '}
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
        <div className="bg-white rounded p-2">
          <p className="logoColor fs-6 fw-bold">تفاصيل سند التوريد</p>
          <form className="row g-4 mb-5 ">
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                الصنف{' '}
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
                الفئة{' '}
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
                المعدن{' '}
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
              <input
                className="form-control secbgColor"
                type="text"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                الأسهم{' '}
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
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                عدد الالماس{' '}
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
              <input
                type="text"
                className="form-control secbgColor"
                id="staticEmail2"
                value=""
              />
            </div>
            <div className="col-4">
              <label for="staticEmail2" className="form-label">
                وزن حجر الالماس{' '}
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
      </div>
    </Container>
  );
};

export default Editتوريد;
