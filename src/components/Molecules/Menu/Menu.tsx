import { useState } from 'react'
import { MenuItems } from '@/constants/Menu'
import { Tab } from '@/components/Atoms'
import { IMenuItems } from './interfaces'
import { MenuContainer, Scratchs, Scratcht, ContainerMenu, ContainerButton, NavLayer } from './styles'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [menuItemSelected, setMenuItemSelected] = useState()

    const handleOpenMenu = () => {
        setIsOpen(!isOpen)

        isOpen
        ? (document.body.style.overflow = 'auto')
        : (document.body.style.overflow = 'hidden')
    }

    const handleNavigateMenu = (menuItems: IMenuItems['items']) => {
        console.log(menuItems, 'menuItems') 
    }

    return (
        <>
        <NavLayer isOpen={isOpen} />
        <MenuContainer onClick={handleOpenMenu} isOpen={isOpen} >
            <Scratchs isOpen={isOpen}>
                <Scratcht positionTop={true} isOpen={isOpen} />
                <Scratcht positionTop={false} isOpen={isOpen} />
            </Scratchs>
        </MenuContainer>
        <ContainerMenu isOpen={isOpen}>
            <ContainerButton isOpen={isOpen}>
                <Tab onClick={() => handleNavigateMenu('Profile')}>Projects</Tab>
                <Tab onClick={() => handleNavigateMenu('AboutMe')}>About me</Tab>
                <Tab onClick={() => handleNavigateMenu('Experiences')}>Experiences</Tab>
            </ContainerButton>
        </ContainerMenu>
        </>
    )
}