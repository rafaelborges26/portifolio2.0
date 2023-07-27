import { css, styled } from "styled-components"
import { Themes } from "@/styles/themes"
import { IMenuStyles } from './interfaces'

export const MenuContainer = styled.div<IMenuStyles>`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 4;
  width: 26px; 
  height: 40px;
  cursor: pointer;
  transition: all 0.25s ease;
  
`

export const Scratchs = styled.div<IMenuStyles>`
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

export const Scratcht = styled.div<IMenuStyles>`
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
  `};

  ${props => props.isOpen && !props.positionTop && css`
    transform: rotate(-45deg);  
  `};

  ${props => props.isOpen && css` 
    background: ${Themes.colors.black};
    top: 0;
  `};
`

export const ContainerMenu = styled.div<IMenuStyles>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 0%;
  transition: width 0.25s ease;
  background: ${Themes.colors.white300};
  z-index: 3;

  height: 100%;

  @media (max-width: ${Themes.breakPoints.ipadPro}) {
      transition: opacity 0.25s ease;
      opacity: 0;
  }

  ${props => props.isOpen && css`
        width: 30%;

        @media (max-width: ${Themes.breakPoints.ipadPro}) {
          width: 50%;
          opacity: 1;
        }
  `};
`

export const ContainerButton = styled.div<IMenuStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: inherit;

  ${props => props.isOpen && css`
      display: flex;
  `};

  ${props => !props.isOpen && css`
      display: none;
  `};
`

export const NavLayer = styled.div<IMenuStyles>`
position: fixed;
    background: rgb(0 0 0 / 60%);
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    //-webkit-backface-visibility: hidden;
    //backface-visibility: hidden;
    visibility: ${(props) => props.isOpen ? 'visible' : 'hidden'};
    overflow: hidden;
    opacity: 1;
    //-webkit-transition: all 0.25s;
    transition: all 0.25s;
`