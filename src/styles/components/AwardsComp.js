import React from 'react'

const AwardsComp = () => {
  return (
    <div className='award-container'>
      <div className='width90'>
        <div className='award-main-heading'>
          <h2>Awards and Accolades</h2>
        </div>
        <div className='award-content'>
          <span>Excellence in Research Award</span>
          <p>
            Recognized for groundbreaking contributions to molecular biology at the B.Wrgo
            Scientific Conference, 2022.
          </p>
        </div>
        <div className='phdline'></div>
        <div className='award-content'>
          <span>Emerging Scientist Honor</span>
          <p>
            Awarded by the Volaso-Thalina Biology Association for innovative work in gene editing,
            2021.
          </p>
        </div>
        <div className='phdline'></div>
        <div className='award-content'>
          <span>Grant for Advanced Studies</span>
          <p>
            Recipient of the prestigious Alfred Renovyte Innovators Grant for research in genetic
            therapies, 2020.
          </p>
        </div>
        {/* <div className='phdline'></div> */}
      </div>
    </div>
  )
}

export default AwardsComp
