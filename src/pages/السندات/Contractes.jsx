import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsFiles } from 'react-icons/bs';
import { IoIosCheckmark, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BsPrinter } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';
import { SlFrame } from 'react-icons/sl';
import { MdModeEditOutline } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import {} from 'react-icons/bs';

const Contractes = () => {
  return (
    <Container className="mt-4 p-2">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <h3>
          {' '}
          انشاء سند <span className="text-muted">1/2</span>{' '}
        </h3>
        <Link
          to="/Add_Contract"
          className="d-flex bgDarkgreen rounded text-white align-items-center"
        >
          <Button className="text-white" variant="">
            التالي{' '}
          </Button>
          <BsArrowLeftShort style={{ width: '25px', height: '25px' }} />
        </Link>
      </div>
      <Row className="bglightGray mt-3 ">
        <Col lg={6} sm={12}>
          <div className="bgdarktGray w-100 h-100 borderRadius p-3">
            <Form className="mt-3">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center gap-1">
                  <BsFiles className="textDarkyellow" />
                  <div className="fw-bold">تفاصيل السند</div>
                </div>
                <div className="d-flex align-items-center gap-1 ">
                  {/* <Button
                    className="bgDarkgreen border-0 "
                    size="sm"
                    type="submit"
                  >
                    حفظ
                  </Button> */}
                  <IoMdCheckmarkCircleOutline className="textDarkGreen" />
                  <p className="p-0 m-0 textDarkGreen">مكتمل</p>
                </div>
              </div>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>تاريخ السند </Form.Label>
                  <Form.Control type="date" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>تاريخ التسجيل</Form.Label>
                  <Form.Control type="date" placeholder="Password" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label>اسم المورد</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress2"
                >
                  <Form.Label>اسم المشترى</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label>رقم السند المرفق </Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress2"
                >
                  <Form.Label>سعر الذهب </Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label> اجملي حسب الاسهم </Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress2"
                >
                  <Form.Label> اجمالى الخصم </Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>الصنف</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>الصنف</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>الفئه</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>المعدن</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>الوزن</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>العيار</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>الاسهم</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>الصنف</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>الفئه</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </Form>
          </div>
        </Col>
        <Col lg={6} sm={12} className="mt-4 mt-md-0">
          <div className="bgLight  w-100 h-100 borderRadius p-3">
            <div className="d-flex justify-content-between mb-5 mb-md-3">
              <div className="fw-bold">معاينه</div>
              <div className="d-flex gap-2 textDarkyellow">
                <BsPrinter style={{ width: '20px', height: '20px' }} />
                <VscFilePdf style={{ width: '20px', height: '20px' }} />
                <SlFrame style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
            <div className="bglightGray p-2 w-100 h-75 borderRadius d-flex align-items-center justify-content-center ">
              <div className=" bgdarktGray   w-100 borderRadius d-flex p-2 d-flex  ">
                <Col span="6">
                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item">تاريخ السند : 22/2/2202</li>
                    <li className="list-group-item">
                      تاريخ التسجيل :22/2/2202
                    </li>
                    <li className="list-group-item">
                      تاريخ التسجيل :22/2/2202
                    </li>
                    <li className="list-group-item">الملاحظات :لا يوجد</li>
                    <li className="list-group-item">سعر الذهب :211 ر.س</li>
                    <li className="list-group-item">
                      رقم السند المرفق : 32313
                    </li>
                  </ul>
                </Col>
                <Col span="6">
                  {' '}
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">اسم المورد : اسم المورد</li>
                    <li className="list-group-item">اسم المشتري : الاسم</li>
                    <li className="list-group-item">
                      اجمالي الاجور : 21521 ر.س
                    </li>
                    <li className="list-group-item">سعر الاسهم :21521 ر.س</li>
                    <li className="list-group-item">الضريبه : 21521 ر.س</li>
                    <li className="list-group-item">وزن الالماس 21521</li>
                  </ul>
                </Col>
                <div className="d-flex align-items-end justify-content-end">
                  <MdModeEditOutline
                    className="textDarkyellow"
                    style={{ width: '16px', height: '16px' }}
                  />
                  <AiFillDelete
                    className="textDarkOrang"
                    style={{ width: '16px', height: '16px' }}
                  />
                </div>
              </div>
            </div>
            {/* <div className="d-flex align-items-end justify-content-end">
              <Button className="bgDarkgreen rounded text-white" variant="">
                <Link to="/AddContract" className=" text-white">
                  تاكيد{' '}
                  <BsArrowLeftShort style={{ width: '25px', height: '25px' }} />
                </Link>
              </Button>
            </div> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contractes;
