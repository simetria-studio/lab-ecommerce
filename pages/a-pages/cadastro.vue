<template>
  <div class="main">
    <div class="side-menu">
      <menu-component></menu-component>
    </div>
    <div class="content">
      <div class="container">
        <form>
          <div v-if="step === 1">
            <div class="row">
              <div class="form-group col-md-3">
                <label for="input-1">Registro Nº/Marca:</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-4">
                <label for="input-1">Nome do animal</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="col-md-5 checks-itens">
                <input type="radio" id="check-size-l" class="size" />
                <label for="check-size-l"><span>JC</span></label>

                <input type="radio" id="check-size-l" class="size" />
                <label for="check-size-l"><span>SH</span></label>

                <input type="radio" id="check-size-l" class="size" />
                <label for="check-size-l"><span>H</span></label>

                <input type="radio" id="check-size-l" class="size" />
                <label for="check-size-l"><span>FC</span></label>

                <input type="radio" id="check-size-l" class="size" />
                <label for="check-size-l"><span>UM</span></label>

                <input type="radio" id="check-size-l" class="size" />
                <label for="check-size-l"><span>CR</span></label>

                <input type="radio" id="check-size-l" class="size" />
                <label for="check-size-l"><span>outros</span></label>
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Espécie</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Raça</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-1">
                <label for="input-1">Sexo</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">Idade</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Utilidade</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-5">
                <label for="input-1">Local Onde se Encontra o Animal</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-4">
                <label for="input-1">Cidade</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">UF</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Nº de Equídeos Existentes</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Data Nasc.</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Idade</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="bt-2">
                <button class="btn btn-one" @click.prevent="next()">Próximo</button>
              </div>
            </div>
          </div>
          <div v-if="step === 2">
            <h1>Step Two</h1>

            <button @click.prevent="prev()">Previous</button>
            <button @click.prevent="next()">Next</button>
          </div>
        </form>
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
      step: 1,
    };
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      alert("Submit to blah and show blah and etc.");
    },
  },
};
</script>
