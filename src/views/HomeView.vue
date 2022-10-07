<script>
import TemplatePayment from "../components/templates/TemplatePayment.vue";
import OrganismPaymentBody from "../components/organisms/OrganismPaymentBody.vue";
import OrganismPaymentHeader from "../components/organisms/OrganismPaymentHeader.vue";
import AtomButton from "../components/atoms/AtomButton.vue";
import AtomEditIcon from "../components/atoms/icons/AtomEditIcon.vue";
import AtomAngleArrowDownIcon from "../components/atoms/icons/AtomAngleArrowDownIcon.vue";
import AtomDeleteIcon from "../components/atoms/icons/AtomDeleteIcon.vue"
import AtomPlusIcon from "../components/atoms/icons/AtomPlusIcon.vue"

export default {
  name: "HomeView",
  components: {
    TemplatePayment,
    OrganismPaymentBody,
    OrganismPaymentHeader,
    AtomButton,
    AtomEditIcon,
    AtomAngleArrowDownIcon,
    AtomDeleteIcon,
    AtomPlusIcon
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
  <main class="payment">
    <TemplatePayment class="payment__card">
      <OrganismPaymentHeader class="payment-card__header">
        <AtomButton class="payment-select__button">
          <template #content>Pagos</template>
          <template #icon>
            <AtomAngleArrowDownIcon class="payment-select__icon"/>
          </template>
        </AtomButton>
        <div></div>
      </OrganismPaymentHeader>
      <OrganismPaymentBody class="payment-card__body"></OrganismPaymentBody>
    </TemplatePayment>
    <section class="payment__card">
      <div class="payment-card__header">
        <button class="payment-select__button">Pagos</button>
        <div class="payment-header__actions">
          <button class="payment-action__edit-button">Editar</button>
          <div class="payment-action__mount-wrapper">
            Por cobrar <span class="payment-action__mount">182UF</span>
          </div>
        </div>
      </div>
      <div class="payment-card__body">
        <div class="payment-step__wrapper-extra"></div>
        <div class="payment-step">
          <div class="payment-step__progress-wrapper">
            <div class="payment-step__progress"></div>
          </div>
          <div class="payment-step-fields">
            <span class="payment-step__field">Anticipo</span>
            <span class="payment-step__field">54,6 UF(30%)</span>
            <span class="payment-step__field">22 Ene, 2022</span>
          </div>
        </div>
        <div class="payment-step__wrapper-extra"></div>
        <div class="payment-step">
          <div class="payment-step__progress-wrapper">
            <div class="payment-step__progress"></div>
          </div>
          <div class="payment-step-fields">
            <span class="payment-step__field">Anticipo</span>
            <span class="payment-step__field">54,6 UF(30%)</span>
            <span class="payment-step__field">22 Ene, 2022</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
