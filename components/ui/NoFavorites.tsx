import { Container,Text,Image } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container css={{
        display:'flex',
        flexDirection:'column',
        height:'calc(100vh - 100px)',
        justifyContent:'center',
        alignItems:'center'
      }} >
        <Text h1>
          No hay Favoritos
          <Image 
          src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png'||'no-image.png'}
          alt='imagen de favoritos'
          width={250}
          height={250}
          css={{
            opacity:0.1
          }

          }
          />
        </Text>

      </Container>
  )
}
