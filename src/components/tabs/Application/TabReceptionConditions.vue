<template>
  <div class="inside_tab">
  <tabs class="parent_tabs">
    <tab id="conditions_overview" name="Обзор">
      <div class="row">
        <button @click="onAdd">Добавить</button>
      </div>
      <v-data-table
        :headers="headers_conditions"
        :items="showTable"
        hide-actions
        class="elevation-1 text-xs-center"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.tab_reception_condition_faculty}}</td>
          <td class="text-xs-center">{{ props.item.tab_reception_condition_specialty}}</td>
          <td class="text-xs-center">{{ props.item.tab_reception_condition_educationType}}</td>
          <td class="text-xs-center">{{ props.item.tab_reception_condition_educationForm }}</td>
          <td class="text-xs-center">{{ props.item.tab_reception_condition_specialRight}}</td>
          <td class="text-xs-center">{{ props.item.tab_reception_condition_consent}}</td>
          <td class="text-xs-center">
            <button @click="onDelete(props.item)">
              <v-icon color="#5bc0de">delete</v-icon>
            </button>
          </td>
          <!--<td class="justify-center layout px-0">-->
            <!--<v-btn icon class="mx-0" @click="specialRight(props.item)">-->
              <!--<v-icon color="#5bc0de">edit</v-icon>-->
            <!--</v-btn>-->
            <!--<v-btn icon class="mx-0" @click="addConsent(props.item)">-->
              <!--<v-icon color="red">delete</v-icon>-->
            <!--</v-btn>-->
          <!--</td>-->
        </template>
      </v-data-table>
      <div class="clear_save_button row">
        <button @click="onNext">Далее ->></button>
        <!--<button @click="onAddParent">Добавить</button>-->
        <!--<button @click="onSaveParent">Сохранить изм-я</button>-->
      </div>
    </tab>
    <tab id="conditions_info" name="Условия приема">
      <div class="inner_tab row">
        <div class="col-sm">
          <div>
            <p>Условия приема</p>
          </div>
          <hr>

          <!--<div v-for="(selected_faculty,selected_specialty, selected_educationForm,-->
          <!--selected_educationCondition, index) in conditions">-->
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

              <!--<label class="row">-->
                <!--<div class="form__label-text col-sm">Форма обучения:</div>-->
                <!--<select v-model="selected_educationForm" class="col-sm">-->
                  <!--<option v-for="option in options_educationForm">-->
                    <!--{{option.item}}-->
                  <!--</option>-->
                <!--</select>-->
              <!--</label>-->
              <label class="row">
                <div class="form__label-text col-sm">Направление обучения:</div>
                <select v-model="selected_educationCondition" class="col-sm">
                  <option v-for="option in options_educationCondition">
                    {{option.item}}
                  </option>
                </select>
              </label>

              <label class="row">
                <div class="form__label-text col-sm">Добавить согласие?</div>
                <select v-model="selected_consent" class="col-sm">
                  <option v-for="option in options_consent">
                    {{option.item}}
                  </option>
                </select>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Особое право?</div>
                <select v-model="selected_specialRight" class="col-sm">
                  <option v-for="option in options_specialRight">
                    {{option.item}}
                  </option>
                </select>
              </label>
              <label v-if="selected_specialRight==='да'" class="row">
                <div class="form__label-text col-sm">Тип особого права</div>
                <select v-model="selected_specialRight" class="col-sm">
                  <option v-for="option in options_specialRight">
                    {{option.item}}
                  </option>
                </select>
              </label>
              <div v-if="selected_specialRight==='да'" class="row">
                <div class="form__label-text col-sm">Документ</div>
                <input class="document col-sm" type="file" title="Загрузите файл"/>
              </div>
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
          <!--</div>-->
            <div class="row">
              <input class="button_add" type="button" value="Очистить" @click="onClearCondition" >
              <input class="button_add" type="button" value="Сохранить" @click="onSaveCondition" >
              <!--<input class="button_add" type="button" value="Добавить" @click="onAddCondition" >-->
              <!--<input class="button_add" type="button" value="Убрать" @click="onRemoveCondition" >-->
              <!--<input class="button_add" type="button" value="Сохранить" @click="onSaveCondition" >-->
            </div>



          <!--</label>-->
        </div>

      </div>

    </tab>
  </tabs>
  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields';
  const { mapMultiRowFields } = createHelpers({
    getterType: `tab_reception_condition/getField`,
    mutationType: `tab_reception_condition/updateField`,
  });
  const { mapFields:tab_reception_condition } = createHelpers({
    getterType: `tab_reception_condition/getField`,
    mutationType: `tab_reception_condition/updateField`,
  });
    export default {
        name: "TabReceptionConditions",
      computed: {
        ...tab_reception_condition(['tab_reception_condition_faculty', 'tab_reception_condition_specialty',
          'tab_reception_condition_educationType', 'tab_reception_condition_educationForm',
          'tab_reception_condition_specialRight', 'tab_reception_condition_consent',
        ]),
        ...mapMultiRowFields([
          'tab_reception_condition_allConditions'
        ]),
        showTable(){
          return this.info_conditions = this.tab_reception_condition_allConditions;
        },
      },
      data(){
          return{
            // conditions:[
            //   {
            //   selected_faculty:'',
            //   selected_specialty:'',
            //   selected_educationForm:'',
            //   selected_educationCondition:'',
            //   }
            // ],

            headers_conditions: [
              {text: 'Факультет', value: 'tab_reception_condition_faculty', sortable: false, align: 'center'},
              {text: 'Специальность', value: ' tab_reception_condition_specialty', sortable: false, align: 'center'},
              {text: 'Тип обучения', value: 'tab_reception_condition_educationType', sortable: false, align: 'center'},
              {text: 'Форма обучения', value: 'tab_reception_condition_educationForm', sortable: false, align: 'center'},
              {text: 'Особое право', value: 'tab_reception_condition_specialRight', sortable: false, align: 'center'},
              {text: 'Согласие', value: 'tab_reception_condition_consent', sortable: false, align: 'center'},
              {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
            ],
            info_conditions: [],


            //test options
            selected_faculty:'',
            selected_specialty:'',
            selected_educationForm:'',
            selected_educationCondition:'',
            selected_consent:'',
            selected_specialRight:'',

            options_specialRight: [
              {id: 1, item: 'да'},
              {id: 2, item: 'нет'},
            ],
            options_consent: [
              {id: 1, item: 'да'},
              {id: 2, item: 'нет'},
            ],
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
        onNext() {
          location.href='application#documents';
        },

        onAdd() {
          location.href='application#conditions_info';
        },

        onDelete(item){
          const index = this.info_conditions.indexOf(item);
          console.log(index);
          this.info_conditions.splice(index, 1);
        },

        onAddCondition() {
          this.conditions.push('');
        },
        onRemoveCondition() {
          this.conditions.pop(this.conditions.length - 1);
        },
        onSaveCondition() {
          location.href='application#conditions_overview';


      function Condition(condition_faculty,condition_specialty,condition_educationType,
                         condition_educationForm, condition_specialRight,condition_consent
          ) {

            this.tab_reception_condition_faculty = condition_faculty;
            this.tab_reception_condition_specialty = condition_specialty;
            this.tab_reception_condition_educationType = condition_educationType;
            this.tab_reception_condition_educationForm = condition_educationForm;
            this.tab_reception_condition_specialRight = condition_specialRight;
            this.tab_reception_condition_consent = condition_consent;

          }
          var condition = new Condition(
            this.tab_reception_condition_faculty, this.tab_reception_condition_specialty,
            this.tab_reception_condition_educationType, this.tab_reception_condition_educationForm,
            this.tab_reception_condition_specialRight,this.tab_reception_condition_consent,

          );

          this.tab_reception_condition_allConditions.push(condition);
          console.log(this.condition)
          console.log(this.tab_reception_condition_allConditions)
          // console.log(this.fullName);
        },
        onClearCondition(){
            this.selected_faculty = null,
            this.selected_specialty = null,
            this.selected_educationForm = null,
            this.selected_educationCondition = null,
            this.selected_consent = null,
            this.selected_specialRight = null
        }
      }
    }
</script>

<style scoped>
  .clear_save_button {
    margin-top: 10%;
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
  }

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
