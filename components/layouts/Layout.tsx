import { SSRProvider } from "@react-aria/ssr";
import Head from "next/head"

import { FC } from "react"
import { Navbar } from '../ui';

interface Props  {
    children:any;
    title?:string;
}

const origin = ( typeof window === 'undefined' ) ? '':window.location.origin

export const Layout:FC<Props> = ({children,title}:Props) => {

 

  return (
  <>
    <Head>
        <title>{ title ||'Pokemon App'}</title>
        <meta name='author' content='Gabriel'></meta>
        <meta name='description' content={`Infomación sobre el Pokemon xxx ${title}`}></meta>
        <meta name='keywords' content={`xxx,pokemon,Pokemon,pokedex ${ title } `}></meta>
        <meta property="og:title" content={`Información sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />
    </Head>
  <SSRProvider>
    <Navbar />
    <main style={{
        padding:'0px 20px'
    }} >
        { children }
    </main>
    </SSRProvider>
  </>
  )
}
