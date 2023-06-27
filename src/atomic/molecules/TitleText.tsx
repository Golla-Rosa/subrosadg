import React from 'react'
import styled, { keyframes } from 'styled-components';
import { SButton } from '../atoms/Button';
import { Text } from '../atoms/Text';
import { Title } from '../atoms/Title';

const STitleText = styled.div`
    display: grid;
    gap: 2.5vh;
    font-size: 2.6875rem;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    height: 100%;
    width: 100%;
    // flex-direction: column; 
    // align-content: space-between;
    // justify-content: space-between
`



const SPlacedTitle = styled(Title)`
grid-column: 2 / 12;
grid-row: 2/3 ;
`

const SPlacedText = styled(Text)`
grid-column: 6 / 12;
grid-row: 3;
`

const SPlacedBtn = styled.button`
    grid-column: 4 / 6;
    grid-row: 5;
    background: inherit;
    color: #FFD098;
    border: none;
    padding: 10px 20px;
    font-size: 18px;

    justify-content: center;
`


function TitleText({ title, body }: { title: string, body: string }) {
    return (
        <STitleText style={{}} >
            <SPlacedTitle className='font-face-gm' >
                {title}
            </SPlacedTitle>
            <SPlacedText className="font-face-rkt" >
                {body}
            </SPlacedText>
            {/* <SPlacedBtn className="font-face-rkt-sm">
                <SButton>

                    Je rejoins l'équipe
                </SButton>
            </SPlacedBtn> */}

        </STitleText>
    )
}

export default TitleText