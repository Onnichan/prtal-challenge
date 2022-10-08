<script>
import MoleculeIconButton from "../molecules/MoleculeIconButton.vue";
import AtomAngleArrowDownIcon from "../atoms/icons/AtomAngleArrowDownIcon.vue";
import AtomEditIcon from "../atoms/icons/AtomEditIcon.vue";
import AtomText from "../atoms/AtomText.vue";
import AtomButton from "../atoms/AtomButton.vue";

export default {
  components: {
    AtomEditIcon,
    MoleculeIconButton,
    AtomAngleArrowDownIcon,
    AtomText,
    AtomButton,
  }
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
      <AtomButton v-if="$attrs.editing" class="bg-primary-500">Guardar</AtomButton>
      <MoleculeIconButton v-else class="payment-action__edit-button">
        <template #content>Editar</template>
        <template #icon>
          <AtomEditIcon
            class="payment-action__edit-icon"
            width="12"
            height="12"
          />
        </template>
      </MoleculeIconButton>
      <div class="payment-action__mount-wrapper">
        <AtomText class="bg-neutral-400">Por cobrar</AtomText>
        <AtomText class="bg-neutral-900 font-bold">{{$attrs.mount}} {{$attrs.coin}}</AtomText>
      </div>
    </div>
  </div>
</template>
