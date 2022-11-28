
function AddNewForm() {
  return (
    <div className="bg-light p-2 text-end rounded ">
      <p className="fs-5 fw-bold">إضافة مورد جديد</p>
      <div className="d-flex align-items-center gap-2  p-2">
        <form className="row g-2">
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
          <div className="col-6">
            <label for="staticEmail2" className="form-label">
              رقم المورد
            </label>
            <input
              type="text"
              className="form-control"
              id="staticEmail2"
              value=""
            />
          </div>
          <div className="col-6">
            <p>دولة المورد</p>
            <select className="form-select" aria-label="Default select example">
              <option selected>نشط</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-6">
            <p>حالة المورد</p>
            <select
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
              className="form-control"
              type="text"
              id="staticEmail2"
              value=""
            />
          </div>
          <div className="col-6">
            <p style={{ margin: '4px' }}>نوع المورد </p>
            <select className="form-select" aria-label="Default select example">
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
              type="text"
              className="form-control"
              id="staticEmail2"
              value=""
            />
          </div>
          <div className="col-6">
            <label for="staticEmail2" className="form-label">
              الهاتف{' '}
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
              العنوان الوطنى{' '}
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
              الرقم الضريبى{' '}
            </label>
            <input
              type="text"
              className="form-control"
              id="staticEmail2"
              value=""
            />
          </div>
          <div className="d-flex ">
            <div className="form-check col-6 d-flex justify-content-end gap-5">
              <label className="form-check-label" for="flexCheckDefault">
                ضريبة الأجور / القيمة
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="form-check col-6 d-flex justify-content-end gap-5">
              <label className="form-check-label" for="flexCheckDefault">
                ضريبة الذهب
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
          </div>
          <div className="col-6">
            <label for="staticEmail2" className="form-label">
              البريد الالكتروني{' '}
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
              رقم السجل التجارى{' '}
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
              العنوان
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
              الفاكس
            </label>
            <input
              type="text"
              className="form-control"
              id="staticEmail2"
              value=""
            />
          </div>
          <div className="col-6 ">
            <p style={{ margin: '4px' }}>المدينة </p>
            <select className="form-select" aria-label="Default select example">
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
              type="text"
              className="form-control"
              id="staticEmail2"
              value=""
            />
          </div>
          <div className="col-6 ">
            <p style={{ margin: '4px' }}>إسم البنك </p>
            <select className="form-select" aria-label="Default select example">
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
            <select className="form-select" aria-label="Default select example">
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
              type="text"
              className="form-control"
              id="staticEmail2"
              value=""
            />
          </div>
          <div className="col-6">
            <label for="staticEmail2" className="form-label">
              رقم حساب البنكى{' '}
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
  );
}

export default AddNewForm;
