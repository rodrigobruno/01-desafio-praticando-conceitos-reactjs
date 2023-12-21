import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-700']};
  padding-block: 5.125rem;
`
export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: min(100%, 736px);
`
