import React from 'react';

function Grade(props) {
  const grade = props.data;
  return (
    <tr>
      <td> {props.data.name} </td>
      <td> {props.data.course} </td>
      <td> {props.data.grade} </td>
      <td>
        <button
          type='button'
          className='btn btn-danger'
          onClick={ () => props.delete(grade.id) } >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button
          type='button'
          className='btn btn-info ml-1'>
          <i className="far fa-edit"></i>
        </button>
      </td>
    </tr>
  );
}

export default Grade;
