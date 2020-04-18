export interface Task {
    id: number,
    name: string
}

export interface TaskState {
    tasks: Task[]
}

export const DELETE_TASK_FROM_LIST = 'DELETE_TASK_FROM_LIST';
export const ADD_TASK_TO_LIST = 'ADD_TASK_TO_LIST';

interface DeleteTaskFromList {
    type: typeof DELETE_TASK_FROM_LIST,
    payload: number
}

interface AddTaskToList {
    type: typeof ADD_TASK_TO_LIST,
    payload: Task
}


export type TaskActionTypes = AddTaskToList | DeleteTaskFromList;