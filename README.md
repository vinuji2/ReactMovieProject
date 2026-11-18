# Movieland

I built Movieland to practise connecting a React app to an external API. It lets you search for movies by title using The Movie Database (TMDB) and browse the results as cards with posters, titles, and release dates.

## What it does

- Loads results for “Spiderman” when the app opens.
- Searches TMDB when you enter a title and click the search icon.
- Shows a “No movies Found” message when there are no results.
- Uses a placeholder image URL when TMDB has no poster for a movie.

## Run locally

With Node.js and npm installed, run:

```bash
git clone https://github.com/vinuji2/ReactMovieProject.git
cd ReactMovieProject
npm install
npm start
```

Open [localhost:3000](http://localhost:3000). Movie search needs an internet connection and a valid TMDB API key. The current implementation reads the key from `src/App.js`.

## How it works

`src/App.js` uses `useState` to track the search input and results, `useEffect` to load the initial search, and `fetch` to request movie data. `src/MovieCard.jsx` renders each result. The project uses React, CSS, and Create React App. Run `npm run build` to generate the production build in `build/`.

Movie data and poster images are provided by [The Movie Database](https://www.themoviedb.org/).
