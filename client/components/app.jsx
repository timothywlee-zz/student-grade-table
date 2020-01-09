import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      isUpdating: false,
      targetedStudentToUpdate: null
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
    this.updateStudentById = this.updateStudentById.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades', {
      method: 'GET'
    })
      .then(response => { return response.json(); })
      .then(data => {
        this.setState({
          grades: data
        });
      })
      .catch(err => console.error(err));
  }

  addStudent(studentInfo) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentInfo)
    })
      .then(response => { return response.json(); })
      .then(data => {
        const arrayDeepCopy = this.state.grades.map(student => Object.assign({}, student));
        arrayDeepCopy.push(data);
        this.setState({
          grades: arrayDeepCopy
        });
      })
      .catch(err => console.error(err));
  }

  deleteStudent(studentId) {
    fetch(`/api/grades/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        const undeletedData = this.state.grades.filter(student => student.id !== studentId);
        this.setState({
          grades: undeletedData
        });
      })
      .catch(err => console.error(err));
  }

  updateStudent(studentInfo, studentId) {
    fetch(`/api/grades/${studentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentInfo)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const deepCopy = this.state.grades.map(student => Object.assign({}, student));
        const idMatch = deepCopy.findIndex(student => student.id === studentId);
        deepCopy[idMatch] = data;
        this.setState({
          grades: deepCopy,
          isUpdating: false
        });
      })
      .catch(err => { console.error(err); });
  }

  updateStudentById(studentInfo) {
    const studentInfoForUpdate = studentInfo;
    this.setState({
      targetedStudentToUpdate: studentInfoForUpdate,
      isUpdating: true
    });
  }

  getAverageGrade() {
    const totalStudents = this.state.grades.length;
    let totalSum = 0;
    const averageArray = [];

    for (let index = 0; index < totalStudents; index++) {
      const eachStudentGrade = this.state.grades[index].grade;
      averageArray.push(eachStudentGrade);
    }
    averageArray.forEach(function (grade) {
      totalSum += parseInt(grade);
    });

    const averageNumber = parseFloat(totalSum / totalStudents).toFixed(1);
    return totalStudents === 0 ? 'N/A' : averageNumber;
  }

  render() {
    return (
      <>
        <Header title='Student Grade Table' average={this.getAverageGrade()} />
        <div className='d-flex flex-row'>
          <GradeTable grades={this.state.grades} delete={this.deleteStudent} update={this.updateStudentById} />
          <GradeForm onAddSubmit={this.addStudent} onUpdateSubmit={this.updateStudent} isUpdating={this.state.isUpdating} targetedStudentToUpdate={this.state.targetedStudentToUpdate}/>
        </div>
      </>
    );
  }
}

export default App;
