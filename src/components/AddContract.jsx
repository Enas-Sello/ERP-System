import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsFileImage,
  BsFiles,
} from 'react-icons/bs';
import { IoIosCheckmark, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { BsPrinter } from 'react-icons/bs';
import { VscFilePdf } from 'react-icons/vsc';
import { SlFrame } from 'react-icons/sl';
import { MdModeEditOutline } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
const AddContract = () => {
  return (
    <Container className="mt-4 p-2">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <h3>
          {' '}
          انشاء سند <span className="text-muted">2/2</span>{' '}
        </h3>
        <Link
          to="/Contract"
          className="d-flex bgLight rounded textDarkGreen border borderColor  align-items-center"
        >
          <BsArrowRightShort style={{ width: '25px', height: '25px' }} />
          <Button className="textDarkGreen" variant="">
            السابق{' '}
          </Button>
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
              <Form.Group className="mb-3 " controlId="formGridAddress1">
                <label>ارفاق سند المورد</label>
                <div className="bgLight bgLight p-2  uploadFile boderDsh">
                  <Form.Label className="d-flex align-items-center justify-content-center gap-2 ">
                    <BsFileImage
                      style={{
                        color: '#BECECC',
                        width: '20px',
                        height: '22px',
                      }}
                    />
                    <p className="textGray p-0 m-0">ارفاق الملف هنا</p>
                  </Form.Label>
                  <Form.Control
                    className="d-none"
                    type="file"
                    accept="image/*"
                  />
                </div>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label>الاجرة</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress2"
                >
                  <Form.Label>ضريبة الاجور </Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label>ضريبة الذهب </Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress2"
                >
                  <Form.Label>عدد الالماس </Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label>قيمة الالماس </Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress1"
                >
                  <Form.Label> الخصم </Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress2"
                >
                  <Form.Label> ضريبه قيمهه الالماس </Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>وزن حجر الالماس</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGridAddress2"
                >
                  <Form.Label> ملاحظات (اختياري) </Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="ملاحظات" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  className="mb-3 bgGreen d-flex align-items-center w-100 borderRadius p-2 justify-content-between text-center"
                  controlId="formGridAddress1"
                >
                  <Form.Label className="w-50 p-0 m-0 border-start border-secondary ms-1">
                    عيار 18{' '}
                  </Form.Label>
                  <Form.Control
                    placeholder="2525 جم"
                    className="border-0 p-0 bg-transparent fw-bold"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="mb-3 bgGreen d-flex align-items-center borderRadius p-2 justify-content-between text-center mx-2"
                  controlId="formGridAddress1"
                >
                  <Form.Label className="w-50 p-0 m-0 border-start border-secondary ms-1border-start border-secondary ms-1">
                    عيار 21{' '}
                  </Form.Label>
                  <Form.Control
                    placeholder="2525 جم"
                    className="border-0 p-0 bg-transparent fw-bold text-dark"
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="mb-3 bgGreen d-flex align-items-center borderRadius p-2 justify-content-between  text-center"
                  controlId="formGridAddress1"
                >
                  <Form.Label className="w-50 p-0 m-0 border-start border-secondary ms-1">
                    عيار 22{' '}
                  </Form.Label>
                  <Form.Control
                    placeholder="2525 جم"
                    className="border-0 p-0 bg-transparent fw-bold"
                  />
                </Form.Group>
              </Row>
            </Form>
          </div>
        </Col>
        <Col lg={6} sm={12} className="mt-4 mt-md-0">
          <div className="bgLight  w-100 h-100 borderRadius p-3">
            <div className="d-flex justify-content-between mb-5 mb-md-3">
              <div className="fw-bold ">معاينه</div>
              <div className="d-flex gap-2 textDarkyellow">
                <BsPrinter style={{ width: '20px', height: '20px' }} />
                <VscFilePdf style={{ width: '20px', height: '20px' }} />
                <SlFrame style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
            <div className="bglightGray w-100 h-75 borderRadius d-flex align-items-center justify-content-center ">
              <div className=" bgdarktGray borderRadius d-flex p-2 d-flex  ">
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
            <div className="d-flex align-items-end justify-content-end mt-1">
              <Button className="bgDarkgreen rounded text-white" variant="">
                <Link to="/ContractTable" className=" text-white    ">
                  تاكيد{' '}
                  <BsArrowLeftShort style={{ width: '25px', height: '25px' }} />
                </Link>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddContract;
