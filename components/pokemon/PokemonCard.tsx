import { Grid, Card, Row, Text, Loading,Spacer } from '@nextui-org/react';
import { SmallPokemon } from 'interfaces';
import { FC, useState } from 'react';
import { useRouter } from 'next/router';

// (  <><Spacer /><Loading size="xl" /><Spacer /></>)

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {


const [isLoading, setIsloading] = useState(false);

  setTimeout(function(){
    setIsloading(true);
 }, 1500);
 

  const router = useRouter();

  const handlePokemonRootByName = () => {
    router.push(`/name/${pokemon.name}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card
        isHoverable isPressable
        onPress={handlePokemonRootByName}
      >
        <Card.Body css={{ p: 1 }}>
          {
            isLoading ? ( <Card.Image
              src={pokemon.img}
              width='100%'
              height={140}
              alt='imagen'
              objectFit="scale-down"
            ></Card.Image>):(  <><Spacer /><Loading size="xl" /><Spacer /></>)
          }
         
          </Card.Body>



        <Card.Footer>
          <Row justify='space-between' >
            <Text transform='capitalize' >{pokemon.name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
