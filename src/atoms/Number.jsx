import React from 'react'
import { Button } from 'react-bootstrap';

const Number = ({num}) => {
  return (
    <Button variant="outline-light" size="sm" className="bgDarkYellow">
      {num}
    </Button>
  );
}

export default Number