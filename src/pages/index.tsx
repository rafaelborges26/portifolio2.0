import Image from 'next/image'
import { useState } from 'react'
import ImageProfile from '@/assets/images/profile2.jpg'
import { Container, Header, ButtonHeader, Profile, ImageContainer } from '../styles/pages'


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
            <h1>
            Hello, I’m a Software developer from Brazil
            </h1>
            <ImageContainer>
              <Image src={ImageProfile} alt="Rafael Borges" />
            </ImageContainer>
          </Profile>
        </Container>
  )
}