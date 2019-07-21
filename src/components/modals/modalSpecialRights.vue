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
          <td class="text-xs-center">{{ props.item.deparName}}</td>
          <td class="text-xs-center">{{ props.item.specialityId}}</td>
          <td class="text-xs-center">{{ props.item.environmentId}}</td>
          <td class="text-xs-center">{{ props.item.courseNum}}</td>
          <td class="text-xs-center">{{ props.item.eduForm}}</td>
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
    export default {
        name: "modalSpecialRights"
    }
</script>

<style scoped>

</style>
