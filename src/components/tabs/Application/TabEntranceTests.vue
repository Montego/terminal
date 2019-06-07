<template>
  <div class="inside_tab">
    <div>
      <p>Вступительные испытания</p>
    </div>
    <hr>

    <!--{{this.tab_evidence_ege_info.tab_ege_score1}}-->
    <div class="row">
      <div class="col-sm-6">
        <label class="row">
          <div class="form__label-text col-sm">Русский язык:</div>
          <input v-model="tab_ege_score1" class="form__input col-sm" type="number" name="" placeholder="" disabled />
          <input  class="form__input col-sm" type="number" name="" placeholder="" disabled />
          <!--<input  class="form__input col-sm" type="number" name="" placeholder="" disabled />-->
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Химия:</div>
          <input v-model="tab_ege_score2" class="form__input col-sm" type="number" name="" placeholder="" disabled />
          <input  class="form__input col-sm" type="number" name="" placeholder="" disabled />
          <!--<input  class="form__input col-sm" type="number" name="" placeholder="" disabled />-->
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Биология:</div>
          <input v-model="tab_ege_score3" class="form__input col-sm" type="number" name="" placeholder="" disabled />
          <input  class="form__input col-sm" type="number" name="" placeholder="" disabled />
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
      <div class="col-sm"></div>
    </div>

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
  import { createHelpers } from 'vuex-map-fields';
  // const { mapMultiRowFields } = createHelpers({
  //   getterType: `tab_entrance_tests/getField`,
  //   mutationType: `tab_entrance_tests/updateField`,
  // });
  const { mapFields:tab_entrance_tests } = createHelpers({
    getterType: `tab_entrance_tests/getField`,
    mutationType: `tab_entrance_tests/updateField`,
  });
  const {  mapFields:tab_evidence_ege_info } = createHelpers({
    getterType: `tab_evidence_ege_info/getField`,
    mutationType: `tab_evidence_ege_info/updateField`,
  });
    export default {
        name: "TabEntranceTests",
      computed: {
        ...tab_entrance_tests(['tab_entrance_test_score1', 'tab_entrance_test_score2', 'tab_entrance_test_score3',
          'tab_entrance_test_subject1', 'tab_entrance_test_subject2', 'tab_entrance_test_subject3',
        ]),
        ...tab_evidence_ege_info(['tab_ege_score1','tab_ege_score2','tab_ege_score3',
          'tab_ege_selectedSubject1','tab_ege_selectedSubject2','tab_ege_selectedSubject3'
        ]),

        // takeInfoFromProfile(){
          // return(
            // this.tab_entrance_test_score1 = this.tab_ege_score1
            // this.tab_entrance_test_score2 = this.tab_ege_score2,
            // this.tab_entrance_test_score3 = this.tab_ege_score3,
            // this.tab_entrance_test_subject1 = this.tab_ege_selectedSubject1,
            // this.tab_entrance_test_subject2 = this.tab_ege_selectedSubject2,
            // this.tab_entrance_test_subject3 = this.tab_ege_selectedSubject3
          // );
  // },

      },
      // mounted(){
      //   this.takeInfoFromProfile();
      // },
        data(){
        return{
          headers_ege_results: [
            { text: 'Наименование', value: 'name', sortable: false, align: 'center' },
            { text: 'Балл', value: 'score',sortable: false, align: 'center' },
            { text: 'Форма сдачи', value: 'form',sortable: false, align: 'center' },
            { text: 'Отметка', value: 'grade', sortable: false,align: 'center' },

          ],
          info_ege_results: [],
          ege_result:[]
        }
        }
    }
</script>

<style scoped>
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
