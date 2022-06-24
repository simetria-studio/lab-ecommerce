<template>
  <div>
    <div class="container">
      <div class="grid-main">
        <div class="card-form">
          <div>
            <h4>LOGIN VETERINÁRIO</h4>
          </div>
          <div class="form-login">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="E-mail:"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Senha:"
                v-model="password"
              />
            </div>
            <div class="my-2">
              <button type="button" @click="login" class="btn btn-one">
                Login
              </button>
            </div>
            <div>
              <nuxt-link to="/register">
                <button type="button" class="btn btn-two">Cadastrar</button>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="text-cad">
          <div>
            <h1>CADASTRE-SE</h1>
            <p>Gratuitamente</p>
          </div>
          <div class="list">
            <p>
              <span><img src="~/assets/img/check-circle.svg" alt="" /></span
              >Cadastre seus animais
            </p>
            <p>
              <span><img src="~/assets/img/check-circle.svg" alt="" /></span
              >Gerencie suas solicitações de exames
            </p>
            <p>
              <span><img src="~/assets/img/check-circle.svg" alt="" /></span
              >Acompanhe a situação dos exames
            </p>
            <p>
              <span><img src="~/assets/img/check-circle.svg" alt="" /></span
              >Impressão dos formulários AIE e Mormo
            </p>
            <p>
              <span><img src="~/assets/img/check-circle.svg" alt="" /></span
              >Histórico de exames por animal
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  // mounted(){
  //   Cookie.remove('_access_token');
  // },
  methods: {
    async login(res) {
      await this.$axios
        .post("api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then(function (response) {
          Cookie.set("_access_token", response.data.access_token);
          window.location.href = "dashboard";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
