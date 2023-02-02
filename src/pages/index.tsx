import { GetStaticProps } from 'next'
import { Inter } from '@next/font/google'
import { Layout } from '../../components/layouts';
import pokeAPi from '../../api/pokeAPi';
import { PokemonListResponse, SmallPokemon } from '../../interfaces/pokemon-list';
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

 interface Props {
 pokemon:SmallPokemon[];
}
export default function Home<SmallPokemon>({ pokemon }:Props) {
  
  return (
    
    <Layout title={'Listado de Pokemon'} >
   
     {
     
      pokemon.map((pokemon)=>(
         <React.Fragment key={pokemon.name} >
         <h2 key={pokemon.id+1} >{pokemon.id}</h2>
         <p key={pokemon.id} >{pokemon.name}</p>
         <img key={pokemon.id+2} src={pokemon.img} alt={pokemon.name} />
         </React.Fragment>
        
      ))
     }

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


