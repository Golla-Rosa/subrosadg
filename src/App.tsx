import { useEffect, useState } from 'react'
import './App.css'
import "./assets/fonts/JosefinSans-Bold.ttf"
import styled from 'styled-components'
import { SplashScreen } from './components/LoadingScreen'
import { Home } from './components/Home'

function App() {
  return (
    <div style={{ margin: "0px", flexDirection: "column", background: "#010028", height: "100%", width: "100%" }}>
      <SplashScreen>
        <Home />
      </SplashScreen>
    </div>
  )
}

export default App
