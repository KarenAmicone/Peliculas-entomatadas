const movieArrays = [
	[
		"The lunchbox",
		"Up in the air",
		"Carol",
		"The big sick",
		"Casablanca",
		"Her",
		"Shakespeare in Love",
		"About a boy",
		"Before sunrise",
		"The Hustler",
		"The African Queen",
		"The Artist",
		"Your Name",
		"Enough Said",
		"Midnight in Paris",
		"The Graduate",
		"The Duke of Burgundy",
		"Crazy Heart",
		"Dave",
		"Breathe In",
		"In the Mood for Love",
		"The Curious Case of Benjamin Button",
		"The Reader",
		"Atonement",
		"The Theory of Everything",
	],
	[
		"Lady Bird",
		"La la land",
		"The Death of Stalin",
		"Crazy Rich Asians",
		"Sorry to Bother You",
		"Bullets Over Broadway",
		"Blindspotting",
		"Old School",
		"O Brother",
		"The Heat",
		"Game Night",
		"Pulp Fiction",
		"The Hangover",
		"Dumb and Dumber",
		"School of Rock",
		"Hot Fuzz",
		"The Breakfast Club",
		"Burn After Reading",
		"Bachelorette",
		"The Birdcage",
		"Happy Gilmore",
		"Ace Ventura: Pet Detective",
		"Shaun of the Dead",
		"Zombieland",
	],
	[
		"A Quiet Place",
		"It Follows",
		"Let the Right One In",
		"The Cabin in the Woods",
		"A Girl Walks Home Alone at Night",
		"The Blair Witch Project",
		"The Texas Chainsaw Massacre",
		"Night of the Living Dead",
		"Bone Tomahawk",
		"The Shining",
		"Get Out",
		"Audition",
		"The Thing",
		"Evil Dead",
		"Funny Games",
		"Mulholland Dr.",
		"Martyrs",
		"The Orphanage",
		"Suspiria",
		"A Nightmare on Elm Street",
		"Hereditary",
		"Halloween",
		"Climax",
		"Annihilation",
		"Berlin Syndrome",
	],
	[
		"The Prestige",
		"The Game",
		"The Kindergarten Teacher",
		"The Silence of the Lambs",
		"Twelve Monkeys",
		"Black Swan",
		"Oldboy",
		"Primal Fear",
		"Red Dragon",
		"The Bone Collector",
		"Border",
		"Overlord",
		"The House That Jack Built",
		"Missing",
		"Side Effects",
		"Let Me In",
		"The Imitation Game",
		"Gerald’s Game",
		"The Gift",
		"Raw",
		"A Separation",
		"Chinatown",
		"The Usual Suspects",
		"The Hateful Eight",
		"Mystic River",
	],
	[
		"The Wizard of Oz",
		"Inside Out",
		"E.T. The Extra-Terrestrial",
		"Coco",
		"Paddington 2",
		"Incredibles 2",
		"Snow White and the Seven Dwarfs",
		"Toy Story 2",
		"Up",
		"Toy Story 3",
		"Finding Nemo",
		"Pinocchio",
		"Toy Story",
		"Mary Poppins",
		"How to Train Your Dragon",
		"The Incredibles",
		"My Life as a Zucchini",
		"Song Of The Sea",
		"About Elly",
		"Spirited Away",
		"101 Dalmatians",
		"Moana",
		"Isle of Dogs",
		"Kubo and the Two Strings",
		"Monsters University",
		"Persépolis",
	],
	[
		"The Cabinet of Dr. Caligari",
		"Metropolis",
		"The Battle of Algiers",
		"M",
		"Seven Samurai",
		"The 400 Blows",
		"The Wages of Fear",
		"Open City",
		"Tokyo Story",
		"The Leopard",
		"Battleship Potemkin",
		"Au Hasard Balthazar",
		"The Conformist",
		"Let the Right One In",
		"Playtime",
		"Faces Places",
		"Things to Come",
		"Only Yesterday",
		"Tampopo",
		"Three Colors: Red",
		"Elevator to the Gallows",
		"Watership Down",
		"Being There",
		"Pollock",
		"Downtown 81",
	],
	[
		"Black Panther",
		"Mad Max: Fury Road",
		"King Kong",
		"The Adventures of Robin Hood",
		"Spider-Man: Homecoming",
		"Seven Samurai",
		"The Treasure of the Sierra Madre",
		"Lawrence of Arabia",
		"Captain America: Civil War",
		"The Hurt Locker",
		"Aliens",
		"The Searchers",
		"The Terminator",
		"The African Queen",
		"Once Upon a Time in the West",
		"Game of Thrones",
		"The Last Kingdom",
		"Casino Royale",
		"Crouching Tiger, Hidden Dragon",
		"Aquaman",
		"Deadpool",
		"Baby Driver",
		"Ronin",
		"Deep Blue Sea",
		"Never Die Alone",
	],
	[
		"The%20Hitchhiker%27s%20Guide%20to%20the%20Galaxy",
		"Cloud Atlas",
		"The Matrix",
		"Inception",
		"Looper",
		"Chronicle",
		"Titan A.E.",
		"Rise of the Planet of the Apes",
		"The Box",
		"Repo Men",
		"The Hunger Games",
		"Back to the Future",
		"Cloverfield",
		"Star Trek",
		"Ghostbusters",
		"Star Wars",
		"The Fifth Element",
		"Starship Troopers",
		"Total Recall",
		"The Book of Eli",
		"High Life",
		"Advantageous",
		"Creation of the Humanoids",
		"Upstream Color",
		"Alien Raiders",
	],
];

const home = document.getElementById("home");
const buttonReturn = document.getElementById("return");
buttonReturn.style.display = "none";
const cardContainer = document.getElementById("card-container");
const moviesContainer = document.querySelector(".movies-container");

const lookForItButton = document.getElementById("look-for-it");
const search = document.getElementById("search");

const moods = document.getElementsByClassName("mood");
let dataMoviesProperties = {};
let selectedMovies = [];

const drawnCards = (movie) => {
	let card = `
	<div class="card">
		<div class="card-image waves-effect waves-light">
			<img class="activator" src="${movie.poster}" alt="No Poster">
		</div>
		<div class="card-content size">
			<span class="card-title activator grey-text text-darken-4">${movie.title}<i class="material-icons right">more_vert</i></span>
			<p>${movie.year}</p>
			<p class="to-movie-website"><a href="${movie.website}">Website</a></p>
		</div>
		<div class="card-reveal">
			<span class="card-title grey-text text-darken-4">${movie.title}<i class="material-icons right">close</i></span>
			<p>Director: ${movie.director}</p>
			<p>Cast: ${movie.actors}</p>
			<p>Run time: ${movie.runTime}</p>
			<h5>Synopsis</h5>
			<p>${movie.plot}.</p>
		</div>
  	</div>`;
	cardContainer.insertAdjacentHTML("beforeend", card);
};

//Show List Data
const showCards = (moviesList) => {
	cardContainer.innerHTML = "";
	moviesList.forEach((element) => {
		drawnCards(element);
	});
};

for (let i = 0; i < moods.length; i++) {
	moods[i].addEventListener("click", () => {
		home.style.display = "none";
		moviesContainer.style.display = "flex";
		cardContainer.style.display = "flex";
		buttonReturn.style.display = "block";
		const moodValue = parseInt(moods[i].value);
		const arraySelected = movieArrays[moodValue];
		selectedMovies = [];
		obtainMovies(arraySelected);
	});
}

const obtainDataJson = (title) => {
	fetch(
		"https://www.omdbapi.com/?apikey=2227c3b4&t=" +
			title +
			"&type=movie&plot=full"
	)
		.then((response) => response.json())
		.then((dataMovies) => {
			dataMoviesProperties = {
				title: dataMovies.Title,
				director: dataMovies.Director,
				actors: dataMovies.Actors,
				plot: dataMovies.Plot,
				runTime: dataMovies.Runtime,
				poster: dataMovies.Poster,
				year: dataMovies.Year,
				website: dataMovies.Website,
			};
			selectedMovies.push(dataMoviesProperties);
			showCards(selectedMovies);
		});
};

const searchMovieJson = (title) => {
	fetch(
		"https://www.omdbapi.com/?apikey=2227c3b4&s=" +
			title +
			"&type=movie&plot=full"
	)
		.then((responseSearch) => responseSearch.json())
		.then((dataMoviesSearch) => {
			if (dataMoviesSearch.Search.length != 0) {
				dataMoviesSearch.Search.forEach((element) => {
					obtainDataJson(element.Title);
				});
			}
		})
		.catch((error) => {
			console.log(error);
			home.style.display = "flex";
			moviesContainer.style.display = "none";
			cardContainer.style.display = "none";
			buttonReturn.style.display = "none";
		});
};

const obtainMovies = (arr) => {
	const result = [window.data.randomMovies(arr)];
	for (let i = 0; i < 1; i++) {
		const movieTitle = window.data.randomMovies(arr);
		if (result[0] != movieTitle) {
			result.push(movieTitle);
		} else {
			obtainMovies(arr);
		}
	}
	moviesValidation(result);
};

const moviesValidation = (arr) => {
	arr.forEach((element) => obtainDataJson(element));
};

const returning = document.getElementById("return");
returning.addEventListener("click", () => {
	home.style.display = "flex";
	buttonReturn.style.display = "none";
	moviesContainer.style.display = "none";
	cardContainer.innerHTML = "";
});

const logoBttn = document.getElementById("logo-bttn");
logoBttn.addEventListener("click", () => {
	home.style.display = "flex";
	buttonReturn.style.display = "none";
	moviesContainer.style.display = "none";
	cardContainer.innerHTML = "";
});

/* lookForItButton.addEventListener("click", function (e) {
	e.preventDefault();
	let movieToSearch = search.value;
	if (movieToSearch.length != 0) {
		selectedMovies = [];
		searchMovieJson(movieToSearch);
		home.style.display = "none";
		moviesContainer.classList.add("auto-height-container");
		cardContainer.style.display = "flex";
		buttonReturn.style.display = "block";
		search.value = "";
	}
}); */
