<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },
};
</script>
<template>
  <input v-bind:type="type" class="base-input" />
</template>
