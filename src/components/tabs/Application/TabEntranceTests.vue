<template>
  <div class="inside_tab">
    <div>
      <p>Вступительные испытания</p>
    </div>
    <hr>

    <div class="row">
    {{this.person.ege_info}}
      {{this.person.ege_info[0].tab_ege_score}}
      <div class="col-sm-6">
        <label class="row">
          <div class="form__label-text col-sm">Русский язык:</div>
          <input  v-model="checkRussianScore" class="form__input col-sm" type="number" name="" placeholder="Заполняется автоматически" disabled />
          <input  class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически" disabled />
          <!--<input  class="form__input col-sm" type="number" name="" placeholder="" disabled />-->
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Химия:</div>
          <input v-model="checkChemistryScore" class="form__input col-sm" type="number" name="" placeholder="Заполняется автоматически" disabled />
          <input  class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически" disabled />
          <!--<input  class="form__input col-sm" type="number" name="" placeholder="" disabled />-->
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Биология:</div>
          <input v-model="checkBiologyScore" class="form__input col-sm" type="number" name="" placeholder="Заполняется автоматически" disabled />
          <input  class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически" disabled />
          <!--<div class="form__label-text col-sm">{{tab_ege_score3}}</div>-->
          <!--<div class="form__label-text col-sm">форма егэ</div>-->
          <!--<output name="tab_ege_score3" class="form__input col-sm" />-->
          <!--<input  class="form__input col-sm" type="number" name="" placeholder="" disabled />-->
          <!--<input  class="form__input col-sm" type="number" name="" placeholder="" disabled />-->
        </label>
        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm-6">Балл(1):</div>-->
          <!--<input v-model="tab_ege_score1" class="form__input col-sm-6" type="number" name="" placeholder=""/>-->
        <!--</label>-->

          <!--<label class="col-sm">{{entrance_test_subject1}}</label>-->
          <!--<output class="col-sm" name="tab_entrance_test_score1">0</output>-->

        <!--<output name="result">0</output>-->
      </div>

    </div>
    <div class="clear_save_button row">
      <button @click="onNext">Далее ->></button>
    </div>

    <!--<div class="clear_save_button row">-->
      <!--<button @click="onSave">Сохранить</button>-->
    <!--</div>-->
    <!--<v-data-table-->
      <!--:headers="headers_ege_results"-->
      <!--:items="info_ege_results"-->
      <!--hide-actions-->
      <!--class="elevation-1 text-xs-center"-->
    <!--&gt;-->
      <!--<template slot="items" slot-scope="props">-->
        <!--<td class="text-xs-center">{{ props.item.name }}</td>-->
        <!--<td class="text-xs-center">{{ props.item.score }}</td>-->
        <!--<td class="text-xs-center">{{ props.item.form }}</td>-->
        <!--<td class="text-xs-center">{{ props.item.grade }}</td>-->

      <!--</template>-->

    <!--</v-data-table>-->
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import { createHelpers } from 'vuex-map-fields';
  const { mapMultiRowFields } = createHelpers({
    getterType: `tab_evidence_ege_info/getField`,
    mutationType: `tab_evidence_ege_info/updateField`,
  });
  const { mapFields:tab_entrance_tests } = createHelpers({
    getterType: `tab_entrance_tests/getField`,
    mutationType: `tab_entrance_tests/updateField`,
  });
  const {  mapFields:tab_evidence_ege_info } = createHelpers({
    getterType: `tab_evidence_ege_info/getField`,
    mutationType: `tab_evidence_ege_info/updateField`,
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  const { mapFields:applications} = createHelpers({
    getterType: 'applications/getField',
    mutationType: 'applications/updateField',
  });
    export default {
        name: "TabEntranceTests",
      computed: {
        ...tab_entrance_tests(['tab_entrance_test_score1', 'tab_entrance_test_score2', 'tab_entrance_test_score3',
          'tab_entrance_test_subject1', 'tab_entrance_test_subject2', 'tab_entrance_test_subject3',
        ]),
        ...tab_evidence_ege_info(['tab_ege_score','tab_ege_score1','tab_ege_score2','tab_ege_score3',
          'tab_ege_selectedSubject','tab_ege_selectedSubject2','tab_ege_selectedSubject3'
        ]),
        ...mapMultiRowFields(['ege_info','tests']),
        ...person(['person']),
        ...applications(['application']),

        show(){
          return this.person.ege_info;
        },

        checkRussianScore() {
          let i = 0;
          for (i; i < this.person.ege_info.length; i++) {
            if (this.person.ege_info[i].tab_ege_selectedSubject === "Русский язык") {
              // this.application.ege.sub = "Русский язык";
              // this.application.ege.score = this.person.ege_info[i].tab_ege_score;
              // this.application.ege.form = this.person.ege_info[i].tab_ege_selectedExamForm;
              // return this.application.ege;
              return this.application.score_russian = this.person.ege_info[i].tab_ege_score;
            }
          }
        },
        checkChemistryScore() {
          let i = 0;
          for (i; i < this.person.ege_info.length; i++) {
            if(this.person.ege_info[i].tab_ege_selectedSubject === "Химия"){
                return this.application.score_chemistry = this.person.ege_info[i].tab_ege_score;
              }
          }
        },
        checkBiologyScore() {
          let i = 0;
          for (i; i < this.person.ege_info.length; i++) {
            if(this.person.ege_info[i].tab_ege_selectedSubject === "Биология"){
               return this.application.score_biology = this.person.ege_info[i].tab_ege_score;
            }
          }
        },






      },
      mounted(){

      },
        data(){

        return{
          ege:{
            sub:'',
            score:'',
            form:''
          },
          // score_russian:'',
          // score_chemistry:'',
          // score_biology:'',
          headers_ege_results: [
            { text: 'Наименование', value: 'name', sortable: false, align: 'center' },
            { text: 'Балл', value: 'score',sortable: false, align: 'center' },
            { text: 'Форма сдачи', value: 'form',sortable: false, align: 'center' },
            { text: 'Отметка', value: 'grade', sortable: false,align: 'center' },

          ],
          info_ege_results: [],
          ege_result:[]
        }
        },
      methods: {
        onNext(){
          location.href='application#other';
        },
        // onSave(){
        //   location.href='application#overview';
        // },
      },
    }
</script>

<style scoped>
  .clear_save_button {
    margin-top: 21%;
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
  }
  label.row {
    margin-bottom: 3px;
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

  .search_place p {
    margin-right: 10px;
  }

  .search_form div {
    font-size: 20px;
  }

  .search_form input {
    width: 500px;
  }

  .copy_address {
    margin-left: 59%;
  }

  .ege_tabs {
    margin-top: -35px;
  }

  .inner_tab {
    margin-top: -40px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }

  .row {
    margin-bottom: 8px;
  }

  .form__label-text {
    text-align: left;
  }
  .alarm_label {
    /*text-align: left;*/
    color: red;
  }

</style>
