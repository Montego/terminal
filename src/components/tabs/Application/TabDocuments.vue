<template>
  <div class="inside_tab">
    <tabs class="parent_tabs">
      <tab id="documents_overview" name="Обзор">
        <div class="row">
          <button @click="onFill">Заполнить</button>
          <button @click="onAdd">Добавить</button>
          <button >Печать</button>
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
            <td class="text-xs-center">{{ props.item.dateOfIssueDoc}}</td>
            <td class="text-xs-center">{{ props.item.countDoc }}</td>
            <td class="text-xs-center">
              <button @click="onDelete(props.item)">
                <v-icon color="#5bc0de">delete</v-icon>
              </button>
            </td>
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
                    <select v-model="name" class="minimal col-sm">
                      <option v-for="option in options_DocumentType">
                        {{option.item}}
                      </option>
                    </select>
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

            nameDoc:'',
            serialDoc:'',
            numberDoc:'',
            fullnameDoc:'',
            docTypeDoc:{"id":0,"name":"Копия"},
            dateOfIssueDoc:'',
            countDoc:0,
            IssuedByDoc: '',

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
            //
            // options_gender: [
            //   {id: 0, item: '-выберите пол-'},
            //   {id: 1, item: 'Мужской'},
            //   {id: 2, item: 'Женский'},
            //   {id: 3, item: 'Другое'},
            // ],


            headers_documents: [
              {text: 'Название', value: 'name', sortable: false, align: 'center'},
              {text: 'Копия/оригинал', value: 'copy', sortable: false, align: 'center'},
              {text: 'Дата выдачи', value: 'date', sortable: false, align: 'center'},
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
        ...applications(['application','fillDocuments','name','serial','number','selected_docType','dateOfIssue','count','issuedBy']),
        ...tab_documents(['tab_document_selectedDocumentType', 'tab_document_series', 'tab_document_number',
          'tab_document_selectedCopy', 'tab_document_date','tab_document_issuedBy','tab_document_fullName',
          'tab_document_count','tab_document_selectedDocType','fullname'
        ]),
        ...mapMultiRowFields(['document','tab_document_allDocuments']),
        ...person(['person','tab_personal_selectedIdentityCardCode','tab_personal_identityCardSeries','tab_personal_identityCardDocType',
        'tab_personal_identityCardNumber','tab_personal_identityCardIssueDate','tab_personal_identityCardIssueBy',
        'docTableFullname','docTableDocType','docTableDate','docTableCount', 'person_info_id','tab_personal_INIPA',
          'tab_personal_INIPADate','tab_edu_military_selectedEduDoc','tab_edu_military_eduDocSerial',
          'tab_edu_military_eduDocNumber','tab_edu_military_eduDocDate','tab_edu_military_univer'
        ]),


        // FullName(){
        //   return this.fullname =
        //     this.docType + ' ' +
        //      this.serial +
        //     ' ' + this.number;
        // },

        showTable(){
          return this.person.application.application_documents;
        },
      },
      mounted() {
        this.$store.dispatch('enums/onLoadDocType');
      },
        methods: {
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
          },
          onFill() {




            function Document(name, serial, number, fullname, docType, dateOfIssue, count, IssuedBy) {
              this.nameDoc = name,
              this.serialDoc = serial,
              this.numberDoc = number,
              this.fullnameDoc = fullname,
              this.docTypeDoc = docType,
              this.dateOfIssueDoc = dateOfIssue,
              this.countDoc = count,
              this.IssuedByDoc =IssuedBy
            }

            let document1 = new Document(
              this.nameDoc = this.tab_personal_selectedIdentityCardCode.identityCardNameFull,
              this.serialDoc = this.tab_personal_identityCardSeries,
              this.numberDoc = this.tab_personal_identityCardNumber,
              this.fullnameDoc = this.tab_personal_selectedIdentityCardCode.identityCardNameFull + ' ' + this.tab_personal_identityCardSeries + ' ' + this.tab_personal_identityCardNumber,
              this.docTypeDoc = this.tab_personal_identityCardDocType,
              this.dateOfIssueDoc = this.tab_personal_identityCardIssueDate,
              this.countDoc = 1,
              this.IssuedByDoc = this.tab_personal_identityCardIssueBy,
            );
            let document2 = new Document(
              this.nameDoc = "СНИЛС",
              this.serialDoc = this.tab_personal_INIPA,
              this.numberDoc = "",
              this.fullnameDoc = this.nameDoc + " " + this.tab_personal_INIPA,
              this.docTypeDoc = {"id":0,"name":"Копия"},
              this.dateOfIssueDoc = this.tab_personal_INIPADate,
              this.countDoc = 1,
              this.IssuedByDoc = "",
            );
            if(this.tab_edu_military_selectedEduDoc.name !== ''){
              let document3 = new Document(
                this.nameDoc = this.tab_edu_military_selectedEduDoc.name,
                this.serialDoc = this.tab_edu_military_eduDocSerial,
                this.numberDoc = this.tab_edu_military_eduDocNumber,
                this.fullnameDoc = this.nameDoc + " " + this.serialDoc + " " + this.numberDoc,
                this.docTypeDoc = {"id":0,"name":"Копия"},
                this.dateOfIssueDoc = this.tab_edu_military_eduDocDate,
                this.countDoc = 1,
                this.IssuedByDoc = this.tab_edu_military_eduDocName,
              );
              this.person.application.application_documents.push(document3);
            }



            let document4 = new Document(
              this.nameDoc = "Приложение к док. об образовании",
              this.serialDoc = this.tab_edu_military_attachment_serial,
              this.numberDoc = this.tab_edu_military_attachment_number,
              this.fullnameDoc = this.nameDoc + " " + this.serialDoc + " " + this.numberDoc,
              this.docTypeDoc = {"id":0,"name":"Копия"},
              this.dateOfIssueDoc = this.tab_edu_military_eduDocDate,
              this.countDoc = 1,
              this.IssuedByDoc = this.tab_edu_military_eduDocName,
            );
            let document5 = new Document(
              this.nameDoc = "Заявление",
              this.serialDoc = "",
              this.numberDoc = "",
              this.fullnameDoc = "Заявление",
              this.docTypeDoc = {"id":1,"name":"Оригинал"},
              this.dateOfIssueDoc = "",
              this.countDoc = 1,
              this.IssuedByDoc = "",
            );
            let document6 = new Document(
              this.nameDoc = "Согласие на зачисление",
              this.serialDoc = "",
              this.numberDoc = "",
              this.fullnameDoc = "Согласие на зачисление",
              this.docTypeDoc = {"id":1,"name":"Оригинал"},
              this.dateOfIssueDoc = "",
              this.countDoc = 1,
              this.IssuedByDoc = "",
            );
            let document7 = new Document(
              this.nameDoc = "Согласие на обработку данных",
              this.serialDoc = "",
              this.numberDoc = "",
              this.fullnameDoc = "Согласие на обработку данных",
              this.docTypeDoc = {"id":1,"name":"Оригинал"},
              this.dateOfIssueDoc = "",
              this.countDoc = 1,
              this.IssuedByDoc = "",
            );
            let document8 = new Document(
              this.nameDoc = "Фотографии",
              this.serialDoc = "",
              this.numberDoc = "",
              this.fullnameDoc = "Фотографии",
              this.docTypeDoc = {"id":1,"name":"Оригинал"},
              this.dateOfIssueDoc = "",
              this.countDoc = 6,
              this.IssuedByDoc = "",
            );


            this.person.application.application_documents.push(document1);
            this.person.application.application_documents.push(document2);

            this.person.application.application_documents.push(document4);
            this.person.application.application_documents.push(document5);
            this.person.application.application_documents.push(document6);
            this.person.application.application_documents.push(document7);
            this.person.application.application_documents.push(document8);

//todo it's work but check doc.name
            // let i = 0;
            // for(i; i < this.person.futures_info.length; i++){
            //   if(this.person.futures_info[i].doc1 !== ''){
            //     let document7 = new Document(
            //       this.nameDoc = this.person.futures_info[i].doc1.name,
            //       this.serialDoc = this.person.futures_info[i].doc1_serial,
            //       this.numberDoc = this.person.futures_info[i].doc1_number,
            //       this.fullnameDoc = this.person.futures_info[i].doc1 + ' ' + this.person.futures_info[i].doc1_serial + ' ' + this.person.futures_info[i].doc1_number,
            //       this.docTypeDoc = this.person.futures_info[i].tab_features_selectedDocType1,
            //       this.dateOfIssueDoc = this.person.futures_info[i].doc1_IssuDate,
            //       this.countDoc = 1,
            //       this.IssuedByDoc = this.person.futures_info[i].doc1_IssueBy,
            //     );
            //     this.person.application.application_documents.push(document7);
            //   }
            //   if(this.person.futures_info[i].doc2 !== ''){
            //     let document8 = new Document(
            //       this.nameDoc = this.person.futures_info[i].doc2.name,
            //       this.serialDoc = this.person.futures_info[i].doc2_serial,
            //       this.numberDoc = this.person.futures_info[i].doc2_number,
            //       this.fullnameDoc = this.person.futures_info[i].doc2 + ' ' + this.person.futures_info[i].doc2_serial + ' ' + this.person.futures_info[i].doc2_number,
            //       this.docTypeDoc = this.person.futures_info[i].tab_features_selectedDocType2,
            //       this.dateOfIssueDoc = this.person.futures_info[i].doc1_IssuDate,
            //       this.countDoc = 1,
            //       this.IssuedByDoc = this.person.futures_info[i].doc2_IssueBy,
            //     );
            //     this.person.application.application_documents.push(document8);
            //   }
            //   if(this.person.futures_info[i].doc3 !== ''){
            //     let document9 = new Document(
            //       this.nameDoc = this.person.futures_info[i].doc3.name,
            //       this.serialDoc = this.person.futures_info[i].doc3_serial,
            //       this.numberDoc = this.person.futures_info[i].doc3_number,
            //       this.fullnameDoc = this.person.futures_info[i].doc3 + ' ' + this.person.futures_info[i].doc3_serial + ' ' + this.person.futures_info[i].doc3_number,
            //       this.docTypeDoc = this.person.futures_info[i].tab_features_selectedDocType3,
            //       this.dateOfIssueDoc = this.person.futures_info[i].doc3_IssuDate,
            //       this.countDoc = 1,
            //       this.IssuedByDoc = this.person.futures_info[i].doc3_IssueBy,
            //     );
            //     this.person.application.application_documents.push(document9);
            //   }
            // }

            let j = 0;
            for(j;j<this.person.application.choosenWizards.length; j++){
              if(this.person.application.choosenWizards[j].environmentId === 'ЦелНапр'){
                let document10 = new Document(
                  this.nameDoc = this.person.application.choosenWizards[j].contract,
                  this.serialDoc = "",
                  this.numberDoc = "",
                  this.fullnameDoc = this.person.application.choosenWizards[j].contract,
                  this.docTypeDoc = {"id":1,"name":"Оригинал"},
                  this.dateOfIssueDoc = this.person.application.choosenWizards[j].date,
                  this.countDoc = 1,
                  this.IssuedByDoc = this.person.application.choosenWizards[j].company,
                );
                this.person.application.application_documents.push(document10);
              }
            }


            console.log(this.tab_personal_selectedIdentityCardCode.identityCardNameFull)
            console.log(this.nameDoc)
            console.log(this.countDoc)
            console.log(this.fullnameDoc)
            console.log(document1)





            // AXIOS.get(`/profile/FillDocuments/` + this.person_info_id)
            //   .then(response => {
            //     this.person.application.application_documents = response.data;
            //     // this.fillDocuments = response.data;
            //     console.log(response.data)
            //   })
            //   .catch(e => {
            //     this.errors.push(e)
            //   })

          },
          onSave() {
            location.href='profile#documents_overview';

            function DocumentDto(name,serial,number,fullname, doctype,dateIssue, count){
                this.name = name,
                this.serial = serial,
                this.number = number,
                this.fullname = fullname,
                this.selected_docType = doctype,
                this.dateOfIssue = dateIssue,
                this.count = count
            }

            let doc = new DocumentDto(this.name, this.serial,
              this.number,this.name+ " " + this.serial + " " + this.number,this.selected_docType,this.dateOfIssue,
              this.count);
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
