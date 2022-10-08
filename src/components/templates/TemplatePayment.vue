<script>
import OrganismPaymentBody from "../organisms/OrganismPaymentBody.vue";
import OrganismPaymentHeader from "../organisms/OrganismPaymentHeader.vue";
export default {
  components: {
    OrganismPaymentBody,
    OrganismPaymentHeader,
  },
};
</script>
<template>
  <div class="payment-card">
    <OrganismPaymentHeader
      v-bind:mount="$attrs.mount"
      v-bind:editing="$attrs.editing"
      v-bind:coin="$attrs.coin"
      v-bind="$listeners"
    >
    </OrganismPaymentHeader>
    <OrganismPaymentBody
      class="payment-card__body"
      v-bind="$attrs"
    ></OrganismPaymentBody>
  </div>
</template>
