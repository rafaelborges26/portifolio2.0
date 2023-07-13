import { useState } from 'react'
import { Tab } from '@/components/Atoms'
import { MenuContainer, Scratchs, Scratcht, ContainerMenu } from './styles'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <MenuContainer onClick={handleOpenMenu} isOpen={isOpen} >
            <Scratchs isOpen={isOpen}>
                <Scratcht positionTop={true} isOpen={isOpen} />
                <Scratcht positionTop={false} isOpen={isOpen} />
            </Scratchs>
        </MenuContainer>
        <ContainerMenu isOpen={isOpen}>
            <Tab>Teste</Tab>
        </ContainerMenu>
        </>
    )
}