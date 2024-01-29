import React, { useEffect, useState } from 'react'
import './projects.css'
import { Col, Row } from 'react-bootstrap'

function Projects() {
  const [projectList,setProjectList] = useState([
    {image:'images/jscalculator.png',title:'Age Calculator Application'},
    {image:'images/jsweather.png',title:'Weather Prediction Application'},
    {image:'images/netflixreact.png',title:'Netflix Application'},
    {image:'images/quizappreact.png',title:'Quiz Application'},
    {image:'images/reactecommerce.png',title:'Zesco Clothing Store Application'},
    {image:'images/firebasedocupapp.png',title:'Document Application'},
    {image:'images/mern.png',title:'Travel Booking Application'},
    {image:'images/meanproject.png',title:'ProBuy Ecommerce Application'},
    {image:'images/reactgameapp.png',title:'DiceGame Application'}
  ])

  const [projectAllList,setProjectAllList] = useState([
    {image:'images/jscalculator.png',title:'Age Calculator Application'},
    {image:'images/jsweather.png',title:'Weather Prediction Application'},
    {image:'images/netflixreact.png',title:'Netflix Application'},
    {image:'images/quizappreact.png',title:'Quiz Application'},
    {image:'images/reactecommerce.png',title:'Zesco Clothing Store Application'},
    {image:'images/firebasedocupapp.png',title:'Document Application'},
    {image:'images/mern.png',title:'Travel Booking Application'},
    {image:'images/meanproject.png',title:'ProBuy Ecommerce Application'},
    {image:'images/reactgameapp.png',title:'DiceGame Application'}
  ])

  const [jsProjectList,setjsProjectList] = useState([
      {image:'images/jscalculator.png',title:'Age Calculator Application'},
      {image:'images/jsweather.png',title:'Weather Prediction Application'}
  ])

  const [reactProjectList,setReactProjectList] = useState([
    {image:'images/netflixreact.png',title:'Netflix Application'},
    {image:'images/reactecommerce.png',title:'Zesco Clothing Store Application'},
    {image:'images/firebasedocupapp.png',title:'Document Application'},
    {image:'images/reactgameapp.png',title:'DiceGame Application'}
  ])

  const [angularProjectList,setAngularProjectList] = useState([
    {image:'images/meanproject.png',title:'ProBuy Ecommerce Application'}
])

  const [meanProjectList,setMeanProjectList] = useState([
    {image:'images/meanproject.png',title:'ProBuy Ecommerce Application'}
  ])

  const [mernProjectList,setMernProjectList] = useState([
    {image:'images/mern.png',title:'Travel Booking Application'}
  ])
  console.log(projectList);

  return (
    <section className='projects-section' id='projects'>
      <div className='my-2 section-title'>
        <h2>Projects</h2>
        <p>Browse recent works</p>

        <ul className='d-flex mt-5 list-style'>
          <li className='list-element mx-3 fw-bold' onClick={()=>setProjectList(projectAllList)}>All</li>
          <li className='list-element mx-3 fw-bold' onClick={()=>setProjectList(jsProjectList)}>JavaScript</li>
          <li className='list-element mx-3 fw-bold' onClick={()=>setProjectList(angularProjectList)}>Angular</li>
          <li className='list-element mx-3 fw-bold' onClick={()=>setProjectList(reactProjectList)}>React</li>
          <li className='list-element mx-3 fw-bold' onClick={()=>setProjectList(mernProjectList)}>MERN Stack</li>
          <li className='list-element mx-3 fw-bold' onClick={()=>setProjectList(meanProjectList)}>MEAN Stack</li>
        </ul>
      </div>
      
        
      
      <div className="container">

      <Row className='justify-content-center'>
        {projectList.length>0? projectList.map(project=>(
          <Col lg={4} md={6} sm={12} className='my-3'>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src={project.image} alt="js age calculator" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>{project.title}</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>)):<Col>No projects</Col>
}
      </Row>




        {/* <Row className='justify-content-center'>
          <Col lg={4} md={12} sm={12}>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src="images/jsagecalculator.png" alt="js age calculator" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>Age Calculator Application</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src="images/jsweather.png" alt="js weather prediction" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>Weather Prediction Application</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src="images/netflixreact.png" alt="react netflix" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>Netflix Application</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='justify-content-center my-3'>
          
          <Col lg={4} md={12} sm={12}>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src="images/quizappreact.png" alt="react quiz app" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>Quiz Application</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src="images/reactecommerce.png" alt="react ecommerce" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>Zesco Clothing Store Application</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src="images/firebasedocupapp.png" alt="docup firebase" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>Document Application</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='justify-content-center my-3'>
          <Col lg={4} md={12} sm={12}>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src="images/mern.png" alt="mern travel booking" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>Travel Booking Application</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src="images/meanproject.png" alt="mean ecommerce" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>ProBuy Ecommerce Application</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <div className='shadow project-col'>
              <img className='projectImage img-fuild shadow' src="images/reactgameapp.png" alt="react game app" />
              <div className='px-4'>
                <h3 className='my-3 project-name'>DiceGame Application</h3>
                <button className='btn btn-dark shadow d-flex align-items-center viewbtn'>View More <i class="uil uil-arrow-right ms-2 fa-2x"></i></button>
              </div>
            </div>
          </Col>
        </Row> */}
      </div>
    </section>
  )
}

export default Projects