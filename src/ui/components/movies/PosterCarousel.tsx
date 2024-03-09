import React from 'react'
import { View, Text } from 'react-native'
import { Movie } from '../../../core/models/movie.model'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { MoviePoster } from './MoviePoster'

interface Props {
    movies: Movie[]
    height?: number
}

export default function PosterCarousel({ height = 440, movies }: Props) {
    return (
        <View style={{ height }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    movies.map(movie => <MoviePoster key={movie.id} movie={movie}/>)
                }
            </ScrollView>
        </View>
    )
}
