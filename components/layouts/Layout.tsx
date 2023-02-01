import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui';

interface Props  {
    children:any;
    title?:string;
}
export const Layout:FC<Props> = ({children,title}:Props) => {
  return (
  <>
    <Head>
        <title>{ title ||'Pokemon App'}</title>
        <meta name='author' content='Gabriel'></meta>
        <meta name='description' content={`Infomación sobre el Pokemon xxx ${title}`}></meta>
        <meta name='keywords' content={`xxx,pokemon,Pokemon,pokedex ${ title } `}></meta>
    </Head>
    <Navbar />
    <main style={{
        padding:'0px 20px'
    }} >
        { children }
    </main>
  </>
  )
}
