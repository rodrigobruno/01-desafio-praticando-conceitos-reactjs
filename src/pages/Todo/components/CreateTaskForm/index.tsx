import { PlusCircle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CreateTaskFormContainer } from './styles'
import { TasksContext } from '../../../../context/TasksContext'
import { useContext } from 'react'

const newTaskFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
})

type NewTaskFormData = zod.infer<typeof newTaskFormValidationSchema>

export function CreateTaskForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewTaskFormData>({
    resolver: zodResolver(newTaskFormValidationSchema),
    defaultValues: {
      task: '',
    },
  })

  const { createNewTask } = useContext(TasksContext)

  function handleCreateNewTask(data: NewTaskFormData) {
    console.log(data)
    createNewTask(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <CreateTaskFormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register('task')}
      />

      <button type="submit" disabled={isSubmitDisable}>
        Criar <PlusCircle size={20} weight="bold" />
      </button>
    </CreateTaskFormContainer>
  )
}
