import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const eachStudentGrade = props.grades.map(student => {
    return (
      <Grade key={student.id} data={student} delete={props.delete} />
    );
  });

  if (props.grades.length === 0) {
    return (
      <div> No Grades Recorded </div>
    );
  } else {
    return (
      <table className='table table-striped w-75 ml-5 mr-5'>
        <thead >
          <tr>
            <th scope='col'> Student Name </th>
            <th scope='col'> Course Name </th>
            <th scope='col'> Grade </th>
            <th scope='col'> Operations </th>
          </tr >
        </thead>
        <tbody>
          {eachStudentGrade}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
