<template>
  <div class="inside_tab">
    <tabs class="parent_tabs">
      <tab id="documents_overview" name="Обзор">
        <div class="row">
          <button>Заполнить</button>
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
            <td class="text-xs-center">{{ props.item.tab_document_selectedCopy}}</td>
            <td class="text-xs-center">{{ props.item.tab_document_date}}</td>
            <td class="text-xs-center">{{ props.item.tab_document_count }}</td>
            <td class="text-xs-center">
              <button @click="onDelete(props.item)">
                <v-icon color="#5bc0de">delete</v-icon>
              </button>
            </td>
          </template>
        </v-data-table>
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
                    <select v-model="tab_document_selectedDocumentType" class="col-sm" name="">
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
                  <div class="form__label-text col-sm">Копия/оригинал:</div>
                  <select v-model="tab_document_selectedCopy" class="col-sm" >
                    <option>копия</option>
                    <option>оригинал</option>
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
  import { createHelpers } from 'vuex-map-fields';
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
            document_name:'',
            document_date:'',
            document_count:'',
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
        ...tab_documents(['tab_document_selectedDocumentType', 'tab_document_series', 'tab_document_number',
          'tab_document_selectedCopy', 'tab_document_date','tab_document_issuedBy','tab_document_fullName',
          'tab_document_count'
        ]),
        ...mapMultiRowFields(['document','tab_document_allDocuments']),

        fullName(){
          return this.document_fullName =
            this.tab_document_selectedDocumentType + ' ' +
             this.tab_document_series +
            ' ' + this.tab_document_number;
        },

        showTable(){
          return this.info_documents = this.tab_document_allDocuments;
        },
      },
        methods: {
          onAdd(){
            location.href='application#documents_info';
          },
          onClear() {
            this.tab_document_selectedDocumentType = null;
            this.tab_document_count = null;
            this.tab_document_series = null;
            this.tab_document_number = null;
            this.tab_document_selectedCopy = null;
            this.tab_document_date = null;
            this.tab_document_issuedBy = null;
          },
          onSave() {
            location.href='application#documents_overview';

            function Document(doc_type,doc_count,doc_series,doc_number,
                            doc_selectedCopy,doc_date,doc_issuedBy, doc_fullName
                            ) {
              this.tab_document_selectedDocumentType = doc_type;
              this.tab_document_count = doc_count;
              this.tab_document_series = doc_series;
              this.tab_document_number = doc_number;
              this.tab_document_selectedCopy = doc_selectedCopy;
              this.tab_document_date = doc_date;
              this.tab_document_issuedBy = doc_issuedBy;
              this.fullName = doc_fullName;
            }
              var document = new Document(
                this.tab_document_selectedDocumentType, this.tab_document_count, this.tab_document_series,
                this.tab_document_number,this.tab_document_selectedCopy,this.tab_document_date,
                this.tab_document_issuedBy, this.fullName

              );

            // this.document.tab_document_selectedDocumentType = this.tab_document_selectedDocumentType;
            // this.document.tab_document_count = this.tab_document_count;
            // this.document.tab_document_series = this.tab_document_series;
            // this.document.tab_document_number = this.tab_document_number;
            // this.document.tab_document_selectedCopy = this.tab_document_selectedCopy;
            // this.document.tab_document_date = this.tab_document_date;
            // this.document.tab_document_issuedBy = this.tab_document_issuedBy;
            this.tab_document_allDocuments.push(document);
            console.log(this.document)
            console.log(this.tab_document_allDocuments)
            console.log(this.fullName);
          },

          onDelete(item) {
            const index = this.info_documents.indexOf(item);
            console.log(index);
            this.info_documents.splice(index, 1);
          }
        },

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
