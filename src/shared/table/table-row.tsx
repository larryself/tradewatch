import React from 'react'
import styled from 'styled-components/native'

import { Arrow, Separator } from 'src/shared'
import { Quote } from 'src/types'

import { ITEM_HEIGHT } from './table'

type Props = { item: Quote }

export const TableRow = ({ item }: Props) => {
  const { name, last, highestBid, percentChange } = item
  const percentValue = Number(percentChange) * 100
  const iconColor = percentValue > 0 ? '#68D866' : '#f23937'
  const iconRotate = {
    transform: [{ rotate: percentValue > 0 ? '180deg' : '0deg' }],
  }

  return (
    <Container>
      <CellName numberOfLines={1}>{name.replace('_', ' ')}</CellName>
      <Separator type={'vertical'} />
      <CellValue>{last}</CellValue>
      <Separator type={'vertical'} />
      <CellValue>{highestBid}</CellValue>
      <Separator type={'vertical'} />
      <Wrap>
        <Arrow color={iconColor} style={iconRotate} />
        <CellValue
          style={{
            textAlign: 'right',
          }}>
          {percentValue.toFixed(2)}%
        </CellValue>
      </Wrap>
    </Container>
  )
}

const CellName = styled.Text`
  flex: 1;
  font-size: 10px;
  line-height: 16px;
  font-weight: bold;
  text-align: left;
  align-items: center;
`
const CellValue = styled.Text`
  padding: 0 2px;
  flex: 1;
  font-size: 10px;
  line-height: 16px;
  text-align: left;
`
const Wrap = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`
const Container = styled.View`
  height: ${ITEM_HEIGHT}px;
  align-items: center;
  flex-direction: row;
`
