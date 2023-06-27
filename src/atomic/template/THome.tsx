import React, { useState } from 'react'
import styled from 'styled-components'
import { Section } from '../../models/Section'
import TitleText from '../molecules/TitleText'
import Content from '../organisms/Content'
import Navbar from '../organisms/Navbar'


const SHome = styled.div`
  display: flex;
  @media (max-width: 1503px) {
    flex-direction: column;

  }

`

function THome({ sections }: { sections: Section[] }) {
  const [selectedSectionId, setSelectedSectionId] = useState('0');

  const handleSectionChange = ({ section }: { section: string }) => {
    setSelectedSectionId(section)
  }

  return (
    <SHome>

      <Navbar selectedIndex={selectedSectionId} sections={sections} changeSection={handleSectionChange} ></Navbar>

      <Content sections={sections} changeSection={handleSectionChange}></Content>

    </SHome>
  )
}

export default THome