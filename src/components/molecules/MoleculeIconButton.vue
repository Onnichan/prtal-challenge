<script>
import AtomButton from "../atoms/AtomButton.vue";
export default {
  components: {
    AtomButton,
  },
};
</script>
<template>
  <AtomButton class="base-button">
    <slot name="content"></slot>
    <slot name="icon"></slot>
  </AtomButton>
</template>
