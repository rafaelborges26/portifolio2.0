import { Container } from './styles'
import { SocialNetwork } from '@/components/Molecules'
import { socialNetwork } from './mock'

export const Contact = () => {
    return (
        <Container>
            {socialNetwork.map(social => (
                  <SocialNetwork key={social.id} title={social.title} description={social.description} descriptionImage={social.logoDescription} link={social.link} logoImage={social.logo} />
            ))}
        </Container>
    )
}