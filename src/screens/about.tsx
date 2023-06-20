import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { Screens, useNavigation } from 'src/navigation'
import { Button } from 'src/shared'

export const AboutScreen = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Wrap>
        <Title>About</Title>
        <Text>
          The application has two screens (About, Quotes). To navigate to the
          Quotes screen, you can either tap the button named "Quotes" in the
          bottom tab bar or click on the button.
        </Text>
        <Button
          title={'Go to Quotes'}
          onPress={() => navigate(Screens.Quotes)}
          style={{ marginTop: 10 }}
        />
      </Wrap>
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
`
const Wrap = styled.View`
  padding: 20px;
`
const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`
