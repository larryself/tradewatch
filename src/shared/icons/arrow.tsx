import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Arrow = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12.0089 14.5575L12 14.5574L11.9911 14.5575C11.2016 14.5669 10.4404 14.2647 9.87235 13.7166L6.2344 10.04L9.87967 13.6853L9.88663 13.6922L9.89376 13.699C10.4623 14.2385 11.2162 14.5392 12 14.5392C12.7838 14.5392 13.5377 14.2385 14.1062 13.699L14.1134 13.6922L14.1203 13.6853L17.7655 10.0401L14.1276 13.7166C13.5596 14.2647 12.7984 14.5669 12.0089 14.5575Z"
        fill="black"
        stroke={props.color}
        strokeWidth="1.5"
      />
    </Svg>
  )
}
