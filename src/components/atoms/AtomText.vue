<template>
  <component v-bind:is="tag">
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: "span",
    },
  },
};
</script>
