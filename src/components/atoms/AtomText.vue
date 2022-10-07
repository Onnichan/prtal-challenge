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
<template>
  <div>
    <component v-bind:is="tag" class="" />
  </div>
</template>
