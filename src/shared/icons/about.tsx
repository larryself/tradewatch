import Svg, { Path, SvgProps } from 'react-native-svg'

export const About = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M 4.0097656 3 C 2.9179106 3 2.0097656 3.9049841 2.0097656 4.9980469 L 2 23 L 6 19 L 20 19 C 21.093063 19 22 18.093063 22 17 L 22 5 C 22 3.9069372 21.093063 3 20 3 L 4.0097656 3 z M 4.0097656 5 L 20 5 L 20 17 L 5.171875 17 L 4.0039062 18.167969 L 4.0097656 5 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 15 L 13 15 L 13 11 L 11 11 z"
        fill={props.color}
      />
    </Svg>
  )
}
