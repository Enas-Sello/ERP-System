import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell key="name">
          <TableSortLabel></TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
