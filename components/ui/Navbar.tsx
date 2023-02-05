import { Button, Grid, Input, Spacer, useTheme } from "@nextui-org/react"
import { Text,Link as NextUiLink} from "@nextui-org/react";
import { Image } from '@nextui-org/react';
import { pokeAPi } from "api";
import { PokemonListResponse } from "interfaces";
import Link  from 'next/link'
import { useRouter } from "next/router";
import { useState} from 'react';

export const Navbar = () => {
  
  const router = useRouter();

  const [search, setSearch] = useState('');


  const handleSeaech = async(e:any)=>{
    const resp = await pokeAPi.get<PokemonListResponse>(`pokemon/${ search }`);

    router.push(`/name/${ search }`);
  }
    const { theme } = useTheme();
  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'initial',
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
        <Input 
        onChange={(e)=>setSearch(e.target.value.toLowerCase().trim())}
        size="md" 
          labelPlaceholder="Nombre" 
          status="secondary" 
        />
      
      <Grid css={{ marginLeft:'10px' }}>
        <Button 
        bordered 
        color="gradient"
         auto 
         onPress={handleSeaech}
         
         >
          Buscar
        </Button>
      </Grid>
       <Spacer css={{flex:1}}></Spacer>
        <Link href="/favorites"  passHref legacyBehavior>
          <NextUiLink css={{ marginRight:'10px' }} >
          <Text color='white'h4>Favoritos</Text>
          </NextUiLink>
        </Link>
        </div>
  )
}
