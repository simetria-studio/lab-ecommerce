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
                <input
                  type="text"
                  class="form-control"
                  v-model="register_number_brand"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="input-1">Nome do animal</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="animal_name"
                  id="input-1"
                />
              </div>
              <div class="col-md-5 checks-itens">
                <input
                  type="radio"
                  id="check-size-l"
                  value="JC"
                  v-model="classification"
                  class="size"
                />
                <label for="check-size-l"><span>JC</span></label>

                <input
                  type="radio"
                  id="check-size-l"
                  value="SH"
                  v-model="classification"
                  class="size"
                />
                <label for="check-size-l"><span>SH</span></label>

                <input
                  type="radio"
                  id="check-size-l"
                  value="H"
                  v-model="classification"
                  class="size"
                />
                <label for="check-size-l"><span>H</span></label>

                <input
                  type="radio"
                  id="check-size-l"
                  value="FC"
                  v-model="classification"
                  class="size"
                />
                <label for="check-size-l"><span>FC</span></label>

                <input
                  type="radio"
                  id="check-size-l"
                  value="UM"
                  v-model="classification"
                  class="size"
                />
                <label for="check-size-l"><span>UM</span></label>

                <input
                  type="radio"
                  id="check-size-l"
                  value="CR"
                  v-model="classification"
                  class="size"
                />
                <label for="check-size-l"><span>CR</span></label>

                <input
                  type="radio"
                  id="check-size-l"
                  value="outros"
                  v-model="classification"
                  class="size"
                />
                <label for="check-size-l"><span>outros</span></label>
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Espécie</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="especies"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Raça</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="breed"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-1">
                <label for="input-1">Sexo</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="sex"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">Idade</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="age"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Utilidade</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="utility"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-5">
                <label for="input-1">Local Onde se Encontra o Animal</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="animal_location"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="input-1">Cidade</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="city"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">UF</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="state"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Nº de Equídeos Existentes</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="number_existing_equines"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Data Nasc.</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="birth_date"
                  id="input-1"
                  v-mask="'##/##/####'"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Pelagem</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="fur"
                  id="input-1"
                />
              </div>
              <div class="bt-2">
                <button
                  class="btn btn-one"
                  type="button"
                  @click.prevent="next()"
                >
                  Próximo
                </button>
              </div>
            </div>
          </div>
          <div v-if="step === 2">
            <div class="row">
              <div class="form-group col-md-4">
                <label for="input-1">CPF/CNPJ</label>
                <the-mask
                  class="form-control"
                  v-model="vdocument"
                  :mask="['###.###.###-##', '##.###.###/####-##']"
                />
              </div>
              <div class="form-group col-md-8">
                <label for="input-1">Proprietário do Animal</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="owner_name"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="input-1">E-mail</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="email"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">Fone com DDD</label>
                <the-mask
                  class="form-control"
                  v-model="fone"
                  :mask="['(##) ####-####', '(##) #####-####']"
                />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">Celular</label>
                <the-mask
                  class="form-control"
                  v-model="cell"
                  :mask="['(##) ####-####', '(##) #####-####']"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">é whatsapp?</label>
                <input
                  type="checkbox"
                  class="form-control"
                  v-model="whatsapp"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">Cep</label>
                <the-mask
                  class="form-control"
                  v-model="zip_code"
                  :mask="['#####-###']"
                />
              </div>
              <div class="form-group col-md-10">
                <label for="input-1">Endereço</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="address"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-4">
                <label for="input-1">Numero</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="number"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-8">
                <label for="input-1">Complemento</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="complement"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Bairro</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="district"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-3">
                <label for="input-1">Cidade</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="city"
                  id="input-1"
                />
              </div>
              <div class="form-group col-md-2">
                <label for="input-1">UF</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="state"
                  id="input-1"
                />
              </div>
              <div class="col-md-3 bt-3">
                <button
                  class="btn btn-two"
                  type="button"
                  @click.prevent="prev()"
                >
                  Anterior
                </button>
                <button
                  class="btn btn-one"
                  type="button"
                  @click.prevent="next()"
                >
                  Próximo
                </button>
              </div>
            </div>
          </div>
          <div v-if="step === 3">
            <div class="row">
              <div class="col-md-3 my-2">
                <button
                  class="btn btn-two"
                  type="button"
                  @click.prevent="direito()"
                >
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
                <button
                  class="btn btn-two"
                  type="button"
                  @click.prevent="prev()"
                >
                  Anterior
                </button>
                <button
                  class="btn btn-one"
                  type="button"
                  @click.prevent="submit()"
                >
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
                <div class="d-flex justify-content-around">
                  <div :list="list" v-for="element in list" :key="element.id">
                    <div @click.prevent="addList(element)">
                      <img :src="element.mark_path" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <h3>Foto do animal</h3>
                <div
                  style="
                    height: 500px;
                    width: 500px;
                    border: 1px solid red;
                    position: relative;
                  "
                >
                  <div class="img-dir">
                    <img src="~/assets/img/ld-dir.png" alt="" />
                  </div>
                  <vue-draggable-resizable
                    :w="70"
                    :h="70"
                    class="img-teste"
                    :parent="true"
                    :list="list1"
                    v-for="(element, elementid) in list1"
                    :key="elementid"
                    @dragging="onDrag(elementid)"
                    :x="element.x"
                    :y="element.y"
                    :ref="'myid-' + elementid"
                  >
                    <div>
                      <p>{{ element.text }}</p>
                      <img :src="element.img" alt="" />
                    </div>
                  </vue-draggable-resizable>
                </div>
              </div>
              <div class="col-md-3 bt-3">
                <button
                  class="btn btn-two"
                  type="button"
                  @click.prevent="prev()"
                >
                  Anterior
                </button>
                <button
                  class="btn btn-one"
                  type="button"
                  @click.prevent="next()"
                >
                  Próximo
                </button>
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
import Swal from "sweetalert2";

export default {
  components: { MenuComponent, VueDraggableResizable },
  middleware: "authenticated",

  data() {
    return {
      x: 0,
      y: 0,
      step: 1,
      lado: "",
      width: 0,
      height: 0,
      list: [],
      list1: [],
      register_number_brand: "",
      animal_name: "",
      classification: "",
      especies: "",
      breed: "",
      sex: "",
      age: "",
      utility: "",
      animal_location: "",
      city: "",
      state: "",
      number_existing_equines: "",
      birth_date: "",
      fur: "",
      description: "",
      owner: {
        document: "",
        owner_name: "",
        email: "",
        fone: "",
        cell: "",
        whatsapp: "",
        zip_code: "",
        address: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: "",
      },
      resenha_animals: [
        {
          resenha: "right_side",
          photo: "",
          brand_id: "1",
          localization: [
            {
              id: "",
              x: "",
              y: "",
            },
          ],
          description: [
            {
              Description: "Um array de descrição",
            },
          ],
        },
      ],
    };
  },
  created() {
    const token = this.$cookiz.get("_access_token");
    this.$axios
      .$get("lab/marca", {
        headers: {
          "access-token": token,
        }, //the token is a variable which holds the token
      })
      .then((response) => {
        this.list = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    prev() {
      this.step--;
      this.lado = "";
    },
    next() {
      this.step++;
    },

    direito() {
      this.lado = "d";
      this.step++;
    },
    submit() {
      const token2 = this.$cookiz.get("_access_token");
      let data = new Date(this.birth_date);
      let dataFormatada =
        data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getDate();

      const dados = {
        register_number_brand: this.register_number_brand,
        animal_name: this.animal_name,
        classification: this.classification,
        especies: this.especies,
        breed: this.breed,
        sex: this.sex,
        age: this.age,
        utility: this.utility,
        animal_location: this.animal_location,
        city: this.city,
        state: this.state,
        number_existing_equines: this.number_existing_equines,
        birth_date: dataFormatada,
        fur: this.fur,
        description: this.description,
        owner: {
          document: this.vdocument,
          owner_name: this.owner_name,
          email: this.email,
          fone: this.fone,
          cell: this.cell,
          whatsapp: this.whatsapp,
          zip_code: this.zip_code,
          address: this.address,
          number: this.number,
          complement: this.complement,
          district: this.district,
          city: this.city,
          state: this.state,
        },
        resenha_animals: [
          {
            resenha: "right_side",
            photo: "",
            brand_id: "1",
            localization: this.list1,
            description: [
              {
                Description: "Um array de descrição",
              },
            ],
          },
        ],
      };

      const headerz = {
        headers: {
          "access-token": token2,
        },
      };
      this.$axios
        .post("animal", dados, headerz)
        .then(function (response) {
          Swal.fire({
            title: "Sucesso!",
            text: "Cadastro realizado com sucesso!",
            icon: "success",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    addList(element) {
      Swal.fire({
        input: "textarea",
        inputLabel: "Marcas",
        inputPlaceholder: "Escreva aqui...",
        inputAttributes: {
          "aria-label": "Type your message here",
        },
        showCancelButton: true,
      }).then((value) => {
        this.list1.push({
          id: element.id,
          name: element.mark_name,
          img: element.mark_path,
          y: 0,
          x: 0,
          text: value.value,
        });
      });
    },

    onDrag: function (elementid) {
      var x = this.$refs["myid-" + elementid][0].left;
      var y = this.$refs["myid-" + elementid][0].top;
      if (this.$refs["myid-" + elementid].length > 0) {
        this.list1[elementid].x = x;
        this.list1[elementid].y = y;
      }
    },
  },
};
</script>
