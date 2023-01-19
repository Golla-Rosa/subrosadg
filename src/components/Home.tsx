import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import HeadedText from '../atomic/molecules/TitleText'
import Navbar from '../atomic/organisms/Navbar'
import THome from '../atomic/template/THome'
import { sections } from '../datas/sections'
import { Section } from '../models/Section'

const Container = styled.div`
@supports (scroll-snap-type: y mandatory) {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
@media (max-width: 1504px) {
  width: 100%;
}

@media (min-width: 1504px) {
}
`
const SContent = styled.div`
@media (max-width: 704px) {
  width: 80%;
  height: 100vh;
  font-size: 10px;
}
@media (max-width: 1504px) {
  width: 80%;
  height: 100vh;
  font-size: 13px;
}
height: 100vh;

margin: auto;
@media (min-width: 1504px) {
  width: 50%;
}
`
export const Home = () => {
  return (
    <THome sections={sections}></THome>
  )
}