<script>
import MoleculeIconButton from "../molecules/MoleculeIconButton.vue";
import AtomAngleArrowDownIcon from "../atoms/icons/AtomAngleArrowDownIcon.vue";
import AtomEditIcon from "../atoms/icons/AtomEditIcon.vue";
import AtomText from "../atoms/AtomText.vue";

export default {
  components: {
    AtomEditIcon,
    MoleculeIconButton,
    AtomAngleArrowDownIcon,
    AtomText,
  },
};
</script>
<template>
  <div class="payment-card__header">
    <MoleculeIconButton class="payment-select__button">
      <template #content>Pagos</template>
      <template #icon>
        <AtomAngleArrowDownIcon class="payment-select__icon" />
      </template>
    </MoleculeIconButton>
    <div class="payment-header__actions">
      <MoleculeIconButton class="payment-action__edit-button">
        <template #content>Editar</template>
        <template #icon>
          <AtomEditIcon class="payment-action__edit-icon" />
        </template>
      </MoleculeIconButton>
      <div class="payment-action__mount-wrapper">
        <AtomText>Por cobrar 182UF</AtomText>
      </div>
    </div>
  </div>
</template>
