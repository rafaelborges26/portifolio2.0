import Image from 'next/image'
import IconBmg from '@/assets/icons/bmg.svg'
import { Container, Title, Description, ContainerLabel } from './styles'
import { Label, Logo } from '@/components/Atoms'
import { ICard } from './interfaces'

export const Card = ({ title, description, labels, descriptionImage, logoImage }:ICard) => {
    return (
        <Container>
            <Logo logoImage={logoImage} descriptionImage={descriptionImage} variant='primary' />
            <Title>{title}</Title>
            <Description>{description}</Description>
            <ContainerLabel>
                {labels.map(label => (
                    <Label key={label} colorSelected="blue">{label}</Label>
                ))}
            </ContainerLabel>
        </Container>
    )
}