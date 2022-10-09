<script>
import TemplatePayment from "../components/templates/TemplatePayment.vue";
import AtomText from "../components/atoms/AtomText.vue";
import AtomContainer from "../components/atoms/AtomContainer.vue";
import { usePaymentStore } from "../stores/payment.store";
import { useModalStore } from "../stores/modal.store";
import { mapState } from "pinia";
import OrganismModal from "../components/organisms/OrganismModal.vue";

export default {
  components: {
    TemplatePayment,
    AtomText,
    AtomContainer,
    OrganismModal
  },
  computed: {
    ...mapState(usePaymentStore, [
      "payments",
      "coin",
      "editing",
      "numberOfSteps",
      "totalMount",
      "states"
    ]),
    ...mapState(useModalStore, ["open"])
  },
  methods: {},
};
</script>
<template>
  <AtomContainer>
    <AtomText
      tag="h1"
      class="text-center"
      v-bind:style="{ marginBottom: '2em' }"
      >Payment distribution</AtomText
    >
    <TemplatePayment
      v-bind:steps="numberOfSteps"
      v-bind:mount="totalMount"
      v-bind:coin="coin"
      v-bind:editing="editing"
      v-bind:payments="payments"
    />
    <transition>
      <OrganismModal v-if="open" v-bind:states="states"/>
    </transition>
  </AtomContainer>
</template>
