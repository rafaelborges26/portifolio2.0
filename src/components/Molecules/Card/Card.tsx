import { Container, Title, Description, ContainerLabel } from './styles'
import { Label, Logo } from '@/components/Atoms'
import { ICard } from './interfaces'

export const Card = ({ title, description, labels, descriptionImage, logoImage, link }:ICard) => {
    return (
        <Container href={link} target="_blank" rel="noopener noreferrer">
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