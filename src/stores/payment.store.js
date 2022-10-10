import { defineStore } from "pinia";

export const usePaymentStore = defineStore("payments", {
  state: () => ({
    totalMount: 182,
    numberOfSteps: 3,
    coin: "UF",
    editing: true,
    states: ["Pendiente", "Pagado"],
    payments: [
      {
        id: 1,
        name: "Anticipo",
        mount: 54.6,
        percentage: 30,
        state: "PAGADO",
        expirationDate: "22/01/2022",
      },
      {
        id: 2,
        name: "Pago 1",
        mount: 24.6,
        percentage: 30,
        state: "PENDIENTE",
        expirationDate: "25/03/2022",
      },
      {
        id: 3,
        name: "Pago 2",
        mount: 16.1,
        percentage: 30,
        state: "PENDIENTE",
        expirationDate: "22/04/2022",
      },
    ],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addSteps() {
      this.numberOfSteps++;
    },
    setEditing() {
      this.editing = !this.editing;
    },
  },
});
