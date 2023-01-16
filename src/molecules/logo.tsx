import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logos/LOGOSUBROSA1.svg';
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
    width: 350px;
    height: auto;
    &.splash {
    width: 100%;
        
    }
    @media (max-width: 1504px) {
        width: 150px;
      
        }
`
function Logo({ splash }) {
    console.log("🚀 ~ file: logo.tsx:26 ~ Logo ~ splash", splash)
    return (
        <SLogo className={splash ? "splash" : null} style={{}}>
            <SImg className={splash ? "splash" : null} src={RoseIcon} />

        </SLogo>
    )
}

export default Logo