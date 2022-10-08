import { defineStore } from "pinia";

export const usePaymentStore = defineStore({
  id: "payment",
  state: () => ({
    totalMount: 182,
    numberOfSteps: 0,
    coin: "UF",
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addSteps() {
      this.numberOfSteps++;
    },
  },
});
