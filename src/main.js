const kids = ['The Wizard of Oz','Inside Out','E.T. The Extra-Terrestrial',
  'Coco','Paddington 2','Incredibles 2','Snow White and the Seven Dwarfs',
  'Toy Story 2','Up','Toy Story 3','Finding Nemo','Pinocchio','Toy Story',
  'Mary Poppins','How to Train Your Dragon','The Incredibles','My Life as a Zucchini',
  'Song Of The Sea','About Elly','Spirited Away','101 Dalmatians'];

const intellectual = ['The Cabinet of Dr. Caligari','Metropolis','The Battle of Algiers',
  'M','Seven Samurai','The 400 Blows','The Wages of Fear','Open City','Tokyo Story',
  'The Leopard','Battleship Potemkin','Au Hasard Balthazar','The Conformist',
  'Let the Right One In','Playtime','Faces Places','Things to Come','Only Yesterday',
  'Tampopo','Three Colors: Red'];

const bold = ['Black Panther','Mad Max: Fury Road','King Kong','The Adventures of Robin Hood',
  'Spider-Man: Homecoming','Seven Samurai','The Treasure of the Sierra Madre','Lawrence of Arabia',
  'Captain America: Civil War','The Hurt Locker','Aliens','The Searchers','The Terminator',
  'The African Queen','Once Upon a Time in the West','Game of Thrones','The Last Kingdom',
  'Casino Royale','Crouching Tiger, Hidden Dragon','Aquaman'];

const obtainDataJson = (title) => {
  fetch('http://www.omdbapi.com/?apikey=2227c3b4&t='+title+'&type=movie&plot=full')
  .then(response => response.json())
  .then(dataMovies => {
     console.log(dataMovies);
  });
};


const titleRandom = window.data.randomMovies(bold);
console.log(titleRandom);
console.log(obtainDataJson(titleRandom));
