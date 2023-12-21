import { createContext, ReactNode, useReducer } from 'react'
import { Task, tasksReducer } from '../reducers/tasks/reducer'
import { addNewTaskAction, deleteTaskAction } from '../reducers/tasks/actions'

interface CreateTaskData {
  task: string
}

interface TasksContextType {
  tasks: Task[]
  createNewTask: (data: CreateTaskData) => void
  deleteTask: (taskId: string) => void
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksContextProviderProps {
  children: ReactNode
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasksState, dispatch] = useReducer(tasksReducer, {
    tasks: [],
  })

  const { tasks } = tasksState

  function createNewTask(data: CreateTaskData) {
    const id = String(new Date().getTime())

    const newTask: Task = {
      id,
      task: data.task,
      createdDate: new Date(),
    }

    dispatch(addNewTaskAction(newTask))
  }

  function deleteTask(taskId: string) {
    dispatch(deleteTaskAction(taskId))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createNewTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
