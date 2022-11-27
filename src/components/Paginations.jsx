import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample() {
  return (
    <Pagination>
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  );
}

export default AdvancedExample;
