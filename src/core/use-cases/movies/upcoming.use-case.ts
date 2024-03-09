import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses"
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper"
import { Movie } from "../../models/movie.model"

export const upcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

    try {
        const upcoming = await fetcher.get<NowPlayingResponse>('/upcoming')
        return upcoming.results.map(result => MovieMapper.fromMovieDBResponseToEntity(result))
    } catch (error) {
        console.log(error)
        throw new Error("Error fetching movies - Upcoming")
    }
}