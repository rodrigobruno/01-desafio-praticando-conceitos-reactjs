import { createContext, ReactNode, useState } from 'react'

interface CreateTaskData {
  task: string
}

interface Task {
  id: string
  task: string
  createdDate: Date
  finishedDate?: Date
}

interface TasksContextType {
  tasks: Task[]
  createNewTask: (data: CreateTaskData) => void
}

export const TasksContext = createContext({} as TasksContextType)

interface TasksContextProviderProps {
  children: ReactNode
}

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  function createNewTask(data: CreateTaskData) {
    const id = String(new Date().getTime())

    const newTask: Task = {
      id,
      task: data.task,
      createdDate: new Date(),
    }

    setTasks((state) => [...state, newTask])
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
