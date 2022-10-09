<script>
import AtomCircleButton from "../atoms/AtomCircleButton.vue";
import AtomText from "../atoms/AtomText.vue";
import AtomInput from "../atoms/AtomInput.vue";
import { useModalStore } from "../../stores/modal.store";
import { mapActions } from "pinia";

export default {
  components: {
    AtomCircleButton,
    AtomText,
    AtomInput,
  },
  methods: {
    ...mapActions(useModalStore, ["setOpen"]),
  },
  props: ["payment", "coin", "mount", "editing", "steps"],
};
</script>
<template>
  <div class="payment-step">
    <div class="payment-step__progress-wrapper">
      <AtomCircleButton width="50px" height="50px" @click="setOpen(true)" />
    </div>
    <div class="payment-step-fields" v-if="!editing">
      <AtomText class="payment-step__field text-center font-bold text-lg">{{
        payment.name
      }}</AtomText>
      <AtomText class="payment-step__field text-center text-sm"
        >{{ payment.mount }} {{ coin }}({{ payment.percentage }}%)</AtomText
      >
      <AtomText class="payment-step__field text-center text-sm">{{
        payment.expirationDate
      }}</AtomText>
    </div>
    <div class="payment-step-actions" v-else>
      <div class="payment-step__input">
        <AtomInput v-bind:value="payment.name"></AtomInput>
        <AtomInput v-bind:value="payment.mount"></AtomInput>
      </div>
      <div class="payment-step__mount">
        <AtomCircleButton width="30px" height="30px" class="border-thin"
          >-</AtomCircleButton
        >
        <AtomText>{{ payment.percentage }}%</AtomText>
        <AtomCircleButton width="30px" height="30px" class="border-thin"
          >+</AtomCircleButton
        >
      </div>
      <div class="payment-step__expiration-date">
        <AtomText>Vence</AtomText>
        <AtomText>{{ payment.expirationDate }}</AtomText>
      </div>
    </div>
  </div>
</template>
