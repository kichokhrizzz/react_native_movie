import { Text, View } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import PosterCarousel from "../../components/movies/PosterCarousel"
import HorizontalCarousel from "../../components/movies/HorizontalCarousel"
const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
    if (isLoading) {
        return (<Text>Cargando</Text>)
    }
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                {/* Carrusel Principal */}
                <PosterCarousel movies={nowPlaying} />

                {/* Top Rated */}
                <HorizontalCarousel movies={topRated} title="Top Rated" />

                {/* Populares */}
                <HorizontalCarousel movies={popular} title="Populares" />

                {/* Proximamente */}
                <HorizontalCarousel movies={upcoming} title="Próximamente" />

            </View>
        </ScrollView>
    )
}

export default HomeScreen
