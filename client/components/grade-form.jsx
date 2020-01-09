import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: '',
      updateName: '',
      updateCourse: '',
      updateGrade: '',
      updateId: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleUpdateChangeName = this.handleUpdateChangeName.bind(this);
    this.handleUpdateChangeCourse = this.handleUpdateChangeCourse.bind(this);
    this.handleUpdateChangeGrade = this.handleUpdateChangeGrade.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props && this.props.isUpdating) {
      this.setState({
        updateName: this.props.targetedStudentToUpdate.name,
        updateCourse: this.props.targetedStudentToUpdate.course,
        updateGrade: this.props.targetedStudentToUpdate.grade,
        updateId: this.props.targetedStudentToUpdate.id
      });
    }
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

  handleUpdateChangeName(event) {
    this.setState({ updateName: event.target.value });
  }

  handleUpdateChangeCourse(event) {
    this.setState({ updateCourse: event.target.value });
  }

  handleUpdateChangeGrade(event) {
    this.setState({ updateGrade: event.target.value });
  }

  handleSubmit(event) {
    if (!this.props.isUpdating) {
      event.preventDefault();
      const createNewStudent = {
        name: this.state.name,
        course: this.state.course,
        grade: this.state.grade
      };
      if (createNewStudent.name.length !== 0 || createNewStudent.course.length !== 0 || createNewStudent.grade.length !== 0) {
        this.props.onAddSubmit(createNewStudent);
        this.setState({
          name: '',
          course: '',
          grade: ''
        });
      }
    } else if (this.props.isUpdating) {
      const updatingStudent = {
        name: this.state.updateName,
        course: this.state.updateCourse,
        grade: this.state.updateGrade
      };
      event.preventDefault();
      this.props.onUpdateSubmit(updatingStudent, this.props.targetedStudentToUpdate.id);
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

  toggleAddOrUpdate() {
    return this.props.isUpdating ? <button type='submit' className='btn btn-warning col-4'> Update </button> : <button type='submit' className='btn btn-primary col-4'> Add </button>;
  }

  render() {
    const valueOfName = this.props.isUpdating ? this.state.updateName : this.state.name;
    const valueOfCourse = this.props.isUpdating ? this.state.updateCourse : this.state.course;
    const valueOfGrade = this.props.isUpdating ? this.state.updateGrade : this.state.grade;
    const toggleAddOrUpdate = this.toggleAddOrUpdate();

    return (
      <div className='container'>
        <div className='row'>
          <div>
            <div className='addGradeTitle font-weight-bold mt-2'> Add Grade </div>
            <form className='d-flex flex-column' onSubmit={this.handleSubmit}>
              <div className='inputContainer d-flex flex-column col-xs-3'>

                <div className='input-group-prepend my-2'>
                  <i className='fas fa-user input-group-text'></i>
                  <input
                    className='form-control col-12'
                    type='text'
                    value={valueOfName}
                    placeholder='Name'
                    onChange={this.props.isUpdating ? this.handleUpdateChangeName : this.handleChangeName} />
                </div>

                <div className='input-group-prepend my-2'>
                  <i className='fas fa-book-open input-group-text'></i>
                  <input
                    className='form-control col-12'
                    type='text' value={valueOfCourse}
                    placeholder='Course'
                    onChange={this.props.isUpdating ? this.handleUpdateChangeCourse : this.handleChangeCourse} />
                </div>

                <div className='input-group-prepend my-2'>
                  <i className='fas fa-graduation-cap input-group-text'></i>
                  <input
                    className='form-control col-12'
                    type='text' value={valueOfGrade}
                    placeholder='Grade'
                    onChange={this.props.isUpdating ? this.handleUpdateChangeGrade : this.handleChangeGrade} />
                </div>

              </div>
              <div className='btn-group my-2'>
                {toggleAddOrUpdate}
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
