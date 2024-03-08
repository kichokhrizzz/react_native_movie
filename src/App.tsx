import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { Navigation } from './ui/navigation/Navigation'

const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}

export default App
