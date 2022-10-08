<script>
import TemplatePayment from "../components/templates/TemplatePayment.vue";
import AtomText from "../components/atoms/AtomText.vue";
import AtomContainer from "../components/atoms/AtomContainer.vue";

export default {
  components: {
    TemplatePayment,
    AtomText,
    AtomContainer,
  },
  data() {
    return {
      mountTotal: 182,
      numberOfSteps: 4,
      coin: "UF",
      editing: false,
    };
  },
  methods: {
    editingHandle() {
      this.editing = !this.editing;
    },
  },
};
</script>
<template>
  <AtomContainer>
    <AtomText tag="h1">Payment distribution</AtomText>
    <TemplatePayment
      v-bind:steps="numberOfSteps"
      v-bind:mount="mountTotal"
      v-bind:coin="coin"
      v-bind:editing="editing"
      @click="editingHandle"
    />
  </AtomContainer>
</template>
