<template>
  <div class="main">
    <div class="side-menu">
      <menu-component></menu-component>
    </div>
    <div class="content">
      <div class="heading mx-3 my-5">
        <h2><b>Exame:</b> Genotipagem Equina 20 dias</h2>
      </div>
      <div class="head-animal-grid animais d-flex col-md-6">
        <div>
          <div class="input-group mb-3  search">
            <input
              type="text"
              class="form-control"
              placeholder="Buscar Animal"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <img src="~/assets/img/bx_search-alt.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="mx-2">
          <nuxt-link to="/a-pages/cadastro">
            <button class="btn btn-two">Novo Animal</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuComponent from "~/components/dashboard/MenuComponent.vue";
export default {
  components: { MenuComponent },
  middleware: "authenticated",
  created() {
    const exame = this.$cookiz.get("_exame");
    console.log(exame);
  },
};
</script>
