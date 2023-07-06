import Image from 'next/image'
import { ILogo } from './interfaces'
import { Container } from './styles'

export const Logo = ({ logoImage, descriptionImage }:ILogo) => {
    return (
        <Container>
            <Image src={logoImage} alt={descriptionImage} />
        </Container>
    )
}