import Image from 'next/image'
//import { ILogo } from './interfaces'
import IconBmg from '@/assets/icons/bmg.svg'
import { Container } from './styles'
import { Card } from '@/components/Molecules'
import { experiences } from './mock'

export const Experiences = () => {
    return (
        <Container>
            {experiences.map(exp => (
                  <Card key={exp.id} title={exp.title} description={exp.description} labels={...exp.labels} descriptionImage={exp.logoDescription} logoImage={exp.logo} />
            ))}
        </Container>
    )
}