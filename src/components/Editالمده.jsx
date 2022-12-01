import React from 'react'
import { Container } from 'react-bootstrap'
import Editbuttons from '../atoms/Editbuttons';

const Editالمده = () => {
  return (
    <Container className="my-3">
      <div className="d-flex justify-content-between flex-column mb-4">
        <div className="d-flex justify-content-between flex-column flex-md-row">
          <p className="fs-5 fw-bold">بداية مدة و زيادة رصيد</p>
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
      <div className="d-flex flex-column flex-lg-row">
        {/* form */}
        <div className=" rounded  mx-4 p-2 mb-3">
          <div className="d-flex gap-5 align-items-center rounded bg-white py-1 px-2 mb-3">
            <p className="logoColor fs-5 fw-bold p-1">رقم السند</p>
            <p className="textDarkyellow fs-6 fw-bold p-1">325654615</p>
          </div>
          <form className="row g-2 mb-5 rounded bg-white p-2">
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
        {/*end form */}

        {/* form 2*/}
        <div className="bg-white rounded p-2 mb-3">
          <p className="logoColor fs-6 fw-bold">تفاصيل سند التوريد</p>
          <form className="row g-3 mb-5 ">
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
            <div className="col-8 d-flex  justify-content-center align-items-center gap-2">
              <div className=" d-flex  justify-content-center align-items-center gap-2">
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
}

export default Editالمده