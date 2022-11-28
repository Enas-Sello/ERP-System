import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import Card from 'react-bootstrap/Card';

const FilterCard = () => {
  return (
    <Card style={{ width: '18rem', height: '100%' }}>
      <Card.Body>
        <Card.Title>FILTER OPTIONS</Card.Title>
        <div className="d-flex gap-2 p-1  justify-content-center align-items-center rounded-pill bg-secondary bg-opacity-25">
          <BiSearchAlt />
          <input
            className="border border-0  bg-transparent outine-light"
            type="text"
            placeholder="بحث"
          />
        </div>
        <Card.Text>
          <p>تغيير :</p>
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
          >
            <option selected>--------------</option>
            <option value="1">إظهار</option>
            <option value="2">عدم إظهار</option>
            <option value="3">وسيط</option>
          </select>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FilterCard