import React from 'react'

const ChangeRadio = ({ name, radio1, radio2, radio3}) => {
  return (
    <div class="d-flex gap-4 mt-1 ">
      <p className="textDarkGreen fw-bold mb-0"> {name} </p>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label className="form-check-label" for="flexRadioDefault2">
          {radio1}{' '}
        </label>
      </div>
      <div class="form-check ">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          {radio2}{' '}
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
          {radio3}{' '}
        </label>
      </div>
    </div>
  );
};

export default ChangeRadio