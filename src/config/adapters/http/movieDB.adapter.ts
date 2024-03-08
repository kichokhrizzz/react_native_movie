import { AxiosAdapter } from "./axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseurl:'https://api.themoviedb.org/3/movie',
    params: {
        api_key : '1fd9248cbe4d12cbf6402b04ddd81702',
        language: 'es'
    }
})