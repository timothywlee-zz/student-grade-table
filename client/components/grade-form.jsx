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
    this.handleReset = this.handleReset.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    const createNewStudent = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };

    if (createNewStudent.name.length !== 0 || createNewStudent.course.length !== 0 || createNewStudent.grade.length !== 0) {
      this.props.onSubmit(createNewStudent);
      this.setState({
        name: '',
        course: '',
        grade: ''
      });
    }
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    const valueOfName = this.state.name;
    const valueOfCourse = this.state.course;
    const valueOfGrade = this.state.grade;

    return (
      <div className='container'>
        <div className='row'>
          <div>
            <div className='addGradeTitle font-weight-bold mt-2'> Add Grade </div>
            <form className='d-flex flex-column' onSubmit={this.handleSubmit}>
              <div className='inputContainer d-flex flex-column col-xs-3'>

                <div className='input-group-prepend my-2'>
                  <i className='fas fa-user input-group-text'></i>
                  <input className='form-control col-12' type='text' value={valueOfName} placeholder='Name' onChange={this.handleChangeName} />
                </div>

                <div className='input-group-prepend my-2'>
                  <i className='fas fa-book-open input-group-text'></i>
                  <input className='form-control col-12' type='text' value={valueOfCourse} placeholder='Course ' onChange={this.handleChangeCourse} />
                </div>

                <div className='input-group-prepend my-2'>
                  <i className='fas fa-graduation-cap input-group-text'></i>
                  <input className='form-control col-12' type='text' value={valueOfGrade} placeholder='Grade' onChange={this.handleChangeGrade} />
                </div>

              </div>
              <div className='btn-group my-2'>
                <button type='submit' className='btn btn-primary col-4'> Add </button>
                <div className='btn-group' onClick={this.handleReset}>
                  <button type='reset' className='btn btn-secondary col-12'> Cancel </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default GradeForm;
