import { Grid } from "@nextui-org/react"

import { FavoriteCardPokemon } from "./FavoriteCardPokemon"

interface Props {
    favoritePokemon:number[] | undefined
}
export const FavoritePokemon= ({favoritePokemon}:Props) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start' >
      {
          favoritePokemon?.map((id)=>(
            <FavoriteCardPokemon id={id} key={ id } />
          ))
          
      }
    </Grid.Container>
  )
}
