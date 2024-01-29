import React from 'react'
import './about.css'
import { Row,Col, Container } from 'react-bootstrap'

function About() {
  return (
    <section id='about'>
        <div className='my-4 mt-5 section-title'>
        <h2>About Me</h2>
        <p>My introduction</p>
      </div>
    <div className='mt-5 about-section'>
      

      <Container>
          <Row className='mt-5 justify-content-center py-4'>
            <Col lg={6} md={6} sm={12} className='profileImagesection'>
              <img className='profileImage' src="/images/profileimg2.jpg" alt="profile image" />
            </Col>

            <Col lg={6} md={6} sm={12} className='d-flex flex-column'>
                <div className='skillsdiv'>
                    <div className='features m-3 px-4 text-center shadow'>
                        <i class="uil uil-award fa-2x"></i>
                        <p>Experience</p>
                        <p>2 + Years</p>
                    </div>
                    <div className='features m-3 px-4 text-center shadow'>
                        <i class="uil uil-bag-alt fa-2x"></i>
                        <p>Completed</p>
                        <p>20 + Projects</p>
                    </div>
                    <div className='features m-3 px-4 text-center shadow'>
                        <i class="uil uil-headphones-alt fa-2x"></i>
                        <p>Support</p>
                        <p>Online 24/7</p>
                    </div>
                </div>
                <div className='my-5 mx-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nam ab consequatur, explicabo quod eius aperiam dicta numquam voluptatibus distinctio, quaerat minima, accusamus commodi. Recusandae optio autem maiores enim nam voluptatum odio hic quae magnam, aliquam excepturi corrupti fuga earum. Doloremque odio expedita eos repudiandae exercitationem cum pariatur ex enim.
                </div>

                <div className='mx-3'>
                    <button className='btn btn-dark downloadcv-btn'>Download CV</button>
                </div>
            </Col>
          </Row>
      </Container>
    </div>
    </section>

  )
}


export default About
