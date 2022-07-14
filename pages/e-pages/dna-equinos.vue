<template>
  <div class="main">
    <div class="side-menu">
      <menu-component></menu-component>
    </div>
    <div class="content">
      <div class="fade-less" @click="fadeShow" v-if="show == true"></div>
      <div class="d-flex col-md-6">
        <div>
          <button class="btn btn-one px-5 text-white">DNA</button>
        </div>
        <div>
          <button class="btn btn-two px-5 bg-white text-black-50">
            EQUINOS
          </button>
        </div>
      </div>
      <div class="exames-list">
        <div v-for="exame in exames" :key="exame.id" class="px-3">
          <div
            v-if="exame.category == 'dna' && exame.animal == 'equinos'"
            class="exame-body"
          >
            <div class="px-2 pt-4 text-uppercase">
              <h1>{{ exame.title }}</h1>
            </div>
            <div class="p-2">
              <p>{{ exame.short_description }}</p>
            </div>
            <div class="price">
              <h4>R$ {{ formatPrice(exame.value) }}</h4>
            </div>
            <div class="p-2">
              <p>
                <b
                  >*obrigatório o preenchimento da Solicitação de genotipagem
                  animal</b
                >
              </p>
            </div>
            <div>
              <button class="btn btn-two" @click="showDetail(exame)">
                DETALHES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail" v-if="show == 1">
      <div class="header-detail">
        <h4>{{ list.title }}</h4>
      </div>
      <div class="body-d">
        <div class="body-detail">
          <div class="price-e">
            <h3>R$ {{ formatPrice(list.value) }}</h3>
            <p>(inclui até 2 verificações)</p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                verificação extra <br />
                R$ 20,00
              </label>
            </div>
          </div>
          <div>
            <h4>
              *obrigatório o preenchimento da Solicitação de genotipagem animal
            </h4>
            <button class="btn btn-two" @click="createPedido(list)">
              INICIAR
            </button>
          </div>
        </div>
      </div>
      <div class="footer-exa">
        <div>
          <h4>
            {{ list.short_description }}
          </h4>
        </div>
        <div>
          <p>*os genitores devem ser informados na Solicitação</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuComponent from "~/components/dashboard/MenuComponent.vue";
import Cookie from "js-cookie";

export default {
  components: { MenuComponent },
  middleware: "authenticated",

  data() {
    return {
      exames: [],
      show: false,
      list: [],
    };
  },
  created() {
    const token = this.$cookiz.get("_access_token");
    this.$axios
      .$get("lab/exame", {
        headers: {
          "access-token": token,
        }, //the token is a variable which holds the token
      })
      .then((response) => {
        this.exames = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    showDetail(exame) {
      if (!this.show) {
        this.show = true;
        this.list = exame;
      } else {
        this.show = false;
      }
    },
    fadeShow() {
      this.show = false;
    },
    createPedido(list) {
      var myJSON = JSON.stringify(list);
      const exame = this.$cookiz.get("_exame");
      if (!exame) {
        Cookie.set("_exame", myJSON);
      } else {
        Cookie.remove("_exame");
        Cookie.set("_exame", myJSON);
      }
      window.location.href = "/e-pages/chose-animal";
    },
  },
};
</script>
