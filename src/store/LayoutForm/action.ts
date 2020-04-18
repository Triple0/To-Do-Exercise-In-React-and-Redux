import {
    TaskActionTypes, DELETE_TASK_FROM_LIST,
    ADD_TASK_TO_LIST,
    Task } from './types';

export function deleteTaskFromList( id: number ): TaskActionTypes{
    return {
        type: DELETE_TASK_FROM_LIST,
        payload: id
    }
}

export function addTaskToList ( task: Task ): TaskActionTypes {
    return {
        type: ADD_TASK_TO_LIST,
        payload: task
    }
}