import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const eachStudentGrade = props.grades.map(student => {
    return (
      <Grade key={student.id} student={student} delete={props.delete} update={props.update} />
    );
  });

  if (props.grades.length === 0) {
    return (
      <div className='row'>
        <h1 className='col-md-3 ml-4'> No Grades Recorded </h1>
      </div>
    );
  } else {
    return (
      <table className='mainTable table table-striped ml-5 mr-5 col-8'>
        <thead>
          <tr>
            <th scope='col'> Student Name </th>
            <th scope='col'> Course Name </th>
            <th scope='col'> Grade </th>
            <th className='w-25' scope='col'> Operations </th>
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
