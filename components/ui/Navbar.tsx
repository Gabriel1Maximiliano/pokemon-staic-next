import { Spacer, useTheme } from "@nextui-org/react"
import { Text,Link as NextUiLink} from "@nextui-org/react";
import { Image } from '@nextui-org/react';
import Link  from 'next/link'

export const Navbar = () => {
    const { theme } = useTheme();
  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0px 20px',
        backgroundColor:theme?.colors.gray100.value
    }} >
      <Link href='/' >
     
        <Image 
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"} 
        alt='Icono de la App'
        width={70}
        height={70}/>
         </Link>
         <Link href='/' passHref legacyBehavior>
       <NextUiLink>
       <Text color="white" h2>
        P
       </Text>
       <Text color="white" h4 >
        okémon
       </Text>
       </NextUiLink>
       </Link>
       <Spacer css={{flex:1}}></Spacer>
       <Text color="white">
        <Link href="/favorites"  passHref legacyBehavior>
          <NextUiLink css={{ marginRight:'10px' }} >
          <Text color="white" h4 >Favoritos</Text>
          </NextUiLink>
        </Link>
        
       </Text>
        </div>
  )
}
