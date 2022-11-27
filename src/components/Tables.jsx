import Table from 'react-bootstrap/Table';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { Row } from 'react-bootstrap';
import Paginations from './Paginations';
function Tables({ Suplierheader, SuplierRows }) {
  return (
    <div style={{ width: '100%' }}>
      <Table className="my-4 rounded">
        <thead>
          <tr className="bg-info rounded my-4 text-center ">
            {Suplierheader.map((th) => (
              <th key={th.id} className="text- center">
                {th.header}
                <BsArrowUpShort
                  className="text-light"
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <BsArrowDownShort
                  className="text-light"
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SuplierRows.map((td) => (
            <tr key={td.id} className="text-center">
              <td>{td.td1}</td>
              <td>{td.td2}</td>
              <td>{td.td3}</td>
              <td>{td.td4}</td>
              <td>{td.td5}</td>
              <td>
                
                <div
                  className="d-flex gap-3 justify-content-center align-items-center "
                  style={{ width: '100%' }}
                >
                  <CiEdit
                    className="border border-info text-info"
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                    }}
                  />
                  <RiDeleteBin5Line
                    className="border border-danger text-danger"
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <div className="d-flex justify-content-between">
          <p>إظهار 1 إلى 10 من أصل 12 مُدخل</p>
          <Paginations />{' '}
        </div>
      </Row>
    </div>
  );
}

export default Tables;
