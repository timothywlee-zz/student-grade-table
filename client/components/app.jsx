import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          grades: data
        });
      })
      .catch(err => {
        console.log('An error occured: ', err);
      });
  }

  addStudent(studentInfo) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentInfo)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const arrayDeepCopy = this.state.grades.map(student => Object.assign({}, student));
        arrayDeepCopy.push(data);
        this.setState({
          grades: arrayDeepCopy
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  deleteStudent(studentId) {
    fetch(`/api/grades/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        const undeletedData = this.state.grades.filter(student => student.id !== studentId);
        this.setState({
          grades: undeletedData
        });
      })
      .catch(err => {
        console.error(err);
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
        <Header average={this.getAverageGrade()} />
        <div className='d-flex flex-row'>
          <GradeTable grades={this.state.grades} delete={this.deleteStudent} />
          <GradeForm onSubmit={this.addStudent}/>
        </div>
      </>
    );
  }
}

export default App;
