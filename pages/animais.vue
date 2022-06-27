<template>
  <div class="main">
    <div class="side-menu">
      <menu-component></menu-component>
    </div>
    <div class="content animais">
      <div class="container">
        <div class="head-animal-grid">
          <div class="text-animal">
            <div>
              <h3>Animais cadastrados</h3>
            </div>
            <div class="border-bottom"></div>
          </div>
          <div>
            <div class="input-group mb-3 search">
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
          <div>
            <button class="btn btn-two">Novo Animal</button>
          </div>
        </div>
      </div>
      <div class="table-head-animals">
        <div>
          <h4>Nome do Animal</h4>
        </div>
        <div class="ml-1">
          <h4>Espécie/Raça</h4>
        </div>
        <div class="ml-2">
          <h4>Proprietário</h4>
        </div>
      </div>
      <div class="table-body-animals">
        <div>
          <h4>Lilás da Loci ( teste )</h4>
        </div>
        <div>
          <h4>Equina / Mangalarga Marchador</h4>
        </div>
        <div>
          <h4>Loci Genética</h4>
        </div>
        <div class="icons">
          <div class="mx-2">
            <img src="~/assets/img/eye.svg" alt="" />
          </div>
          <div class="mx-2">
            <img src="~/assets/img/edit.svg" alt="" />
          </div>
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
};
</script>
