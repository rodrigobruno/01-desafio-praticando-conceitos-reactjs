import { Check, Trash } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Header } from '../../components/Header'
import { CreateTaskForm } from './components/CreateTaskForm'
import {
  TasksContainer,
  TasksInfos,
  TasksCreated,
  TasksCompleted,
  TasksList,
  TaskCard,
  TaskDeleteButton,
  TaskCheckbox,
  Badge,
  TasksEmpty,
} from './styles'
import clipboardImg from '../../assets/clipboard.svg'
import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'

export function Todo() {
  const {
    tasks,
    totalTasks,
    completedTasks,
    deleteTask,
    markTaskAsFinished,
    markTaskAsUnfinished,
  } = useContext(TasksContext)

  function handleDeleteTask(taskId: string) {
    deleteTask(taskId)
  }

  return (
    <>
      <Header />
      <CreateTaskForm />
      <TasksContainer>
        <TasksInfos>
          <TasksCreated>
            Tarefas criadas <Badge>{totalTasks}</Badge>
          </TasksCreated>
          <TasksCompleted>
            Concluídas{' '}
            <Badge>
              {completedTasks} de {totalTasks}
            </Badge>
          </TasksCompleted>
        </TasksInfos>

        {tasks.length > 0 && (
          <TasksList>
            {tasks.map((task) => {
              return (
                <TaskCard $isChecked={task.completed} key={task.id}>
                  <TaskCheckbox
                    id={task.id}
                    checked={task.completed}
                    onClick={() =>
                      task.completed
                        ? markTaskAsUnfinished(task.id)
                        : markTaskAsFinished(task.id)
                    }
                  >
                    <Checkbox.Indicator>
                      <Check size={10} weight="bold" />
                    </Checkbox.Indicator>
                  </TaskCheckbox>
                  <label htmlFor={task.id}>{task.task}</label>
                  <TaskDeleteButton onClick={() => handleDeleteTask(task.id)}>
                    <Trash size={14} />
                  </TaskDeleteButton>
                </TaskCard>
              )
            })}
          </TasksList>
        )}

        {tasks.length === 0 && (
          <TasksEmpty>
            <img src={clipboardImg} alt="" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </TasksEmpty>
        )}
      </TasksContainer>
    </>
  )
}
