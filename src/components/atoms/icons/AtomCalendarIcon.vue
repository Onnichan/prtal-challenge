<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: "16",
    },
    height: {
      type: String,
      required: false,
      default: "16",
    },
  },
};
</script>
<template>
  <svg
    v-bind:width="width"
    v-bind:height="height"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z"
      stroke="#1D4ED8"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 6.66666H14"
      stroke="#1D4ED8"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.6666 1.33333V4"
      stroke="#1D4ED8"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.33337 1.33333V4"
      stroke="#1D4ED8"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
