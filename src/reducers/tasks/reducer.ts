import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Task {
  id: string
  task: string
  createdDate: Date
  finishedDate?: Date
}

export interface TasksState {
  tasks: Task[]
}

type ActionProps = {
  type: ActionTypes
  payload: {
    newTask?: Task
    taskId?: string
  }
}

export function tasksReducer(state: TasksState, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TASK:
      return produce(state, (draft) => {
        draft.tasks.push(action.payload.newTask as Task)
      })

    case ActionTypes.DELETE_TASK: {
      const taskToDelete = state.tasks.findIndex((task) => {
        return task.id === action.payload.taskId
      })

      return produce(state, (draft) => {
        draft.tasks.splice(taskToDelete, 1)
      })
    }

    default:
      return state
  }
}
