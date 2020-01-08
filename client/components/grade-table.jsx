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
      <table className='table w-75'>
        <thead>
          <tr>
            <th> Student Name </th>
            <th> Course Name </th>
            <th> Grade </th>
            <th> Operations </th>
          </tr>
          {eachStudentGrade}
        </thead>
      </table>
    );
  }
}

export default GradeTable;
