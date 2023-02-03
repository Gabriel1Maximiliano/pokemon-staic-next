import { Grid, Card } from "@nextui-org/react"
import { useRouter } from 'next/router';

export const FavoriteCardPokemon = ({ id }:{id:number}) => {

  const router = useRouter();
  
  const handlePokemonClicked = ()=>{
   router.push(`/pokemon/${ id }`);
  }
    return (
        <Grid xs={ 6 } sm={ 2 } xl={ 1 }  key={ id }  >
        <Card isHoverable isPressable css={{padding:10}} onPress={ handlePokemonClicked }>
          
          <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`} 
          width={'100%'}
          height={140}
          />
          
        </Card>
      </Grid>
    )
  }