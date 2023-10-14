import React from 'react'

function Counter() {
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
       <div className='d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column bg-light'>
       <h1 style={{fontSize:'100px'}}>100</h1>
       <div className='d-flex justify-content-between w-100 mt-5 bg-light'>
        <button className='btn btn-warning'>Decrement</button>
        <button className='btn btn-info'>Reset</button>
        <button className='btn btn-success'>Increment</button>
       </div>
       
       </div></div>
  )
}

export default Counter