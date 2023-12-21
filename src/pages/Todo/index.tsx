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
} from './components/styles'
import clipboardImg from '../../assets/clipboard.svg'

export function Todo() {
  return (
    <>
      <Header />
      <CreateTaskForm />
      <TasksContainer>
        <TasksInfos>
          <TasksCreated>
            Tarefas criadas <Badge>0</Badge>
          </TasksCreated>
          <TasksCompleted>
            Concluídas <Badge>2 de 5</Badge>
          </TasksCompleted>
        </TasksInfos>

        <TasksList>
          <TaskCard isChecked={false}>
            <TaskCheckbox id="c1">
              <Checkbox.Indicator>
                <Check size={10} weight="bold" />
              </Checkbox.Indicator>
            </TaskCheckbox>
            <label htmlFor="c1">
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </label>
            <TaskDeleteButton>
              <Trash size={14} />
            </TaskDeleteButton>
          </TaskCard>

          <TaskCard isChecked={true}>
            <TaskCheckbox id="c2" defaultChecked>
              <Checkbox.Indicator>
                <Check size={10} weight="bold" />
              </Checkbox.Indicator>
            </TaskCheckbox>
            <label htmlFor="c2">
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </label>
            <TaskDeleteButton disabled={true}>
              <Trash size={14} />
            </TaskDeleteButton>
          </TaskCard>
        </TasksList>

        <TasksEmpty>
          <img src={clipboardImg} alt="" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </TasksEmpty>
      </TasksContainer>
    </>
  )
}
