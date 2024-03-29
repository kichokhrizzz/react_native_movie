import React from 'react'
import { Text, View } from 'react-native'
import { Movie } from '../../../core/models/movie.model'
import { FlatList } from 'react-native-gesture-handler'
import { MoviePoster } from './MoviePoster'

interface Props {
    movies: Movie[],
    title?: string
}

const HorizontalCarousel = ({ movies, title }: Props) => {
    return (
        <View style={{ height: title ? 260 : 220 }}>
            {
                title && (
                    <Text style={{ fontSize: 30, fontWeight: '300', marginLeft: 10, marginBottom: 10 }}>
                        {title}
                    </Text>
                )
            }

            <FlatList
                data={movies}
                 renderItem={ ({ item }) => (
                    <MoviePoster movie={item} width={140} height={200} />
            ) } 
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}/>
        </View>
    )
}

export default HorizontalCarousel
