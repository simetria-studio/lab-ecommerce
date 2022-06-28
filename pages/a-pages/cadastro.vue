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
                <button class="btn btn-one" @click.prevent="next()">
                  Próximo
                </button>
              </div>
            </div>
          </div>
          <div v-if="step === 2">
            <div class="row">
              <div class="form-group col-md-4">
                <label for="input-1">CPF/CNPJ</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-8">
                <label for="input-1">Proprietário do Animal</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-4">
                <label for="input-1">E-mail</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">Fone com DDD</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">Celular</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">é whatsapp?</label>
                <input type="checkbox" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">Cep</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-10">
                <label for="input-1">Endereço</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-4">
                <label for="input-1">Numero</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-8">
                <label for="input-1">Complemento</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Bairro</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Cidade</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">UF</label>
                <input type="text" class="form-control" id="input-1" />
              </div>
              <div class="col-md-3 bt-3">
                <button class="btn btn-two" @click.prevent="prev()">
                  Anterior
                </button>
                <button class="btn btn-one" @click.prevent="next()">
                  Próximo
                </button>
              </div>
            </div>
          </div>
          <div v-if="step === 3">
            <div class="row">
              <div class="col-md-3 my-2">
                <button class="btn btn-two" @click.prevent="direito()">
                  Lado Direito
                </button>
              </div>
              <div class="col-md-3 my-2">
                <button class="btn btn-two">Lado Esquerdo</button>
              </div>
              <div class="col-md-3 my-2">
                <button class="btn btn-two">Focinho</button>
              </div>
              <div class="col-md-4 my-2">
                <button class="btn btn-two">Linha Superior dos olhos</button>
              </div>
              <div class="col-md-5 my-2">
                <button class="btn btn-two">Pescoço vista inferior</button>
              </div>
              <div class="col-md-5 my-2">
                <button class="btn btn-two">
                  Membros posterior e vista posterior
                </button>
              </div>
              <div class="col-md-4 my-2">
                <button class="btn btn-two">
                  Membros anterioes vista posterior
                </button>
              </div>
              <div class="col-md-5 bt-3">
                <button class="btn btn-two" @click.prevent="prev()">
                  Anterior
                </button>
                <button class="btn btn-one" @click.prevent="next()">
                  Finalizar
                </button>
              </div>
            </div>
          </div>
          <div v-if="lado === 'd'">
            <div class="row">
              <div class="col-md-4">
                <div>
                  <h3>Lado direito</h3>
                </div>
                <div>
                  <p>fotos</p>
                </div>
                <div class="fotos">
                  <div>
                    <div class="form-group">
                      <input
                        type="file"
                        class="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Marcas</label>
                    <input
                      type="search"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Buscar..."
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div class="col-md-7">
                <h3>Foto do animal (Imagine)</h3>
                <div
                  style="
                    height: 500px;
                    width: 500px;
                    border: 1px solid red;
                    position: absolute;
                  "
                >
                  <vue-draggable-resizable
                    :w="100"
                    :h="100"
                    class="img-teste"
                    @dragging="onDrag"

                    :parent="false"
                    :list="list1"
                    v-for="element in list1"
                    :key="element.name"
                  >
                    <p >{{ element.name }}</p>
                  </vue-draggable-resizable>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import MenuComponent from "~/components/dashboard/MenuComponent.vue";
import VueDraggableResizable from "vue-draggable-resizable";

export default {
  components: { MenuComponent, VueDraggableResizable },
  middleware: "authenticated",

  data() {
    return {
      step: 1,
      lado: "",
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      list1: [
        { name: "Marca1", id: 1 },
        { name: "Marca2", id: 2 },
        { name: "Marca3", id: 3 },
        { name: "Marca4", id: 4 },
        { name: "Marca5", id: 5 },
      ],
    };
  },

  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },

    direito() {
      this.lado = "d";
      this.step++;
    },
    submit() {
      alert("Submit to blah and show blah and etc.");
    },
    onResize: function (x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function (x, y) {
      this.x = x;
      this.y = y;
    },
  },
};
</script>
