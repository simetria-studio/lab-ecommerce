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
            <nuxt-link to="/a-pages/cadastro">
              <button class="btn btn-two">Novo Animal</button>
            </nuxt-link>
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
      <div class="table-body-animals" v-for="animal in animais" :key="animal.id">
        <div>
          <h4>{{ animal.animal_name }}</h4>
        </div>
        <div>
          <h4>{{ animal.especies }}/{{ animal.breed }}</h4>
        </div>
        <div>
          <h4>{{ animal.owner.owner_name }}</h4>
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
  data() {
    return {
      animais: [],
    };
  },
  created() {
    const token = this.$cookiz.get("_access_token");
    this.$axios
      .$get("animal", {
        headers: {
          "access-token": token,
        }, //the token is a variable which holds the token
      })
      .then((response) => {
        this.animais = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
