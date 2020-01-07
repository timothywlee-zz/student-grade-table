import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td> {props.data.name} </td>
      <td> {props.data.course} </td>
      <td> {props.data.grade} </td>
    </tr>
  );
}

export default Grade;
