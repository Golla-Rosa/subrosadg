import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Logo from './molecules/logo'
import "./assets/fonts/JosefinSans-Bold.ttf"
import Navbar, { content } from './organisms/Navbar'
import HeadedText from './molecules/HeadedText'
import { ReactP5Wrapper } from 'react-p5-wrapper'
import styled from 'styled-components'
import { SplashScreen } from './components/SplashScreen'
import { ScrollWheel } from './components/ScrollWheel'

const Container = styled.div`
@supports (scroll-snap-type: y mandatory) {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

`

const Content = () => {
  const [selectedIndex, setSelectedIdx] = useState(0);

  useEffect(() => {
    function handleScroll() {
      console.log("🚀 ~ file: App.tsx:25 ~ handleScroll ~ handleScroll")
      const sectionElements = content.map(id => document.getElementById(`${id}`));
      const currentSection = sectionElements.find(element => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });
      const currentIdx = content.indexOf(currentSection.id);
      setSelectedIdx(currentIdx);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div>

    <Navbar selectedIndex={selectedIndex} setSelectedIdx={setSelectedIdx} />
    <div style={{ display: "flex", width: "100%" }}>
      <Container style={{ scrollSnapType: "mandatory", }}>
        {
          content.map((c) =>
            <div id={`${c.id}`} style={{ scrollSnapAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
              <HeadedText body={c.body} title={c.title}></HeadedText>
            </div >)
        }


      </Container>
    </div>

  </div>
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ margin: "0px", flexDirection: "column", background: "#010028", height: "100%", width: "100%" }}>
      <SplashScreen>
        <Content />
      </SplashScreen>
    </div>
  )
}

export default App
