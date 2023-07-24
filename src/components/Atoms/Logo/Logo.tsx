import Image from 'next/image'
import { ILogo } from './interfaces'
import { Container } from './styles'

export const Logo = ({ logoImage, descriptionImage, variant }:ILogo) => {
    return (
        <Container variant={variant}>
            <Image src={logoImage} alt={descriptionImage} />
        </Container>
    )
}