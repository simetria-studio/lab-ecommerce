<template>
  <div class="main">
    <div class="side-menu">
      <menu-component></menu-component>
    </div>
    <div class="content">
      <div class="col-md-8 d-flex">
        <div class="mx-3"><button class="btn btn-two">GERAR PDF</button></div>
        <div class="mx-3"><button class="btn btn-one">FINALIZAR E PAGAR</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuComponent from "~/components/dashboard/MenuComponent.vue";
export default {
  components: { MenuComponent },
  middleware: "authenticated",
};
</script>
