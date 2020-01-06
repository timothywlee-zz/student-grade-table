import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td scope='col'> {props.data.name} </td>
      <td scope='col'> {props.data.course} </td>
      <td scope='col'> {props.data.grade} </td>
    </tr>
  );
}

export default Grade;
