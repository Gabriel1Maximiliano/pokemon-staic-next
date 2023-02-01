import { Spacer, useTheme } from "@nextui-org/react"
import { Text } from "@nextui-org/react";
import { Image } from '@nextui-org/react';


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
        <Image 
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"} 
        alt='Icono de la App'
        width={70}
        height={70}/>
       <Text color="white" h2>
        P
       </Text>
       <Text color="white" h4 >
        okemon
       </Text>
       <Spacer css={{flex:1}}></Spacer>
       <Text color="white">
         Favoritos
       </Text>
        </div>
  )
}
