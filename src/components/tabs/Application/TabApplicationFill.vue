<template>
  <div>

  <modal
    v-show="isModalVisible"
    @close="closeModal"
    @toApplication="onAppl"
    @validatorConditions="validatorConditions"
  />

    <!--<span>{{moment(dateToday).format('YYYY-MM-DD')}}</span>-->
  <div class="inside_tab">
    <div class="row">
      <!--<div v-if="!this.isModalVisible" class="flex-column col-sm-2">-->
        <!--<div class="form__label-text col-sm">Номер заявления:</div>-->
        <!--<input v-model="person.application.application_number" class="form__input col-sm-8" type="text" disabled/>-->
      <!--</div>-->
      <div v-if="!this.isModalVisible" class="flex-column col-sm-2">
        <div class="form__label-text col-sm">Дата заявления:</div>
        <input v-model="person.application.application_date = moment(dateToday).format('YYYY-MM-DD')" class="form__input col-sm" type="date" id= "theDate"  min="1918-01-01" max="2019-01-01" />
      </div>
      <div v-if="!this.isModalVisible" class="flex-column col-sm-2">
        <div class="form__label-text col-sm">Тип доставки:</div>
        <select v-model="person.application.application_selectedDeliveryType"  class="minimal col-sm">
          <option v-for="item in deliveryType" v-bind:value="item">
            {{item.name}}
          </option>
        </select>
      </div>
      <div v-if="!this.isModalVisible" class="flex-column col-sm-2">
        <div class="form__label-text col-sm">Тип возврата:</div>
        <select v-model="person.application.application_selectedDeliveryReturnType"  class="minimal col-sm">
          <option v-for="item in deliveryType" v-bind:value="item">
            {{item.name}}
          </option>
        </select>
      </div>

      <div v-if="!this.isModalVisible" class=" col-sm-4">
        <div class="form__label-text col-sm-8">Документ об образовании:</div>
        <select v-model="person.application.application_selectedDocType" class="minimal col-sm-6">
          <option v-for="item in docType" v-bind:value="item">
            {{item.name}}
          </option>
        </select>
      </div>
      <!--<div v-if="!this.isModalVisible" class="flex-column col-sm-4">-->
        <!--<div class="form__label-text col-sm">Абитуриент:</div>-->
        <!--&lt;!&ndash;<input v-model="resultApl.application_person_name" class="uneditable form__input col-sm" type="text" name="" disabled />&ndash;&gt;-->
        <!--<input :value="tab_personal_lastname + ' ' + tab_personal_firstname+ ' '+ tab_personal_middlename" class="uneditable form__input col-sm-8" type="text" name="name"-->
               <!--placeholder="Заполняется автоматически" disabled="disabled"/>-->
      <!--</div>-->
    </div>

    <tabs class="condition_tabs">
      <tab id="conditions_overview" name="Обзор">

        <div v-if="!this.isModalVisible" class="row">
          <button @click="onAdd">Добавить/Удалить</button>
        </div>

        <v-data-table
          v-if="!this.isModalVisible"
          :headers="headers_result"
          :items="person.application.choosenWizards"
          hide-actions
          class="elevation-1 text-xs-center"
        >

          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.deparName}}</td>
            <td class="text-xs-center">{{ props.item.specialityId}}</td>
            <td class="text-xs-center">{{ props.item.environmentId}}</td>

            <td v-if="props.item.environmentId ==='ЦелНапр'" class="text-xs-center">{{ props.item.company.name}}</td>
            <td v-else class="text-xs-center">{{ props.item.company}}</td>

            <td class="text-xs-center">{{ props.item.contract}}</td>
            <td class="text-xs-center">{{ props.item.date}}</td>
            <td class="text-xs-center">{{ props.item.eduForm }}</td>

            <td class="text-xs-center">
              <div v-if="((props.item.environmentId ===  'Договор' && !props.item.agree) && countContract > 0)||
                         ((props.item.environmentId ===  'Бюджет' && !props.item.agree) && countBudget > 0) ||
                         ((props.item.environmentId ===  'ЦелНапр' && !props.item.agree) && countBudget > 0)">
                <input v-model="props.item.agree" class="checkbox col-sm" type="checkbox" @change="checkCount(props.item)" disabled>
              </div>
              <div v-else>
                <input v-model="props.item.agree" class="checkbox col-sm" type="checkbox" @change="checkCount(props.item)">
              </div>

              <div v-if="props.item.agree === true">
                <input v-model="props.item.agreeDate" class="form__input col-sm" type="date"  min="1918-01-01" max="2020-01-01"/>
                <label v-if="props.item.environmentId ==='Договор'" v-model="props.item.orderGroupType = options_orderGroupType[3].item">{{options_orderGroupType[3].item}}</label>
                <label v-if="props.item.environmentId ==='ЦелНапр' " v-model="props.item.orderGroupType = options_orderGroupType[2].item">{{options_orderGroupType[2].item}}</label>
                <label v-if="props.item.environmentId ==='Бюджет' && props.item.special_right" v-model="props.item.orderGroupType = options_orderGroupType[1].item">{{options_orderGroupType[1].item}}</label>
                <label v-if="props.item.environmentId ==='Бюджет' && !props.item.special_right" v-model="props.item.orderGroupType = options_orderGroupType[3].item">{{options_orderGroupType[3].item}}</label>
              </div>
              <div v-else>
              </div>
              <div >
                <!--<label v-if="props.item.environmentId ==='Договор'" v-model="props.item.orderGroupType = options_orderGroupType[3].item">{{options_orderGroupType[3].item}}</label>-->
                <!--<label v-if="props.item.environmentId ==='ЦелНапр'" v-model="props.item.orderGroupType = options_orderGroupType[2].item">{{options_orderGroupType[2].item}}</label>-->
              </div>
            </td>

            <!--<td class="text-xs-center">-->
              <!--<input v-model="props.item.special_right" class="checkbox col-sm" type="checkbox" disabled>-->
            <!--</td>-->

            <td class="justify-center layout px-0">
              <button  class="table_buttons" @click="addSomething(props.item)">
                <v-icon color="#5bc0de">add</v-icon>
              </button>
            </td>
          </template>
          <template slot="no-data">
            <div></div>
          </template>
        </v-data-table>
      </tab>
      <tab v-if="!this.isModalVisible" id="conditions_info" name="Условия приема">

        <div class="row">
          <div class="col-sm-6">

            <label class="row">
              <div class="form__label-text col-sm">Название факультета:</div>
              <input v-model="faculty" class="form__input col-sm" type="text" name="" disabled/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Название специальности:</div>
              <input v-model="speciality" class="form__input col-sm" type="text" name="" disabled/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Направление обучения:</div>
              <input v-model="environment" class="form__input col-sm" type="text" name="" disabled/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Форма обучения:</div>
              <input v-model="eduForm" class="form__input col-sm" type="text" name="" disabled/>
            </label>

            <div v-if="agree" class="row">
              <div class="col-sm">
                <label class="row">
                  <div class="form__label-text col-sm">Дата согласия:</div>
                  <input v-model="agreeDate" class="form__input col-sm" type="date"  min="1918-01-01" max="2020-01-01" />
                </label>
              </div>
            </div>

          </div>

          <div class="col-sm-6">
            <label class="row">
              <div class="form__label-text col-sm">Добавить особое право:</div>
              <input v-if="environment=== 'Договор'" v-model="special_right" class="checkbox col-sm" type="checkbox" name="" disabled/>
              <input v-else-if="environment=== 'ЦелНапр'" v-model="special_right" class="checkbox col-sm" type="checkbox" name="" disabled/>

                <input v-else v-model="special_right" class="checkbox col-sm" type="checkbox" name=""/>

            </label>
            <div  v-if="special_right">
              <label class="row">
                <div class="form__label-text col-sm">Тип особого права</div>
                <select v-model="typeOfSpecialRight" class="minimal col-sm">
                  <option v-for="option in options_typeOfSpecialRight">
                    {{option.item}}
                  </option>
                </select>
              </label>
              <div class="alarm_label">(Тип особого права обязателен для заполнения)</div>
              <div>
                <label class="row">
                  <div class="form__label-text col-sm">Подтверждающий док-т(1):</div>
                  <select v-model="proofSpecialRight1" class="minimal col-sm">
                    <option v-for="option in options_DocumentType">
                      {{option.item}}
                    </option>
                  </select>
                </label>

                <label class="row">
                  <div class="form__label-text col-sm">Описание:</div>
                  <input v-model="descriptionSpecialRight1" class="form__input col-sm" type="text" name=""  />
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Серия:</div>
                  <input v-model="serialSpecialRight1" class="form__input col-sm" type="text" name=""  />
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Номер:</div>
                  <input v-model="numberSpecialRight1" class="form__input col-sm" type="text" name=""  />
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Копия/оригинал:</div>
                  <select v-model="docTypeSpecialRight1" class="minimal col-sm">
                    <option v-for="item in docType" v-bind:value="item">
                      {{item.name}}
                    </option>
                  </select>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Дата:</div>
                  <input v-model="dateSpecialRight1" class="form__input col-sm" type="date"  min="1918-01-01" max="2020-01-01" />
                </label>
              </div>
              <hr>

              <div>

                <label class="row">
                  <div class="form__label-text col-sm">Подтверждающий док-т(2):</div>
                  <select v-model="proofSpecialRight2" class="minimal col-sm">
                    <option v-for="option in options_DocumentType">
                      {{option.item}}
                    </option>
                  </select>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Описание:</div>
                  <input v-model="descriptionSpecialRight2" class="form__input col-sm" type="text" name=""  />
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Серия:</div>
                  <input v-model="serialSpecialRight2" class="form__input col-sm" type="text" name=""  />
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Номер:</div>
                  <input v-model="numberSpecialRight2" class="form__input col-sm" type="text" name=""  />
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Копия/оригинал:</div>
                  <select v-model="docTypeSpecialRight2" class="minimal col-sm">
                    <option v-for="item in docType" v-bind:value="item">
                      {{item.name}}
                    </option>
                  </select>
                </label>
                <label class="row">
                  <div class="form__label-text col-sm">Дата:</div>
                  <input v-model="dateSpecialRight2" class="form__input col-sm" type="date"  min="1918-01-01" max="2020-01-01" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div v-if="special_right" class="row">
        </div>
        <div class="clear_save_button row">
          <button @click="onSave">Сохранить</button>
        </div>
      </tab>
    </tabs>

    <div v-if="!this.isModalVisible" class="clear_save_button row">
      <button @click="onNext">Далее ->></button>
    </div>
  </div>
  </div>
</template>

<script>
  import {AXIOS} from "../../plugins/APIService";
  import { createHelpers } from 'vuex-map-fields';
  import {mapGetters, mapState} from 'vuex'
  import modal from "../../modals/modal";


  const { mapFields:applications} = createHelpers({
    getterType: 'applications/getField',
    mutationType: 'applications/updateField',
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  export default {
    name: "newVersion",
    components: {
      modal
    },
    data(){
      return{
        dateToday: Date.now(),

        // countContract: 0,
        // countBudget: 0,

        counter: 0,
        isOneAgree: true,

        editedIndex: -1,
        editedItem:{},
        faculty:'',
        speciality:'',
        environment:'',
        eduForm:'',
        // agree:false,
        // agreeDate:'',
        isAddAccepted: false,
        isAddSpesialRight: false,

        headers_result: [
          {text: 'Факультет', value: 'deparName', sortable: false, align: 'center'},
          {text: 'Специальность', value: 'dpecialityId', sortable: false, align: 'center'},
          {text: 'Условия обучения', value: 'environmentId', sortable: false, align: 'center'},
          {text: 'Организация', value: 'company', sortable: false, align: 'center'},
          {text: 'Договор', value: 'contract', sortable: false, align: 'center'},
          {text: 'Дата', value: 'date', sortable: false, align: 'center'},
          {text: 'Форма обучения', value: 'eduForm', sortable: false, align: 'center'},
          {text: 'Согласие', value: 'accepted', sortable: false, align: 'center'},
          // {text: 'Спец. право', value: 'special_right', sortable: false, align: 'center'},
          {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
        ],
        results: [

        ],

        options_orderGroupType: [
          {id: 1, item: 'БезВступ'},
          {id: 2, item: 'Особое право'},
          {id: 3, item: 'Целевой набор'},
          {id: 4, item: 'Общий набор'},
        ],

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

        options_typeOfSpecialRight: [
          {id: 1, item: 'Дети-сироты и дети, оставшиеся без попечения родителей'},
          {id: 2, item: 'Лица из числа детей-сирот и детей, оставшихся без попечения родителей'},
          {id: 3, item: 'Дети-инвалиды'},
          {id: 4, item: 'Инвалиды I группы'},
          {id: 5, item: 'Инвалиды II группы'},
          {id: 6, item: 'Инвалиды с детства'},
          {id: 7, item: 'Ветераны боевых действий из числа лиц, указанных в подпунктах 1-4 пункта 1 статьи 3 ФЗ от 12.01.1995 №5-ФЗ "О ветеранах"'},
        ],

        options_deliveryType: [
          {id: 1, item: 'Лично'},
          {id: 2, item: 'Почтой'},
          {id: 3, item: 'По доверенности'},
          {id: 4, item: 'Портал'},
        ],
        options_copy: [
          {id: 1, item: 'Копия'},
          {id: 2, item: 'Оригинал'},
        ],
      }
    },



    computed: {
      ...mapState('person', {person: state => state.person,}),
      ...applications(['application','contacts','application_person_name','resultApl','apls',
        'agree','agreeDate','special_right', 'typeOfSpecialRight','checkTargCount',
        'proofSpecialRight1','descriptionSpecialRight1','serialSpecialRight1','numberSpecialRight1','docTypeSpecialRight1','dateSpecialRight1',
        'proofSpecialRight2','descriptionSpecialRight2','serialSpecialRight2','numberSpecialRight2','docTypeSpecialRight2','dateSpecialRight2',
        'proofSpecialRight3','descriptionSpecialRight3','serialSpecialRight3','numberSpecialRight3','docTypeSpecialRight3','dateSpecialRight3',
        'countContract','countBudget',
        'lechDelCel','lechDelBudget','medProfCel', 'medProfBudget','stomDelCel','stomDelBudget','howMuchTarg'
  ]),
      ...mapState('enums',['deliveryType', 'docType']),
      ...mapGetters('enums',['GET_DELIVERY_TYPE','GET_DOC_TYPE']),
      ...person(['person','person_info_id','isModalVisible','isModalAgreementVisible',
        'tab_personal_lastname','tab_personal_firstname','tab_personal_middlename']),


      showTable(){
        return this.person.application.choosenWizards;
      },
      fullname(){
        this.person.application.application_person_name = this.application_person_name;
        return this.application_person_name
        // return this.application.fullname = this.person.tab_personal_lastname + " "
        //   + this.person.tab_personal_firstname + " " + this.person.tab_personal_middlename
      },
    },

    mounted () {
      this.$store.dispatch('enums/onLoadDocType');
      this.$store.dispatch('enums/onLoadDeliveryType');
    },

    methods: {
      checkCount(item){
        let i = 0;
          if(item.environmentId === 'Бюджет' && item.agree) {
            this.countBudget++;
          }
          if(item.environmentId === 'Бюджет' && !item.agree){
            this.countBudget--;
          }
           if(item.environmentId === 'Договор' && item.agree) {
             this.countContract++;
           }
           if(item.environmentId === 'Договор' && !item.agree) {
             this.countContract--;
           }
      },


      onSave(item){

        this.editedItem.agree = this.agree;
        this.editedItem.agreeDate = this.agreeDate;

        this.editedItem.special_right = this.special_right;
        this.editedItem.typeOfSpecialRight = this.typeOfSpecialRight ;

        this.editedItem.proofSpecialRight1 = this.proofSpecialRight1 ;
        this.editedItem.descriptionSpecialRight1 = this.descriptionSpecialRight1;
        this.editedItem.serialSpecialRight1 = this.serialSpecialRight1;
        this.editedItem.numberSpecialRight1 = this.numberSpecialRight1;
        this.editedItem.docTypeSpecialRight1 = this.docTypeSpecialRight1;
        this.editedItem.dateSpecialRight1 = this.dateSpecialRight1;

        this.editedItem.proofSpecialRight2 = this.proofSpecialRight2 ;
        this.editedItem.descriptionSpecialRight2 = this.descriptionSpecialRight2;
        this.editedItem.serialSpecialRight2 = this.serialSpecialRight2;
        this.editedItem.numberSpecialRight2 = this.numberSpecialRight2;
        this.editedItem.docTypeSpecialRight2 = this.docTypeSpecialRight2;
        this.editedItem.dateSpecialRight2 = this.dateSpecialRight2;

        // this.editedItem.proofSpecialRight3 = this.proofSpecialRight3 ;
        // this.editedItem.descriptionSpecialRight3 = this.descriptionSpecialRight3;
        // this.editedItem.serialSpecialRight3 = this.serialSpecialRight3;
        // this.editedItem.numberSpecialRight3 = this.numberSpecialRight3;
        // this.editedItem.docTypeSpecialRight3 = this.docTypeSpecialRight3;
        // this.editedItem.dateSpecialRight3 = this.dateSpecialRight3;
        // this.agree = this.person.parents_info[index].tab_parent_name;

        Object.assign(this.person.application.choosenWizards[this.editedIndex], this.editedItem);

        location.href='profile#conditions_overview';

      },
      addSomething(item){


        this.editedIndex = this.person.application.choosenWizards.indexOf(item);
        this.editedItem = Object.assign({}, item);

        const index = this.person.application.choosenWizards.indexOf(item);

        this.faculty = this.person.application.choosenWizards[index].deparName;
        this.speciality = this.person.application.choosenWizards[index].specialityId;
        this.environment = this.person.application.choosenWizards[index].environmentId;
        this.eduForm = this.person.application.choosenWizards[index].eduForm;
        this.agree = this.person.application.choosenWizards[index].agree;
        this.agreeDate = this.person.application.choosenWizards[index].agreeDate;

        this.special_right = this.person.application.choosenWizards[index].special_right;
        this.typeOfSpecialRight = this.person.application.choosenWizards[index].typeOfSpecialRight;

        this.proofSpecialRight1 = this.person.application.choosenWizards[index].proofSpecialRight1;
        this.descriptionSpecialRight1 = this.person.application.choosenWizards[index].descriptionSpecialRight1;
        this.serialSpecialRight1 = this.person.application.choosenWizards[index].serialSpecialRight1;
        this.numberSpecialRight1 = this.person.application.choosenWizards[index].numberSpecialRight1;
        this.docTypeSpecialRight1 = this.person.application.choosenWizards[index].docTypeSpecialRight1;
        this.dateSpecialRight1 = this.person.application.choosenWizards[index].dateSpecialRight1;

        this.proofSpecialRight2 = this.person.application.choosenWizards[index].proofSpecialRight2;
        this.descriptionSpecialRight2 = this.person.application.choosenWizards[index].descriptionSpecialRight2;
        this.serialSpecialRight2 = this.person.application.choosenWizards[index].serialSpecialRight2;
        this.numberSpecialRight2 = this.person.application.choosenWizards[index].numberSpecialRight2;
        this.docTypeSpecialRight2 = this.person.application.choosenWizards[index].docTypeSpecialRight2;
        this.dateSpecialRight2 = this.person.application.choosenWizards[index].dateSpecialRight2;


        location.href='profile#conditions_info';
      },

      validatorConditions(){
        let i = 0;
        for (i; i < this.apls.length; i++) {
          switch (this.apls[i].specialityId) {
            case 'ЛечДел':
              if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === true) ) {
                return this.lechDelCel = false;
              }
              if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === true) ) {
                this.howMuchTarg.push(1);
                return this.lechDelBudget = false;
              }
              if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === false) && (this.lechDelCel === false) ) {
                return this.lechDelCel = true;
              }
              if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === false) && (this.lechDelBudget === false) ) {
                this.howMuchTarg.splice(0,1);
                return this.lechDelBudget = true;
              }
              break;
            case 'МедПрофДел':
              if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === true) ) {
                return this.medProfCel = false
              }
              if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === true) ) {
                this.howMuchTarg.push(1);
                return this.medProfBudget = false
              }
              if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === false) && (this.medProfCel === false)) {
                return this.medProfCel = true
              }
              if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === false) && (this.medProfBudget === false)) {
                this.howMuchTarg.splice(0,1);
                return this.medProfBudget = true
              }
              break;
            case 'СтомДел':
              if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === true) ) {
                return this.stomDelCel = false
              }
              if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === true) ) {
                this.howMuchTarg.push(1);
                return this.stomDelBudget = false
              }
              if( (this.apls[i].environmentId === 'Бюджет') && (this.apls[i].chose === false) && (this.stomDelCel === false) ) {
                return this.stomDelCel = true
              }
              if( (this.apls[i].environmentId === 'ЦелНапр') && (this.apls[i].chose === false) && (this.stomDelBudget === false) ) {
                this.howMuchTarg.splice(0,1);
                return this.stomDelBudget = true
              }
              break;
          }
        }
      },

      onAppl(){
        // this.application.choosenWizards = [];

        this.countContract= 0;
        this.countBudget= 0;

        let i = 0;
        for(i; i < this.apls.length; i++) {

          if (this.apls[i].chose === true) {

              this.apls[i].agree = false;
              this.apls[i].agreeDate = '';
              // this.apls[i].specialRight = '';
              this.apls[i].typeOfSpecialRight = '';
              this.apls[i].proofSpecialRight = '';
              this.apls[i].descriptionSpecialRight = '';
              this.apls[i].serialSpecialRight = '';
              this.apls[i].numberSpecialRight = '';
              this.apls[i].docTypeSpecialRight = null;
              this.apls[i].dateSpecialRight = '';
              this.apls[i].specialRights = false;

            this.person.application.choosenWizards.push(this.apls[i]);

          }
        }
        // console.log('on Appl ' + this.person.application.choosenWizards);
        // console.log(this.person.application.choosenWizards);
        this.isModalVisible = false;
      },

      onAdd() {
        this.lechDelCel = true;
        this.lechDelBudget = true;
        this.medProfCel = true;
        this.medProfBudget = true;
        this.stomDelCel = true;
        this.stomDelBudget = true;
        this.person.application.choosenWizards = [];
        this.isModalVisible = true;
      },

      closeModal() {
        this.isModalVisible = false;
      },

      deleteItem(item){
          const index = this.application.choosenWizards.indexOf(item);
          // console.log(index);
          this.application.choosenWizards.splice(index,1);

      },
      updateCurrentField(payload, objName) {
        let value = payload.target.value;
        this.$store.commit('person/updateCurrentField', {value, objName})
      },

      onNext() {
        // console.log(this.application.application_selectedDeliveryType);
        location.href='profile#documents';
      },
    },
  }
</script>

<style scoped>
  .inside_tab {
    margin-bottom: -10px;
  }

  .condition_tabs {
    margin-top: -5px;
  }

  button.table_buttons {
    min-width: 20px;
  }

  .clear_save_button {
    /*margin-top: 10%;*/
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
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

  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid grey;
    /*border: 4px;*/
  }

  input.checkbox {
    height: 15px;
    transform: scale(1.3);
    opacity: 0.9;
    cursor: pointer;
  }

  select {
    height: 25px;
    border-radius: 3px;
    border: 1px solid grey;
  }

  textarea {
    border-radius: 3px;
    border: 1px solid grey;
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
    border: 1px solid grey;
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
  label.row {
    margin-bottom: 3px;
  }

  .alarm_label {
    /*text-align: left;*/
    color: red;
  }
</style>
