import Image from 'next/image'
import { IButton } from './interfaces'
import { Container } from './styles'

export const Button = ({ variant, children, ...rest }:IButton) => {
    return (
        <Container variant={variant} {...rest}>
            {children}
        </Container>
    )
}