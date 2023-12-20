import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-700']};
  padding-block: 5.125rem;
`
export const HeaderContent = styled.div`
  /* width: 100%;
  max-width: 1120px; */
  width: min(100%, 1120px);
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
