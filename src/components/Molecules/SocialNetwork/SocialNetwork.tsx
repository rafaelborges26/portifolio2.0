import { Container } from './styles'
import { Logo } from '@/components/Atoms'
import { ISocialNetwork } from './interfaces'

export const SocialNetwork = ({ title, description, descriptionImage, link, logoImage }:ISocialNetwork) => {
    return (
        <Container href={link} target="_blank" rel="noopener noreferrer">
            <Logo logoImage={logoImage} descriptionImage={descriptionImage} variant='secondary' />
            <span>{title}</span>
            <p>{description}</p>
        </Container>
    )
}