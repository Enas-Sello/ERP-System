import React from 'react'
import { Button } from 'react-bootstrap';

const Editbuttons = () => {
  return (
    <div className="d-flex text-start">
      <Button className="bgDarkYellow border border-0 ms-2 ">اعتماد</Button>
      <Button className="bgDarkgreen border border-0 ms-2 ">القيود</Button>
      <Button className="bgDarkYellow border border-0 ms-2">طباعة</Button>{' '}
      <Button className="border border-0 bg-danger ms-2">العودة</Button>
    </div>
  );
}

export default Editbuttons