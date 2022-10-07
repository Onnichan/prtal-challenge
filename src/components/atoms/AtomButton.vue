<template functional>
  <button v-bind:class="$attrs">
    <slot name="content" />
    <slot name="icon" />
  </button>
</template>
