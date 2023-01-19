import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  border-radius: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  gap: 1px;
  @media (min-width: 1504px) {
  flex-direction: column;

  }
`;
export const animateTypewriter = keyframes`
 
`;
const MenuItem = styled.a`
  width: 200px;
  height: 40px;
  font-size: 1.1rem;
  line-height: 10px;
  opacity: 0.3;

  transition: transform 0.3s ease, opacity 0.3s ease, margin-left 0.6s ease;
  color: #FFD098;
  &.selected {
    opacity: 0.85;
    margin-left: 70px;
    &:hover {
        opacity: 1;
        margin-left: 80px;
      }

  }
  &:hover {
    opacity: 1;
    margin-left: 50px;
  }

`;

export function Menu({ items, selectedIndex, setSelectedIdx }: { items: any, selectedIndex: any, setSelectedIdx: any }) {
  useEffect(() => {
    console.log(selectedIndex)
  }, [selectedIndex])
  return (
    <MenuWrapper>
      {items.map((item: {
        section: any; id: Key; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal;
      }, index: any) => (
        <MenuItem
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setSelectedIdx(item)}
          className={item.section == selectedIndex ? 'selected font-face-gm' : 'font-face-gm'}
        >
          {item.title}
        </MenuItem>
      ))}
    </MenuWrapper>
  );
}
