import { useState } from 'react'
import { Tab } from '@/components/Atoms'
import { setScroll } from '@/utils/scrollTo'
import { IMenuItems } from './interfaces'
import { MenuContainer, Scratchs, Scratcht, ContainerMenu, ContainerButton, NavLayer } from './styles'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleOpenMenu = () => {
        setIsOpen(!isOpen)

        if(isOpen){
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden'
            setScroll(0)
        }
    }

    const handleNavigateMenu = (menuItems: IMenuItems['items']) => {

        const element = document.getElementById(menuItems)
        if(element) {
            handleOpenMenu()
            element.scrollIntoView({ behavior: 'smooth' })
        }
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
                <Tab onClick={() => handleNavigateMenu('Profile')}>Profile</Tab>
                <Tab onClick={() => handleNavigateMenu('Experiences')}>Experiences</Tab>
                <Tab onClick={() => handleNavigateMenu('Blog')}>Blog</Tab>
                <Tab onClick={() => handleNavigateMenu('AboutMe')}>About me</Tab>
                <Tab onClick={() => handleNavigateMenu('Contact')}>Contact</Tab>
            </ContainerButton>
        </ContainerMenu>
        </>
    )
}