<template>
  <div class="main">
    <div class="side-menu">
      <menu-component></menu-component>
    </div>
    <div class="content">
      <div class="heading mx-3 my-5">
        <h2><b>Exame:</b> Genotipagem Equina 20 dias</h2>
      </div>
      <div class="head-animal-grid animais d-flex col-md-8">
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
        <div class="mx-2">
          <nuxt-link to="/a-pages/cadastro">
            <button class="btn btn-two">Novo Animal</button>
          </nuxt-link>
        </div>
        <div class="mx-2">
          <nuxt-link to="/a-pages/cadastro">
            <button class="btn btn-one" v-if="showButton == true">
              Próximo
            </button>
          </nuxt-link>
        </div>
      </div>
      <div>
        <h4>ESCOLHA O ANIMAL</h4>
      </div>
      <div class="animal-e-grid">
        <div v-for="animal in animais" :key="animal.id" class="animal-list">
          <div class="text-uppercase">
            <h4>{{ animal.animal_name }}</h4>
          </div>
          <div>
            <h3>Espécie/Raça</h3>
            <h4>{{ animal.especies }} / {{ animal.breed }}</h4>
          </div>
          <div>
            <h3>Proprietário</h3>
            <h4>{{ animal.owner.owner_name }}</h4>
          </div>
          <div>
            <button class="btn btn-two" @click="select">SELECIONAR</button>
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
      showButton: false,
    };
  },
  created() {
    const exame = this.$cookiz.get("_exame");
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
  methods: {
    select() {
      this.showButton = true;
        window.location.href = "/e-pages/waiting";
    },
  },
};
</script>
