import React, { useState } from "react";
import { Container, Row,Col } from "react-bootstrap";
import './qualification.css'

function Qualification() {
    const [toggleState,setToggleState] = useState(1)

    const toggleTab = (index)=>{
        setToggleState(index)
    }
  return (
    <section className="qualification-section my-5">
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h2 className="section-title text-dark fw-bold">Qualification</h2>
            <p className="section-subtitle">My Personal Journey</p>
        </div>

        <div className="qualification-container container">
            <div className="qualification-tabs d-flex">
                <div className={toggleState ===1 ? "qualification-button qualification-active button-flex":
                 "qualification-button button-flex"} onClick={()=>toggleTab(1)}>
                    <i class="uil uil-graduation-cap qualification-icon"></i> Education
                </div>

                <div className={toggleState ===2 ? "qualification-button qualification-active button-flex":
                 "qualification-button button-flex"} onClick={()=>toggleTab(2)}>
                    <i class="uil uil-bag ms-3 qualification-icon"></i> Experience
                </div>
            </div>
            <div className="mt-5 qualification-section">
        <div className={toggleState ===1?"qualification-content qualification-content-active":
    "qualification-content"}>
            <div className="qualification-data mt-3">
                <div>
                    <h3 className="qualification-title">B.Tech (cs)</h3>
                    <span className="qualification-subtitle">Cec Chengannur</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2021 - Present
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <spam className="qualification-line"></spam>
                </div>
            </div>

            <div className="qualification-data mt-3">
                <div></div>
                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
                
                <div>
                    <h3 className="qualification-title">B.Tech (cs)</h3>
                    <span className="qualification-subtitle">Cec Chengannur</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2021 - Present
                    </div>
                </div>

            </div>

            <div className="qualification-data mt-3">
                <div>
                    <h3 className="qualification-title">B.Tech (cs)</h3>
                    <span className="qualification-subtitle">Cec Chengannur</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2021 - Present
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <spam className="qualification-line"></spam>
                </div>
            </div>

            <div className="qualification-data mt-3">
                <div></div>
                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
                
                <div>
                    <h3 className="qualification-title">B.Tech (cs)</h3>
                    <span className="qualification-subtitle">Cec Chengannur</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2021 - Present
                    </div>
                </div>

            </div>
        </div>

        <div className={toggleState ===2?"qualification-content qualification-content-active":
    "qualification-content"}>
            <div className="qualification-data mt-3">
                <div>
                    <h3 className="qualification-title">B.Tech (cs)</h3>
                    <span className="qualification-subtitle">Cec Chengannur</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2021 - Present
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <spam className="qualification-line"></spam>
                </div>
            </div>

            <div className="qualification-data mt-3">
                <div></div>
                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
                
                <div>
                    <h3 className="qualification-title">B.Tech (cs)</h3>
                    <span className="qualification-subtitle">Cec Chengannur</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2021 - Present
                    </div>
                </div>

            </div>

            <div className="qualification-data mt-3">
                <div>
                    <h3 className="qualification-title">B.Tech (cs)</h3>
                    <span className="qualification-subtitle">Cec Chengannur</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2021 - Present
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <spam className="qualification-line"></spam>
                </div>
            </div>

        </div>
      </div>
        </div>

        
        
    </section>
  );
}

export default Qualification;
