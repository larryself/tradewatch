import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from 'src/navigation'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
