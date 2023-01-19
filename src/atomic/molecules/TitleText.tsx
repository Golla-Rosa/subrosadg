import React from 'react'
import styled from 'styled-components';
import { Text } from '../atoms/Text';
import { Title } from '../atoms/Title';

const STitleText = styled.div`
    display: grid;
    gap: 2.5vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
    height: 100%;
    // flex-direction: column; 
    // align-content: space-between;
    // justify-content: space-between
`



const SPlacedTitle = styled(Title)`
grid-column: 1 / 12;
grid-row: 1 ;
`

const SPlacedText = styled(Text)`
grid-column: 1 / 12;
grid-row: 2;
`

const SPlacedBtn = styled.button`
    grid-column: 4 / 6;
    grid-row: 5;
    background: inherit;
    border: 0px;
    display: flex;
    height: 35px;
    width: 130px; 
    font-weight: 5px; 
    background: #C2111A; 
    color: #FFD098;
    border: 0px;
    border-radius: 25px;
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
            <SPlacedBtn className="font-face-rkt-sm">
                <Text>

                    Je rejoins l'équipe
                </Text>
            </SPlacedBtn>

        </STitleText>
    )
}

export default TitleText