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
    <div class="modal-container">
      <div class="modal-mask" @click="setOpen(false)"></div>
      <div class="modal">
        <div class="modal__header">
          <AtomText tag="h2">Modificar estado</AtomText>
        </div>
        <div class="modal__body">
          <AtomText>Selecciona el estado en que se encuentra el pago</AtomText>
          <label
            class="text-neutral-600"
            v-bind:style="{ margin: '10px 0 7px 0 ', fontSize: '14px' }"
            >Estado
          </label>
          <AtomSelect
            v-bind:options="states"
            v-bind:style="{ width: '37%', marginBottom: '25px' }"
          ></AtomSelect>
          <input
            type="date"
            v-bind:style="{ width: '37%', marginBottom: '25px' }"
          />
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
    </div>
  </transition>
</template>
