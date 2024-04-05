import React from 'react'
import CaruselCom from '../carusel'
import Navbbar from '../navbar'
import AboutCom from '../about'
import AboutText from '../about/aboutText'
import Footer from '../footer'
import Location from '../location'

function HomeClient() {
  return (
    <div>
        <Navbbar/>
        <CaruselCom/>
        <AboutCom/>
        <AboutText/>
        <Location/>
        <Footer/>
    </div>
  )
}

export default HomeClient