import React from 'react'
import Logo from '../assets/Logo (2).png'
import { Row, Col} from 'antd'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='width90'>
        <div className='footer-line'></div>
        <Row gutter={[20, 20]}>
          <Col lg={8} md={12} xs={24}>
        <div className='footer-main-heading'>
          <img src={Logo} />
        </div>
            {/* <div className='footer-col'>
              <div className='footer-content'>
                <p>Stay Connected</p>
              </div>
              <div className='footer-input'>
                <Input placeholder='Eamil*' className='placename' />
                <div className='footer-btn'>
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div> */}
          </Col>
          <Col lg={8} md={24} xs={24}>
            <div className='footer-col'>
              <div className='footer-wrap'>
                <p>123-456-7890</p>
                <a href='#'>info@mysite.com</a>
              </div>
              <div className='footer-list'>
                <p>500 Terry Francine St. San Francisco, CA 94158</p>
              </div>
            </div>
          </Col>
          <Col lg={8} md={24} xs={24}>
            <div className='footer-col'>
              <div className='footer-wrap'>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Accessibility Statement</a>
              </div>
              <div className='footer-list'>
                <p>© 2035 by K. Singh. Powered and secured by <span>Wix</span> </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className='footer-underline'></div>
      </div>
    </div>
  )
}

export default Footer
