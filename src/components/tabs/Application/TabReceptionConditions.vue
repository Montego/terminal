<template>
  <div class="inside_tab">
  <tabs class="parent_tabs">
    <tab id="" name="Обзор">
      <!--<div class="row">-->
      <!--<button>Заполнить</button>-->
      <!--</div>-->
      <v-data-table
        :headers="headers_conditions"
        :items="info_conditions"
        hide-actions
        class="elevation-1 text-xs-center"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.who_parent}}</td>
          <td class="text-xs-center">{{ props.item.snp_parent}}</td>
          <td class="text-xs-center">{{ props.item.surname_parent}}</td>
          <td class="text-xs-center">{{ props.item.name_parent }}</td>
          <td class="text-xs-center">{{ props.item.patronymic_parent}}</td>
          <td class="text-xs-center">{{ props.item.gender_parent}}</td>
          <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="specialRight(props.item)">
              <v-icon color="#5bc0de">edit</v-icon>
            </v-btn>
            <v-btn icon class="mx-0" @click="addConsent(props.item)">
              <v-icon color="red">delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </tab>
    <tab id="" name="Условия приема">
      <div class="inner_tab row">
        <div class="col-sm">
          <div>
            <p>Условия приема</p>
          </div>
          <hr>
          <!--<div class="row" v-for="(extraInfo,index) in extraInfos">-->

          <!--<label class="row" v-for="(extraInfo,index) in extraInfos">-->
          <div v-for="(selected_faculty,selected_specialty, selected_educationForm,
          selected_educationCondition, index) in conditions">
          <div class="row">
            <div class="col-sm-6">

              <label class="row">
                <div class="form__label-text col-sm">Название факультета:</div>
                <select v-model="selected_faculty" class="col-sm">
                  <option v-for="option in options_faculty">
                    {{option.item}}
                  </option>
                </select>
              </label>

              <label class="row">
                <div class="form__label-text col-sm">Название специальности:</div>
                <select v-model="selected_specialty" class="col-sm">
                  <option v-for="option in options_specialty">
                    {{option.item}}
                  </option>
                </select>
              </label>

              <label class="row">
                <div class="form__label-text col-sm">Форма обучения:</div>
                <select v-model="selected_educationForm" class="col-sm">
                  <option v-for="option in options_educationForm">
                    {{option.item}}
                  </option>
                </select>
              </label>

              <label class="row">
                <div class="form__label-text col-sm">Тип обучения:</div>
                <select v-model="selected_educationCondition" class="col-sm">
                  <option v-for="option in options_educationCondition">
                    {{option.item}}
                  </option>
                </select>
              </label>
              <!--<label class="row">-->
                <!--<div class="form__label-text col-sm">Тип обучения:</div>-->
                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">Общежитие:</div>-->
                  <!--<input v-model="specialRight" class="checkbox col-sm" type="checkbox" id="hostel">-->
                <!--</label>-->
              <!--</label>-->
              <!--<label class="row">-->
                <!--<div class="form__label-text col-sm">Тип обучения:</div>-->
                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">Общежитие:</div>-->
                  <!--<input v-model="specialRight" class="checkbox col-sm" type="checkbox" id="hostel">-->
                <!--</label>-->
              <!--</label>-->
            </div>
            <!--<div class="col-sm">-->
              <!--<div>-->
                <!--<p>Особое право, согласение</p>-->
              <!--</div>-->
              <!--<hr>-->
            <!--</div>-->
          </div>
          </div>
            <div class="row">
              <input class="button_add" type="button" value="Добавить" @click="onAddCondition" >
              <input class="button_add" type="button" value="Убрать" @click="onRemoveCondition" >
              <input class="button_add" type="button" value="Сохранить" @click="onSaveCondition" >
            </div>



          <!--</label>-->
        </div>

      </div>
    </tab>
  </tabs>
  </div>
</template>

<script>
    export default {
        name: "TabReceptionConditions",
      data(){
          return{
            conditions:[
              {
              selected_faculty:'',
              selected_specialty:'',
              selected_educationForm:'',
              selected_educationCondition:'',
              }
            ],


            headers_conditions: [
              {text: 'Факультет', value: 'faculty', sortable: false, align: 'center'},
              {text: 'Специальность', value: 'specialty', sortable: false, align: 'center'},
              {text: 'Тип обучения', value: 'educationType', sortable: false, align: 'center'},
              {text: 'Форма обучения', value: 'educationForm', sortable: false, align: 'center'},
              {text: 'Особое право', value: 'specialRight', sortable: false, align: 'center'},
              {text: 'Согласие', value: 'consent', sortable: false, align: 'center'},
              {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
            ],
            info_conditions: [],
            defaultItem: {
              who_parent:'',
              snp_parent: '',
              surname_parent: 0,
              name_parent: 0,
              patronymic_parent: 0,
              time_off: 0,
              gender_parent: 0,
            },

            //test options
            selected_faculty:'',
            selected_specialty:'',
            selected_educationForm:'',
            options_faculty: [
              {id: 1, item: 'Лечебный факультет'},
              {id: 2, item: 'Медико-профилактический факультет'},
              {id: 3, item: 'Стоматологический факультет'},
            ],
            options_specialty: [
              {id: 1, item: 'Лечебное дело'},
              {id: 2, item: 'Медико-профилактическое дело'},
              {id: 3, item: 'Стоматология'},
            ],
            options_educationForm: [
              {id: 1, item: 'Очная'},
            ],
            options_educationCondition: [
              {id: 1, item: 'Бюджет'},
              {id: 2, item: 'Договор'},
              {id: 2, item: 'Целевое'},
            ]

          }

      },
      methods: {
        specialRight() {
        },
        addConsent() {
        },
        onAddCondition() {
          this.conditions.push('');
        },
        onRemoveCondition() {
          this.conditions.pop(this.conditions.length - 1);
        },
        onSaveCondition() {

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
