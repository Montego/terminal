<template>
  <div class="inside_tab">
    <tabs class="parent_tabs">
      <tab id="documents_overview" name="Обзор">
        <div class="row">
          <button @click="onFill">Заполнить</button>
          <button @click="onAdd">Добавить</button>
          <!--<button >Печать</button>-->
        </div>
        <v-data-table
          :headers="headers_documents"
          :items="showTable"
          hide-actions
          class="elevation-1 text-xs-center"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.fullnameDoc}}</td>
            <td class="text-xs-center">{{ props.item.docTypeDoc.name}}</td>

            <td class="text-xs-center">
              <input v-model="props.item.dateOfShow" class="form__input col-sm-8" type="date"  >
              <!--{{ props.item.dateOfIssueDoc}}-->
            </td>
            <td class="text-xs-center">{{ props.item.countDoc }}</td>
            <td class="text-xs-center">
              <button @click="onDelete(props.item)">
                <v-icon color="#5bc0de">delete</v-icon>
              </button>
            </td>
          </template>
          <template slot="no-data">
            <div></div>
          </template>
        </v-data-table>
        <div class="clear_save_button row">
          <button @click="onNext">Далее ->></button>
          <!--<button @click="onAddParent">Добавить</button>-->
          <!--<button @click="onSaveParent">Сохранить изм-я</button>-->
        </div>
      </tab>

      <tab id="documents_info" name="Документы">
        <div class="inner_tab row">
          <div class="col-sm">
            <div>
              <p>Документы</p>
            </div>
            <hr>

            <div class="row">
              <div class="col-sm-6">
                  <label class="row">
                    <div class="form__label-text col-sm">Тип документа:</div>
                    <!--<select v-model="name" class="minimal col-sm">-->
                      <!--<option v-for="option in options_DocumentType">-->
                        <!--{{option.item}}-->
                      <!--</option>-->
                    <!--</select>-->
                    <select v-model="selected_document" class="minimal col-sm">
                      <option v-for="item in document" v-bind:value="item">
                        {{item.name}}
                      </option>
                    </select>
                  </label>
                <label v-if="selected_document.name === 'Иной документ'" class="row">
                  <div class="form__label-text col-sm">Документ:</div>
                  <input v-model="newName" class="form__input col-sm" type="text" />
                </label>

                <label class="row">
                  <div class="form__label-text col-sm">Количество:</div>
                  <input v-model="count" class="form__input col-sm" type="text"  required/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Серия:</div>
                  <input v-model="serial" class="form__input col-sm" type="text"  required/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Номер/ID:</div>
                  <input v-model="number" class="form__input col-sm" type="text"  required/>
                </label>

                <label class="row">
                  <div class="form__label-text col-sm">Копия/Оригинал:</div>
                  <select v-model="selected_docType" class="minimal col-sm">
                    <option v-for="item in docType" v-bind:value="item">
                      {{item.name}}
                    </option>
                  </select>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Дата выдачи:</div>
                  <input v-model="dateOfIssue" class="form__input col-sm" type="date" min="1918-01-01" max="2019-01-01"/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Кем выдан:</div>
                  <textarea v-model="issuedBy" class="col-sm" ></textarea>
                </label>
              </div>
            </div>
            <div class="row">
              <button @click="onClear">Очистить</button>
              <button @click="onSave">Сохранить</button>
            </div>
          </div>
        </div>
      </tab>

    </tabs>
  </div>
</template>

<script>
  import {AXIOS} from "../../plugins/APIService";
  import {mapGetters, mapState} from 'vuex';
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
    getterType: `tab_documents/getField`,
    mutationType: `tab_documents/updateField`,
  });
  const { mapFields: tab_documents} = createHelpers({
    getterType: `tab_documents/getField`,
    mutationType: `tab_documents/updateField`,
  });
    export default {
        name: "TabDocuments",
        data(){
          return {
            newName:'',
            dateToday: Date.now(),
            nameDoc:'',
            serialDoc:'',
            numberDoc:'',
            fullnameDoc:'',
            docTypeDoc:{"id":0,"name":"Копия"},
            dateOfIssueDoc:'' ,
            countDoc:0,
            issuedByDoc: '',
            auto: '',

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


            headers_documents: [
              {text: 'Название', value: 'name', sortable: false, align: 'center'},
              {text: 'Копия/оригинал', value: 'copy', sortable: false, align: 'center'},
              {text: 'Дата предоставления', value: 'date', sortable: false, align: 'center'},
              {text: 'Количество', value: 'count', sortable: false, align: 'center'},
              {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
            ],
            info_documents: [],
            document_fullName: '',
          }
        },
      computed: {
        ...mapState('enums',['docType'],),
        ...mapGetters('enums',['GET_DOC_TYPE'],),
        ...mapState('dictionary',['document'],),
        ...mapGetters('dictionary',['GET_document'],),
        ...applications(['application','fillDocuments','selected_document','serial','number','selected_docType','dateOfIssue','count','issuedBy','agree']),
        ...tab_documents(['tab_document_selectedDocumentType', 'tab_document_series', 'tab_document_number',
          'tab_document_selectedCopy', 'tab_document_date','tab_document_issuedBy','tab_document_fullName',
          'tab_document_count','tab_document_selectedDocType','fullname','tab_document_auto'
        ]),
        // ...mapMultiRowFields(['document','tab_document_allDocuments']),
        ...person(['person','tab_personal_selectedIdentityCardCode','tab_personal_identityCardSeries','tab_personal_identityCardDocType',
        'tab_personal_identityCardNumber','tab_personal_identityCardIssueDate','tab_personal_identityCardIssueBy',
        'docTableFullname','docTableDocType','docTableDate','docTableCount', 'person_info_id','tab_personal_INIPA',
          'tab_personal_INIPADate','tab_edu_military_selectedEduDoc','tab_edu_military_eduDocSerial',
          'tab_edu_military_eduDocNumber','tab_edu_military_eduDocDate','tab_edu_military_univer','tab_edu_military_selectedMilitaryFormDoc',
          'tab_edu_military_militarySeries', 'tab_edu_military_militaryNumber','documentByEduDoc','tab_edu_military_militaryIssueDate',
          'tab_edu_military_militaryIssueBy'
        ]),

        showTable(){
          return this.person.application.application_documents;
        },
      },
      mounted() {
        this.$store.dispatch('dictionary/onLoadDocument');
        this.$store.dispatch('enums/onLoadDocType');
      },
        methods: {
          remove(arr, item) {
              for (let i = arr.length; i--;) {
                if (arr[i] === item) {
                  arr.splice(i, 1);
                }
              }
            },
          onNext() {
            location.href='profile#other';

            //TODO get full info for check
          },
          onAdd(){
            location.href='profile#documents_info';
          },
          onClear() {
            this.name = null;
            this.count = null;
            this.serial = null;
            this.number = null;
            this.selected_docType = null;
            this.dateOfIssue = null;
            this.issuedBy= null;
            this.auto= false;
          },
          onFill() {

            let dateConvert = function(date){
              let stamp = '';
              let regexp = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
              if (!date || !date.match(regexp)) {
                stamp = -2208988800000;
              } else {
                stamp = Date.parse(date);
              }

              let parsedDate = new Date(stamp);
              let year = parsedDate.getFullYear();
              let month = ('0' + (parsedDate.getMonth()+1)).slice(-2);
              let day = ('0' + parsedDate.getDate()).slice(-2);
              return day + '.' + month + '.' + year + ' ';
            };

            if(this.person.application.application_documents.length !==0){
              let g =0;
              for (let g = this.person.application.application_documents.length; g--; ){
                if(this.person.application.application_documents[g].tab_document_auto){
                  this.person.application.application_documents.splice(g,1);
                }
              }
            }

            function Document(dateOfShow,selected_document ,name, serial, number, docType, dateOfIssue, count, IssuedBy, auto, fullname) {
              this.dateOfShow = dateOfShow,
              this.selected_document = selected_document,
              this.nameDoc = name,
              this.serialDoc = serial,
              this.numberDoc = number,
              this.docTypeDoc = docType,
              this.dateOfIssueDoc = dateOfIssue,
              this.countDoc = count,
              this.issuedByDoc =IssuedBy,
              this.tab_document_auto = auto,
              this.fullnameDoc = fullname
            }

              let document1 = new Document(
                this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.selected_document =
                  {"documentId":"001","name":"Документ, удостоверяющий личность",
                    "isManual":0,"serialNumberDocument":13,"docSeriesMandatory":1,
                    "docNumberMandatory":1,"relatedDocument":"","documentType":13,
                    "isDifferentEduCardAppl":0,"educationLevel":0,"isAllowEditing":0,
                    "docOrgMandatory":0,"isDuplicatePermission":0,"diplomCopy":0},
                this.nameDoc = "Документ, удостоверяющий личность",
                this.serialDoc = this.tab_personal_identityCardSeries,
                this.numberDoc = this.tab_personal_identityCardNumber,
                this.docTypeDoc = this.tab_personal_identityCardDocType,
                this.dateOfIssueDoc = this.tab_personal_identityCardIssueDate,
                  // this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.countDoc = 1,
                this.issuedByDoc = this.tab_personal_identityCardIssueBy,
                this.tab_document_auto = true,
                this.fullnameDoc = this.nameDoc + ' Cерия ' + this.tab_personal_identityCardSeries + ' № ' + this.tab_personal_identityCardNumber + ' от ' + (dateConvert(this.dateOfIssueDoc)) + ' выдан ' + this.issuedByDoc + ' ' + '('+this.docTypeDoc.name+')',

              );
              let document2 = new Document(
                this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.selected_document =
                  {"documentId":"094","name":"СНИЛС","isManual":0,"serialNumberDocument":0,
                    "docSeriesMandatory":0,"docNumberMandatory":1,"relatedDocument":"",
                    "documentType":4,"isDifferentEduCardAppl":0,"educationLevel":0,"isAllowEditing":1,
                    "docOrgMandatory":1,"isDuplicatePermission":0,"diplomCopy":0},
                this.nameDoc = "СНИЛС",
                this.serialDoc = this.tab_personal_INIPA,
                this.numberDoc = "",
                this.docTypeDoc = {"id": 0, "name": "Копия"},
                this.dateOfIssueDoc = this.tab_personal_INIPADate,
                  // this.moment(this.dateToday).format('YYYY-MM-DD'),
                  //
                this.countDoc = 1,
                this.issuedByDoc = "",
                this.tab_document_auto = true,
                this.fullnameDoc = this.nameDoc + " № " + this.tab_personal_INIPA + " от " + (dateConvert(this.dateOfIssueDoc)) + " выдан ПФР " + "(Копия)",
              );

              if(this.tab_edu_military_selectedMilitaryFormDoc.name === 'Военный билет'){
                let document10 = new Document(
                  this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                  this.selected_document =
                    {"documentId":"014","name":"Военный билет","isManual":0,"serialNumberDocument":6,
                      "docSeriesMandatory":1,"docNumberMandatory":1,"relatedDocument":"","documentType":12,
                      "isDifferentEduCardAppl":0,"educationLevel":0,"isAllowEditing":1,"docOrgMandatory":0,
                      "isDuplicatePermission":0,"diplomCopy":0},
                  this.nameDoc = "Военный билет",
                  this.serialDoc = this.tab_edu_military_militarySeries,
                  this.numberDoc = this.tab_edu_military_militaryNumber,
                  this.docTypeDoc = {"id": 0, "name": "Копия"},
                  this.dateOfIssueDoc = this.tab_edu_military_militaryIssueDate,
                  this.countDoc = 1,
                  this.issuedByDoc = this.tab_edu_military_militaryIssueBy,
                  this.tab_document_auto = true,
                  this.fullnameDoc = this.nameDoc + " Серия: " + this.serialDoc + " № " + this.numberDoc + " от " + (dateConvert(this.dateOfIssueDoc)) + " выдан " + this.issuedByDoc + '('+this.docTypeDoc.name+')' ,
                );
                this.person.application.application_documents.push(document10);
              }


              //TODO нужно ли приложение док об образовании?

              // if(this.tab_edu_military_attachment_serial !== null){
              //   let document4 = new Document(
              //     this.selected_document;
              //     this.nameDoc = "Документ об образовании",
              //     this.serialDoc = this.tab_edu_military_attachment_serial,
              //     this.numberDoc = this.tab_edu_military_attachment_number,
              //     this.fullnameDoc = this.nameDoc + " " + this.tab_edu_military_attachment_serial + " " + this.tab_edu_military_attachment_number,
              //     this.docTypeDoc = {"id":0,"name":"Копия"},
              //     this.dateOfIssueDoc = this.tab_edu_military_eduDocDate,
              //     this.countDoc = 1,
              //     this.issuedByDoc = this.tab_edu_military_eduDocName,
              //   );
              //   this.person.application.application_documents.push(document4);
              // }


              let document4 = new Document(
                this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.selected_document = this.documentByEduDoc,
                this.nameDoc = this.tab_edu_military_selectedEduDoc.name,
                this.serialDoc = this.tab_edu_military_eduDocSerial,
                this.numberDoc = this.tab_edu_military_eduDocNumber,
                this.docTypeDoc = {"id":0,"name":"Копия"},
                this.dateOfIssueDoc = this.tab_edu_military_eduDocDate,
                  // this.moment(this.dateToday).format('YYYY-MM-DD'),
                  //
                this.countDoc = 1,
                this.issuedByDoc = this.tab_edu_military_univer,
                this.tab_document_auto = true,
                this.fullnameDoc = this.nameDoc + " Серия " + this.serialDoc + " № " + this.numberDoc + " от " + (dateConvert(this.dateOfIssueDoc)) + " выдан " + this.issuedByDoc + "(Копия)",

              );
              this.person.application.application_documents.push(document4);




              let document5 = new Document(
                this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.selected_document =
                  {"documentId":"019","name":"Заявление ректору","isManual":0,
                    "serialNumberDocument":1,"docSeriesMandatory":0,"docNumberMandatory":0,
                    "relatedDocument":"","documentType":4,"isDifferentEduCardAppl":0,
                    "educationLevel":0,"isAllowEditing":0,"docOrgMandatory":0,
                    "isDuplicatePermission":0,"diplomCopy":0},
                this.nameDoc = "Заявление ректору",
                this.serialDoc = "",
                this.numberDoc = "",
                this.docTypeDoc = {"id": 1, "name": "Оригинал"},
                this.dateOfIssueDoc = this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.countDoc = 1,
                this.issuedByDoc = "",
                this.tab_document_auto = true,
                this.fullnameDoc = "Заявление ректору (Оригинал)",

              );


              let document7 = new Document(
                this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.selected_document =
                  {"documentId":"081","name":"Согласие на обработку персональных данных","isManual":0,
                    "serialNumberDocument":0,"docSeriesMandatory":0,"docNumberMandatory":0,
                    "relatedDocument":"","documentType":4,"isDifferentEduCardAppl":0,"educationLevel":1,
                    "isAllowEditing":1,"docOrgMandatory":1,"isDuplicatePermission":0,"diplomCopy":0},
                this.nameDoc = "Согласие на обработку персональных данных",
                this.serialDoc = "",
                this.numberDoc = "",
                this.docTypeDoc = {"id": 1, "name": "Оригинал"},
                this.dateOfIssueDoc = this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.countDoc = 1,
                this.issuedByDoc = "",
                this.tab_document_auto = true,
                this.fullnameDoc = this.nameDoc + " (Оригинал)",

              );
              let document8 = new Document(
                this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.selected_document =
                  {"documentId":"022","name":"Фотокарточка","isManual":0,"serialNumberDocument":6,
                    "docSeriesMandatory":0,"docNumberMandatory":0,"relatedDocument":"",
                    "documentType":4,"isDifferentEduCardAppl":0,"educationLevel":0,
                    "isAllowEditing":1,"docOrgMandatory":0,"isDuplicatePermission":0,"diplomCopy":0},
                this.nameDoc = "Фотографии",
                this.serialDoc = "",
                this.numberDoc = "",
                this.docTypeDoc = {"id": 1, "name": "Оригинал"},
                this.dateOfIssueDoc = this.moment(this.dateToday).format('YYYY-MM-DD'),
                this.countDoc = 6,
                this.issuedByDoc = "",
                this.tab_document_auto = true,
                this.fullnameDoc = "Фотокарточка (6 шт.) (Оригинал)",

              );


              let i = 0;
              for(i; i < this.person.futures_info.length; i++){
                if(typeof this.person.futures_info[i].doc1.name !== 'undefined'){
                  let document7 = new Document(
                    this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                    this.selected_document = this.person.futures_info[i].doc1,
                    this.nameDoc = this.person.futures_info[i].doc1.name,
                    this.serialDoc = this.person.futures_info[i].doc1_serial,
                    this.numberDoc = this.person.futures_info[i].doc1_number,
                    this.docTypeDoc = this.person.futures_info[i].tab_features_selectedDocType1,
                    this.dateOfIssueDoc = this.person.futures_info[i].doc1_IssuDate,
                      // this.moment(this.dateToday).format('YYYY-MM-DD'),
                      // this.person.futures_info[i].doc1_IssuDate,
                    this.countDoc = 1,
                    this.issuedByDoc = this.person.futures_info[i].doc1_IssueBy,
                    this.tab_document_auto = true,
                    this.fullnameDoc = this.nameDoc + ' Cерия ' + this.person.futures_info[i].doc1_serial + ' № ' + this.person.futures_info[i].doc1_number + ' от ' + (dateConvert(this.dateOfIssueDoc)) + " выдан " + this.issuedByDoc + " ("+ this.docTypeDoc +")",

                  );
                  this.person.application.application_documents.push(document7);
                }

                if(typeof this.person.futures_info[i].doc2.name !== 'undefined'){
                  let document8 = new Document(
                    this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                    this.selected_document = this.person.futures_info[i].doc2,
                    this.nameDoc = this.person.futures_info[i].doc2.name,
                    this.serialDoc = this.person.futures_info[i].doc2_serial,
                    this.numberDoc = this.person.futures_info[i].doc2_number,
                    this.docTypeDoc = this.person.futures_info[i].tab_features_selectedDocType2,
                    this.dateOfIssueDoc = this.moment(this.dateToday).format('YYYY-MM-DD'),
                      // this.person.futures_info[i].doc1_IssuDate,
                    this.countDoc = 1,
                    this.issuedByDoc = this.person.futures_info[i].doc2_IssueBy,
                    this.tab_document_auto = true,
                    this.fullnameDoc = this.nameDoc + ' Серия ' + this.person.futures_info[i].doc2_serial + ' № ' + this.person.futures_info[i].doc2_number + ' от ' + (dateConvert(this.dateOfIssueDoc)) + " выдан " + this.issuedByDoc + " ("+ this.docTypeDoc +")",

                  );
                  this.person.application.application_documents.push(document8);
                }
                if(typeof this.person.futures_info[i].doc3.name !== 'undefined'){
                  let document9 = new Document(
                    this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                    this.selected_document = this.person.futures_info[i].doc3,
                    this.nameDoc = this.person.futures_info[i].doc3.name,
                    this.serialDoc = this.person.futures_info[i].doc3_serial,
                    this.numberDoc = this.person.futures_info[i].doc3_number,
                    this.docTypeDoc = this.person.futures_info[i].tab_features_selectedDocType3,
                    this.dateOfIssueDoc = this.moment(this.dateToday).format('YYYY-MM-DD'),
                      // this.person.futures_info[i].doc3_IssuDate,
                    this.countDoc = 1,
                    this.issuedByDoc = this.person.futures_info[i].doc3_IssueBy,
                    this.tab_document_auto = true,
                    this.fullnameDoc = this.nameDoc + ' Серия ' + this.person.futures_info[i].doc3_serial + ' № ' + this.person.futures_info[i].doc3_number + ' от ' + (dateConvert(this.dateOfIssueDoc)) + " выдан " + this.issuedByDoc + " ("+ this.docTypeDoc +")",

                  );
                  this.person.application.application_documents.push(document9);
                }
              }


              this.person.application.application_documents.push(document1);
              this.person.application.application_documents.push(document2);
              this.person.application.application_documents.push(document5);
            // person.application.choosenWizards
              for(let i = 0; i < this.person.application.choosenWizards.length; i++){
                if(this.person.application.choosenWizards[i].agree){

                  let document6 = new Document(
                    this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                    this.selected_document =
                      {"documentId":"053","name":"Согласие на зачисление","isManual":0,
                        "serialNumberDocument":0,"docSeriesMandatory":0,"docNumberMandatory":0,
                        "relatedDocument":"","documentType":4,"isDifferentEduCardAppl":0,
                        "educationLevel":3,"isAllowEditing":1,"docOrgMandatory":0,
                        "isDuplicatePermission":1,"diplomCopy":0},
                    this.nameDoc = "Согласие на зачисление",
                    this.serialDoc = "",
                    this.numberDoc = "",
                    this.docTypeDoc = {"id": 1, "name": "Оригинал"},
                    this.dateOfIssueDoc = this.moment(this.dateToday).format('YYYY-MM-DD'),
                    this.countDoc = 1,
                    this.issuedByDoc = "",
                    this.tab_document_auto = true,
                    this.fullnameDoc = "Заявление о согласии на зачисление: " + this.person.application.choosenWizards[i].deparName + ", " + this.person.application.choosenWizards[i].environmentId + " (Оригинал)",

                  );
                  this.person.application.application_documents.push(document6);
                }
              }

              this.person.application.application_documents.push(document7);
              this.person.application.application_documents.push(document8);

            let j = 0;
              for (j; j < this.person.application.choosenWizards.length; j++) {
                if (this.person.application.choosenWizards[j].environmentId === 'ЦелНапр') {
                  let document10 = new Document(
                    this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
                    this.selected_document =
                      {"documentId":"023","name":"Целевое направление","isManual":0,"serialNumberDocument":8,
                        "docSeriesMandatory":0,"docNumberMandatory":0,"relatedDocument":"","documentType":4,
                        "isDifferentEduCardAppl":0,"educationLevel":0,"isAllowEditing":1,"docOrgMandatory":0,
                        "isDuplicatePermission":0,"diplomCopy":0},
                    this.nameDoc = this.person.application.choosenWizards[j].contract,
                    this.serialDoc = "",
                    this.numberDoc = "",
                    this.docTypeDoc = {"id": 1, "name": "Оригинал"},
                    this.dateOfIssueDoc = this.moment(this.dateToday).format('YYYY-MM-DD'),
                      // this.person.application.choosenWizards[j].date,
                    this.countDoc = 1,
                    this.issuedByDoc = this.person.application.choosenWizards[j].company.name,
                    this.tab_document_auto = true,
                    this.fullnameDoc = "Целевое направление: " + this.person.application.choosenWizards[j].company.name + ".Договор №: " + this.person.application.choosenWizards[j].contract,

                  );
                  this.person.application.application_documents.push(document10);
                }
              }


              console.log(this.person.application.application_documents)

          },
          onSave() {
            location.href='profile#documents_overview';
            function Document(dateOfShow, selected_document, name, serial, number, docType, dateOfIssue, count, IssuedBy, auto,fullname) {
                this.dateOfShow = dateOfShow,
                this.selected_document = selected_document,
                this.nameDoc = name,
                this.serialDoc = serial,
                this.numberDoc = number,
                this.docTypeDoc = docType,
                this.dateOfIssueDoc = dateOfIssue,
                this.countDoc = count,
                this.issuedByDoc =IssuedBy,
                this.tab_document_auto = auto,
                this.fullnameDoc = fullname

            }

            if(this.name === 'Иной документ') {
              this.name = this.newName
            }else{

            }
              let doc = new Document(
              this.dateOfShow = this.moment(this.dateToday).format('YYYY-MM-DD'),
              this.selected_document,
              this.nameDoc = this.name === 'Иной документ' ? this.newName : this.selected_document.name,
              this.serialDoc = this.serial,
              this.numberDoc = this.number,
              this.docTypeDoc = this.selected_docType,
              this.dateOfIssueDoc = this.dateOfIssue,
              this.countDoc = this.count,
              this.issuedByDoc = this.issuedBy,
              this.tab_document_auto = false,
              this.fullnameDoc = this.nameDoc + " Серия " + this.serial + " № " + this.number + " от " + this.dateOfIssueDoc + " выдан " + this.issuedByDoc + " ("+ this.docTypeDoc +")"

              );

            console.log(doc)
            this.person.application.application_documents.push(doc);

          },

          onDelete(item) {
            const index = this.person.application.application_documents.indexOf(item);
            console.log(index);
            this.person.application.application_documents.splice(index, 1);
          }
        },

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
    /*margin-top: 10%;*/
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
  }
  .inside_tab {
    margin-top: -90px;
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

  .row {
    margin-bottom: 8px;
  }

  .form__label-text {
    text-align: left;
  }

  .inner_tab {
    margin-top: -40px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }
</style>
