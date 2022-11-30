import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsExclamationLg } from 'react-icons/bs';
const PopUp = (props) => {
  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="d-flex  align-items-center justify-content-between gap-4 flex-column w-100">
            <BsExclamationLg className={`text-${props.color} fs-1 fw-bold`} />
            <p className={`text-${props.color} fs-5 fw-bold`}>{props.text}</p>
          </div>
        </Modal.Body>

        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal>
  );
};
export default PopUp;
