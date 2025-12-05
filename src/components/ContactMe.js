import { Button, Input } from 'antd'
import React from 'react'

const ContactMe = () => {
  return (
    <div className='contactme-container'>
      <div className='width90'>
        <div className='contactme-main-heading' data-aos="fade-up" data-aos-duration='3000'>
          <h2>Contact Me</h2>
          <span>Get in Touch</span>
          <p>
            For inquiries or collaborations, feel free to reach out. I welcome opportunities to
            engage in scientific discussions and research partnerships.
          </p>
        </div>
         <div className='ourcontact-input-wrap'>
              <div className='ourcontact-input'>
                <Input placeholder='First Name*' className='placename' />
                <Input placeholder='Last Name*' className='placename' />
                <Input placeholder='Eamil*' className='placename' />
                <Input placeholder='Phone*' className='placename' />
              </div>
              <div className='message-input'>
              <textarea className='text-area' placeholder='Write Your Message*' rows={9} />
            </div>
            <div className='contact-btn'>
              <Button>Submit</Button>
            </div>
            </div>
      </div>
    </div>
  )
}

export default ContactMe
