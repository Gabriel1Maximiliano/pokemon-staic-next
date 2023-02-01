import { GetStaticProps } from 'next'
import { Inter } from '@next/font/google'
import { Layout } from '../../components/layouts';

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
  console.log('hola mundo')

  return {
    props: {
      name:'Lola'
    }
  }
}
