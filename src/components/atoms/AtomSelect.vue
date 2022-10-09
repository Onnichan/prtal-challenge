<script>
export default {
  props: ["options"],
};
</script>
<template>
  <select>
    <option v-for="(option, key) in options" :key="key">{{ option }}</option>
  </select>
  <!-- <div class="selectbox">
    <div class="select" id="select">
      <div class="contenido-select">
        <h1 class="titulo">Por pagar</h1>
        <p class="descripcion">Lorem ipsum dolor sit.</p>
      </div>
      <i class="fas fa-angle-down"></i>
      <div class="opciones" id="opciones">
        <a href="#" class="opcion">
          <div class="contenido-opcion">
            <img src="img/mexico.png" alt="" />
            <div class="textos">
              <h1 class="titulo">Mexico</h1>
              <p class="descripcion">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div> -->
</template>
