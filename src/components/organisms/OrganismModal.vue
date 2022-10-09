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
  <div class="modal">
    <div class="modal__header">
      <AtomText tag="h1">Modificar estado</AtomText>
    </div>
    <div class="modal__body">
      <AtomText>Selecciona el estado en que se encuentra el pago</AtomText>
      <label for=""
        >Estado
        <AtomSelect v-bind:options="states"></AtomSelect>
      </label>
    </div>
    <div class="modal__footer">
      <MoleculeIconButton>
        <AtomDeleteIcon />
      </MoleculeIconButton>
      <AtomButton @click="setOpen(false)">Guardar</AtomButton>
    </div>
  </div>
</template>
