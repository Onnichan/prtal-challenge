import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    open: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setOpen(value) {
      this.open = value;
    },
  },
});
