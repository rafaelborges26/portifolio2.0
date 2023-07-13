import { Tab } from '@/components/Atoms'
import { IMenu } from './interfaces'
import { MenuContainer, Scratchs, Scratcht, ContainerMenu } from './styles'

export const Menu = ( { isOpen }:IMenu) => {
    return (
        <>
        <MenuContainer>
            <Scratchs>
                <Scratcht positionTop={true} />
                <Scratcht positionTop={false} />
            </Scratchs>
        </MenuContainer>
        <ContainerMenu isOpen={true}>
            <Tab>Teste</Tab>
        </ContainerMenu>
        </>
    )
}