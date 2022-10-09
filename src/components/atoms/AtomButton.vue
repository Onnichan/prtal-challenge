<template>
  <button v-on="$listeners">
    <slot name="content"></slot>
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
