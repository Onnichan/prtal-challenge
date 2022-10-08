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
    <OrganismPaymentHeader> </OrganismPaymentHeader>
    <OrganismPaymentBody class="payment-card__body"></OrganismPaymentBody>
  </div>
</template>
