<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Условия приема иностранцев
          <button
            type="button"
            class="btn-close"
            @click="closeForeignerModal"
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
              <input v-model="props.item.chose" class="checkbox col-sm" type="checkbox" >
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
    name: 'modalForeigner',
    computed: {
      ...applications(['application','apls','aplsFIU','checkTargCount','checkSpecCount','message', 'checCountBudgetAndCel',
        'lechDelCel','lechDelBudget','medProfCel', 'medProfBudget','stomDelCel','stomDelBudget','howMuchTarg','targCountCheck'],),
      ...person(['person_info_id','showProfile','person','']),
      ...mapState('dictionary',['targOrg'],),
      ...mapGetters('dictionary',['GET_targOrg']),
    },
    data () {
      return {
        chose:'',
        headers_apl: [
          { text: 'Специальность', value: 'specialityId',sortable: false, align: 'center' },
          { text: 'Направление', value: 'environmentId',sortable: false, align: 'center' },
          { text: 'Курс', value: 'courseNum',sortable: false, align: 'center' },
          { text: 'Форма обучения', value: 'eduForm',sortable: false, align: 'center' },
          { text: 'Выбрать', value: 'chose',sortable: false, align: 'center' },
        ],
      }
    },
    props: {
      handleClick: Function,
    },
    methods: {

      closeForeignerModal() {
        this.$emit('closeForeignerModal');
      },
      toApplication() {
        this.$emit('toApplication');
        this.person.application.application_selectedDocType = { "id": 0, "name": "Копия" };
        this.person.application.application_selectedDeliveryType = {"id":0,"name":"Лично"};
        this.person.application.application_selectedDeliveryReturnType = {"id":0,"name":"Лично"};

        this.showProfile=false;
        location.href='profile#applicationFill';
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
    border: 1px solid grey;
  }

  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid grey;
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
