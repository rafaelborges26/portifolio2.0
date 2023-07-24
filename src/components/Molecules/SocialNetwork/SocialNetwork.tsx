import { Container } from './styles'
import { Logo } from '@/components/Atoms'
import { ISocialNetwork } from './interfaces'

export const SocialNetwork = ({ title, description, descriptionImage, logoImage }:ISocialNetwork) => {
    return (
        <Container>
            <Logo logoImage={logoImage} descriptionImage={descriptionImage} variant='secondary' />
            <span>{title}</span>
            <p>{description}</p>
        </Container>
    )
}