import { Task } from './reducer'

export enum ActionTypes {
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  DELETE_TASK = 'DELETE_TASK',
  MARK_TASK_AS_FINISHED = 'MARK_TASK_AS_FINISHED',
  MARK_TASK_AS_UNFINISHED = 'MARK_TASK_AS_UNFINISHED',
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

export function markTaskAsFinishedAction(taskId: string) {
  return {
    type: ActionTypes.MARK_TASK_AS_FINISHED,
    payload: {
      taskId,
    },
  }
}

export function markTaskAsUnfinishedAction(taskId: string) {
  return {
    type: ActionTypes.MARK_TASK_AS_UNFINISHED,
    payload: {
      taskId,
    },
  }
}
