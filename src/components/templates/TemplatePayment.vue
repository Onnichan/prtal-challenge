<script>
import OrganismPaymentBody from "../organisms/OrganismPaymentBody.vue";
import OrganismPaymentHeader from "../organisms/OrganismPaymentHeader.vue";
export default {
  components: {
    OrganismPaymentBody,
    OrganismPaymentHeader,
  },
  props: ["payments", "coin", "editing", "steps", "mount"],
};
</script>
<template>
  <div class="payment-card">
    <OrganismPaymentHeader
      v-bind:mount="mount"
      v-bind:editing="editing"
      v-bind:coin="coin"
    >
    </OrganismPaymentHeader>
    <OrganismPaymentBody
      class="payment-card__body"
      v-bind:mount="mount"
      v-bind:editing="editing"
      v-bind:coin="coin"
      v-bind:steps="steps"
      v-bind:payments="payments"
    ></OrganismPaymentBody>
  </div>
</template>
