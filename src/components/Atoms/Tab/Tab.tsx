import { ITab } from './interfaces'
import { Container } from './styles'

export const Tab = ({ teste, ...props }:ITab) => {
    return (
        <Container {...props} />
    )
}