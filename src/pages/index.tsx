import Image from 'next/image'
import ImageProfile from '@/assets/images/profile2.jpg'
import iconPago from '@/assets/icons/pagonxt.svg'
import { MenuItems } from '@/constants/Menu'
import { Experiences, Header } from '@/components/Organisms'
import { Contact } from '@/components/Organisms'
import { Container, Content, Profile, DescriptionContainer, ImageContainer, ExperiencesContainer, PostsContainer, Post, AboutMe, ContactContainer } from '../styles/pages'
import { linksUrls } from '@/utils/links'


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
          <Post href={linksUrls.postConfig} target="_blank" rel="noopener noreferrer">
            <h5>How to create a dynamic, smooth-scrolling menu</h5>
            <span>To achieve this effect, you can implement a container div that splits the screen into sections with Id in each element...</span>
          </Post>
          <Post href={linksUrls.postMenu} target="_blank" rel="noopener noreferrer">
            <h5>How to compile styled-components on Next.js</h5>
            <span>If you are getting problem losing all the style from page, in the moment you render the application...</span>
          </Post>
          </PostsContainer>
          <AboutMe id={MenuItems.ABOUTME}>
            <h2>About me</h2>
            <h3>I work with what I love</h3>
            <p>{`I'm a coding enthusiast with a thirst for continuous growth. Since 2016, I've been dedicating myself to learning and constantly improving my skills.`}</p>
            <p>{`In 2021, I completed my training in information systems and, since then, I have deepened myself further in development, taking relevant courses, with emphasis on the Rocketseat course, which provided a notable advance in my capabilities.`}</p>
            <p>{`From 2018, I had the opportunity to enter the job market, where I sought exceptional solutions to solve problems efficiently.`}</p>
            <p>{`My experience focuses on front-end development, with a special focus on usability and user interface. In addition, I have solid knowledge in web standards, security, testing, analytics and API integrations.`}</p>
            <p>{`Over time, I've developed a number of interesting projects, some of which are available on my GitHub. Among them, I highlight "buy-management", a purchase manager that I created using React as front-end framework and Firebase as database service. This project offers custom functionality, with features carefully designed to meet customer needs.`}</p>
            <p>{`Born in Santos, Brazil, I have a passion for both programming and playing sports in my spare time. I am someone who deeply values communication, innovation and respect.`}</p>
            <p>{`I am constantly looking for new challenges and opportunities to keep learning and evolving in the field of technology. So if you need help or have any questions, I'm here to help!`}</p>
          </AboutMe>
          <ContactContainer id={MenuItems.CONTACT}>
            <Contact />
          </ContactContainer>
        </Content>
      </Container>
  )
}