import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './homeintro.css'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';


function Homeintro() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='container mt-5 home-section' id='home'>
      <Row>
        
        <Col lg={7} md={7} sm={12}>
        <div className='d-flex'>
            <div className='d-flex flex-column mx-5'>
                    <a href='https://github.com/ashishsamuel' className='text-dark my-3' target='_blank'><i class="uil uil-github-alt fa-2x"></i></a>
                    <a href='https://www.linkedin.com/in/ashish-samuel-thomson-14458a200/' className='text-dark my-3' target='_blank'><i class="uil uil-linkedin-alt fa-2x"></i></a>
                    <a href='https://www.instagram.com/ashishsamuelthomson/' target='_blank' className='text-dark my-3'><i class="uil uil-instagram fa-2x"></i></a>
                    <a href='https://twitter.com/AshishSamuelTh1' target='_blank' className='text-dark my-3'><i class="uil uil-twitter-alt fa-2x"></i></a>
                </div>
                <div className='d-flex flex-column my-4' data-aos="fade-left">
                    <h3 className='text-dark fw-bold'>Ashish Samuel Thomson</h3>
                    <h5 className='text-dark font-style fw-bold'>------  UI Developer  ------</h5>
                    <p style={{fontFamily:'cursive',fontStyle:'italic'}}>Experienced in crafting dynamic web applications using modern technologies to
enhance user experience and drive engagement using React JS and Angular.
Entry-level individual skilled in Node.js and MongoDB.
</p>

<a href="mailto:ashishsamuelthomson@gmail.com?subject = Hello Message&body = Message to say hello" className='text-dark' style={{textDecoration:'none'}}><button className='btn btn-dark hello-btn'>Say Hello</button></a>
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
