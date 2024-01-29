import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='container text-center mt-5'>
        <h3>Ashish</h3>
        <div className='d-flex justify-content-center mt-5'>
            <p className='fw-bold mx-3'>About</p>
            <p className='fw-bold mx-3'>Projects</p>
            <p className='fw-bold mx-3'>Services</p>

        </div>
        <div className='d-flex justify-content-center mt-4'>
            <p className='fw-bold mx-3 fs-5 rounded border px-2 py-1 bg-dark text-light'><i class="uil uil-facebook"></i></p>
            <p className='fw-bold mx-3 fs-5 rounded border px-2 py-1 bg-dark text-light'><i class="uil uil-instagram-alt"></i></p>
            <p className='fw-bold mx-3 fs-5 rounded border px-2 py-1 bg-dark text-light'><i class="uil uil-linkedin"></i></p>

        </div>

        <p className='d-flex justify-content-center mt-3'>Copyright © 2023 Portfolio. Built with React.</p>
        
    </div>
  )
}

export default Footer
