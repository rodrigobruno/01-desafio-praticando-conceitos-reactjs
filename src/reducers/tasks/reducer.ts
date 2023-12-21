import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Task {
  id: string
  task: string
  createdDate: Date
  completed: boolean
}

export interface TasksState {
  tasks: Task[]
}

type ActionProps = {
  type: ActionTypes
  payload: {
    newTask?: Task
    taskId?: string
    taskStatus?: boolean
  }
}

export function tasksReducer(state: TasksState, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TASK: {
      return produce(state, (draft) => {
        draft.tasks.push(action.payload.newTask as Task)
      })
    }

    case ActionTypes.DELETE_TASK: {
      const taskToDelete = state.tasks.findIndex((task) => {
        return task.id === action.payload.taskId
      })

      return produce(state, (draft) => {
        draft.tasks.splice(taskToDelete, 1)
      })
    }

    case ActionTypes.MARK_TASK_AS_FINISHED: {
      const taskToComplete = state.tasks.findIndex((task) => {
        return task.id === action.payload.taskId
      })

      if (taskToComplete < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.tasks[taskToComplete].completed = true
      })
    }

    case ActionTypes.MARK_TASK_AS_UNFINISHED: {
      const taskToComplete = state.tasks.findIndex((task) => {
        return task.id === action.payload.taskId
      })

      if (taskToComplete < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.tasks[taskToComplete].completed = false
      })
    }

    default:
      return state
  }
}
