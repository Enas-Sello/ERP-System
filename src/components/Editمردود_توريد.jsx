import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Editbuttons from '../atoms/Editbuttons';

const Editمردود_توريد = () => {
  // const [calender, setCalender] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  return (
    <Container className="my-3">
      <div className="d-flex justify-content-between flex-column mb-4">
        <div className="d-flex  justify-content-between flex-column flex-md-row">
          <p className="fs-5 fw-bold">إضافة سند السداد</p>
          <Editbuttons />
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
      </div>
      {/* form */}
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
        {/* form 2 */}
        <div className="col-8 bg-white rounded p-2">
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
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Editمردود_توريد;
