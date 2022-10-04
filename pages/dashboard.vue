<template>
  <div class="main">
    <div class="side-menu">
      <menu-component></menu-component>
    </div>
    <div class="content">
      <div class="container">
        <div class="pedido-header">
          <div>
            <h4>ID</h4>
          </div>
          <div>
            <h4>Tipo de Solicitação</h4>
          </div>
          <div>
            <h4>N Pedido</h4>
          </div>
          <div>
            <h4>Proprietário</h4>
          </div>
          <div>
            <h4>Status</h4>
          </div>
        </div>
        <div class="content-dash">
          <p>Nenhum pedido realizado </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuComponent from "~/components/dashboard/MenuComponent.vue";

export default {
  components: { MenuComponent },
  // middleware: "authenticated",

};
</script>
