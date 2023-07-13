import Image from 'next/image'
import { Button } from '@/components/Atoms'
import { Menu } from '@/components/Molecules'

import { Container } from './styles'

export const Header = () => {
    return (
        <Container>
            <Button variant='label'>Rafael Borges</Button>
            <Menu />
        </Container>
    )
}