<template>
  <div class="main">
    <div class="side-menu">
      <menu-component></menu-component>
    </div>
    <div class="content">
      <div class="d-flex col-md-6">
        <button class="btn btn-one" @click="showList1">DNA</button>
        <button class="btn btn-two" @click="showList2">SOROLOGIA</button>
      </div>
      <div class="animal-list" v-if="show === 1">
        <div>
          <nuxt-link to="/e-pages/dna-equinos">
            <div class="animal-img">
              <img src="~/assets/img/horse.png" alt="" />
            </div>
          </nuxt-link>
          <h4>EQUINOS</h4>
        </div>
        <div>
          <div class="animal-img">
            <img src="~/assets/img/cow.png" alt="" />
          </div>
          <h4>BOVINOS</h4>
        </div>
        <div>
          <div class="animal-img">
            <img src="~/assets/img/donkey.png" alt="" />
          </div>
          <h4>ASININOS E MUARES</h4>
        </div>
      </div>
      <div class="animal-list" v-if="show === 2">
        <div>
          <div class="animal-img">
            <img src="~/assets/img/horse.png" alt="" />
          </div>
          <h4>EQUINOS</h4>
        </div>
        <div>
          <div class="animal-img">
            <img src="~/assets/img/donkey.png" alt="" />
          </div>
          <h4>ASININOS E MUARES</h4>
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
      show: 1,
    };
  },
  methods: {
    showList1() {
      this.show = 1;
    },
    showList2() {
      this.show = 2;
    },
  },
};
</script>
