import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable'
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup'
import _ from 'lodash';

class Movies extends Component {
	state = {
		movies: [],
		genres: [],
		pageSize: 4,
		currentPage: 1,
		sortColumn: { path: 'title', order: 'asc' }
	}

	//a change in state will cause all the children to be re-rendered

	componentDidMount() {
		const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
		this.setState({ movies: getMovies(), genres: genres});
	}

	// movies: getMovies(),

	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({ movies: movies}); 
	};

	handleLike = movie => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		// movies[index] = { ...movies[index]};
		movies[index].liked = !movies[index].liked;
		this.setState({ movies: movies}); 
	}

	handlePageChange = page => {
		this.setState ({ currentPage: page }) 
	};

	handleGenreSelect = genre => {
		this.setState({ selectedGenre: genre, currentPage: 1});
	}

	handleSort = sortColumn => {
		this.setState({ sortColumn }); 
	};

	// <h1>{this.state.movies[1].title}</h1>

	render() {

		const { length: count } = this.state.movies;

		const { 
			pageSize, 
			currentPage, 
			selectedGenre, 
			movies:allMovies,
			sortColumn 
		} = this.state;

		if (count === 0) return <p>There are no movies in the database.</p>
	
		const filtered = (selectedGenre && selectedGenre._id) ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

		// const sorted = filtered.sort (
		// 	(a, b, path) => {
		// 		if (a.path < b.path) { return -1; }
		// 		if (a.path > b.path) { return 1; }
		// 		return 0;
		// 		}
		// 	);
		// console.log(sorted);

		const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

		const movies = paginate (sorted, currentPage, pageSize);

		return(
			<div className="row">
				<div className="col-3">
					<ListGroup 
					items={this.state.genres}
					selectedItem={this.state.selectedGenre}
					onItemSelect={this.handleGenreSelect}
					/>
				</div>
				<div className="col-2">
					<p>Showing {filtered.length} movies in the database.</p>
					<MoviesTable 
						movies = {movies} 
						sortColumn={sortColumn}
						onlike = {this.handleLike} 
						onDelete = {this.handleDelete}
						onSort = {this.handleSort}
					/>
					<Pagination
						itemsCount = {filtered.length} 
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={this.handlePageChange}
						/>
				</div>
			</div>
		)
	}
}

export default Movies;
