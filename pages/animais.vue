<template>
  <div class="main">
    <div class="side-menu">
      <menu-component></menu-component>
    </div>
    <div class="content animais">
      <div class="container">
        <h3>Animais cadastrados</h3>
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
