import Image from 'next/image'
import { Container, Content } from './styles'
import { Card } from '@/components/Molecules'
import { experiences } from './mock'

export const Experiences = () => {
    return (
        <Container>
            <h2>Experience:</h2>
        <Content>
            {experiences.map(exp => (
                  <Card key={exp.id} title={exp.title} description={exp.description} labels={...exp.labels} descriptionImage={exp.logoDescription} logoImage={exp.logo} />
            ))}
        </Content>
        </Container>
    )
}