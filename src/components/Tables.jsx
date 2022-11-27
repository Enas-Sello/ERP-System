import Table from 'react-bootstrap/Table';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
function Tables() {
  return (
    <Table striped className="my-4 rounded">
      <thead>
        <tr className="bg-info rounded my-4 ">
          <th>
            الكود
            <BsArrowUpShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <BsArrowDownShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
          </th>
          <th>
            المورد
            <BsArrowUpShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <BsArrowDownShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
          </th>
          <th>
            المندوب
            <BsArrowUpShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <BsArrowDownShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
          </th>
          <th>
            الهاتف
            <BsArrowUpShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <BsArrowDownShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
          </th>
          <th>
            الحالة
            <BsArrowUpShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <BsArrowDownShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
          </th>
          <th>
            فعاليات
            <BsArrowUpShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <BsArrowDownShort
              className="text-light"
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>215461654</td>
          <td>215461654</td>
          <td>215461654</td>
          <td>@215461654</td>
          <td>@215461654</td>
          <td>
            <div className="d-flex gap-2">
              <CiEdit
                className="border border-info text-info"
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <RiDeleteBin5Line
                className="border border-danger text-danger"
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
            </div>
          </td>
        </tr>

        <tr>
          <td>215461654</td>
          <td>215461654</td>
          <td>215461654</td>
          <td>@215461654</td>
          <td>@215461654</td>
          <td>
            <div className="d-flex gap-2">
              <CiEdit
                className="border border-info text-info"
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <RiDeleteBin5Line
                className="border border-danger text-danger"
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>215461654</td>
          <td>215461654</td>
          <td>215461654</td>
          <td>@215461654</td>
          <td>@215461654</td>
          <td>
            <div className="d-flex gap-2">
              <CiEdit
                className="border border-info text-info"
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
              <RiDeleteBin5Line
                className="border border-danger text-danger"
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;
