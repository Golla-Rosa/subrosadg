import React from 'react'
import styled from 'styled-components'
import { Section } from '../../models/Section'
import TitleText from '../molecules/TitleText'

const Container = styled.div`
@supports (scroll-snap-type: y mandatory) {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
@media (max-width: 1504px) {
  width: 100%;
}

@media (min-width: 1504px) {
}
`
const SContent = styled.div`
font-size: 2.6vw;
width: 80%;
height: 100vh;

margin: auto;
}
`
function Content({ sections, changeSection }: { sections: Section[], changeSection: any }) {
    const onScroll = () => {
        const sectionElements = sections.map(c => document.getElementById(c.id));
        const domSection = sectionElements.find(element => {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        });
        if (domSection) {
            const section = sections.find(c => {
                return c.id === domSection.id
            })
            console.log("🚀 ~ file: Content.tsx:46 ~ onScroll ~ section", section)
            changeSection(section)
        }
    }
    return (
        <div style={{ display: "flex", width: "100%" }}>
            <Container style={{ scrollSnapType: "mandatory" }} onScroll={onScroll}>
                {
                    sections.map((c) =>
                        <SContent key={`${c.id}`} id={`${c.id}`} style={{ scrollSnapAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", }}>

                            <TitleText key={`${c.id}`} body={c.body} title={c.title}></TitleText>
                        </SContent>)
                }
            </Container>
        </div>
    )
}

export default Content