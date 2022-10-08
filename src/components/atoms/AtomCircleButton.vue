<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: "80px" 
    },
    height: {
      type: String,
      required: false,
      default: "80px" 
    },
  },

};
</script>
<template>
  <div v-bind:style="{width: width, height: height}" class="payment-step__progress"></div>
</template>
