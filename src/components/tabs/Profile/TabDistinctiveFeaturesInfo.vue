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
            <td class="text-xs-center">{{ props.item.tab_features_selectedTypeDiploma.name }}</td>
            <td class="text-xs-center">{{ props.item.tab_features_selectedPreference.points}}</td>
              <td class="text-xs-center">
                <button @click="onEdit(props.item)">
                  <v-icon color="#5bc0de">edit</v-icon>
                </button>{{ props.item.actions}}
                <button @click="onDelete(props.item)">
                  <v-icon color="#5bc0de">delete</v-icon>
                </button>{{ props.item.actions}}
              </td>
            <!--<td class="text-xs-center">{{ props.item.done }}</td>-->
            <!--<td class="text-xs-center">{{ props.item.ball_2}}</td>-->
            </template>
            <template slot="no-data">
              <div></div>
            </template>
            </v-data-table>
        </tab>
        <tab id="features_info" name="Отличительные признаки">
          <div class="inner_tab row">
            <div class="col-sm-4">
              <div>
                <p>Отличительные признаки</p>
              </div>

              <div class="row">
                <div class="form__label-text col-sm">Название:</div>
                <!--<input v-model=""/>-->
                <select v-model="tab_features_selectedPreference"
                        @change="getAttrTypeById(tab_features_selectedPreference)"

                        class="minimal col-sm">
                  <option v-for="item in preference" v-bind:value="item">
                    {{item.name}}
                  </option>
                </select>

                <!--<v-btn icon class="mx-0" @click="clearField()">-->
                  <v-icon @click="clearField()" color="#5bc0de">clear</v-icon>
                <!--</v-btn>-->

              </div>

              <label class="row">
                <div class="form__label-text col-sm">Тип признака:</div>
                <!--<select v-model="tab_features_selectedAttrType"  class="minimal col-sm" >-->
                  <!--<option v-for="item in attrType" v-bind:value="item" >-->
                    <!--{{item.name}}-->
                  <!--</option>-->
                <!--</select>-->

                <input v-model="tab_features_selectedAttrType.name" class="uneditable form__input col-sm" type="text" disabled/>
                <!--<input v-model="tab_features_selectedPreference.attrType" class="form__input col-sm" type="text" disabled/>-->
                <!--<select v-model="tab_features_selectedAttrType"  class="minimal col-sm" >-->
                  <!--<option v-for="item in preference" v-bind:value="item" >-->
                    <!--{{item.attrType}}-->
                  <!--</option>-->
                <!--</select>-->
              </label>

              <label class="row">
                <div class="form__label-text col-sm">Тип диплома:</div>
                <select v-model="tab_features_selectedTypeDiploma"  class="minimal col-sm">
                  <option v-for="item in typeDiploma" v-bind:value="item">
                    {{item.name}}
                  </option>
                </select>
              </label>
              <!--<label class="row">-->
                <!--<div class="form__label-text col-sm">Серия</div>-->
                <!--<input v-model="tab_features_serial" class="form__input col-sm" type="text" />-->
              <!--</label>-->
              <!--<label class="row">-->
                <!--<div class="form__label-text col-sm">Номер</div>-->
                <!--<input v-model="tab_features_number" class="form__input col-sm" type="text" />-->
              <!--</label>-->
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
            <div class="col-sm-8">
              <div>
                <p>Прикрепленные документы</p>
              </div>

              <div class="row">
                <div class="col-sm-6">
                  <label class="row">
                    <div class="form__label-text col-sm">Документ 1:</div>
                    <!--<input v-model="doc1" class="form__input col-sm" type="text" />-->
                    <select v-model="doc1" class="minimal col-sm">
                      <option v-for="item in documentsByFeatures" v-bind:value="item">
                        {{item.name}}
                      </option>
                    </select>
                    <!--<input type="file" id="doc1" ref="doc1" @change="uploadFile1" title="Загрузите файл"/>-->
                  </label>
                  <label v-if="doc1.name === 'Иной документ'" class="row">
                    <div class="form__label-text col-sm">Документ:</div>
                    <input v-model="doc1_newName" class="form__input col-sm" type="text" />
                  </label>

                  <label class="row">
                    <div class="form__label-text col-sm">Серия:</div>
                    <input v-model="doc1_serial" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Номер/ID:</div>
                    <input v-model="doc1_number" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Копия/Оригинал:</div>
                    <select v-model="tab_features_selectedDocType1" class="minimal col-sm">
                      <option v-for="item in docType" v-bind:value="item">
                        {{item.name}}
                      </option>
                    </select>
                  </label>
                  <label v-if="tab_features_selectedDocType1.name ==='Оригинал'" class="row">
                    <div class="form__label-text col-sm">Дата предоставления:</div>
                    <input v-model="tab_featuresShowDate1" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
                  </label>
                </div>
                <!---->
                <div class="col-sm-6">
                  <label  class="row">
                    <div class="form__label-text col-sm">Дата выдачи:</div>
                    <input v-model="doc1_IssuDate" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
                  </label>
                  <label  class="row">
                    <div class="form__label-text col-sm">Кем выдан:</div>
                    <input v-model="doc1_IssueBy" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Документ:</div>

                    <textarea v-if="doc1.name!== 'Иной документ'" :value="doc1_full_info = doc1.name + ' ' + doc1_serial+ ' '+ doc1_number + ' ' + tab_features_selectedDocType1.name + ' ' +
                     doc1_IssuDate + ' ' + doc1_IssueBy" class="col-sm" name="birth_place" disabled></textarea>
                    <textarea v-else :value="doc1_full_info = doc1_newName + ' ' + doc1_serial+ ' '+ doc1_number + ' ' + tab_features_selectedDocType1.name + ' ' +
                     doc1_IssuDate + ' ' + doc1_IssueBy" class="col-sm" name="birth_place" disabled></textarea>
                  </label>
                  <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">Документ:</div>-->
                  <!--<textarea v-model="doc1 + ' ' + doc1_serial+ ' ' + doc1_number" class="col-sm" name="birth_place" disabled></textarea>-->
                  <!--</label>-->
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-6">
                  <label class="row">
                    <div class="form__label-text col-sm">Документ 2:</div>
                    <!--<input v-model="doc2" class="form__input col-sm" type="text" />-->
                    <select v-model="doc2" class="minimal col-sm">
                      <option v-for="item in documentsByFeatures" v-bind:value="item">
                        {{item.name}}
                      </option>
                    </select>
                    <!--<input type="file" id="doc1" ref="doc1" @change="uploadFile1" title="Загрузите файл"/>-->
                  </label>
                  <label v-if="doc2.name === 'Иной документ'" class="row">
                    <div class="form__label-text col-sm">Документ:</div>
                    <input v-model="doc2_newName" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Серия:</div>
                    <input v-model="doc2_serial" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Номер/ID:</div>
                    <input v-model="doc2_number" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Копия/Оригинал:</div>
                    <select v-model="tab_features_selectedDocType2" class="minimal col-sm">
                      <option v-for="item in docType" v-bind:value="item">
                        {{item.name}}
                      </option>
                    </select>
                  </label>
                  <label v-if="tab_features_selectedDocType2.name ==='Оригинал'" class="row">
                    <div class="form__label-text col-sm">Дата предоставления:</div>
                    <input v-model="tab_featuresShowDate2" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
                  </label>
                </div>
                <!---->
                <div class="col-sm-6">
                  <label  class="row">
                    <div class="form__label-text col-sm">Дата выдачи:</div>
                    <input v-model="doc2_IssuDate" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
                  </label>
                  <label  class="row">
                    <div class="form__label-text col-sm">Кем выдан:</div>
                    <input v-model="doc2_IssueBy" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Документ:</div>
                    <textarea v-if="doc2.name!== 'Иной документ'" :value="doc2_full_info = doc2.name + ' ' + doc2_serial+ ' '+ doc2_number + ' ' + tab_features_selectedDocType2.name + ' ' +
                     doc2_IssuDate + ' ' + doc2_IssueBy" class="col-sm" name="birth_place" disabled></textarea>
                    <textarea v-else :value="doc2_full_info = doc2_newName + ' ' + doc2_serial+ ' '+ doc2_number + ' ' + tab_features_selectedDocType2.name + ' ' +
                     doc2_IssuDate + ' ' + doc2_IssueBy" class="col-sm" name="birth_place" disabled></textarea>
                  </label>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-6">
                  <label class="row">
                    <div class="form__label-text col-sm">Документ 3:</div>
                    <!--<input v-model="doc3" class="form__input col-sm" type="text" />-->
                    <select v-model="doc3" class="minimal col-sm">
                      <option v-for="item in documentsByFeatures" v-bind:value="item">
                        {{item.name}}
                      </option>
                    </select>
                    <!--<input type="file" id="doc1" ref="doc1" @change="uploadFile1" title="Загрузите файл"/>-->
                  </label>
                  <label v-if="doc3.name === 'Иной документ'" class="row">
                    <div class="form__label-text col-sm">Документ:</div>
                    <input v-model="doc3_newName" class="form__input col-sm" type="text" />
                  </label>

                  <label class="row">
                    <div class="form__label-text col-sm">Серия:</div>
                    <input v-model="doc3_serial" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Номер/ID:</div>
                    <input v-model="doc3_number" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Копия/Оригинал:</div>
                    <select v-model="tab_features_selectedDocType3" class="minimal col-sm">
                      <option v-for="item in docType" v-bind:value="item">
                        {{item.name}}
                      </option>
                    </select>
                  </label>
                  <label v-if="tab_features_selectedDocType3.name ==='Оригинал'" class="row">
                    <div class="form__label-text col-sm">Дата предоставления:</div>
                    <input v-model="tab_featuresShowDate3" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
                  </label>
                </div>
                <!---->

                <div class="col-sm-6">
                  <label  class="row">
                    <div class="form__label-text col-sm">Дата выдачи:</div>
                    <input v-model="doc3_IssuDate" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
                  </label>
                  <label  class="row">
                    <div class="form__label-text col-sm">Кем выдан:</div>
                    <input v-model="doc3_IssueBy" class="form__input col-sm" type="text" />
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Документ:</div>
                    <textarea v-if="doc3.name!== 'Иной документ'" :value="doc3_full_info = doc3.name + ' ' + doc3_serial+ ' '+ doc3_number + ' ' + tab_features_selectedDocType3.name + ' ' +
                     doc3_IssuDate + ' ' + doc3_IssueBy" class="col-sm" name="birth_place" disabled></textarea>
                    <textarea v-else :value="doc3_full_info = doc3_newName + ' ' + doc3_serial+ ' '+ doc3_number + ' ' + tab_features_selectedDocType3.name + ' ' +
                     doc3_IssuDate + ' ' + doc3_IssueBy" class="col-sm" name="birth_place" disabled></textarea>
                  </label>
                </div>
              </div>


              <!--<div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm">Документ 1:</div>-->
                  <!--<input v-model="doc1" class="form__input col-sm" type="text" />-->
                  <!--&lt;!&ndash;<input type="file" id="doc2" ref="doc2" @change="uploadFile2" title="Загрузите файл"/>&ndash;&gt;-->
                <!--</div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm">Серия:</div>-->
                  <!--<input v-model="doc1_serial" class="form__input col-sm" type="text" />-->
                <!--</div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm">Номер/ID:</div>-->
                  <!--<input v-model="doc1_number" class="form__input col-sm" type="text" />-->
                <!--</div>-->
                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">Копия/Оригинал:</div>-->
                  <!--<select v-model="tab_features_selectedDocType1" class="minimal col-sm">-->
                    <!--<option v-for="item in docType" v-bind:value="item">-->
                      <!--{{item.name}}-->
                    <!--</option>-->
                  <!--</select>-->
                <!--</label>-->
                <!--<label v-if="tab_features_selectedDocType1.name ==='Оригинал'" class="row">-->
                  <!--<div class="form__label-text col-sm">Дата предоставления:</div>-->
                  <!--<input v-model="tab_featuresShowDate1" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>-->
                <!--</label>-->
              <!--</div>-->

              <!--<hr>-->
              <!--<div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm">Документ 2:</div>-->
                  <!--<input v-model="doc2" class="form__input col-sm" type="text" />-->
                  <!--&lt;!&ndash;<input type="file" id="doc2" ref="doc2" @change="uploadFile2" title="Загрузите файл"/>&ndash;&gt;-->
                <!--</div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm">Серия:</div>-->
                  <!--<input v-model="doc2_serial" class="form__input col-sm" type="text" />-->
                <!--</div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm">Номер/ID:</div>-->
                  <!--<input v-model="doc2_number" class="form__input col-sm" type="text" />-->
                <!--</div>-->
                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">Копия/Оригинал:</div>-->
                  <!--<select v-model="tab_features_selectedDocType2" class="minimal col-sm">-->
                    <!--<option v-for="item in docType" v-bind:value="item">-->
                      <!--{{item.name}}-->
                    <!--</option>-->
                  <!--</select>-->
                <!--</label>-->
                <!--<label v-if="tab_features_selectedDocType2.name ==='Оригинал'" class="row">-->
                  <!--<div class="form__label-text col-sm">Дата предоставления:</div>-->
                  <!--<input v-model="tab_featuresShowDate2" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>-->
                <!--</label>-->
              <!--</div>-->
              <!--<hr>-->
              <!--<div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm">Документ 3:</div>-->
                  <!--<input v-model="doc3" class="form__input col-sm" type="text" />-->
                  <!--&lt;!&ndash;<input type="file" id="doc3" ref="doc3" @change="uploadFile3" title="Загрузите файл"/>&ndash;&gt;-->
                <!--</div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm">Серия:</div>-->
                  <!--<input v-model="doc3_serial" class="form__input col-sm" type="text" />-->
                <!--</div>-->
                <!--<div class="row">-->
                  <!--<div class="form__label-text col-sm">Номер/ID:</div>-->
                  <!--<input v-model="doc3_number" class="form__input col-sm" type="text" />-->
                <!--</div>-->
                <!--<label class="row">-->
                  <!--<div class="form__label-text col-sm">Копия/Оригинал:</div>-->
                  <!--<select v-model="tab_features_selectedDocType3" class="minimal col-sm">-->
                    <!--<option v-for="item in docType" v-bind:value="item">-->
                      <!--{{item.name}}-->
                    <!--</option>-->
                  <!--</select>-->
                <!--</label>-->
                <!--<label v-if="tab_features_selectedDocType3.name ==='Оригинал'" class="row">-->
                  <!--<div class="form__label-text col-sm">Дата предоставления:</div>-->
                  <!--<input v-model="tab_featuresShowDate3" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>-->
                <!--</label>-->
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
  import {AXIOS} from "../../plugins/APIService";
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
      data () {
        return {
          documentsByFeatures: [],
          editedIndex: -1,
          editedItem:{},
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
      },
      mounted() {
        this.$store.dispatch('enums/onLoadAttrType');
        this.$store.dispatch('enums/onLoadTypeDiploma');
        this.$store.dispatch('dictionary/onLoadPreference');
      },
      computed: {
        ...mapState('enums', ['attrType','docType','typeDiploma']),
        ...mapState('dictionary', ['preference', ]),
        ...mapGetters('enums', ['GET_oneAttrType','GET_attrType', 'GET_DOC_TYPE','GET_TYPE_DIPLOMA']),
        ...mapGetters('dictionary', ['GET_preference', ]),
        ...tab_distinctive_features_info(['tab_features_selectedAttrType', 'tab_features_selectedPreference',
        'tab_features_selectedPreferencePoint','tab_features_selectedTypeDiploma','tab_features_serial','tab_features_number',
          'doc1','doc1_newName','doc1_serial','doc1_number', 'tab_features_selectedDocType1','tab_featuresShowDate1','doc1_IssuDate','doc1_IssueBy','doc1_full_info',
          'doc2','doc2_newName','doc2_serial','doc2_number','tab_features_selectedDocType2','tab_featuresShowDate2','doc2_IssuDate','doc2_IssueBy','doc2_full_info',
          'doc3','doc3_newName','doc3_serial','doc3_number','tab_features_selectedDocType3','tab_featuresShowDate3','doc3_IssuDate','doc3_IssueBy','doc3_full_info',

          ]),
        ...person(['person']),



        table_show() {
          return this.person.futures_info;
        },
      },
        methods: {
          clearField(){
            this.tab_features_selectedPreference = {};
          },

          getAttrTypeById(preference){

            this.getDocumentByPreference(preference)
            AXIOS.get('enums/attrType/' + preference.attrType).
            then(response => {
              this.tab_features_selectedAttrType = response.data;
            })
              .catch(e => {
              })
          },

          getDocumentByPreference(preference){
            console.log(preference)
            AXIOS.post(`dictionary/documentByPreference/`, preference)
              .then(response => {
              this.documentsByFeatures = response.data;
            })
              .catch(e => {
              })
          },


          onInfo() {
            location.href='profile#features_info';
            this.tab_features_selectedPreference = {};
            // this.tab_features_selectedAttrType =  '';
            // this.tab_features_selectedPreference =  '';
            this.tab_features_selectedYypeDiploma = '';
            this.doc1 = {};
            this.doc1_serial = '';
            this.doc1_number =  '';
            this.tab_features_selectedDocType1 = {"id":0,"name":"Копия"};
            this.tab_featuresShowDate1 = '';
            this.doc1_IssuDate = '';
            this.doc1_IssueBy = '';

            this.doc2 = {};
            this.doc2_serial =  '';
            this.doc2_number = '';
            this.tab_features_selectedDocType2 = {"id":0,"name":"Копия"};
            this.tab_featuresShowDate2 = '';
            this.doc2_IssuDate = '';
            this.doc2_IssueBy = '';

            this.doc3 = {};
            this.doc3_serial =  '';
            this.doc3_number =  '';
            this.tab_features_selectedDocType3 = {"id":0,"name":"Копия"};
            this.tab_featuresShowDate3 =  '';
            this.doc3_IssuDate =  '';
            this.doc3_IssueBy =  '';

            // this.doc1 = '';
            // this.doc1_serial =  '';
            // this.doc1_number =  '';
            // this.tab_features_selectedDocType1 = null;
            // this.doc2 =  '';
            // this.doc2_serial =  '';
            // this.doc2_number =  '';
            // this.tab_features_selectedDocType2 = null;
            // this.doc3 =  '';
            // this.doc3_serial =  '';
            // this.doc3_number =  '';
            // this.tab_features_selectedDocType3 = null;
          },
          onDelete(item) {
            const index = this.person.futures_info.indexOf(item);
            console.log(index);
            this.person.futures_info.splice(index,1);

          },
          onEdit(item) {
            this.editedIndex = this.person.futures_info.indexOf(item);
            this.editedItem = Object.assign({}, item);

            const index = this.person.futures_info.indexOf(item);
            location.href='profile#features_info';
//todo check null
            this.tab_features_selectedAttrType = this.person.futures_info[index].tab_features_selectedAttrType;
            this.tab_features_selectedPreference = this.person.futures_info[index].tab_features_selectedPreference;
            this.tab_features_selectedYypeDiploma = this.person.futures_info[index].tab_features_selectedYypeDiploma;
            this.doc1 = this.person.futures_info[index].doc1;
            this.doc1_serial = this.person.futures_info[index].doc1_serial;
            this.doc1_number = this.person.futures_info[index].doc1_number;
            this.tab_features_selectedDocType1 = this.person.futures_info[index].tab_features_selectedDocType1;
            this.tab_featuresShowDate1 = this.person.futures_info[index].tab_featuresShowDate1;
            this.doc1_IssuDate = this.person.futures_info[index].doc1_IssuDate;
            this.doc1_IssueBy = this.person.futures_info[index].doc1_IssueBy;

            this.doc2 = this.person.futures_info[index].doc2;
            this.doc2_serial = this.person.futures_info[index].doc2_serial;
            this.doc2_number = this.person.futures_info[index].doc2_number;
            this.tab_features_selectedDocType2 = this.person.futures_info[index].tab_features_selectedDocType2;
            this.tab_featuresShowDate2 = this.person.futures_info[index].tab_featuresShowDate2;
            this.doc2_IssuDate = this.person.futures_info[index].doc2_IssuDate;
            this.doc2_IssueBy = this.person.futures_info[index].doc2_IssueBy;

            this.doc3 = this.person.futures_info[index].doc3;
            this.doc3_serial = this.person.futures_info[index].doc3_serial;
            this.doc3_number = this.person.futures_info[index].doc3_number;
            this.tab_features_selectedDocType3 = this.person.futures_info[index].tab_features_selectedDocType3;
            this.tab_featuresShowDate3 = this.person.futures_info[index].tab_featuresShowDate3;
            this.doc3_IssuDate = this.person.futures_info[index].doc3_IssuDate;
            this.doc3_IssueBy = this.person.futures_info[index].doc3_IssueBy;


          },

          onAddDocuments() {
            this.documents.push('');
          },
          onRemoveDocuments() {
            // var lastItem = this.documents[this.documents.length - 1];
            this.documents.pop(this.documents.length - 1);
          },
          onAddFeature() {
            if (this.editedIndex > -1) {
              console.log('its redaction ')

              this.editedItem.tab_features_selectedAttrType = this.tab_features_selectedAttrType;
              this.editedItem.tab_features_selectedPreference = this.tab_features_selectedPreference;
              this.editedItem.tab_features_selectedYypeDiploma = this.tab_features_selectedYypeDiploma;
              this.editedItem.doc1 = this.doc1;
              this.editedItem.doc1_serial = this.doc1_serial;
              this.editedItem.doc1_number = this.doc1_number;
              this.editedItem.tab_features_selectedDocType1 = this.tab_features_selectedDocType1;
              this.editedItem.tab_featuresShowDate1 = this.tab_featuresShowDate1;
              this.editedItem.doc1_IssuDate = this.doc1_IssuDate;
              this.editedItem.doc1_IssueBy = this.doc1_IssueBy;

              this.editedItem.doc2 = this.doc2;
              this.editedItem.doc2_serial = this.doc2_serial;
              this.editedItem.doc2_number = this.doc2_number;
              this.editedItem.tab_features_selectedDocType2 = this.tab_features_selectedDocType2;
              this.editedItem.tab_featuresShowDate2 = this.tab_featuresShowDate2;
              this.editedItem.doc2_IssuDate = this.doc2_IssuDate;
              this.editedItem.doc2_IssueBy = this.doc2_IssueBy;

              this.editedItem.doc3 = this.doc3;
              this.editedItem.doc3_serial = this.doc3_serial;
              this.editedItem.doc3_number = this.doc3_number;
              this.editedItem.tab_features_selectedDocType3 = this.tab_features_selectedDocType3;
              this.editedItem.tab_featuresShowDate3 = this.tab_featuresShowDate3;
              this.editedItem.doc3_IssuDate = this.doc3_IssuDate;
              this.editedItem.doc3_IssueBy = this.doc3_IssueBy;

              Object.assign(this.person.futures_info[this.editedIndex], this.editedItem);
              location.href='profile#features_overview';
            }else {
              function Feature(selectedAttrType, selectedPreference, typeDyploma,
                               features_serial, features_number,
                               doc1, doc1_serial, doc1_number, selectedDocType1,
                               showDate1, issuDate1, issueBy1, full_info1,
                               doc2, doc2_serial, doc2_number, selectedDocType2,
                               showDate2, issuDate2, issueBy2, full_info2,
                               doc3, doc3_serial, doc3_number, selectedDocType3,
                               showDate3, issuDate3, issueBy3, full_info3
              ) {
                this.tab_features_selectedAttrType = selectedAttrType;
                this.tab_features_selectedPreference = selectedPreference;
                this.tab_features_selectedTypeDiploma = typeDyploma;
                this.tab_features_serial = features_serial;
                this.tab_features_number = features_number;
                this.doc1 = doc1;
                this.doc1_serial = doc1_serial;
                this.doc1_number = doc1_number;
                this.tab_features_selectedDocType1 = selectedDocType1;
                this.tab_featuresShowDate1 = showDate1;
                this.doc1_IssuDate = issuDate1;
                this.doc1_IssueBy = issueBy1;
                this.doc1_full_info = full_info1;
                this.doc2 = doc2;
                this.doc2_serial = doc2_serial;
                this.doc2_number = doc2_number;
                this.tab_features_selectedDocType2 = selectedDocType2;
                this.tab_featuresShowDate2 = showDate2;
                this.doc2_IssuDate = issuDate2;
                this.doc2_IssueBy = issueBy2;
                this.doc2_full_info = full_info2;
                this.doc3 = doc3;
                this.doc3_serial = doc3_serial;
                this.doc3_number = doc3_number;
                this.tab_features_selectedDocType3 = selectedDocType3;
                this.tab_featuresShowDate3 = showDate3;
                this.doc3_IssuDate = issuDate3;
                this.doc3_IssueBy = issueBy3;
                this.doc3_full_info = full_info3;

              }

              let feature = new Feature(
                this.tab_features_selectedAttrType, this.tab_features_selectedPreference,
                this.tab_features_selectedTypeDiploma,
                this.tab_features_serial,
                this.tab_features_number,
                this.doc1, this.doc1_serial, this.doc1_number, this.tab_features_selectedDocType1,
                this.tab_featuresShowDate1,this.doc1_IssuDate,this.doc1_IssueBy,this.doc1_full_info,
                this.doc2, this.doc2_serial, this.doc2_number, this.tab_features_selectedDocType2,
                this.tab_featuresShowDate2,this.doc2_IssuDate,this.doc2_IssueBy,this.doc2_full_info,
                this.doc3, this.doc3_serial, this.doc3_number, this.tab_features_selectedDocType3,
                this.tab_featuresShowDate3,this.doc3_IssuDate,this.doc3_IssueBy,this.doc3_full_info,
              );
              location.href = 'profile#features_overview';
              this.person.futures_info.push(feature);
              console.log(this.person.futures_info)
            }
          },
          uploadFile1(e) {
            console.log(e)
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onloadend = (file) => {
              this.doc1 = reader.result;
            }
            reader.readAsDataURL(file);
          },
          uploadFile2(e) {
            console.log(e)
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onloadend = (file) => {
              this.doc2 = reader.result;
            }
            reader.readAsDataURL(file);
          },
          uploadFile3(e) {
            console.log(e)
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onloadend = (file) => {
              this.doc3 = reader.result;
            }
            reader.readAsDataURL(file);
          },
          // uploadFile1(e) {
          //   console.log(e)
          //   let file = e.target.files[0];
          //   this.doc1 = URL.createObjectURL(file)
          // },
          // uploadFile2(e) {
          //   console.log(e)
          //   let file = e.target.files[0];
          //   this.doc2 = URL.createObjectURL(file)
          // },
          // uploadFile3(e) {
          //   console.log(e)
          //   let file = e.target.files[0];
          //   this.doc3 = URL.createObjectURL(file)
          // },
       },

    }
</script>


<style scoped>
  .uneditable {
    background-color: #F5F5F5;
  }
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
