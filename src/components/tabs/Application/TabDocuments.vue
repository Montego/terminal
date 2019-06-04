<template>
  <div class="inside_tab">
    <tabs class="parent_tabs">
      <tab id="" name="Обзор">
        <v-data-table
          :headers="headers_documents"
          :items="info_documents"
          hide-actions
          class="elevation-1 text-xs-center"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.name}}</td>
            <td class="text-xs-center">{{ props.item.copy}}</td>
            <td class="text-xs-center">{{ props.item.date}}</td>
            <td class="text-xs-center">{{ props.item.count }}</td>

          </template>
        </v-data-table>
      </tab>
      <tab id="" name="Документы">
        <div class="inner_tab row">
          <div class="col-sm">
            <div>
              <p>Документы</p>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-11">
                <div class="col-sm-2">
                  Название:
                </div>
                <!--<div class="col-sm-3"><input v-model="document_name" class="form__input col-sm-8" type="text" name="" placeholder=""/></div>-->
                <!--<div class="col-sm-2">Копия/оригинал:</div>-->
                <!--<div class="col-sm-1"><select class="col-sm-2" name="">&ndash;&gt;-->
                  <!--<option>Оригинал</option>-->
                  <!--<option>Копия</option>-->
                  <!--</select>-->
                <!--</div>-->
                <!--<div class="col-sm-2">Дата предоставления:</div>-->
                <!--<div class="col-sm-1"><input v-model="document_date" class="form__input col-sm-2" type="date" name="" placeholder=""/></div>-->
                <!--<div class="col-sm-1">Количество:</div>-->
                <!--<div class="col-sm-1"><input v-model="document_count" class="form__input col-sm-2" type="text" name="" placeholder=""/></div>-->
              </div>
              <div class="col-sm-1">
                <!--<input class="button_add" type="button" value="Добавить" @click="onAddCondition" >-->
                <!--<input class="button_add" type="button" value="Убрать" @click="onRemoveCondition" >-->
                <!--<input class="button_add" type="button" value="Сохранить" @click="onSaveCondition" >-->
              </div>
            </div>
            <!--<div class="row">-->
              <!--<div class="col-sm-6">-->

                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm-4">Название:</div>-->
                  <!--<input v-model="document_name" class="form__input col-sm-8" type="text" name="" placeholder=""/>-->
                <!--</label>-->

                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">Копия/оригинал:</div>-->
                  <!--<select class="col-sm-2" name="">-->
                    <!--<option>Оригинал</option>-->
                    <!--<option>Копия</option>-->
                  <!--</select>-->
                <!--</label>-->

                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">Дата предоставления:</div>-->
                  <!--<input v-model="document_date" class="form__input col-sm-2" type="date" name="" placeholder=""/>-->
                <!--</label>-->

                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">Количество:</div>-->
                  <!--<input v-model="document_count" class="form__input col-sm-2" type="text" name="" placeholder=""/>-->
                <!--</label>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="row">-->
              <!--<input class="button_add" type="button" value="Добавить" @click="onAddCondition" >-->
              <!--<input class="button_add" type="button" value="Убрать" @click="onRemoveCondition" >-->
              <!--<input class="button_add" type="button" value="Сохранить" @click="onSaveCondition" >-->
            <!--</div>-->
          </div>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
    export default {
        name: "TabDocuments",
        data(){
          return {
            document_name:'',
            document_date:'',
            document_count:'',
            headers_documents: [
              {text: 'Название', value: 'name', sortable: false, align: 'center'},
              {text: 'Копия/оригинал', value: 'copy', sortable: false, align: 'center'},
              {text: 'Дата предоставления', value: 'date', sortable: false, align: 'center'},
              {text: 'Количество', value: 'count', sortable: false, align: 'center'},

            ],
            info_documents: [],
          }
        }

    }
</script>

<style scoped>
  .inside_tab {
    margin-top: -90px;
  }
  .button_add {
    min-width: 100px;
    min-height: 40px;
    padding: 10px;
    border: 1px solid;
    border-color: grey;
    border-radius:5px;
    background-color: ghostwhite;
    /*background-color: #EDD19C;*/
    font-size: 16px;
    cursor: pointer;
    transform:scale(0.8);
    opacity:0.9
  }

  label.row {
    margin-bottom: 3px;
  }

  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    /*border: 4px;*/
  }

  select {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
  }

  textarea {
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    width: 90%;
    height: 100px;
    resize: none;
  }

  p {
    font-size: 25px;
    margin-bottom: 0px;
  }

  button {
    min-width: 100px;
    padding: 10px;
    border: 1px solid;
    border-color: grey;
    border-radius: 5px;
    background-color: ghostwhite;
    /*background-color: #EDD19C;*/
    font-size: 16px;
    cursor: pointer;
    transform: scale(0.8);
    opacity: 0.9
  }

  .search_place p {
    margin-right: 10px;
  }

  .search_form div {
    font-size: 20px;
  }

  .search_form input {
    width: 500px;
  }

  .adress_button {
    margin-left: -20px;
  }

  .row {
    margin-bottom: 8px;
  }

  .form__label-text {
    text-align: left;
  }

  .buttons {
    margin-left: 10px;
  }

  .inner_tab {
    margin-top: -40px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }
</style>
