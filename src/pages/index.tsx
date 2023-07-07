import Image from 'next/image'
import ImageProfile from '@/assets/images/profile2.jpg'
import { Container, Content, Header, ButtonHeader, Profile, DescriptionContainer, ImageContainer, ExperiencesContainer } from '../styles/pages'
import { Experiences } from '@/components/Organisms'
import IconBmg from '@/assets/icons/bmg.svg'
export default function Home() {

  return (
      <Container>
        <Content>
          <Header>
            <ButtonHeader>
              Rafael Borges
            </ButtonHeader>
            <p>Menu</p>
          </Header>
          <Profile>
          <DescriptionContainer>
            <h1>
              Hello, I’m Rafael Borges
            </h1>
            <span>Software Engineer, Frontend Developer and</span>
            <span>Graduated in Information Systems</span>
          </DescriptionContainer>
            <ImageContainer>
              <Image src={ImageProfile} alt="Rafael Borges" />
            </ImageContainer>
          </Profile>
          <ExperiencesContainer id="experiences">
            <Experiences />
          </ExperiencesContainer>
        </Content>
      </Container>
  )
}