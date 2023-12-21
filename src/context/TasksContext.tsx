import { createContext, ReactNode, useReducer } from 'react'
import { Task, tasksReducer } from '../reducers/tasks/reducer'
import {
  addNewTaskAction,
  deleteTaskAction,
  markTaskAsFinishedAction,
  markTaskAsUnfinishedAction,
} from '../reducers/tasks/actions'

interface CreateTaskData {
  task: string
}

interface TasksContextType {
  tasks: Task[]
  totalTasks: number
  completedTasks: number
  createNewTask: (data: CreateTaskData) => void
  deleteTask: (taskId: string) => void
  markTaskAsFinished: (taskId: string) => void
  markTaskAsUnfinished: (taskId: string) => void
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
  const totalTasks = tasks.length

  function countCompletedTasks() {
    return tasks.filter((task) => task.completed === true).length
  }

  const completedTasks = countCompletedTasks()

  function createNewTask(data: CreateTaskData) {
    const id = String(new Date().getTime())

    const newTask: Task = {
      id,
      task: data.task,
      createdDate: new Date(),
      completed: false,
    }

    dispatch(addNewTaskAction(newTask))
  }

  function deleteTask(taskId: string) {
    dispatch(deleteTaskAction(taskId))
  }

  function markTaskAsFinished(taskId: string) {
    dispatch(markTaskAsFinishedAction(taskId))
  }

  function markTaskAsUnfinished(taskId: string) {
    dispatch(markTaskAsUnfinishedAction(taskId))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        totalTasks,
        completedTasks,
        createNewTask,
        deleteTask,
        markTaskAsFinished,
        markTaskAsUnfinished,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
