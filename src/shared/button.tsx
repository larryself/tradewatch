import React from 'react'
import { Text, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

type Props = { title: string } & TouchableOpacityProps

const Container = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  border-radius: 15px;
  background-color: #03b4db;
`

export const Button = ({ title, ...props }: Props) => {
  return (
    <Container {...props}>
      <Text>{title}</Text>
    </Container>
  )
}
