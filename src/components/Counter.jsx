import React from 'react'
import{ useDispatch, useSelector} from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.count)
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
       <div className='d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column bg-light'>
       <h1 className='bg-light text-dark' style={{fontSize:'100px'}}>{count}</h1>
       <div className='d-flex justify-content-between w-100 mt-5 bg-light'>
        <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
        <button onClick={()=>dispatch(reset())}  className='btn btn-info'>Reset</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
       </div>
       
       </div></div>
  )
}

export default Counter