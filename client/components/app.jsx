/* eslint-disable no-console */
import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
    this.getAllGrades = this.getAllGrades.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  componentDidUpdate() {
    console.log(this.state.grades);
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => { return response.json(); })
      .then(data => { this.setState({ grades: data }); })
      .catch(err => { console.log('An error occured: ', err); });
  }

  render() {
    return (
      <>
        <Header />
        <GradeTable grades={this.state.grades} />
      </>
    );
  }
}

export default App;
