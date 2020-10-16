import React from 'react';
import { Table } from 'reactstrap';

const TableRow = ({ name, email, service, projectDetails }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{service}</td>
      <td>{projectDetails}</td>
      <td>Pending</td>
    </tr>

  );
};

export default TableRow;