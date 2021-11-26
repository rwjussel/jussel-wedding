// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Ryan & Jillian">
      <p>May 28, 2022 -- save the date!</p>
      <StaticImage
        alt="Ryan & Jillian Hanging out in Big Sur Monterey trip"
        src="../images/BigSurWeddingShot.jpg"
        />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage