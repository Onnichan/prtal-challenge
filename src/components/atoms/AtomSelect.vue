<script>
export default {
  props: ["options"],
};
</script>
<template>
  <select>
    <option v-for="(option, key) in options" :key="key">{{option}}</option>
  </select>
</template>
