import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper"
import { Movie } from "../../models/movie.model"


export const topRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const topRated = await fetcher.get<NowPlayingResponse>('/top_rated')
        return topRated.results.map(result => MovieMapper.fromMovieDBResponseToEntity(result))
    } catch (error) {
        console.log(error)
        throw new Error("Error fetching movies - Top Rated")
    }

}