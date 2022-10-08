<script>
import AtomCircleButton from "../atoms/AtomCircleButton.vue";
import AtomText from "../atoms/AtomText.vue";
export default {
  components: {
    AtomCircleButton,
    AtomText,
  },
};
</script>
<template>
  <div class="payment-step">
    <div class="payment-step__progress-wrapper">
      <AtomCircleButton width="50px" height="50px" />
    </div>
    <div class="payment-step-fields">
      <AtomText class="payment-step__field text-center font-bold text-lg"
        >Anticipo</AtomText
      >
      <AtomText class="payment-step__field text-center text-sm"
        >54,6 UF(30%)</AtomText
      >
      <AtomText class="payment-step__field text-center text-sm"
        >22 Ene, 2022</AtomText
      >
    </div>
  </div>
</template>
