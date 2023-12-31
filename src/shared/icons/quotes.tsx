import Svg, { Path, SvgProps } from 'react-native-svg'

export const Quotes = (props: SvgProps) => {
  return (
    <Svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" {...props}>
      <Path
        d="M6,15.2c0,0.7732,0.6268,1.4,1.4,1.4s1.4-0.6268,1.4-1.4c0-0.121-0.0201-0.2363-0.049-0.3483l1.8212-3.1877l3.1885,1.8221
			C13.9293,14.0702,14.4617,14.5,15.1,14.5c0.7732,0,1.4-0.6268,1.4-1.4c0-0.1271-0.0224-0.2479-0.0541-0.365l2.556-4.6006
			C19.5778,7.9608,20,7.4325,20,6.8c0-0.7732-0.6268-1.4-1.4-1.4s-1.4,0.6268-1.4,1.4c0,0.1266,0.0222,0.247,0.0537,0.3636
			l-2.5369,4.5659l-3.1777-1.8162C11.3705,9.3295,10.8381,8.9,10.2,8.9c-0.7732,0-1.4,0.6268-1.4,1.4
			c0,0.1212,0.0203,0.2368,0.0492,0.3489l-1.835,3.2117C6.43,14.029,6,14.5616,6,15.2z"
        fill={props.color}
      />
      <Path
        d="M21,18H4V5c0-0.5527-0.4473-1-1-1S2,4.4473,2,5v14c0,0.5527,0.4473,1,1,1h18c0.5527,0,1-0.4473,1-1S21.5527,18,21,18z"
        fill={props.color}
      />
    </Svg>
  )
}
