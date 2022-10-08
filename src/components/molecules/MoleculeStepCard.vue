<script>
import AtomCircleButton from "../atoms/AtomCircleButton.vue";
import AtomText from "../atoms/AtomText.vue";
import AtomInput from "../atoms/AtomInput.vue";

export default {
  components: {
    AtomCircleButton,
    AtomText,
    AtomInput,
  },
  methods: {},
};
</script>
<template>
  <div class="payment-step">
    <div class="payment-step__progress-wrapper">
      <AtomCircleButton width="50px" height="50px" />
    </div>
    <div class="payment-step-fields" v-if="!$attrs.editing">
      <AtomText class="payment-step__field text-center font-bold text-lg">{{
        $attrs.payment.name
      }}</AtomText>
      <AtomText class="payment-step__field text-center text-sm"
        >{{ $attrs.payment.mount }} {{ $attrs.coin }}(30%)</AtomText
      >
      <AtomText class="payment-step__field text-center text-sm">{{
        $attrs.payment.expirationDate
      }}</AtomText>
    </div>
    <div class="payment-step-actions" v-else>
      <div class="payment-step__input">
        <AtomInput v-bind:value="$attrs.payment.name"></AtomInput>
        <AtomInput v-bind:value="$attrs.payment.mount"></AtomInput>
      </div>
      <div class="payment-step__mount">
        <AtomCircleButton width="30px" height="30px" class="border-thin"
          >-</AtomCircleButton
        >
        <AtomText>{{ $attrs.payment.percentage }}%</AtomText>
        <AtomCircleButton width="30px" height="30px" class="border-thin"
          >+</AtomCircleButton
        >
      </div>
      <div class="payment-step__expiration-date">
        <AtomText>Vence</AtomText>
        <AtomText>{{ $attrs.payment.expirationDate }}</AtomText>
      </div>
    </div>
  </div>
</template>
