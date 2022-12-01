import React from 'react'
import { Button } from 'react-bootstrap';
import { IoAddOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const AddingButton = ({ link, linktitle }) => {
  return (
    <Button variant="outline-light" size="md" className="bgDarkgreen">
      <IoAddOutline className="ms-1" />
      <Link className="" to={link}>
        {linktitle}{' '}
      </Link>
    </Button>
  );
};

export default AddingButton