import { GetStaticProps } from 'next'
import { Inter } from '@next/font/google'
import { Layout } from '../../components/layouts';
import pokeAPi from '../../api/pokeAPi';
import { PokemonListResponse } from '../../interfaces/pokemon-list';


const inter = Inter({ subsets: ['latin'] })

export default function Home(props:any) {
  console.log(props)
  return (
    
    <Layout title={'Listado de Pokemon'} >
    <ul>
      <li>Pokémon</li>
      <li>Pokémon</li>
      <li>Pokémon</li>
      <li>Pokémon</li>
      <li>Pokémon</li>
      <li>Pokémon</li>
    </ul>
     </Layout>
 
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
const resp = await pokeAPi.get<PokemonListResponse>('/pokemon?limit=151');
console.log(resp)
  return {
    props: {
      pokemons:resp.data.results
    }
  }
}


