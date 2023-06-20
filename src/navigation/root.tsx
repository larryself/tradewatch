import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Screens } from './routes'
import { TabComponent } from './tabbar'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.Tab} component={TabComponent} />
    </Stack.Navigator>
  )
}
