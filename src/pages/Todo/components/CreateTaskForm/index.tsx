import { PlusCircle } from 'phosphor-react'
import { CreateTaskFormContainer } from './styles'

export function CreateTaskForm() {
  return (
    <CreateTaskFormContainer>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={20} weight="bold" />
      </button>
    </CreateTaskFormContainer>
  )
}
