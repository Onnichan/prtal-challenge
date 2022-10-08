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
      numberOfSteps: 0,
      coin: "UF",
    };
  },
  methods: {},
};
</script>
<template>
  <AtomContainer>
    <AtomText tag="h1">Payment distribution</AtomText>
    <TemplatePayment />
  </AtomContainer>
</template>
