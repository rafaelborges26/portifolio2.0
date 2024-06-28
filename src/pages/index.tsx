import Image from 'next/image'
import ImageProfile from '@/assets/images/profile2.jpg'
import { MenuItems } from '@/constants/Menu'
import { Experiences, Header } from '@/components/Organisms'
import { Contact } from '@/components/Organisms'
import { Container, Content, Profile, DescriptionContainer, ImageContainer, ExperiencesContainer, PostsContainer, Post, AboutMe, ContactContainer } from '../styles/pages'
import { linksUrls } from '@/utils/links'
import { useEffect } from 'react'
import { setScroll } from '@/utils/scrollTo'

export default function Home() {

  useEffect(() => {
    setScroll(0)
  },[])

  return (
      <Container>
        <Content>
          <Header/>
          <Profile id={MenuItems.PROFILE}>
          <DescriptionContainer>
            <h1>
              Olá! &nbsp;Sou um desenvolvedor de software brasileiro
            </h1>
            <span>Desenvolvedor Frontend</span>
            <span>com graduação em Sistemas de Informação.</span>
          </DescriptionContainer>
            <ImageContainer>
              <Image src={ImageProfile} alt="Rafael Borges" height={150} width={150} />
            </ImageContainer>
          </Profile>
          <ExperiencesContainer id={MenuItems.EXPERIENCES}>
            <h2>Experiências</h2>
            <Experiences />
          </ExperiencesContainer>
          <PostsContainer id={MenuItems.BLOG}>
          <h2>Últimas postagens</h2>
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
            <h2>Sobre mim</h2>
            <h3>Eu trabalho com o que amo</h3>
            <p>{`Sou um entusiasta de codificação com uma sede insaciável por crescimento contínuo. Desde 2016, venho me dedicando a aprender e aprimorar constantemente minhas habilidades.`}</p>
            <p>{`Em 2021, concluí minha formação em Sistemas de Informação e, desde então, tenho me aprofundado ainda mais no desenvolvimento, participando de cursos relevantes, como o curso da Rocketseat, que proporcionou um avanço notável nas minhas capacidades.`}</p>
            <p>{`Desde 2018, venho atuando no mercado de trabalho, onde sempre busco soluções excepcionais para resolver problemas de forma eficiente.`}</p>
            <p>{`Minha experiência concentra-se no desenvolvimento front-end, com um foco especial em usabilidade e interface de usuário. Além disso, possuo sólidos conhecimentos em padrões web, segurança, testes, análises e integrações de API.`}</p>
            <p>{`Ao longo do tempo, desenvolvi uma série de projetos interessantes, alguns dos quais estão disponíveis no meu GitHub. Dentre eles, destaco o “buy-management”, um gerenciador de compras que criei utilizando React como framework front-end e Firebase como serviço de banco de dados. Este projeto oferece funcionalidades customizadas, com recursos cuidadosamente projetados para atender às necessidades do cliente.`}</p>
            <p>{`Nascido em Santos, Brasil, tenho paixão por programar e praticar esportes nas horas vagas. Valorizo profundamente a comunicação, a inovação e o respeito.`}</p>
            <p>{`Estou constantemente em busca de novos desafios e oportunidades para continuar aprendendo e evoluindo na área de tecnologia. Se precisar de ajuda ou tiver alguma dúvida, estou à disposição para ajudar!`}</p>
          </AboutMe>
          <ContactContainer id={MenuItems.CONTACT}>
            <Contact />
          </ContactContainer>
        </Content>
      </Container>
  )
}