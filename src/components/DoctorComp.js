import React from 'react'

function DoctorComp() {
  return (
    <div className='doc-container'>
      <div className='width90'>
        <div className='doc-main-heading' data-aos="fade-up" data-aos-duration='3000'>
          <h2>Expertise</h2>
          <p >Research Collaboration Steps</p>
          <div className='phdline'data-aos="fade-right" data-aos-duration='2000'></div>
        </div>

        <div className='doc-content'data-aos="fade-up" data-aos-duration='3000'>
          <h2>Collaboration</h2>
          <p>
            Led cross-disciplinary teams in research projects focused on molecular biology and
            genetics, fostering innovative solutions.
          </p>
        </div>
        <div className='phdline'data-aos="fade-right" data-aos-duration='2000'></div>

        <div className='doc-content'data-aos="fade-up" data-aos-duration='3000'>
          <h2>Methodologies</h2>
          <p>
            Proficient in advanced gene sequencing, CRISPR-Cas9 technology, and cell imaging
            techniques for cutting-edge research.
          </p>
        </div>
        <div className='phdline'data-aos="fade-right" data-aos-duration='2000'></div>
        <div className='doc-content' data-aos="fade-up" data-aos-duration='3000'>
          <h2>Analysis</h2>
          <p>
            Extensive experience conducting statistical and bioinformatics analyses to interpret
            complex biological data effectively.
          </p>
        </div>
        <div className='phdline'data-aos="fade-right" data-aos-duration='2000'></div>
        <div className='doc-content'data-aos="fade-up" data-aos-duration='3000'>
          <h2>Publication</h2>
          <p>
            Published multiple peer-reviewed articles in renowned scientific journals, contributing
            significantly to the molecular biology field.
          </p>
        </div>
        {/* <div className='phdline'></div> */}
      </div>
    </div>
  )
}

export default DoctorComp
