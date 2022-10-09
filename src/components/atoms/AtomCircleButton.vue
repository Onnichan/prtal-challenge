<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: "80px",
    },
    height: {
      type: String,
      required: false,
      default: "80px",
    },
  },
};
</script>
<template>
  <button
    v-bind:style="{ width: width, height: height }"
    class="circle-base-button"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>
