<script>
import TemplatePayment from "../components/templates/TemplatePayment.vue";
import AtomText from "../components/atoms/AtomText.vue";
import AtomContainer from "../components/atoms/AtomContainer.vue";

export default {
  components: {
    TemplatePayment,
    AtomText,
    AtomContainer,
  },
  data() {
    return {
      mountTotal: 182,
      numberOfSteps: 4,
      coin: "UF",
      editing: false,
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
    };
  },
  methods: {
    editingHandle() {
      this.editing = !this.editing;
    },
    addPayments(payment) {
      this.payments.push(payment);
    },
    replacePayments(payments) {
      this.payments = payments;
    },
  },
};
</script>
<template>
  <AtomContainer>
    <AtomText
      tag="h1"
      class="text-center"
      v-bind:style="{ marginBottom: '2em' }"
      >Payment distribution</AtomText
    >
    <TemplatePayment
      v-bind:steps="numberOfSteps"
      v-bind:mount="mountTotal"
      v-bind:coin="coin"
      v-bind:editing="editing"
      v-bind:payments="payments"
      @click="editingHandle"
    />
  </AtomContainer>
</template>
