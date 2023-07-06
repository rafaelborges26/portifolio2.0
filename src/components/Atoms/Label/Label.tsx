import Image from 'next/image'
import { ILabel } from './interfaces'
import { Container } from './styles'

export const Label = ({ colorSelected, children, ...rest }:ILabel) => {
    return (
        <Container colorSelected={colorSelected} {...rest}>
            {children}
        </Container>
    )
}