<script>
import MoleculeStepCard from "../molecules/MoleculeStepCard.vue";
import AtomCircleButton from "../atoms/AtomCircleButton.vue";

export default {
  components: {
    MoleculeStepCard,
    AtomCircleButton,
  },
  props: ["mount", "editing", "coin", "steps", "payments"],
};
</script>
<template>
  <div class="payment-card__body">
    <AtomCircleButton
      v-if="payments.length === 0"
      width="50px"
      height="50px"
      v-bind:style="{ border: 'none' }"
    >
      +
    </AtomCircleButton>
    <MoleculeStepCard
      v-else
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
