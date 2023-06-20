import React, { useCallback } from 'react'
import { ActivityIndicator } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import { from, interval, startWith, switchMap } from 'rxjs'
import styled from 'styled-components/native'

import { Table } from 'src/shared'
import { store } from 'src/store'
import { colors } from 'src/utils'

export const QuotesScreen = observer(() => {
  const { quotes, isLoading, getQuotes, isError } = store.quotes
  useFocusEffect(
    useCallback(() => {
      const subscription = interval(5000)
        .pipe(
          startWith(0),
          switchMap(() => from(getQuotes())),
        )
        .subscribe()

      return () => subscription.unsubscribe()
    }, [getQuotes]),
  )

  if (isLoading) {
    return (
      <LoaderWrap>
        <ActivityIndicator size="large" color={colors.gray} />
      </LoaderWrap>
    )
  }

  return (
    <Root>
      <Wrap>
        <Title>Quotes</Title>
        <Table quotes={quotes} isError={isError} />
      </Wrap>
    </Root>
  )
})

const Root = styled.SafeAreaView`
  flex: 1;
`
const Wrap = styled.View`
  flex: 1;
  padding: 10px;
`
const LoaderWrap = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`
