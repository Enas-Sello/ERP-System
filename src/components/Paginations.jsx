import Pagination from 'react-bootstrap/Pagination';
import { Link } from 'react-router-dom';

function AdvancedExample() {
  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination ">
        <li className="page-item ">
          <Link className="page-link sectextColor border-0" href="#">
            معاينة
          </Link>
        </li>
        <li className="page-item ">
          <Link className="page-link secButtonColor text-white rounded" href="#">
            1
          </Link>
        </li>

        <li className="page-item">
          <Link className="page-link sectextColor border-0" href="#">
            التالي
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdvancedExample;
