<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Условия приема
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <v-data-table data-app
                      :headers="headers_apl"
                      :items="apls" hide-actions
                      class="elevation-1 text-xs-center"
        >
          <template slot="items" slot-scope="props">
            <!--<td class="text-xs-center">{{ props.item.deparName}}</td>-->
            <td class="text-xs-center">{{ props.item.specialityId}}</td>
            <td class="text-xs-center">{{ props.item.environmentId}}</td>
            <td class="text-xs-center">{{ props.item.courseNum}}</td>
            <td class="text-xs-center">{{ props.item.eduForm}}</td>
            <td>
              <div v-if="props.item.chose === true">
                <select v-if="props.item.environmentId === 'ЦелНапр'" v-model="props.item.company" class="minimal col-sm">
                  <option v-for="item in targOrg" v-bind:value="item" >
                    {{item.targOrgId}} -- {{item.name}}
                  </option>
                </select>
                <!--<input v-if="props.item.environmentId === 'ЦелНапр'" v-model="props.item.company" class="form__input" type="text">-->
              </div>
            </td>
            <td>
              <div v-if="props.item.chose === true">
                <input v-if="props.item.environmentId === 'ЦелНапр'" v-model="props.item.contract" class="form__input" type="text">
              </div>
            </td>
            <td>
              <div v-if="props.item.chose === true">
                <input v-if="props.item.environmentId === 'ЦелНапр'" v-model="props.item.date" class="form__input" type="date" min="1918-01-01" max="2019-01-01">
              </div>
            </td>
            <td class="text-xs-center">
              <input v-if="props.item.environmentId === 'ЦелНапр' && checkTargCount === true && props.item.chose !== true && !checCountBudgetAndCel " v-model="props.item.chose" class="checkbox col-sm" type="checkbox" @change="validatorConditions" disabled>
              <input v-else v-model="props.item.chose" class="checkbox col-sm" type="checkbox" @change="validatorConditions">
            </td>

          </template>
        </v-data-table>
      </section>
      <footer class="modal-footer flex">
        <span class="alarm_label">{{message}}</span>
        <slot name="footer flex-end">
          <button
            type="button"
            class="btn-green"
            @click="toApplication()"
          >
            Создать заявление
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields';
  import {mapGetters, mapState} from 'vuex';
  const { mapFields: applications } = createHelpers({
    getterType: `applications/getField`,
    mutationType: `applications/updateField`,
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  export default {
    name: 'modal',
    computed: {
      ...applications(['application','apls','checkTargCount','checkSpecCount','message', 'checCountBudgetAndCel'],),
      ...person(['person_info_id','showProfile']),
      ...mapState('dictionary',['targOrg'],),
      ...mapGetters('dictionary',['GET_targOrg']),
    },
    data () {
      return {
        chose:'',

        // checkSpecCount: false, //может быть только 3 специальности
        // checkTargCount: false, //может быть только 1 целевое
        checkTargBudget: false, //у одной специальности либо целевое, либо бюджет

        headers_apl: [
          // { text: 'Факультет', value: 'deparCode',sortable: false, align: 'center' },
          // { text: 'Специальность', value: 'deparName',sortable: false, align: 'center' },
          { text: 'Специальность', value: 'specialityId',sortable: false, align: 'center' },
          { text: 'Направление', value: 'environmentId',sortable: false, align: 'center' },
          { text: 'Курс', value: 'courseNum',sortable: false, align: 'center' },
          { text: 'Форма обучения', value: 'eduForm',sortable: false, align: 'center' },
          { text: 'Организация', value: 'company',sortable: false, align: 'center' },
          { text: 'Договор', value: 'contract',sortable: false, align: 'center' },
          { text: 'Дата', value: 'date',sortable: false, align: 'center' },
          { text: 'Выбрать', value: 'chose',sortable: false, align: 'center' },
          // { text: 'Действия', value: 'name', sortable: false, align: 'center' }
        ],
        // apls: [],
        }
      },
    props: {
      handleClick: Function,
    },
    methods: {
      validatorConditions(){
        this.$emit('validatorConditions');

      },
      choose(item) {

      },
      close() {
        this.$emit('close');
      },
      toApplication() {
        this.$emit('toApplication');
        this.showProfile=false;
      }
    },

    mounted() {
      this.$store.dispatch('dictionary/onLoadTargOrg');

    },
  }
</script>

<style scoped>
  .alarm_label {
    margin-right: 15px;
    /*text-align: left;*/
    color: red;
  }
  select {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
  }

  select.minimal {
    background-image:
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    border-color: grey;
  }

  select.minimal:focus {
    background-image:
      linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
    border: 1px solid;
    border-color: grey;
  }
  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    /*border: 4px;*/
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
