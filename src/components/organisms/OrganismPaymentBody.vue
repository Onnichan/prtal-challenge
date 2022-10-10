<script>
import MoleculeStepCard from "../molecules/MoleculeStepCard.vue";
import AtomCircleButton from "../atoms/AtomCircleButton.vue";
import { usePaymentStore } from "../../stores/payment.store";
import { mapActions } from "pinia";

export default {
  components: {
    MoleculeStepCard,
    AtomCircleButton,
  },
  props: ["mount", "editing", "coin", "steps", "payments"],
  methods: {
    ...mapActions(usePaymentStore, ["setEditing"]),
  },
};
</script>
<template>
  <div class="payment-card__body">
    <AtomCircleButton
      v-if="payments.length === 0"
      width="50px"
      height="50px"
      v-bind:style="{ border: 'none' }"
      @click="setEditing(true)"
    >
      +
    </AtomCircleButton>
    <!-- <MoleculeStepCard></MoleculeStepCard> -->
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
