import React from 'react'
import { Button } from 'react-bootstrap';
import { BiFilterAlt } from 'react-icons/bi';

const Search = ({ setSearch, serach }) => {
  return (
    <Button
      variant="outline-light"
      size="md"
      className="bgdarkOrang"
      onClick={() => setSearch(!serach)}
    >
      <BiFilterAlt />
      بحث
    </Button>
  );
};

export default Search