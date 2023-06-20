import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Screens } from 'src/navigation'
import { AboutScreen, QuotesScreen } from 'src/screens'
import { About, Quotes } from 'src/shared'

const Tab = createBottomTabNavigator()

export const TabComponent = () => (
  <Tab.Navigator
    initialRouteName={'main'}
    screenOptions={{
      header: () => null,
      tabBarStyle: styles.bar,
      tabBarItemStyle: styles.item,
    }}
  >
    <Tab.Screen
      name={Screens.About}
      component={AboutScreen}
      options={{ tabBarIcon: About }}
    />
    <Tab.Screen
      name={Screens.Quotes}
      component={QuotesScreen}
      options={{ tabBarIcon: Quotes }}
    />
  </Tab.Navigator>
)
const styles = StyleSheet.create({
  bar: {
    paddingTop: 11,
    paddingBottom: 11,
    height: 70,
    backgroundColor: '#fcfcfc',
    borderTopWidth: 0,
  },
  item: {
    height: 43,
  },
})
