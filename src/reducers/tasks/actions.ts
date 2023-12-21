import { Task } from './reducer'

export enum ActionTypes {
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  DELETE_TASK = 'DELETE_TASK',
}

export function addNewTaskAction(newTask: Task) {
  return {
    type: ActionTypes.ADD_NEW_TASK,
    payload: {
      newTask,
    },
  }
}

export function deleteTaskAction(taskId: string) {
  return {
    type: ActionTypes.DELETE_TASK,
    payload: {
      taskId,
    },
  }
}
