import { css, styled } from "styled-components"
import { Themes } from "@/styles/themes"
import { IScratcht, IMenu } from './interfaces'

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 26px;
  height: 40px;
  //transition: all 0.25s ease;
`

export const Scratchs = styled.div`
  position: relative;
  align-items: center;

  width: 26px;
  height: 4px; 
  //transition: all 0.25s ease;
  background: ${Themes.colors.white};
  //transition: width 0.3s ease;
  :hover {
      background: ${Themes.colors.wine};      
  }
`

export const Scratcht = styled.div<IScratcht>`
  position: absolute;
  z-index: 2;
  display: block;
  right: 0;
  top: 10px;
  width: 26px;
  height: 4px;
  background: ${Themes.colors.white};

  ${props => props.positionTop && css`
        top: -10px; 
    `};
    
  ${props => !props.positionTop && css`
        bottom: 10px; 
  `};
`

export const ContainerMenu = styled.div<IMenu>`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  ${props => props.isOpen && css`
        display: flex;
        align-items: center;
  `};
  width: 30%;
  height: 100%;
  background: ${Themes.colors.blue600};
`