import React from 'react'
import { Layout } from '../Layout/Layout'
import { Info } from '../Components/Info'
import { About } from '../Components/About'
import { Courses } from '../Components/Courses'
import { Quote } from '../Components/Quote'
import { Contact } from '../Components/Contact'

export const Home = () => { 
  return (
    <Layout>
        <Info />
        <About />
        <Courses />
        <Quote />
        <Contact />
    </Layout>
    
  )
}
