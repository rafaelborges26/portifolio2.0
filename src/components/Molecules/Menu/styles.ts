import { css, styled } from "styled-components"
import { Themes } from "@/styles/themes"
import { IMenu } from './interfaces'

export const MenuContainer = styled.div<IMenu>`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 26px;
  height: 40px;
  cursor: pointer;
  transition: all 0.25s ease;

  :hover {
    background: ${Themes.colors.gray900};
    div {
      background: ${Themes.colors.gray900}; 
    }
  }
`

export const Scratchs = styled.div<IMenu>`
  position: relative;
  align-items: center;
  opacity: 1;
  width: 26px; 
  height: 4px; 
  transition: all 0.25s ease;
  background: ${Themes.colors.white600};

  ${props => props.isOpen && css`
    height: 0px;
  `};
`

export const Scratcht = styled.div<IMenu>`
  position: absolute;
  z-index: 2;
  display: block;
  right: 0;
  top: 10px;
  width: 26px;
  height: 4px;
  background: ${Themes.colors.white600};
  transition: all 0.25s ease;

  ${props => props.positionTop && css`
        top: -10px; 
    `};
    
  ${props => !props.positionTop && css`
        bottom: 10px; 
  `};

  ${props => props.isOpen && props.positionTop && css`
    transform: rotate(45deg);  
    top: 0;
  `};

  ${props => props.isOpen && !props.positionTop && css`
    transform: rotate(-45deg);  
    top: 0;
  `};
`

export const ContainerMenu = styled.div<IMenu>`
  //display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 0%;
  transition: all 0.25s ease;

  height: 100%;
  display: flex;
  align-items: center;
  
  background: ${Themes.colors.blue600};

  ${props => props.isOpen && css`
        width: 30%;
  `};
`