import Image from 'next/image'
import { Button, Menu } from '@/components/Atoms'
import { Container } from './styles'

const Header = () => {
    return (
        <Container>
            <Button variant='label'>Rafael Borges</Button>
            <Menu isOpen={true} />
        </Container>
    )
}

export default Header