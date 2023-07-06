import Image from 'next/image'
import { useState } from 'react'
import ImageProfile from '@/assets/images/profile2.jpg'
import { Container, Header, ButtonHeader, Profile, DescriptionContainer, ImageContainer, Experiences } from '../styles/pages'
import { Logo, Label } from '@/components/Atoms'
import IconBmg from '@/assets/icons/bmg.svg'
export default function Home() {

  return (
        <Container>
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
          <Experiences id="experiences">
            <h3>Experiences</h3>
            <Label colorSelected={'white'}>Testes</Label>

            <Logo logoImage={IconBmg} descriptionImage='Bmg' />
          </Experiences>
        </Container>
  )
}