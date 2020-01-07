import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeCourse(event) {
    this.setState({ course: event.target.value });
  }

  handleChangeGrade(event) {
    this.setState({ grade: event.target.value });
  }

  handleSubmit(event) { // click 'add' button
    event.preventDefault();
    const createNewStudent = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(createNewStudent);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  // handleReset(event){ //click 'cancel' button
  //   event.preventDefault(); //called on the event when submitting the form to prevent a browswer reload/refresh

  // }

  render() {
    const valueOfName = this.state.name;
    const valueOfCourse = this.state.course;
    const valueOfGrade = this.state.grade;

    return (
      <div className='addGradeContainer d-flex flex-row'>
        <form className='d-flex flex-column' onSubmit={this.handleSubmit}>
          <div className='inputContainer d-flex flex-column col-xs-3'>
            <input className='form-control' type='text' value={valueOfName} placeholder='Name' onChange={this.handleChangeName} />
            <input className='form-control' type='text' value={valueOfCourse} placeholder='Course ' onChange={this.handleChangeCourse} />
            <input className='form-control' type='text' value={valueOfGrade} placeholder='Grade' onChange={this.handleChangeGrade} />
          </div>
          <div className='buttonsContainer'>
            <button type='submit' className='btn btn-primary'> Add </button>
            <button type='submit' className='btn btn-secondary'> Cancel </button>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
