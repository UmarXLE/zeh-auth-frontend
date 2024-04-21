"use client"
import styled from '@emotion/styled'
import React from 'react'

const Title = ({text}) => {
  return (
    <Wrapper>
      {text}
    </Wrapper>
  )
}

export default Title;

const Wrapper = styled("h2")`
  color: rgba(30, 41, 59, 1);
  font-size: 26px;
  line-height: 40px;
  font-weight: 700;
`;