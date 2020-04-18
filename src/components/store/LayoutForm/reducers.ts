import {
  TaskState,
  DELETE_TASK_FROM_LIST,
  ADD_TASK_TO_LIST,
  TaskActionTypes,
} from "./types";

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      name: "Clean the dishes"
    },
    {
      id: 2,
      name: "Feed the pets"
    },
    {
      id: 3,
      name: "Cut the grass"
    },
  ],
};

export function taskReducer(
    state = initialState, 
    action: TaskActionTypes) {
  switch (action.type) {
    case DELETE_TASK_FROM_LIST:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case ADD_TASK_TO_LIST:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    default:
      return state;
  }
}
