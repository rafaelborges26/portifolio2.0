import Image from 'next/image'
import ImageProfile from '@/assets/images/profile2.jpg'
import { Menu } from '@/components/Atoms'
import { Header } from '@/components/Molecules'
import { Experiences } from '@/components/Organisms'
import { Container, Content, ButtonHeader, Profile, DescriptionContainer, ImageContainer, ExperiencesContainer, AboutMe } from '../styles/pages'


export default function Home() {

  return (
      <Container>
        <Content>
          <Header/>
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
          <AboutMe>
            <h2>About me</h2>
            <h3>I work with what I love</h3>
            <p>{`I´m a coding enthusiast looking for continued growth. Since 2016, I have dedicated myself to constantly learning and improving myself. From 2018, I started working and looking for excellent solutions to solve problems efficiently.`}</p>
            <p>{`My expertise is in front-end development, with a primary focus on usability and UI, as well as web standards, security, testing, analytics, and API integrations.`}</p>
            <p>{`Over time, I've developed several interesting projects, some of which are available on my GitHub. One of them is "buy-management", a purchase manager that I created using React as front-end framework and Firebase as database service. This project offers custom functionality, with features designed specifically to meet customer needs.`}</p>
            <p>{`I was born in Santos, Brazil, and in addition to my passion for coding, I also enjoy doing sports in my spare time. I am a person who deeply values communication, innovation and respect.`}</p>
            <p>{`I am always looking for new challenges and opportunities to continue learning and evolving in the field of technology. If you need help or have any questions, I'm here to help!`}</p>
          </AboutMe>
        </Content>
      </Container>
  )
}