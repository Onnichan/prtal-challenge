<script>
import MoleculeStepCard from "../molecules/MoleculeStepCard.vue";
export default {
  components: {
    MoleculeStepCard,
  },
  props: ["mount", "editing", "coin", "steps", "payments"],
};
</script>
<template>
  <div class="payment-card__body">
    <MoleculeStepCard
      v-bind:mount="mount"
      v-bind:coin="coin"
      v-bind:steps="steps"
      v-bind:editing="editing"
      v-for="payment in payments"
      v-bind:key="payment.id"
      v-bind:payment="payment"
    ></MoleculeStepCard>
  </div>
</template>
