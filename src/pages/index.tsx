import { GetStaticProps } from 'next'
import { Inter } from '@next/font/google'
import { Layout } from '../../components/layouts';
import pokeAPi from '../../api/pokeAPi';
import { PokemonListResponse, SmallPokemon } from '../../interfaces/pokemon-list';
import React from 'react';
import { Card, Grid, Image, Row,Text } from '@nextui-org/react';


const inter = Inter({ subsets: ['latin'] })

 interface Props {
 pokemon:SmallPokemon[];
}
export default function Home<SmallPokemon>({ pokemon }:Props) {
  
  return (
    
    <Layout title={'Listado de Pokemon'} >
    <Grid.Container gap={2} justify="flex-start">
     {
     
      pokemon.map((pokemon)=>(
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}> 
          <Card isHoverable isPressable  >
            <Card.Body css={{ p:1 }}>
              <Card.Image
              src={pokemon.img}
              width='100%'
              height={ 140 }
              ></Card.Image>
            </Card.Body>
            <Card.Footer>
              <Row justify='space-between' >
                <Text transform='capitalize' >{pokemon.name}</Text>
                <Text>{pokemon.id}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))
     }
     </Grid.Container>

     </Layout>
 
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
const resp = await pokeAPi.get<PokemonListResponse>('/pokemon?limit=151');
// name: string;
// url:  string;
// img:string;
// id:number;
let pokemons : SmallPokemon[];
pokemons = resp.data.results.map((pokemon,index) =>(
      {
      name:pokemon.name,
      url:pokemon.url,
      img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`,
      id:index+1
     }
))
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  return {
    props: {
      pokemon:pokemons
    }
  }
}


