import React from 'react'
import { useNavigate } from 'react-router-dom'

function Start() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='p-3 rounded w-24 border'>
        <h2 className=' text-center'> Login As</h2>
        <div className='d-flex justify-content-between mt-5 mb-2'>
          <button type='button' className='btn-btn-primary'>
            Employee
          </button>
          <button type='button' className='btn-btn-success'>
            Admin
          </button>
        </div>

      </div>

    </div> 
  )
}

export default Start