<template>
  <div class="inside_tab">
    <tabs class="parent_tabs">
      <tab id="documents_overview" name="Обзор">
        <div class="row">
          <button @click="onFill">Заполнить</button>
          <button @click="onAdd">Добавить</button>
        </div>
        <v-data-table
          :headers="headers_documents"
          :items="showTable"
          hide-actions
          class="elevation-1 text-xs-center"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.fullName}}</td>
            <td class="text-xs-center">{{ props.item.tab_document_selectedDocType.name}}</td>
            <td class="text-xs-center">{{ props.item.tab_document_date}}</td>
            <td class="text-xs-center">{{ props.item.tab_document_count }}</td>
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
                    <select v-model="tab_document_selectedDocumentType" class="minimal col-sm" name="">
                      <option>док 1</option>
                      <option>док 2</option>
                    </select>
                  </label>
                <label class="row">
                  <div class="form__label-text col-sm">Количество:</div>
                  <input v-model="tab_document_count" class="form__input col-sm" type="text"  required/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Серия:</div>
                  <input v-model="tab_document_series" class="form__input col-sm" type="text"  required/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Номер/ID:</div>
                  <input v-model="tab_document_number" class="form__input col-sm" type="text"  required/>
                </label>

                <label class="row">
                  <div class="form__label-text col-sm">Копия/Оригинал:</div>
                  <select v-model="tab_document_selectedDocType" class="minimal col-sm">
                    <option v-for="item in docType" v-bind:value="item">
                      {{item.name}}
                    </option>
                  </select>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Дата выдачи:</div>
                  <input v-model="tab_document_date" class="form__input col-sm" type="date"  required/>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Кем выдан:</div>
                  <textarea v-model="tab_document_issuedBy" class="col-sm" ></textarea>
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
        ...applications(['application']),
        ...tab_documents(['tab_document_selectedDocumentType', 'tab_document_series', 'tab_document_number',
          'tab_document_selectedCopy', 'tab_document_date','tab_document_issuedBy','tab_document_fullName',
          'tab_document_count','tab_document_selectedDocType'
        ]),
        ...mapMultiRowFields(['document','tab_document_allDocuments']),
        ...person(['person','tab_personal_selectedIdentityCardCode','this.tab_personal_identityCardSeries',
        'tab_personal_identityCardNumber','tab_personal_identityCardIssueDate',
'docTableFullname','docTableDocType','docTableDate','docTableCount'
        ]),
        fullName(){
          return this.document_fullName =
            this.tab_document_selectedDocumentType + ' ' +
             this.tab_document_series +
            ' ' + this.tab_document_number;
        },

        showTable(){
          return this.application.application_documents;
        },
      },
      mounted() {
        this.$store.dispatch('enums/onLoadDocType');
      },
        methods: {
          onNext() {
            location.href='profile#entranceTests';
          },
          onAdd(){
            location.href='profile#documents_info';
          },
          onClear() {
            this.tab_document_selectedDocumentType = null;
            this.tab_document_count = null;
            this.tab_document_series = null;
            this.tab_document_number = null;
            this.tab_document_selectedDocType = null;
            this.tab_document_date = null;
            this.tab_document_issuedBy = null;
          },
          onFill() {
            function DocTable(fullname, doctype, date, count) {}
            let doctable = new DocTable(
              this.tab_personal_selectedIdentityCardCode.identityCardNameFull + ' ' + this.tab_personal_identityCardSeries +" "+this.tab_personal_identityCardNumber,
              {"id":1,"name":"Оригинал"},
              this.tab_personal_identityCardIssueDate,
              1
            );


          },
          onSave() {
            location.href='profile#documents_overview';
            // function DocTable(fullname, doctype, date, count) {}
            // let doctable1 = new DocTable(
            //   this.docTableFullname = this.tab_document_selectedDocumentType + ' ' +
            //   this.tab_document_series +" "+
            //   this.tab_document_number,
            //   this.docTableDocType = this.tab_document_selectedDocumentType,
            //   this.docTableDate = this.tab_document_date,
            //   this.docTableCount = this.tab_document_count
            // );

            function Document(doc_type,doc_count,doc_series,doc_number,
                            doc_selectedCopy,doc_date,doc_issuedBy,doc_full
                            ) {
              this.tab_document_selectedDocumentType = doc_type;
              this.tab_document_count = doc_count;
              this.tab_document_series = doc_series;
              this.tab_document_number = doc_number;
              this.tab_document_selectedDocType = doc_selectedCopy;
              this.tab_document_date = doc_date;
              this.tab_document_issuedBy = doc_issuedBy;
              this.fullName = doc_full;
            }
              let document = new Document(
                this.tab_document_selectedDocumentType, this.tab_document_count, this.tab_document_series,
                this.tab_document_number,this.tab_document_selectedDocType,this.tab_document_date,
                this.tab_document_issuedBy, this.fullName
              );
            this.application.application_documents.push(document);
            console.log(this.document)

            // console.log(this.fullName);
          },

          onDelete(item) {
            const index = this.application.application_documents.indexOf(item);
            console.log(index);
            this.application.application_documents.splice(index, 1);
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
