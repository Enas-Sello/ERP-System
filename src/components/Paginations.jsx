import { Link } from 'react-router-dom';

function AdvancedExample() {
  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination ">
        <li className="page-item ">
          <Link
            className="page-link bglightGray border-0 bg-transparent"
            href="#"
          >
            معاينة
          </Link>
        </li>
        <li
          className="page-item d-flex align-items-center justify-content-center align-content-center"
        >
          <Link
            className="page-link bgDarkgreen text-white rounded fw-bold  "
            href="#"
          >
            1
          </Link>
        </li>

        <li className="page-item">
          <Link
            className="page-link bglightGray border-0 bg-transparent"
            href="#"
          >
            التالي
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdvancedExample;
