import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiQuestionMark } from 'react-icons/bi';
const PopUp = (props) => {
  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="d-flex  align-items-center justify-content-between flex-column w-100">
            <p className={`text-${props.color} fs-4 fw-bold`}>{props.text}</p>
            <BiQuestionMark className={`text-${props.color} fs-4 fw-bold`} />
          </div>
        </Modal.Body>

        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal>
  );
};
export default PopUp;
