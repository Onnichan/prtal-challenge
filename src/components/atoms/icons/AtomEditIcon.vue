<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: "20",
    },
    height: {
      type: String,
      required: false,
      default: "20",
    },
  },
};
</script>
<template>
  <svg
    v-bind:width="width"
    v-bind:height="height"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1667 2.49999C14.3856 2.28112 14.6455 2.1075 14.9314 1.98905C15.2174 1.8706 15.5239 1.80963 15.8334 1.80963C16.1429 1.80963 16.4494 1.8706 16.7354 1.98905C17.0214 2.1075 17.2812 2.28112 17.5001 2.49999C17.719 2.71886 17.8926 2.97869 18.011 3.26466C18.1295 3.55063 18.1904 3.85713 18.1904 4.16665C18.1904 4.47618 18.1295 4.78268 18.011 5.06865C17.8926 5.35461 17.719 5.61445 17.5001 5.83332L6.25008 17.0833L1.66675 18.3333L2.91675 13.75L14.1667 2.49999Z"
      stroke="#3460DC"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
