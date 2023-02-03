
const toggleFavoritesLocalStorage = (id:number) => {

  let favorites:number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

  console.log('soy un toggle');

  if( !favorites.includes( id ) ){
        favorites.push( id );
  }

  localStorage.setItem('favorites', JSON.stringify( favorites ))
}

export{
    toggleFavoritesLocalStorage,
}
