import { create } from "zustand";

const useSubscribeDialog = create((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  doNotShowAgain: false,
  setDoNotShowAgain: (doNotShowAgain) => set({ doNotShowAgain }),
}));

export default useSubscribeDialog;
