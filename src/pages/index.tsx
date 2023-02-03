import { GetStaticProps } from 'next'
import { Inter } from '@next/font/google'
import { Layout } from '../../components/layouts';
import pokeAPi from '../../api/pokeAPi';
import { PokemonListResponse, SmallPokemon } from '../../interfaces/pokemon-list';
import React from 'react';
import {  Grid,} from '@nextui-org/react';
import { PokemonCard } from 'components/pokemon';


const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemon: SmallPokemon[];
}
export default function Home({ pokemon }:Props) {

  return (

    <Layout title={'Listado de Pokemon'} >
      <Grid.Container gap={2} justify="flex-start" >
        {

          pokemon.map((pokemon) => (
            <PokemonCard pokemon={ pokemon } key={ pokemon.id } />
          ))
        }
      </Grid.Container>

    </Layout>

  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const resp = await pokeAPi.get<PokemonListResponse>('/pokemon?limit=151');

  let pokemons: SmallPokemon[];
  pokemons = resp.data.results.map((pokemon, index) => (
    {
      name: pokemon.name,
      url: pokemon.url,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
      id: index + 1
    }
  ))
  
  return {
    props: {
      pokemon: pokemons
    }
  }
}


