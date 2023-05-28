import zustand, { create } from "zustand";
import produce from "immer";

export const useTaskList = create((set, get) => ({
  list: null,
  setList: (list) =>
    set(
      produce((state) => {
        state.list = list;
      })
    ),
  getTaskById: (id) => {
    return get().list.find((item) => item.id === id);
  },
  taskSwitcher: false,
  setTaskSwitcher: () =>
    set(
      produce((state) => {
        state.taskSwitcher = !state.taskSwitcher;
      })
    ),
  selectedTaskType: null,
  setSelectedTaskType: (type) =>
    set(
      produce((state) => {
        state.selectedTaskType = type;
      })
    ),
  selectedTaskList: null,
  setSelectedTaskList: (list) =>
    set(
      produce((state) => {
        state.selectedTaskList = list;
      })
    ),
  selectedTaskCompleted: null,
  setSelectedTaskCompleted: (list) =>
    set(
      produce((state) => {
        state.selectedTaskCompleted = list;
      })
    ),
}));
