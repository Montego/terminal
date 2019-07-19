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
            <td class="text-xs-center">{{ props.item.deparCode }}</td>
            <td class="text-xs-center">{{ props.item.deparName}}</td>
            <td class="text-xs-center">{{ props.item.dpecialityId}}</td>
            <td class="text-xs-center">{{ props.item.environmentId}}</td>
            <td class="text-xs-center">{{ props.item.courseNum}}</td>
            <td class="text-xs-center">{{ props.item.thisCase}}</td>
            <td class="text-xs-center">
              <input v-model="props.item.chose" class="checkbox col-sm" type="checkbox"  @click="choose(props.item)">
            </td>

          </template>
        </v-data-table>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
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
    data () {
      return {
        chose:'',
        headers_apl: [
          { text: 'Факультет', value: 'deparCode',sortable: false, align: 'center' },
          { text: 'Специальность', value: 'deparName',sortable: false, align: 'center' },
          { text: 'Направление', value: 'dpecialityId',sortable: false, align: 'center' },
          { text: 'Согласие', value: 'environmentId',sortable: false, align: 'center' },
          { text: 'Направление', value: 'courseNum',sortable: false, align: 'center' },
          { text: 'Согласие', value: 'thisCase',sortable: false, align: 'center' },
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
    computed: {
      ...applications(['application','apls'],),
      ...person(['person_info_id','showProfile']),
     }
  }
</script>

<style scoped>
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
