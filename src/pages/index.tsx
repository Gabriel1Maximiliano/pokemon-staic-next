
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <h1>Hola Mundo</h1>
     <Button color='warning' >Click me</Button>;
    </>
  )
}
