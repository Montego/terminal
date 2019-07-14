<template>
  <div class="inside_tab">
  <tabs class="parent_tabs">
    <tab id="conditions_overview" name="Обзор">
      <div class="row">
        <button @click="onAdd">Добавить</button>
        <button>Распечатать согласение</button>
      </div>

      <v-data-table
        :headers="headers_conditions"
        :items="showTable"
        hide-actions
        class="elevation-1 text-xs-center"
      >

        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.selected_faculty}}</td>
          <td class="text-xs-center">{{ props.item.selected_speciality}}</td>
          <td class="text-xs-center">{{ props.item.selected_educationType}}</td>
          <td class="text-xs-center">{{ props.item.selected_agreement}}</td>
          <!--<td class="text-xs-center">{{ props.item.tab_reception_condition_educationForm }}</td>-->
          <td class="text-xs-center">{{ props.item.selected_specialRight}}</td>
          <td class="text-xs-center">{{ props.item.selected_typeOfSpecialRight}}</td>
          <!--<td class="text-xs-center">{{ props.item.selected_agreement}}</td>-->
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
                <select v-model="selected_faculty" class="minimal col-sm">
                  <option v-for="option in options_faculty">
                    {{option.item}}
                  </option>
                </select>
              </label>

              <label class="row">
                <div class="form__label-text col-sm">Название специальности:</div>
                <!--<select v-model="selected_speciality" class="minimal col-sm">-->
                  <!--<option v-for="item in speciality" v-bind:value="item">-->
                    <!--{{item.description}}-->
                  <!--</option>-->
                <!--</select>-->

                <select v-model="selected_speciality" class="minimal col-sm">
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
                <select v-model="selected_educationType" class="minimal col-sm">
                  <option v-for="option in options_educationType">
                    {{option.item}}
                  </option>
                </select>
              </label>

              <div class="row">
                <div class="form__label-text col-sm">Добавить согласие?</div>

                <select v-model="selected_agreement" class="minimal col-sm">
                  <option v-for="option in options_agreement">
                    {{option.item}}
                  </option>
                </select>
                <!--<v-icon v-if="selected_agreement==='да'">print</v-icon>-->
              </div>
              <label class="row">
                <div class="form__label-text col-sm">Дата согласия:</div>
                <input v-model="date_agreement" class="form__input col-sm" type="date" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Особое право?</div>
                <select v-model="selected_specialRight" class="minimal col-sm">
                  <option v-for="option in options_specialRight">
                    {{option.item}}
                  </option>
                </select>
              </label>
              <label v-if="selected_specialRight==='да'" class="row">
                <div class="form__label-text col-sm">Тип особого права</div>
                <select v-model="selected_typeOfSpecialRight" class="minimal col-sm">
                  <option v-for="option in options_typeOfSpecialRight">
                    {{option.item}}
                  </option>
                </select>
              </label>


              <!--<div v-if="selected_specialRight==='да'" class="row">-->
                <!--<div class="form__label-text col-sm">Документ</div>-->
                <!--<input type="file" id="special_right_document" ref="special_right_document" @change="uploadFile">-->
              <!--</div>-->


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
            <div v-if="selected_specialRight==='да'" class="col-sm-6">
              <h3>Документы, подтверждающие особое право</h3>
              <!--<label class="row">-->
                <!--<div class="form__label-text col-sm">Документ:</div>-->
                <!--<input v-model="proof_special_right" class="form__input col-sm" type="text" name=""  />-->
              <!--</label>-->
              <label class="row">
                <div class="form__label-text col-sm">Подтверждающий док-т:</div>
                  <select v-model="proof_special_right" class="minimal col-sm">
                    <option v-for="option in options_DocumentType">
                      {{option.item}}
                    </option>
                  </select>
              </label>

              <label class="row">
                <div class="form__label-text col-sm">Описание:</div>
                <input v-model="proof_special_right_description" class="form__input col-sm" type="text" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Серия:</div>
                <input v-model="proof_special_right_serial" class="form__input col-sm" type="text" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Номер:</div>
                <input v-model="proof_special_right_number" class="form__input col-sm" type="text" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Копия/оригинал:</div>
                <select v-model="condition_selectedDocType" class="minimal col-sm">
                  <option v-for="item in docType" v-bind:value="item">
                    {{item.name}}
                  </option>
                </select>
              </label>
              <hr>

              <label class="row">
                <div class="form__label-text col-sm">Подтверждающий док-т:</div>
                <select v-model="proof_special_right2" class="minimal col-sm">
                  <option v-for="option in options_DocumentType">
                    {{option.item}}
                  </option>
                </select>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Описание:</div>
                <input v-model="proof_special_right_description2" class="form__input col-sm" type="text" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Серия:</div>
                <input v-model="proof_special_right_serial2" class="form__input col-sm" type="text" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Номер:</div>
                <input v-model="proof_special_right_number2" class="form__input col-sm" type="text" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Копия/оригинал:</div>
                <select v-model="condition_selectedDocType2" class="minimal col-sm">
                  <option v-for="item in docType" v-bind:value="item">
                    {{item.name}}
                  </option>
                </select>
              </label>
              <hr>

              <label class="row">
                <div class="form__label-text col-sm">Подтверждающий док-т:</div>
                <select v-model="proof_special_right3" class="minimal col-sm">
                  <option v-for="option in options_DocumentType">
                    {{option.item}}
                  </option>
                </select>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Описание:</div>
                <input v-model="proof_special_right_description3" class="form__input col-sm" type="text" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Серия:</div>
                <input v-model="proof_special_right_serial3" class="form__input col-sm" type="text" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Номер:</div>
                <input v-model="proof_special_right_number3" class="form__input col-sm" type="text" name=""  />
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Копия/оригинал:</div>
                <select v-model="condition_selectedDocType3" class="minimal col-sm">
                  <option v-for="item in docType" v-bind:value="item">
                    {{item.name}}
                  </option>
                </select>
              </label>
              <hr>
            </div>
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
  import {mapGetters, mapState} from 'vuex'
  import { createHelpers } from 'vuex-map-fields';
  const { mapFields:applications} = createHelpers({
    getterType: 'applications/getField',
    mutationType: 'applications/updateField',
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
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
      mounted () {
        this.$store.dispatch('dictionary/onLoadSpeciality');
        this.$store.dispatch('enums/onLoadDocType');

      },
      computed: {
        ...tab_reception_condition(['tab_reception_condition_faculty', 'tab_reception_condition_specialty',
          'tab_reception_condition_educationType', 'tab_reception_condition_educationForm',
          'tab_reception_condition_specialRight', 'tab_reception_condition_consent',
          'selected_faculty', 'selected_speciality', 'selected_educationType','selected_agreement','date_agreement',
          'selected_specialRight','selected_typeOfSpecialRight', 'documentBase64', 'proof_special_right',
          'proof_special_right_description', 'proof_special_right_serial','proof_special_right_number',
          'condition_selectedDocType',
          'proof_special_right2',
          'proof_special_right_description2', 'proof_special_right_serial2','proof_special_right_number2',
          'condition_selectedDocType2',
          'proof_special_right3',
          'proof_special_right_description3', 'proof_special_right_serial3','proof_special_right_number3',
          'condition_selectedDocType3'

        ]),
        ...mapMultiRowFields([
          'tab_reception_condition_allConditions'
        ]),
        ...applications(['application']),
        ...person(['person','application_condition']),
        ...mapGetters('dictionary',['GET_speciality']),
        ...mapState('dictionary',['speciality']),
        ...mapState('enums',['docType'],),
        ...mapGetters('enums',['GET_DOC_TYPE'],),
        showTable(){
          return this.application.application_condition;
        },
      },
      data(){
          return{

            special_right_document:'',


            headers_conditions: [
              {text: 'Факультет', value: 'selected_faculty', sortable: false, align: 'center'},
              {text: 'Специальность', value: 'selected_speciality', sortable: false, align: 'center'},
              {text: 'Тип обучения', value: 'selected_educationType', sortable: false, align: 'center'},
              {text: 'Согласие', value: 'selected_agreement', sortable: false, align: 'center'},
              {text: 'Особое право', value: 'selected_specialRight', sortable: false, align: 'center'},
              {text: 'Тип особого права', value: 'selected_typeOfSpecialRight', sortable: false, align: 'center'},
              // {text: 'Согласие', value: 'selected_agreement', sortable: false, align: 'center'},
              {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
            ],
            info_conditions: [],

            options_DocumentType: [
              {id: 0, item: ''},
              {id: 1, item: 'Документ, подтверждающий сиротство'},
              {id: 2, item: 'Свидетельство о рождении'},
              {id: 3, item: 'Иной документ'},
              {id: 4, item: 'Справка об установлении инвалидности'},
              {id: 5, item: 'Документ, подтверждающий ограниченные возможности здоровья  или инвалидность, требующие создания указанных условий'},
              {id: 6, item: 'Удостоверение'},
              {id: 7, item: 'Документ, подтверждающий принадлежность к ветеранам боевых действий'},
            ],
            //test options
            // selected_faculty:'',
            // selected_specialty:'',
            // selected_educationForm:'',
            // selected_educationCondition:'',
            // selected_consent:'',
            // selected_specialRight:'',

            options_typeOfSpecialRight: [
              {id: 1, item: 'Дети-сироты и дети, оставшиеся без попечения родителей'},
              {id: 2, item: 'Лица из числа детей-сирот и детей, оставшихся без попечения родителей'},
              {id: 3, item: 'Дети-инвалиды'},
              {id: 4, item: 'Инвалиды I группы'},
              {id: 5, item: 'Инвалиды II группы'},
              {id: 6, item: 'Инвалиды с детства'},
              {id: 7, item: 'Ветераны боевых действий из числа лиц, указанных в подпунктах 1-4 пункта 1 статьи 3 ФЗ от 12.01.1995 №5-ФЗ "О ветеранах"'},
            ],


            options_specialRight: [
              {id: 1, item: 'да'},
              {id: 2, item: 'нет'},
            ],
            options_agreement: [
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
            options_educationType: [
              {id: 1, item: 'Бюджет'},
              {id: 2, item: 'Договор'},
              {id: 2, item: 'Целевое'},
            ],
            // file: {
            //   // name:'',
            //   // type:'',
            //   // size:''
            // },
          }

      },
      methods: {


        uploadFile(e){
          let file = e.target.files[0];
          let reader = new FileReader();
          reader.onloadend = (file) => {
            this.documentBase64 = reader.result;
            // console.log('RESULT',reader.result)
          }
          reader.readAsDataURL(file);
        },
        onFileChange(e) {
          let files = e.target.files || e.dataTransfer.files;
          this.file = files[0];
          // this.file.name = files[0].name;
          // this.file.type = files[0].type;
          // this.file.size = files[0].size;
          // this.file.push(files[0]);
          console.log(this.file)
          if (!files.length)
            return;
          // return file;
          // this.createImage(files[0]);
        },

        onNext() {
          location.href='profile#documents';
        },

        onAdd() {
          location.href='profile#conditions_info';
        },

        onDelete(item){
          const index = this.application.application_condition.indexOf(item);
          console.log(index);
          this.application.application_condition.splice(index, 1);
        },

        // onAddCondition() {
        //   this.conditions.push('');
        // },
        // onRemoveCondition() {
        //   this.conditions.pop(this.conditions.length - 1);
        // },
        onSaveCondition() {
          location.href='profile#conditions_overview';

          function Condition(faculty, speciality, type, agreement, date_agreement, special_right,
                             type_special_right, proof_special_right ,proof_special_right_description ,
                             proof_serial ,proof_number,condition_selectedDocType,
                             proof_special_right2 ,proof_special_right_description2 ,
                             proof_serial2 ,proof_number2,condition_selectedDocType2,
                              proof_special_right3 ,proof_special_right_description3 ,
                             proof_serial3 ,proof_number3,condition_selectedDocType3
                             // document
          ) {
            this.selected_faculty = faculty;
            this.selected_speciality = speciality;
            this.selected_educationType = type;
            this.selected_agreement = agreement;
            this.date_agreement = date_agreement;
            this.selected_specialRight = special_right;
            this.selected_typeOfSpecialRight = type_special_right;
            this.proof_special_right = proof_special_right;
            this.proof_special_right_description = proof_special_right_description;
            this.proof_special_right_serial = proof_serial;
            this.proof_special_right_number = proof_number;
            this.condition_selectedDocType = condition_selectedDocType;

            this.proof_special_right2 = proof_special_right2;
            this.proof_special_right_description2 = proof_special_right_description2;
            this.proof_special_right_serial2 = proof_serial2;
            this.proof_special_right_number2 = proof_number2;
            this.condition_selectedDocType2 = condition_selectedDocType2;

            this.proof_special_right3 = proof_special_right3;
            this.proof_special_right_description3 = proof_special_right_description3;
            this.proof_special_right_serial3 = proof_serial3;
            this.proof_special_right_number3 = proof_number3;
            this.condition_selectedDocType3 = condition_selectedDocType3;
            // this.documentBase64 = document;
          }
          let condition = new Condition(
            this.selected_faculty, this.selected_speciality,
            this.selected_educationType, this.selected_agreement,
            this.date_agreement, this.selected_specialRight, this.selected_typeOfSpecialRight,
            this.proof_special_right,this.proof_special_right_description,this.proof_special_right_serial,
            this.proof_special_right_number, this.condition_selectedDocType,
            this.proof_special_right2,this.proof_special_right_description2,this.proof_special_right_serial2,
            this.proof_special_right_number2,this.condition_selectedDocType2,
            this.proof_special_right3,this.proof_special_right_description3,this.proof_special_right_serial3,
            this.proof_special_right_number3,this.condition_selectedDocType3
            // this.documentBase64
          );
          console.log(condition)
          this.application.application_condition.push(condition)
          // this.application.application_condition.push(condition);




        },
        onClearCondition(){
            this.selected_faculty = null,
            this.selected_speciality = null,
            this.selected_educationType = null,
            this.selected_agreement = null,
            this.selected_specialRight = null,
            this.selected_typeOfSpecialRight = null,
            this.proof_special_right = null,
            this.condition_selectedDocType = null
        }
      }
    }
</script>

<style scoped>
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
  }

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
