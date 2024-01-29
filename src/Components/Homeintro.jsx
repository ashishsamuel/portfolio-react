import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './homeintro.css'

function Homeintro() {
  return (
    <section className='container mt-5 home-section' id='home'>
      <Row>
        
        <Col lg={7} md={7} sm={12}>
        <div className='d-flex'>
            <div className='d-flex flex-column mx-5'>
                    <i class="uil uil-github-alt my-3 fa-2x"></i>
                    <i class="uil uil-linkedin-alt my-3 fa-2x"></i>
                    <i class="uil uil-instagram my-3 fa-2x"></i>
                    <i class="uil uil-twitter-alt my-3 fa-2x"></i>
                </div>
                <div className='d-flex flex-column my-4'>
                    <h3>Ashish Samuel Thomson</h3>
                    <h5>-----------------UI Developer</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est harum numquam quasi molestias quia sunt nisi architecto, soluta possimus ad tempora maiores, ipsam quis amet. Itaque a iste deserunt.</p>
                    <button className='btn btn-dark hello-btn'>Say Hello</button>
                </div>
        </div>
        </Col>
        <Col lg={5} md={5} sm={12} className='text-center'>
            <img className='profileImage' src="/images/profileimg.png" alt="profile image" />
        </Col>
      </Row>
      
    </section>
  )
}

export default Homeintro
