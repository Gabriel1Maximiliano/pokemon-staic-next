
import { NoFavorites } from 'components/ui/NoFavorites';
import { Layout } from '../../../components/layouts/Layout';
import {useEffect} from 'react';
import { useState }from 'react';
import { pokemons } from 'utilities';
import { Card, Grid } from '@nextui-org/react';


const pokemon = () => {

  const [favoritePokemon, setFavoritePokemon] = useState<number[]>();
 
useEffect(()=>{
  setFavoritePokemon(pokemons());
  pokemons
},[])
  return (
    <Layout title='Pokémons-Favoritos' >

      {
        favoritePokemon?.length === 0 ? (<NoFavorites />)
        :(
          <Grid.Container gap={ 2 } direction='row' justify='flex-start' >
            {
              favoritePokemon?.map( id =>(
                <Grid xs={ 6 } sm={ 2 } xl={ 1 }  key={ id }>
                  <Card isHoverable isPressable css={{padding:10}} >
                    <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`} 
                    width={'100%'}
                    height={140}
                    />
                  </Card>
                </Grid>
              ) )
            }
          </Grid.Container>
        )
      }
     
    </Layout>
  )
}

export default pokemon