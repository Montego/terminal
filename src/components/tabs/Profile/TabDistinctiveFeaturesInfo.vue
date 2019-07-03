<template>
    <div>
      <tabs class="parent_tabs">
        <tab id="features_overview" name="Обзор">
          <div class="row">
            <button @click="onInfo">Добавить</button>
          </div>
          <v-data-table
            :headers="headers_features_info"
            :items="table_show"
            hide-actions
            class="elevation-1 text-xs-center"
            >
            <template slot="items" slot-scope="props">
            <!--<td class="text-xs-center">{{ props.item.code }}</td>-->
            <td class="text-xs-center">{{ props.item.tab_features_selectedAttrType.name }}</td>
            <td class="text-xs-center">{{ props.item.tab_features_selectedPreference.name }}</td>
            <td class="text-xs-center">{{ props.item.tab_features_selectedYypeDiploma.name }}</td>
            <td class="text-xs-center">{{ props.item.tab_features_selectedPreference.points}}</td>
              <td class="text-xs-center">
                <button @click="onEdit(props.item)">
                  <v-icon color="#5bc0de">edit</v-icon>
                </button>{{ props.item.acions}}
                <button @click="onDelete(props.item)">
                  <v-icon color="#5bc0de">delete</v-icon>
                </button>{{ props.item.acions}}
              </td>
            <!--<td class="text-xs-center">{{ props.item.done }}</td>-->
            <!--<td class="text-xs-center">{{ props.item.ball_2}}</td>-->
            </template>

            </v-data-table>
        </tab>
        <tab id="features_info" name="Отличительные признаки">
          <div class="inner_tab row">
            <div class="col-sm">
              <div>
                <p>Отличительные признаки</p>
              </div>
              <label class="row">
                <div class="form__label-text col-sm">Тип признака:</div>
                <select v-model="tab_features_selectedAttrType"  class="minimal col-sm">
                  <option v-for="item in attrType" v-bind:value="item">
                    {{item.name}}
                  </option>
                </select>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Название:</div>
                <select v-model="tab_features_selectedPreference"  class="minimal col-sm">
                  <option v-for="item in preference" v-bind:value="item">
                    {{item.name}}
                  </option>
                </select>
              </label>

              <label class="row">
                <div class="form__label-text col-sm">Тип диплома:</div>
                <select v-model="tab_features_selectedYypeDiploma"  class="minimal col-sm">
                  <option v-for="item in typeDiploma" v-bind:value="item">
                    {{item.name}}
                  </option>
                </select>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Балл ИД</div>
                <input v-model="tab_features_selectedPreference.points" class="form__input col-sm" type="text" disabled/>
                <!--<select v-model="tab_features_selectedPreferencePoint"  class="minimal col-sm">-->
                  <!--<option v-for="item in preference" v-bind:value="item">-->
                    <!--{{item.points}}-->
                  <!--</option>-->
                <!--</select>-->
              </label>
            </div>
            <div class="col-sm">
              <div>
                <p>Прикрепленные документы</p>
              </div>
              <!--<div v-for="(document,index) in documents">-->
                <!--{{index +1}}-->
                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">№</div>-->
                  <!--<input v-model="documents.index" class="form__input col-sm" type="text" name="" placeholder="заполняется автоматически"disabled/>-->
                <!--</label>-->
              <div>
                <div class="row">
                  <div class="form__label-text col-sm">Документ</div>
                  <input class="document col-sm" type="file" title="Загрузите файл"/>
                </div>
                <label class="row">
                  <div class="form__label-text col-sm">Копия/Оригинал:</div>
                  <select v-model="tab_features_selectedDocType1" class="minimal col-sm">
                    <option v-for="item in docType" v-bind:value="item">
                      {{item.name}}
                    </option>
                  </select>
                </label>
              </div>
              <div>
                <div class="row">
                  <div class="form__label-text col-sm">Документ</div>
                  <input class="document col-sm" type="file" title="Загрузите файл"/>
                </div>
                <label class="row">
                  <div class="form__label-text col-sm">Копия/Оригинал:</div>
                  <select v-model="tab_features_selectedDocType2" class="minimal col-sm">
                    <option v-for="item in docType" v-bind:value="item">
                      {{item.name}}
                    </option>
                  </select>
                </label>
              </div>
              <div>
                <div class="row">
                  <div class="form__label-text col-sm">Документ</div>
                  <input class="document col-sm" type="file" title="Загрузите файл"/>
                </div>
                <label class="row">
                  <div class="form__label-text col-sm">Копия/Оригинал:</div>
                  <select v-model="tab_features_selectedDocType3" class="minimal col-sm">
                    <option v-for="item in docType" v-bind:value="item">
                      {{item.name}}
                    </option>
                  </select>
                </label>
              </div>

              <!--<div class="row">-->
                <!--<input class="button_add" type="button" value="Добавить документ" @click="onAddDocuments" >-->
                <!--<input class="button_add" type="button" value="Убрать документ" @click="onRemoveDocuments" >-->
              <!--</div>-->
            </div>
          </div>
          <hr>
          <button @click="onAddFeature">Сохранить</button>
        </tab>
      </tabs>
  <div class="row">
    <div class="col-sm">
      <label>
        <span class="col-sm"></span>
      </label>
    </div>
    <div class="col-sm">
      <label>
        <div class="col-sm"></div>
      </label>
    </div>
    <div class="col-sm">
      <label>
        <div class="col-sm"></div>
      </label>
    </div>
  </div>
    </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex';
  import { createHelpers } from 'vuex-map-fields';
  const { mapFields:tab_distinctive_features_info} = createHelpers({
    getterType: `tab_distinctive_features_info/getField`,
    mutationType: `tab_distinctive_features_info/updateField`,
  });
  const { mapFields:person} = createHelpers({
    getterType: `person/getField`,
    mutationType: `person/updateField`,
  });
    export default {
        name: "TabDistinctiveFeaturesInfo",
      mounted() {
        this.$store.dispatch('enums/onLoadAttrType');
        this.$store.dispatch('enums/onLoadTypeDiploma');
        this.$store.dispatch('dictionary/onLoadPreference');
      },
      computed: {
        ...mapState('enums', ['attrType','docType','typeDiploma']),
        ...mapState('dictionary', ['preference', ]),
        ...mapGetters('enums', ['GET_attrType', 'GET_DOC_TYPE','GET_TYPE_DIPLOMA']),
        ...mapGetters('dictionary', ['GET_preference', ]),
        ...tab_distinctive_features_info(['tab_features_selectedAttrType', 'tab_features_selectedPreference',
        'tab_features_selectedPreferencePoint','tab_features_selectedYypeDiploma',
        'tab_features_selectedDocType1', 'tab_features_selectedDocType2','tab_features_selectedDocType3']),
        ...person(['person']),

        table_show() {
          return this.person.futures_info;
        },
      },
        methods: {
          onInfo() {
            location.href='profile#features_info';
          },
          onDelete(item) {
            const index = this.person.futures_info.indexOf(item);
            console.log(index);
            this.person.futures_info.splice(index,1);

          },
          onEdit(item) {
            const index = this.person.futures_info.indexOf(item);
            location.href='profile#features_info';
            this.tab_features_selectedAttrType = this.person.futures_info[index].tab_features_selectedAttrType;
            this.tab_features_selectedPreference = this.person.futures_info[index].tab_features_selectedPreference;
            this.tab_features_selectedYypeDiploma = this.person.futures_info[index].tab_features_selectedYypeDiploma;

          },

          onAddDocuments() {
            this.documents.push('');
          },
          onRemoveDocuments() {
            // var lastItem = this.documents[this.documents.length - 1];
            this.documents.pop(this.documents.length - 1);
          },
          onAddFeature() {
            function Feature(selectedAttrType, selectedPreference ,typeDyploma) {
              this.tab_features_selectedAttrType = selectedAttrType;
              this.tab_features_selectedPreference = selectedPreference;
              this.tab_features_selectedYypeDiploma = typeDyploma;

            }

            let feature = new Feature(
              this.tab_features_selectedAttrType, this.tab_features_selectedPreference,
              this.tab_features_selectedYypeDiploma

            );
            location.href = 'profile#features_overview';
            this.person.futures_info.push(feature);
            console.log(this.person.futures_info)
          }
       },
      data () {
        return {
          documents: [
          ],

          headers_features_info: [
            // { text: 'Код', value: 'code', sortable: false, align: 'center' },
            { text: 'Тип признака', value: 'tab_features_selectedAttrType',sortable: false, align: 'center' },
            { text: 'Название', value: 'tab_features_selectedPreference',sortable: false, align: 'center' },
            { text: 'Тип диплома', value: 'tab_features_selectedYypeDiploma', sortable: false,align: 'center' },
            { text: 'Балл ИД', value: 'tab_features_selectedPreferencePoint', sortable: false, align: 'center' },
            { text: 'Действия', value: 'actions', sortable: false, align: 'center'},
            // { text: 'Выполнено', value: 'done', sortable: false, align: 'center' },
            // { text: 'Балл экс.в ФИС.', value: 'ball_2',sortable: false, align: 'center' },
          ],
          info_features_info: [],

          // headers_features_documents: [
          //   { text: '№', value: 'num', sortable: false, align: 'center' },
          //   { text: 'Документ', value: 'documents',sortable: false, align: 'center' },
          //   { text: 'Копия(Оригинал)', value: 'copy_or_origin',sortable: false, align: 'center' },
          // ],
          // info_features_documents: [],
        }
      }
    }
</script>


<style scoped>
  .calculate_score {
    margin-top: -8px;
  }
  .adress_button {
    margin-left: -20px;
  }
  label.row {
    margin-bottom: 3px;
  }

  tbody tr:hover td {
    background-color: #FFEFC6;
    cursor: pointer;
  }
  tr:hover {
    ackground-color: red;
  }
  .search_form div {
    font-size: 20px;
  }
  .search_form input {
    width: 500px;
  }
  .search_form {
    margin-top: 14px;
    height: 15px;
  }
  .search_button {
    margin-top: 7px;
    margin-left: 30px;
  }
  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    /*border: 4px;*/
  }

  input.checkbox{
    height: 15px;
    transform:scale(1.3);
    opacity:0.9;
    cursor:pointer;
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
  }
  .clear_save_button {
    margin-top: 75%;
    margin-left: 65%;
    display: flex;
    /*justify-content: space-between;*/
  }
  .outer {
    /*margin: 5px;*/
    /*margin-top: -5px;*/
    background: linear-gradient(45deg, #EECFBA, #C5DDE8);
    /*background: linear-gradient(to top left, powderblue, pink);*/
  }
  .distinctive_features_top {
    height: 50%;
  }
  .distinctive_features_bottom {
    height: 50%;
  }
  textarea {
    width: 90%; /* Ширина поля в процентах */
    height: 100px; /* Высота поля в пикселах */
    resize: none; /* Запрещаем изменять размер */
  }
  .buttons {
    margin-left: 10px;
  }
  .ege_tabs {
    margin-top: -35px;
  }
  .parent_tabs {
    margin-top: -35px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }
  .inner_tab {
    margin-top: -40px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
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
    border-radius:5px;
    background-color: ghostwhite;
    /*background-color: #EDD19C;*/
    font-size: 16px;
    cursor: pointer;
    transform:scale(0.8);
    opacity:0.9
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

  /*.checkbox {*/
  /*transform:scale(1.3);*/
  /*opacity:0.9;*/
  /*cursor:pointer;*/
  /*}*/
  .main_tab {
    margin-top: 2px;
    margin-left: 5px;
    /*margin-right: 5px;*/
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

  .search_place {
    /*height: auto;*/
    margin-top: 30px;
    margin-left: 20px;
  }
  .search_place p{
    margin-right: 10px;
  }
  .input_profile_part1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
</style>
