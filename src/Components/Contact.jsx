import React, { useRef } from 'react'
import './contact.css'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rw9erbd', 'template_347x0lt', form.current, '6mEANWc3NDSIvrxxQ')
      e.target.reset()
  };
  return (
    <section className='contact-section' id='contact'>
      <div className='my-4 mt-5 section-title'>
        <h2 className='text-dark fw-bold'>Get in Touch</h2>
        <p>Contact Me</p>
      </div>

      {/* <div className='d-flex container justify-content-center'> */}

        <Row className='d-flex justify-content-center mx-5'>
          
            <Col lg={6} md={12} sm={12} className='flex-property'>
      <h3 className='text-dark fs-4'>Talk to me</h3>
              
                <div className='write-section rounded shadow'>
                <i class="uil uil-envelope-minus"></i>
                <p>Email</p>
                <p>ashishsamuelthomson@gmail.com</p>
                <a href="mailto:ashishsamuelthomson@gmail.com?subject = Connection Message&body = Message to connect" className='text-dark' style={{textDecoration:'none'}}><button className='btn btn-dark'>Write Me<i class="uil uil-arrow-right"></i></button></a>
                </div>

            </Col>

            <Col lg={6} md={12} sm={12} className='flex-column margintop-2'>
                <h3 className='text-dark fs-4'>Write me your Project</h3>
                <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bold'>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bold'>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter your email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='fw-bold'>Project</Form.Label>
        <Form.Control as="textarea" rows={3} name='project' placeholder='Enter project details'/>
      </Form.Group>
      <div>
        <button className='btn btn-dark'>Send Message<i class="uil uil-telegram-alt ms-2"></i></button>
      </div>
    </Form>
            </Col>
        </Row>
      {/* </div> */}
    </section>
  )
}

export default Contact
