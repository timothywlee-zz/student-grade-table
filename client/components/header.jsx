import React from 'react';

function Header(props) {
  console.log('props.average: ', props.average);
  return (
    <div className='d-flex flow-row justify-content-between'>
      <div className='title font-weight-bold w-80 p-3'> Student Grade Table </div>
      <div className='averageContainer d-flex flex-row'>
        <div className='title font-weight-bold p-3'> Average </div>
        <div className='averageScore badge badge-secondary p-3 mb-2 text-white'> {props.average} </div>
      </div>
    </div>
  );
}

export default Header;
