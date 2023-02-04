import { pokeAPi } from "api";
import { Pokemon } from "interfaces";



export const getPokemonData = async(nameOrId:string) => {
  
try {
  const { data } = await pokeAPi.get<Pokemon>(`/pokemon/${ nameOrId }`);

  const pokemon ={
   id:data.id,
   name:data.name,
   sprites:data.sprites

 }
 return pokemon;
} catch (error) {
  return null;
}
  
}
