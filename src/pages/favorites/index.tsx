import {useEffect} from 'react';
import { useState }from 'react';

import { NoFavorites } from 'components/ui/NoFavorites';
import { Layout } from '../../../components/layouts/Layout';

import { pokemons } from 'utilities';
import { FavoritePokemon } from 'components/pokemon';


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
          <FavoritePokemon favoritePokemon={favoritePokemon} />
        )
      }
     
    </Layout>
  )
}

export default pokemon