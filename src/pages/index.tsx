import Image from 'next/image'
import ImageProfile from '@/assets/images/profile2.jpg'
import iconPago from '@/assets/icons/pagonxt.svg'
import { MenuItems } from '@/constants/Menu'
import { Experiences, Header } from '@/components/Organisms'
import { Contact } from '@/components/Organisms'
import { Container, Content, Profile, DescriptionContainer, ImageContainer, ExperiencesContainer, PostsContainer, Post, AboutMe, ContactContainer } from '../styles/pages'


export default function Home() {

  return (
      <Container>
        <Content>
          <Header/>
          <Profile id={MenuItems.PROFILE}>
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
          <ExperiencesContainer id={MenuItems.EXPERIENCES}>
            <Experiences />
          </ExperiencesContainer>
          <PostsContainer id={MenuItems.BLOG}>
          <h2>Latest posts</h2>
          <Post>
            <h5>How to create a dynamic, smooth-scrolling menu</h5>
            <span>To achieve this effect, you can implement a container div that splits the screen into sections with Id in each element...</span>
          </Post>
          <Post>
            <h5>How to compile styled-components on Next.js</h5>
            <span>If you are getting problem losing all the style from page, in the moment you render the application...</span>
          </Post>
          </PostsContainer>
          <AboutMe id={MenuItems.ABOUTME}>
            <h2>About me</h2>
            <h3>I work with what I love</h3>
            <p>{`I´m a coding enthusiast looking for continued growth. Since 2016, I have dedicated myself to constantly learning and improving myself. From 2018, I started working and looking for excellent solutions to solve problems efficiently.`}</p>
            <p>{`My expertise is in front-end development, with a primary focus on usability and UI, as well as web standards, security, testing, analytics, and API integrations.`}</p>
            <p>{`Over time, I've developed several interesting projects, some of which are available on my GitHub. One of them is "buy-management", a purchase manager that I created using React as front-end framework and Firebase as database service. This project offers custom functionality, with features designed specifically to meet customer needs.`}</p>
            <p>{`I was born in Santos, Brazil, and in addition to my passion for coding, I also enjoy doing sports in my spare time. I am a person who deeply values communication, innovation and respect.`}</p>
            <p>{`I am always looking for new challenges and opportunities to continue learning and evolving in the field of technology. If you need help or have any questions, I'm here to help!`}</p>
          </AboutMe>
          <ContactContainer id={MenuItems.CONTACT}>
            <h2>Contact</h2>
            <Contact />
          </ContactContainer>
        </Content>
      </Container>
  )
}