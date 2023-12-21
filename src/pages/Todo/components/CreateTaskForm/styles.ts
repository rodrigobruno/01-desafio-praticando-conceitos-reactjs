import styled from 'styled-components'

export const CreateTaskFormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  margin: -1.625rem auto 0 auto;
  padding: 0 1.5rem;
  width: min(100%, 736px);

  input {
    flex: 1;

    background: ${(props) => props.theme['gray-500']};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-100']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  button[type='submit'] {
    align-items: center;
    cursor: pointer;
    background: ${(props) => props.theme['blue-dark']};
    border: 0;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-100']};
    display: flex;
    font-weight: bold;
    gap: 0.5rem;
    justify-content: center;
    padding: 1rem;

    &:hover {
      background: ${(props) => props.theme.blue};
      transition:
        background-color 0.2s,
        color 0.2s,
        border-color 0.2s;
    }
  }
`
