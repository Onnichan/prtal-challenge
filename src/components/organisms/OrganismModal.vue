<script>
import AtomButton from "../atoms/AtomButton.vue";
import AtomText from "../atoms/AtomText.vue";
import MoleculeIconButton from "../molecules/MoleculeIconButton.vue";
import AtomDeleteIcon from "../atoms/icons/AtomDeleteIcon.vue";
import AtomSelect from "../atoms/AtomSelect.vue";
import { useModalStore } from "../../stores/modal.store";
import { mapActions } from "pinia";

export default {
  components: {
    AtomButton,
    AtomText,
    MoleculeIconButton,
    AtomDeleteIcon,
    AtomSelect,
  },
  methods: {
    ...mapActions(useModalStore, ["setOpen"]),
  },
  props: ["states"],
};
</script>
<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal-mask"></div>
      <div class="modal__header">
        <AtomText tag="h2">Modificar estado</AtomText>
      </div>
      <div class="modal__body">
        <AtomText>Selecciona el estado en que se encuentra el pago</AtomText>
        <label v-bind:style="{margin: '10px 0'}">Estado </label>
        <AtomSelect v-bind:options="states" v-bind:style="{width: '37%'}"></AtomSelect>
      </div>
      <div class="modal__footer">
        <MoleculeIconButton>
          <AtomDeleteIcon />
        </MoleculeIconButton>
        <AtomButton class="bg-primary-500" @click="setOpen(false)"
          >Guardar</AtomButton
        >
      </div>
    </div>
  </transition>
</template>
