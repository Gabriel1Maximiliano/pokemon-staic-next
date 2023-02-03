import { Layout } from 'components/layouts';
import React, { FC, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { pokeAPi } from 'api';
import { Pokemon } from '../../../interfaces/pokemon-full';
import { Grid, Card,Text, Button, Container, Image } from '@nextui-org/react';
import { Loading, Spacer } from "@nextui-org/react";
import { existPokemonInLocalStorage, toggleFavoritesLocalStorage } from 'utilities';
import confetti from 'canvas-confetti';

interface Props {
  pokemon:Pokemon;
}
const PokemonByNamePage :FC<Props> = ({pokemon}) => {

 
const [isLoading, setIsloading] = useState(false);

const [isInFavorites, setIsInFavorites] = useState(existPokemonInLocalStorage( pokemon.id ));

 setTimeout(function(){
  setIsloading(true);
}, 1500);

const handleOnToggle = ()=>{
  toggleFavoritesLocalStorage( pokemon.id );
  setIsInFavorites(!isInFavorites);
  if( isInFavorites ) return;

  confetti({
    zIndex:999,
    particleCount:100,
    spread:160,
    angle:-100,
    origin:{
      x:1,
      y:0
    }
  })
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
          <Button color='gradient'
           ghost={ isInFavorites } 
           onPress={handleOnToggle}
           >
            { isInFavorites ? 'En favoritos':'Cargar en favoritos' }
           
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
  const pokemon80=[...Array(80)].map(( value,index )=>`${ index + 1 }`);

 
 const { data } = await pokeAPi.get<Pokemon>(`/pokemon?limit=80`);

 
 const pokemonNames80: string[]= data.results.map( (pokemon: { name: any; })=>pokemon.name )
  return {
    paths: pokemonNames80.map((name)=>(
      {
        params:{ name:name }
      }
    )) ,
   
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name }= params as { name:string };

   const resp = await pokeAPi.get<Pokemon>(`/pokemon/${ name }`);


  
  return {
    props: {
      pokemon:resp.data
    }
  }
}

export default PokemonByNamePage 