import { Layout } from 'components/layouts';
import React, { FC, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { pokeAPi } from 'api';
import { Pokemon } from '../../../interfaces/pokemon-full';
import { Grid, Card,Text, Button, Container, Image } from '@nextui-org/react';
import { Loading, Spacer } from "@nextui-org/react";

interface Props {
  pokemon:Pokemon;
}
const PokemonPage:FC<Props> = ({pokemon}) => {

 
const [isLoading, setIsloading] = useState(false);

 setTimeout(function(){
  setIsloading(true);
}, 1500);

const handleOnToggle = ()=>{
console.log('soy toggle')
}
  return (
  <Layout title={ pokemon.name }>
    <Grid.Container css={{ marginTop:'0px'}} gap={ 2 } >
     <Grid xs={ 12 } sm={ 4 } >
     <Card isHoverable css={{ padding:'30px' }}>
      {
        isLoading ? ( <Card.Body css={{color:'red'}} >
      
        <Card.Image 
        src={ pokemon.sprites.other?.dream_world.front_default || 'mo-image.png' }
        alt='pokemon'
        width='100%'
        />
      </Card.Body>):(  <><Spacer /><Loading size="xl" /><Spacer /></>)
      }
       
      </Card>
     </Grid>
     <Grid xs={ 12 } sm={ 8 } >
      <Card>
        <Card.Header css={{ display:'flex', justifyContent:'space-between' }}>
          <Text h1 transform='capitalize' >{pokemon.name}</Text>
          <Button color='gradient' ghost onPress={handleOnToggle}>
            Guardar en Favoritos
          </Button>
        </Card.Header>
        <Card.Body>
          <Text size={30} >Sprites</Text>
          <Container direction='row' display='flex' gap={0} >
            <Image
            src={ pokemon.sprites.front_default }
            alt={ pokemon.name }
            width={ 100 }
            height={ 100 }
            />
             <Image
            src={ pokemon.sprites.back_default }
            alt={ pokemon.name }
            width={ 100 }
            height={ 100 }
            />
             <Image
            src={ pokemon.sprites.front_shiny }
            alt={ pokemon.name }
            width={ 100 }
            height={ 100 }
            />
            <Image
            src={ pokemon.sprites.back_shiny }
            alt={ pokemon.name }
            width={ 100 }
            height={ 100 }
            />
          </Container>
        </Card.Body>
      </Card>

     </Grid>
    </Grid.Container>
  </Layout>
  )
}
export const getStaticPaths:GetStaticPaths = async(ctx)=> {
  const pokemon151=[...Array(80)].map(( value,index )=>`${ index + 1 }`);

  return {
    paths: pokemon151.map((id)=>(
      {
        params:{ id:id }
      }
    )) ,
   
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id }= params as { id:string };

   const resp = await pokeAPi.get<Pokemon>(`/pokemon/${ id }`);


  
  return {
    props: {
      pokemon:resp.data
    }
  }
}

export default PokemonPage