import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

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

  getAverageGrade (data) {
    let totalStudents = data.length;
    let totalSum = 0;
    const averageArray = [];

    for(let index = 0; index < totalStudents; index++){
      let eachStudentGrade = data[index].grade;
      averageArray.push(eachStudentGrade);
    }

    averageArray.forEach(function (grade) {
      totalSum += grade
    })
    const averageNumber = Number.parseInt(totalSum / totalStudents).toFixed(0);
    return averageNumber;
  }


  render() {
    return (
      <>
        <Header average={this.state.average}/>
        <GradeTable grades={this.state.grades} />
      </>
    );
  }
}

export default App;
