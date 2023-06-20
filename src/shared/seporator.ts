import styled from 'styled-components/native'

import { colors } from 'src/utils'

export const Separator = styled.View<{ type?: 'vertical' }>`
  width: ${({ type }) => (type === 'vertical' ? '1px' : '100%')};
  height: ${({ type }) => (type === 'vertical' ? '100%' : '1px')};
  background-color: ${colors.black};
`
