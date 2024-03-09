import { Movie } from '../../core/models/movie.model';
import type { Result } from "../interfaces/movie-db.responses";


export class MovieMapper {

    static fromMovieDBResponseToEntity(response: Result): Movie {
        return {
            id: response.id,
            title: response.title,
            description: response.overview,
            releaseData: new Date(response.release_date),
            rating: response.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${response.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${response.backdrop_path}`
        }
    }
}
