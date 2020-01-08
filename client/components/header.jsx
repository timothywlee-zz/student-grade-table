import React from 'react';

function Header(props) {
  return (
    <div className='d-flex flow-row justify-content-between mx-5 p-3 border-bottom border-dark'>
      <div className='titleSGT font-weight-bold w-80 p-3 mt-1'> Student Grade Table </div>
      <div className='averageContainer d-flex flex-row'>
        <div className='title font-weight-bold w-100 p-2 mt-3'> Average Grade </div>
        <div className='averageScore badge badge-secondary p-3 mt-4 text-white'> {props.average} </div>
      </div>
    </div>
  );
}

export default Header;
