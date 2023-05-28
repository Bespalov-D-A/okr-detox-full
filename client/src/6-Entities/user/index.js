import { create } from "zustand";
import produce from "immer";

export const useUser = create((set) => ({
  user: null,
  setUser: (user) =>
    set(
      produce((state) => {
        state.user = user;
      })
    ),
}));
