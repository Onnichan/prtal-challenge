<script>
export default {
  props: ["value"],
};
</script>
<template>
  <div class="icon-input">
    <slot name="input"></slot>
    <!-- <AtomInput v-bind:class="$attrs.class" v-bind:style="$attrs.style" v-bind:value="value"></AtomInput> -->
    <div class="icon">
      <slot name="coin"></slot>
    </div>
  </div>
</template>
