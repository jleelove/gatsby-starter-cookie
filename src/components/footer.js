import React from "react"
import styled from "styled-components"
// import { useStaticQuery, graphql, Link } from "gatsby"

import Edges from "./edges"

import * as theme from "../theme/"

const Component = props => {
  return (
    <Footer {...props}>
      <Edges>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </Edges>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  margin-top: 80px;
  background: ${theme.colors.lightBackground};
  color: white;
  a {
    color: inherit;
  }
  p {
    margin: 0;
    padding: 10px;
  }
`
