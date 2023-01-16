import { useEffect, useState } from 'react'
import './App.css'
import "./assets/fonts/JosefinSans-Bold.ttf"
import Navbar, { content } from './organisms/Navbar'
import HeadedText from './molecules/HeadedText'
import styled from 'styled-components'
import { SplashScreen } from './components/SplashScreen'

const Container = styled.div`
@supports (scroll-snap-type: y mandatory) {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
`

const Content = () => {
  const [selectedIndex, setSelectedIdx] = useState(0);

  function handleScroll() {
    const sectionElements = content.map(c => document.getElementById(c.id));
    const domSection = sectionElements.find(element => {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.top <= window.innerHeight / 2;
    });
    if (domSection) {
      const section = content.find(c => c.id === domSection.id);
      const currentIdx = content.indexOf(section);
      setSelectedIdx(currentIdx);
    }
  }

  useEffect(() => {
  });

  return (
    <div>
      <Navbar selectedIndex={selectedIndex} setSelectedIdx={setSelectedIdx} />
      <div style={{ display: "flex", width: "100%" }}>
        <Container style={{ scrollSnapType: "mandatory" }} onScroll={handleScroll}>
          {
            content.map((c) =>
              <div key={`${c.id}`} id={`${c.id}`} style={{ scrollSnapAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <HeadedText key={`${c.id}`} body={c.body} title={c.title}></HeadedText>
              </div>)
          }
        </Container>
      </div>
    </div>
  )
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
