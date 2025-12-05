import React from 'react'
// import React, { useState } from 'react'
import { Button} from 'antd'
// import Logo from '../assets/Logo (2).png'

const PhdComp = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const showModal = () => {
//     setIsModalOpen(true)
//   }
//   const handleOk = () => {
//     setIsModalOpen(false)
//   }
//   const handleCancel = () => {
//     setIsModalOpen(false)
//   }
  return (
    <div className='phd-container'>
      <div className='width90'>
        <div className='phd-main-heading' data-aos="fade-up" data-aos-duration='3000'>
          <h2>Academic CV</h2>
          <p>
            With a PhD in Molecular Biology and a wealth of research experience, I have published
            numerous peer-reviewed articles in esteemed journals. My work focuses on genetics and
            the development of innovative research methodologies.
          </p>
        </div>
        <div className='phdline'data-aos="fade-right" data-aos-duration='2000'></div>
        <div className='phd-content'>
          <div className='phd-sub-heading'data-aos="fade-up" data-aos-duration='3000'>
            <p>
              As an Associate Professor, I supervise graduate students, guiding them in their
              academic journey. I actively participate in national and international conferences and
              contribute to the advancement of the field.
            </p>
            </div>
            <div className='btn-modal'>
              <Button>
                My CV
              </Button>
              {/* <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='modal-bg'>
                <div className='modal-logo'>
                    <img src={Logo} />
                </div>
                <p>Some contents...</p>
                <p>Some contents...</p>
                </div>
              </Modal> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhdComp
