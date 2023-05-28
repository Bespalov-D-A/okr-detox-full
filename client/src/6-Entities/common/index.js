import { create } from "zustand";
import produce from "immer";

export const useCommon = create((set) => ({
  isOpenMenu: false,
  formBtnDisabled: true,
  setFormBtnDisabled: (bool) =>
    set(
      produce((state) => {
        state.formBtnDisabled = bool;
      })
    ),
  setIsOpenMenu: (bool) =>
    set(
      produce((state) => {
        state.isOpenMenu = bool;
      })
    ),
}));

export const useAlert = create((set) => ({
  type: null,
  message: null,
  setType: (str) =>
    set(
      produce((state) => {
        state.type = str;
      })
    ),
  setMessage: (str) =>
    set(
      produce((state) => {
        state.message = str;
      })
    ),
  setAlert: (obj) =>
    set(
      produce((state) => {
        state.type = obj.type;
        state.message = obj.msg;
      })
    ),
}));
