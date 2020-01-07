import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      average: null
    };
    this.getAllGrades = this.getAllGrades.bind(this);
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
          grades: data,
          average: this.getAverageGrade(data)
        });
      })
      .catch(err => {
        console.log('An error occured: ', err);
      });
  }

  addStudent(studentInfo){
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentInfo)
    })
      .then (response => {
        return response.json();
      })
      .then(data => {
        const arrayDeepCopy = this.state.grades.map(student => Object.assign({},student));
        arrayDeepCopy.push(data);
        this.setState({
          grades: arrayDeepCopy
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  getAverageGrade(data) {
    const totalStudents = data.length;
    let totalSum = 0;
    const averageArray = [];

    for (let index = 0; index < totalStudents; index++) {
      const eachStudentGrade = data[index].grade;
      averageArray.push(eachStudentGrade);
    }

    averageArray.forEach(function (grade) {
      totalSum += grade;
    });
    const averageNumber = Number.parseInt(totalSum / totalStudents).toFixed(0);
    return totalStudents === 0 ? 'N/A' : averageNumber;
  }

  render() {
    return (
      <>
        <Header average={this.state.average} />
        <div>
          <GradeTable grades={this.state.grades} />
          <GradeForm />
        </div>
      </>
    );
  }
}

export default App;
