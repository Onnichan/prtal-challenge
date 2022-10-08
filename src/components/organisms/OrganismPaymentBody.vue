<script>
import MoleculeStepCard from "../molecules/MoleculeStepCard.vue";
export default {
  components: {
    MoleculeStepCard,
  },
};
</script>
<template>
  <div class="payment-card__body">
    <MoleculeStepCard
      v-bind="$attrs"
      v-for="payment in $attrs.payments"
      v-bind:key="payment.id"
      v-bind:payment="payment"
    ></MoleculeStepCard>
  </div>
</template>
