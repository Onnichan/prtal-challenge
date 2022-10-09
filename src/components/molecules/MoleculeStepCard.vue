<script>
import AtomCircleButton from "../atoms/AtomCircleButton.vue";
import AtomText from "../atoms/AtomText.vue";
import AtomInput from "../atoms/AtomInput.vue";
import MoleculeIconInput from "../molecules/MolecuelconInput.vue";
import { useModalStore } from "../../stores/modal.store";
import { mapActions } from "pinia";

export default {
  components: {
    AtomCircleButton,
    AtomText,
    AtomInput,
    MoleculeIconInput,
  },
  methods: {
    ...mapActions(useModalStore, ["setOpen"]),
  },
  props: {
    payment: String,
    coin: {
      type: String,
      required: false,
      default: "UF",
    },
    mount: {
      type: Number,
      required: false,
    },
    editing: {
      type: Boolean,
    },
    steps: Number,
  },
};
</script>
<template>
  <div class="payment-step">
    <div class="payment-step__progress-wrapper">
      <AtomCircleButton width="60px" height="60px" @click="setOpen(true)" />
    </div>
    <div class="payment-step-fields" v-if="!editing">
      <AtomText class="payment-step__field text-center font-bold text-lg">{{
        payment.name
      }}</AtomText>
      <AtomText class="payment-step__field text-center text-sm"
        >{{ payment.mount }} {{ coin }}({{ payment.percentage }}%)</AtomText
      >
      <AtomText class="payment-step__field text-center text-sm">{{
        payment.expirationDate
      }}</AtomText>
    </div>
    <div class="payment-step-actions" v-else>
      <div class="payment-step__input">
        <AtomInput
          v-bind:value="payment.name ? payment.name : 'Nuevo'"
          class="font-bold"
          v-bind:style="{ fontSize: '20px', marginBottom: '.8em' }"
        ></AtomInput>
        <MoleculeIconInput>
          <template #input>
            <AtomInput
              :value="payment.mount ? payment.mount : 0"
              class="font-bold"
              v-bind:style="{ fontSize: '14px' }"
            ></AtomInput>
          </template>
          <template #coin>
            <AtomText class="text-neutral-400">{{
              coin ? coin : "UF"
            }}</AtomText>
          </template>
        </MoleculeIconInput>
      </div>
      <div class="payment-step__mount">
        <AtomCircleButton
          width="30px"
          height="30px"
          class="border-thin"
          v-bind:style="{ fontSize: '30px' }"
          >-</AtomCircleButton
        >
        <AtomText>{{ payment.percentage ? payment.percentage : 0 }}%</AtomText>
        <AtomCircleButton width="30px" height="30px" class="border-thin"
          >+</AtomCircleButton
        >
      </div>
      <div class="payment-step__expiration-date">
        <AtomText class="text-neutral-400">Vence</AtomText>
        <input type="date" name="" id="" />
        <!-- <AtomText>{{ payment.expirationDate }}</AtomText> -->
      </div>
    </div>
  </div>
</template>
