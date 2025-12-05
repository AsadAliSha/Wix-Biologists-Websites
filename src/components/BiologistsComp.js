import React from 'react'
import { Button } from 'antd'
// import Doctorimage from '../assets/doctorimage.png'


const BiologistsComp = () => {
  return (
    <div className='bio-container' >
      <div className='bio-image'>
{/* <img src={Doctorimage} /> */}
      </div>
      <div className='width90'>
        <div className='bio-main-heading'data-aos="fade-up" data-aos-duration='3000'>
          <h2>K. Singh, Biologist</h2>
          <p>PhD in Molecular Biology</p>
          <div className='bio-btn'>
            <a href='#'>
              <Button>Contact</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BiologistsComp
