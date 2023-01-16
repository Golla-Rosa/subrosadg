import styled from 'styled-components'
import { ScrollWheel } from '../components/ScrollWheel'
import Logo from '../molecules/logo'

export const content = [
  {
    id: 0,
    section: 'section-0',
    title: "Artisans du numérique",
    body: `Subrosa is dedicated to becoming a guild of digital artists and craftsmen. We believe that, as actors in the digital world, we have the opportunity to live independently through our ideas and skills, and to use our talents to impact the world in positive ways.      However, we also recognize that exploring the paths of independence or activism alone can be dangerous. In order to address this, we are forming a guild where members can help each other on projects, share knowledge and reflections, and support each other in our endeavors. By working together, we can achieve greater success and resilience in the face of challenges.
      
      Join us, and let us create a community of digital artists and craftsmen that values collaboration, creativity, and social justice. Together, we can build a better world through our art and craftsmanship.
      .`
  },
  {
    id: 1,
    section: 'section-1',
    title: "Nous recrutons",
    body: `n tant qu’artisans du numériques, nous sommes détenteurs  d’un immense pouvoir, celui de modeler le monde dans lequel nous évoluons. Que nous soyons programmeurs, concepteurs, créateurs de contenu ou autres professionnels de l’industrie numérique, nos créations ont le potentiel d’inspirer, d’éduquer et de divertir des millions de personnes dans le monde.

      . Grâce à notre expertise technique et à notre vision créative, nous avons la capacité de façonner le monde qui nous entoure et d’avoir un impact positif sur la société. 
      Nous croyons qu’en collaborant et en nous soutenant les uns les autres, nous pouvons atteindre des objectifs encore plus grands et plus ambitieux que nous pourrions atteindre seuls.`
  },
  {
    id: 2,
    section: 'section-2',
    title: "Oui oui",
    body: `n tant qu’artisans du numériques, nous sommes détenteurs  d’un immense pouvoir, celui de modeler le monde dans lequel nous évoluons. Que nous soyons programmeurs, concepteurs, créateurs de contenu ou autres professionnels de l’industrie numérique, nos créations ont le potentiel d’inspirer, d’éduquer et de divertir des millions de personnes dans le monde.

      . Grâce à notre expertise technique et à notre vision créative, nous avons la capacité de façonner le monde qui nous entoure et d’avoir un impact positif sur la société. 
      Nous croyons qu’en collaborant et en nous soutenant les uns les autres, nous pouvons atteindre des objectifs encore plus grands et plus ambitieux que nous pourrions atteindre seuls.`
  }
]

const SNavbar = styled.div`

  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media (max-width: 1504px) {
    position: fixed;
  }
@media (min-width: 1504px) {
  flex-direction: column-reverse;
  justify-content: center;
  
  height: 100vh;
  margin: 0px;
  zIndex: 3;
  background: #010028;
  position: fixed;
  display: flex;
  width: 20%;
}
`
function Navbar({ selectedIndex, setSelectedIdx }) {
  return (
    <SNavbar style={{}}>

      <ScrollWheel items={content} selectedIndex={selectedIndex} setSelectedIdx={setSelectedIdx}></ScrollWheel>
      <Logo></Logo>
    </SNavbar>
  )
}

export default Navbar