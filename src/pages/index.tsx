
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from '@nextui-org/react'
import { Layout } from '../../components/layouts';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <Layout title={'Listado de Pokemon'} >
     <h1>Hola Mundo</h1>
     <Button color='warning' >Click me</Button>
     </Layout>
 
  )
}
