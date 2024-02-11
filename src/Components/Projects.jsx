import React, { useEffect, useState } from 'react'
import './projects.css'
import { Col, Row } from 'react-bootstrap'

function Projects() {

  const [projectActiveCheck,setProjectActiveCheck] = useState(1)
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

  const projectListSet = (projectTech)=>{
    setProjectActiveCheck(false)
    if(projectTech == "projectAllList"){
      setProjectList(projectAllList)
      setProjectActiveCheck(1)
    }
    else if(projectTech == "jsProjectList"){
      setProjectList(jsProjectList)
      setProjectActiveCheck(2)
    }
    else if(projectTech == "angularProjectList"){
      setProjectList(angularProjectList)
      setProjectActiveCheck(3)
    }
    else if(projectTech == "reactProjectList"){
      setProjectList(reactProjectList)
      setProjectActiveCheck(4)
    }
    else if(projectTech == "mernProjectList"){
      setProjectList(mernProjectList)
      setProjectActiveCheck(5)
    }
    else{
      setProjectList(meanProjectList)
      setProjectActiveCheck(6)
    }

  }

  return (
    <section className='projects-section' id='projects'>
      <div className='my-2 section-title'>
        <h2 className='text-dark fw-bold'>Projects</h2>
        <p>Browse recent works</p>

        <ul className='d-flex mt-5 list-style'>
          <li className={projectActiveCheck ==1?"project-content project-active mx-3":
    "project-content mx-3"} onClick={()=>projectListSet("projectAllList")}>All</li>
          <li className={projectActiveCheck ==2?"project-content project-active mx-3":
    "project-content mx-3"} onClick={()=>projectListSet("jsProjectList")}>JavaScript</li>
          <li className={projectActiveCheck ==3?"project-content project-active mx-3":
    "project-content mx-3"} onClick={()=>projectListSet("angularProjectList")}>Angular</li>
          <li className={projectActiveCheck ==4?"project-content project-active mx-3":
    "project-content mx-3"} onClick={()=>projectListSet("reactProjectList")}>React</li>
          <li className={projectActiveCheck ==5?"project-content project-active mx-3":
    "project-content mx-3"}  onClick={()=>projectListSet("mernProjectList")}>MERN Stack</li>
          <li className={projectActiveCheck ==6?"project-content project-active mx-3":
    "project-content mx-3"}  onClick={()=>projectListSet("meanProjectList")}>MEAN Stack</li>
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
