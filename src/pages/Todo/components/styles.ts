import styled, { css } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const TasksContainer = styled.main`
  width: min(100%, 736px);
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
`

export const TasksInfos = styled.header`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 0.875rem;
`

export const TasksCreated = styled.span`
  color: ${(props) => props.theme.blue};
`

export const TasksCompleted = styled.span`
  color: ${(props) => props.theme.purple};
`

export const Badge = styled.span`
  background: ${(props) => props.theme['gray-400']};
  border-radius: 999rem;
  color: ${(props) => props.theme['gray-200']};
  padding: 0.125rem 0.5rem;
`

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

interface TaskCardProps {
  isChecked: boolean
}

export const TaskCard = styled.li<TaskCardProps>`
  align-items: flex-start;
  display: flex;
  gap: 0.75rem;
  padding: 1rem;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['gray-400']};
  background: ${(props) => props.theme['gray-500']};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

  label {
    cursor: pointer;
    font-size: 0.875rem;
    flex: 1;
    line-height: 1.225rem;
    ${(props) =>
      props.isChecked
        ? css`
            text-decoration: line-through;
            color: ${(props) => props.theme['gray-300']};
          `
        : css`
            color: ${(props) => props.theme['gray-100']};
          `};
  }
`

export const TaskCheckbox = styled(Checkbox.Root)`
  display: flex;
  width: 1.125rem;
  height: 1.125rem;
  margin: 0.20456rem;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
  background: transparent;
  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 999rem;
  cursor: pointer;
  line-height: 0;

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: rgba(30, 111, 159, 0.2);
    border-color: ${(props) => props.theme['blue-dark']};
  }

  &[data-state='checked'] {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['purple-dark']};
    border-color: ${(props) => props.theme['purple-dark']};

    &:hover {
      background: ${(props) => props.theme.purple};
      border-color: ${(props) => props.theme.purple};
    }
  }
`

export const TaskDeleteButton = styled.button`
  background: transparent;
  border: 0;
  border-radius: 4px;
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
  line-height: 0;
  padding: 0.3125rem 0.375rem;

  &:not([disabled]):hover {
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme.danger};
    transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s;
  }
`

export const TasksEmpty = styled.section`
  border-top: 1px solid ${(props) => props.theme['gray-400']};
  line-height: 1.225rem;
  padding: 4rem 1.5rem;
  text-align: center;

  p {
    margin-top: 1rem;

    strong {
      display: block;
    }
  }
`
