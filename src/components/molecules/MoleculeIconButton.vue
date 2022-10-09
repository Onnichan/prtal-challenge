<script>
import AtomButton from "../atoms/AtomButton.vue";
export default {
  components: {
    AtomButton,
  },
};
</script>
<template>
  <AtomButton class="base-button" v-on="$listeners">
    <slot name="content"></slot>
    <slot name="icon"></slot>
  </AtomButton>
</template>
