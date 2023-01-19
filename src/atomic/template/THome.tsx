import React, { useState } from 'react'
import styled from 'styled-components'
import { Section } from '../../models/Section'
import TitleText from '../molecules/TitleText'
import Content from '../organisms/Content'
import Navbar from '../organisms/Navbar'



function THome({ sections }: { sections: Section[] }) {
  const [selectedSectionId, setSelectedSectionId] = useState('0');

  const handleSectionChange = ({ section }: { section: string }) => {
    setSelectedSectionId(section)
  }

  return (
    <div>

      <Navbar selectedIndex={selectedSectionId} sections={sections} changeSection={handleSectionChange} ></Navbar>
     
      <Content sections={sections} changeSection={handleSectionChange}></Content>

    </div>
  )
}

export default THome