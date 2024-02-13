import React from 'react'
import './skills.css'
import { Col, Row } from 'react-bootstrap'

function Skills() {
  return (
    <section className='skills-section' id='skills'>
      <div className='my-2 section-title'>
        <h2 className='text-dark fw-bold'>Skills</h2>
        <p>My Technical level</p>
      </div>
      <div className="container">
        <Row className='d-flex justify-content-center'>
            
                <Col lg={5} md={6} sm={12} className='skill-items shadow p-3 m-2'>
                  <h4 className='fw-bold text-dark'>Frontend Developer</h4>
                  <div>
                      <Row className='my-1'>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-dark"></i></span>HTML</p>
                              <p className='ms-4'>Advanced</p>
                          </Col>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-dark"></i></span>Bootstrap</p>
                              <p className='ms-4'>Advanced</p>
                          </Col>
                      </Row>
                      <Row className='my-1'>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-dark"></i></span>CSS</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-dark"></i></span>JavaScript</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                      </Row>
                      <Row className='my-1'>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-dark"></i></span>React JS</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-dark"></i></span>Angular</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                      </Row>
                      <Row className='my-1'>
                      <Col>
                            <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-dark"></i></span>TypeScript</p>
                            <p className='ms-4'>Intermediate</p>
                          </Col>
                      </Row>
                  </div>
                </Col>

                <Col lg={5} md={6} sm={12} className='skill-items shadow p-3 m-2'>
                  <h4 className='fw-bold text-dark'>Backend Developer</h4>
                  <div>
                      <Row className='my-1'>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-dark"></i></span>Node JS</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                          <Col>
                              <p className='fw-bold'><span><i class="uil uil-check-circle me-2 text-dark"></i></span>Mongo DB</p>
                              <p className='ms-4'>Intermediate</p>
                          </Col>
                      </Row>
                      
                  </div>
                </Col>
               
            </Row>
        </div>
    </section>
  )
}

export default Skills
