import React from 'react'
import styled from 'styled-components'
// import RoseIcon from '../assets/Logos/LOGOSUBROSA1.svg';
const SLogo = styled.div`
    color: #FFD098; 
    display: flex;
    align-items: center;
    justify-content: center;
    &.splash {
        width: 100%;

        }
`

const SImg = styled.img`
    width: 80%;
    height: auto;
    &.splash {
    width: 100%;
        
    }
    @media (max-width: 1504px) {
        width: 150px;
      
        }
`
function Logo({ splash, img }: { splash: any, img: string }) {
    console.log("🚀 ~ file: logo.tsx:26 ~ Logo ~ splash", splash)
    return (
        <SLogo className={splash ? "splash" : null} style={{}}>
            <SImg src={img} className={splash ? "splash" : null}  />
        </SLogo>
    )
}

export default Logo