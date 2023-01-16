import React from 'react'
import styled from 'styled-components';
import { animateTypewriter } from '../components/ScrollWheel';
const TypewriterText = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: monospace;
  font-size: 16px;
  line-height: 25px;
  color: #333;

  &::before {
    content: '|';
    position: absolute;
    top: 0;
    right: -10px;
    animation: ${animateTypewriter} 1s steps(40, end) infinite;
  }
`;

function HeadedText({ title, body }) {
    return (
        <div style={{ width: "50%", display: "flex", gap: "50px", flexDirection: "column", alignContent: "space-between", justifyContent: "space-between" }} >
            <h1 className='font-face-gm' style={{ color: "#FFD098", fontSize: "2em" }}>
                {title}
            </h1>
            <TypewriterText style={{ color: "#FFD098", opacity: "30%", fontSize: "2em" }} className="font-face-rkt" >
                {body}
            </TypewriterText>
            <div style={{ display: "flex", justifyContent: "center" }}>

                <button className="font-face-rkt-sm" style={{ height: "35px", width: "130px", fontWeight: "5px", background: "red", color: "#FFD098", border: "0px", borderRadius: "25px" }}>
                    Je rejoins l'équipe
                </button>
            </div>

        </div>
    )
}

export default HeadedText