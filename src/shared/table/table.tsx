import React from 'react'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import { Separator, TableRow } from 'src/shared'
import { Quote } from 'src/types'

type Props = {
  quotes: Quote[]
  isError?: boolean
}

export const ITEM_HEIGHT = 24
export const SEPARATOR_HEIGHT = 1

export const Table = ({ quotes, isError }: Props) => {
  const windowSize = quotes.length > 50 ? quotes.length / 4 : 50

  return (
    <>
      <TableHead>
        <TableTitle>Ticker</TableTitle>
        <TableTitle>Last</TableTitle>
        <TableTitle>Highest Bid</TableTitle>
        <TableTitle>Percent Change</TableTitle>
      </TableHead>
      <Separator />
      {isError && (
        <ErrorBox>
          <ErrorTitle>Failed to load</ErrorTitle>
        </ErrorBox>
      )}
      <FlatList
        data={quotes}
        renderItem={(props) => <TableRow {...props} />}
        numColumns={1}
        keyExtractor={(item) => `${item.name}-${item.id}`}
        ItemSeparatorComponent={Separator}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT + SEPARATOR_HEIGHT,
          offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index,
          index,
        })}
        initialNumToRender={50}
        maxToRenderPerBatch={windowSize}
        windowSize={windowSize}
      />
    </>
  )
}

const TableHead = styled.View`
  flex-direction: row;
`
const TableCell = styled.Text`
  flex: 1;
  text-align: center;
`
const TableTitle = styled(TableCell)`
  font-size: 14px;
  font-weight: bold;
`
const ErrorBox = styled.View`
  background-color: #af0101;
`
const ErrorTitle = styled.Text`
  color: #ffffff;
  text-align: center;
`
