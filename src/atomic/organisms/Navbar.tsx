import styled from 'styled-components'
import { Menu } from './Menu'
import Logo from '../molecules/logo'
import { sections } from '../../datas/sections';
import { Section } from '../../models/Section';
import LogoSub from '../../assets/Logos/LOGOSUBROSA.svg'


const SNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1504px) {
  }
  height: 200px;

  @media (min-width: 1504px) {
    flex-direction: column;
    justify-content: center;
    
    height: 100vh;
    margin: 0px;
    zIndex: 3;
    background: #010028;
    width: 20%;
  }
`
function Navbar({ sections, changeSection, selectedIndex }: { changeSection: any, sections: Section[], selectedIndex: any }) {
  return (
    <SNavbar>
      <Logo img={LogoSub} splash={false}></Logo>
      <Menu items={sections} selectedIndex={selectedIndex} setSelectedIdx={changeSection}></Menu>
    </SNavbar>
  )
}

export default Navbar