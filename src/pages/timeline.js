import * as React from 'react'
import {graphql } from 'gatsby'
import Layout from '../components/layout'

const Timeline = ({data}) => {
  return (
    <Layout pageTitle="Wedding Timeline">
        <ul>
            {
                data.allFile.nodes.map(node =>(
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }
        </ul>
    </Layout>
  )
}
export const query = graphql`
  query timeline{
    allFile {
      nodes {
        name
      }
    }
  }
`

export default Timeline