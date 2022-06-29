<template>
  <div>
    <div class="container">
      <div class="grid-main">
        <div class="card-form">
          <div>
            <h4>CADASTRO VETERINÁRIO</h4>
          </div>
          <div class="form-login">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Nome Completo:"
                  v-model="name"
                />
              </div>
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
                <button type="button" @click="sendData" class="btn btn-one">
                  Cadastrar
                </button>
              </div>
              <div>
                <nuxt-link to="/login">
                  <button type="button" class="btn btn-two">Login</button>
                </nuxt-link>
              </div>
            </form>
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
import Swal from "sweetalert2";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },


  methods: {
    async sendData() {
      this.$axios
        .post("register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(function (response) {
          console.log(response);
          Swal.fire({
            title: "Sucesso!",
            text: "Cadastro realizado com sucesso!",
            icon: "success",
          }).then((result) => {
            window.location.href = "login";
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
