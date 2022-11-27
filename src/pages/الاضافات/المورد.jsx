import React from 'react';
import { Container, Row ,Button} from 'react-bootstrap';
import AddNew from '../../components/AddNew';
import Tables from '../../components/Tables';
// icons
import { SlOptionsVertical } from 'react-icons/sl';
import { BiFilterAlt } from 'react-icons/bi';
const المورد = () => {
  return (
    <Container>
      <Row>
        <h2>المورد</h2>
        <Row>
          <div className="d-flex flex-sm-column flex-lg-row justify-content-between">
            <div className="d-flex gap-2">
              <h4>مجموع الموردين :</h4>
              <Button variant="outline-light" size="sm" className="buttonColor">
                20
              </Button>
              <Button variant="outline-light" size="sm" className="bgColor">
                <BiFilterAlt />
                بحث
              </Button>
            </div>
            <div className="d-flex gap-2">
              <span className="textColor fs-4 fw-bold">3</span>
              <h4>مجموع مختارين</h4>
              <Button variant="outline-light" size="sm" className="bgColor">
                <SlOptionsVertical />
              </Button>

              <AddNew />
            </div>
          </div>
        </Row>
      </Row>
      <Tables />
    </Container>
  );
};

export default المورد;
