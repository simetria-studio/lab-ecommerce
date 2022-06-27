<template>
  <div>
    <div class="header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="logo col-md-2">
            <nuxt-link to="/">
              <img src="~/assets/img/logo.svg" alt="" />
            </nuxt-link>
          </div>
          <div class="menu col-md-4">
            <div>
              <b-navbar toggleable="lg" type="dark">
                <b-navbar-nav>
                  <b-nav-item href="#">Início</b-nav-item>
                  <b-nav-item href="#">Quem Somos</b-nav-item>
                  <b-nav-item href="#">Serviços</b-nav-item>
                  <b-nav-item href="#">Contato</b-nav-item>
                </b-navbar-nav>
              </b-navbar>
            </div>
          </div>
          <div class="col-md-2 d-flex redes">
            <div>
              <h4>
                Redes<br />
                Sociais
              </h4>
            </div>
            <div class="ml-5 mx-1">
              <img src="~/assets/img/instagram.svg" alt="" />
            </div>
            <div class="mx-1">
              <img src="~/assets/img/facebook.svg" alt="" />
            </div>
            <div class="mx-1">
              <img src="~/assets/img/linkedin.svg" alt="" />
            </div>
          </div>
          <div v-if="!auth" class="col-md-2 d-flex flex-column user mx-3">
            <nuxt-link to="/login">
              <button class="btn btn-two font-sz">Areá do Veterinario</button>
            </nuxt-link>
          </div>
          <div v-if="auth" class="col-md-2 d-flex flex-column user mx-3 mt-2">
            <nuxt-link to="/dashboard"
              ><h4>{{ name }}</h4></nuxt-link
            >
            <p>Carrinho vazio</p>
          </div>
          <div class="sair ml-5" @click="logout">
            <a class="">Sair</a>
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  data() {
    return {
      auth: false,
      name: "",
    };
  },
  methods: {
    async logout() {
      this.$cookiz.removeAll();
       window.location.href = "login";
    },
  },

  created() {
    const token = this.$cookiz.get("_access_token");
    this.$axios
      .$get("api/auth/user", {
        headers: {
          "access-token": token,
        }, //the token is a variable which holds the token
      })
      .then((response) => {
        console.log(response.name);
        this.auth = true;
        this.name = response.name;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
