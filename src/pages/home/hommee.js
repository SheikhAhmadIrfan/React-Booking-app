import Cities from '../../components/cities/Cities'
import Email from '../../components/email/Email'
import { Footer } from '../../components/footer/Footer'
import Guest from '../../components/guest/Guest'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Property from '../../components/property/Property'
import './home.css'

const Hommee = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homecontainer">
        <Cities/>
        <h1 className="hometitle">Browse by property type</h1>
        <Property/>
        <h1 className="hometitle">Homes guests love</h1>
        <Guest/>
        <Email/>
      </div>
    </div>
  )
}

export default Hommee