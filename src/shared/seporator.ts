import styled from 'styled-components/native'

export const Separator = styled.View<{ type?: 'vertical' }>`
  width: ${({ type }) => (type === 'vertical' ? '1px' : '100%')};
  height: ${({ type }) => (type === 'vertical' ? '100%' : '1px')};
  background-color: #000000;
`
