import React from 'react';

function Grade(props) {
  const student = props.data;

  return (
    <tr>
      <td> {student.name} </td>
      <td> {student.course} </td>
      <td> {student.grade} </td>
      <td>
        <button
          type='button'
          className='btn btn-danger'
          onClick={ () => props.delete(student.id) } >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button
          type='button'
          className='btn btn-info ml-1'
          onClick={ () => props.update(student)}>
          <i className="far fa-edit"></i>
        </button>
      </td>
    </tr>
  );
}

export default Grade;
