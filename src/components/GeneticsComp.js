import React from 'react'
import { Button, Col, Row } from 'antd'
import Ladydoctor from '../assets/LadyDoctor.avif'

const GeneticsComp = () => {
  return (
    <div className='genetic-container'>
      <div className='width90'>
        <div className='genetic-main-heading'>
          <h2>Academic Profile</h2>
          <p>
            With a PhD in Molecular Biology, I bring extensive research experience to the field of
            genetics. My work includes over 20 peer-reviewed articles in top journals and successful
            grant acquisition for innovative research projects.
          </p>
        </div>
        <div className='phdline'></div>
        <Row gutter={[20, 20]}>
          <Col lg={12} md={24} xs={24}>
            <div className='genetic-content'>
              <p>
                As an Associate Professor, I mentor graduate students, contribute to cutting-edge
                research methodologies, and actively engage in national and international
                conferences. My dedication to advancing scientific knowledge and fostering the next
                generation of researchers drives my academic pursuits.
              </p>
            </div>
            <Col>
              <div className='genetic-btn'>
                <Button>My CV</Button>
              </div>
            </Col>
          </Col>
          <Col lg={12} md={24} xs={24}>
            <div className='genetic-image'>
              <img src={Ladydoctor} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default GeneticsComp
