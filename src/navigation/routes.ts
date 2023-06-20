import type { ParamListBase } from '@react-navigation/native'
import { useNavigation as useNativeNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum Screens {
  Tab = 'Tab',
  About = 'About',
  Quotes = 'Quotes',
}

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Screens>>()
