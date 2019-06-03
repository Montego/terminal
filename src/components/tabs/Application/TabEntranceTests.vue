<template>
  <div class="inside_tab">
    <div>
      <p>Вступительные испытания</p>
    </div>
    <hr>
    <hr>
    <v-data-table
      :headers="headers_ege_result"
      :items="info_ege_result"
      hide-actions
      class="elevation-1 text-xs-center"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.score }}</td>
        <td class="text-xs-center">{{ props.item.form }}</td>
        <td class="text-xs-center">{{ props.item.something }}</td>

      </template>

    </v-data-table>
  </div>
</template>

<script>
    export default {
        name: "TabEntranceTests",
      data(){
        return{
          headers_ege_result: [
            { text: 'Наименование', value: 'name', sortable: false, align: 'center' },
            { text: 'Балл', value: 'score',sortable: false, align: 'center' },
            { text: 'Форма сдачи', value: 'form',sortable: false, align: 'center' },
            { text: 'Отметка', value: 'something', sortable: false,align: 'center' },

          ],
          info_ege_result: [],
        }
        }
    }
</script>

<style scoped>
  p {
    font-size: 25px;
    margin-bottom: 0px;
  }
</style>
