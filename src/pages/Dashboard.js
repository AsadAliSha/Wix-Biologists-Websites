import BiologistsComp from '../components/BiologistsComp'
import Header from '../components/Header'
import PhdComp from '../components/PhdComp'
import DoctorComp from '../components/DoctorComp'
import AwardsComp from '../styles/components/AwardsComp'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <BiologistsComp />
      <PhdComp />
      <DoctorComp />
      <AwardsComp />
      <ContactMe /> 
      <Footer />
    </div>
  )
}

export default Dashboard
