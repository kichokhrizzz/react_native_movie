import { useEffect, useState } from "react"
import type { Movie } from "../../core/models/movie.model"
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/http/movieDB.adapter"

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])

    useEffect(() => {
        initialLoad()
    }, [])

    const initialLoad = async () => {
        const nowPlayingmovies = await UseCases.moviesNowPlayingUseCase(
            movieDBFetcher
        )
    }

    return (nowPlaying)
}