import React from 'react'
import Lists from './Lists'
import  LatestProp from './LatestProp'
import Agent from './Agent'
import Customer from './Customer'
import Footer from './Footer'

const Content = () => {
  return (
    <div>
        <Lists />
        <LatestProp />
        <Agent />
        <Customer />
        <Footer />
    </div>
  )
}

export default Content