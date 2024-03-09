import { useEffect, useState } from "react"
import type { Movie } from "../../core/models/movie.model"
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/http/movieDB.adapter"

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])


    useEffect(() => {
        initialLoad()
    }, [])

    const initialLoad = async () => {
        const nowPlayingMoviesPromise = await UseCases.moviesNowPlayingUseCase(
            movieDBFetcher
        )
        const upcomingMoviesPromise = await UseCases.upcomingUseCase(
            movieDBFetcher
        )
        const topRatedMoviesPromise = await UseCases.topRatedUseCase(
            movieDBFetcher
        )
        const popularMoviesPromise = await UseCases.popularUseCase(
            movieDBFetcher
        )

        const [
            nowPlayingMovies,
            upcomingMovies,
            topRatedMovies,
            popularMovies
        ] = await Promise.all([
            nowPlayingMoviesPromise,
            upcomingMoviesPromise,
            topRatedMoviesPromise,
            popularMoviesPromise
        ]
        )
        setNowPlaying(nowPlayingMovies)
        setPopular(popularMovies)
        setTopRated(topRatedMovies)
        setUpcoming(upcomingMovies)
        setIsLoading(false)
    }

    return {
        isLoading,
        nowPlaying,
        upcoming,
        topRated,
        popular
    }
}
