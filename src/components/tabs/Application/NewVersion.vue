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
        <select v-model="application.application_selectedDeliveryReturnType"  class="minimal col-sm">
          <option v-for="item in deliveryType" v-bind:value="item">
            {{item.name}}
          </option>
        </select>
      </div>

      <!--<div v-if="!this.isModalVisible" class="flex-column col-sm-2">-->
        <!--<div class="form__label-text col-sm">Тип доставки:</div>-->
        <!--<select v-model="person.application.application_selectedDeliveryType"  class="minimal col-sm">-->
          <!--<option v-for="item in deliveryType" v-bind:value="item">-->
            <!--{{item.name}}-->
          <!--</option>-->
        <!--</select>-->
      <!--</div>-->
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
{{person.application.choosenWizards}}
    <tabs class="condition_tabs">
      <tab id="conditions_overview" name="Обзор">

        <div v-if="!this.isModalVisible" class="row">
          <button @click="onAdd">Добавить/Удалить</button>
          <!--<button @click="printAgreement">Распечатать согласие</button>-->
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
              <div v-if="((props.item.environmentId ===  'Договор' && !props.item.agree) && countD > 0)||
                         ((props.item.environmentId ===  'Бюджет' && !props.item.agree) && countB > 0)">
                <input v-model="props.item.agree" class="checkbox col-sm" type="checkbox" @change="checkCount(props.item)" disabled>
              </div>
              <div v-else>
                <input v-model="props.item.agree" class="checkbox col-sm" type="checkbox" @change="checkCount(props.item)">
              </div>

            <div v-if="props.item.agree === true">
              <input v-model="props.item.agreeDate" class="form__input col-sm" type="date"  min="1918-01-01" max="2020-01-01"/>
            </div>
              <div v-else>
                <input v-model="props.item.agreeDate" class="form__input col-sm" type="date"  min="1918-01-01" max="2020-01-01" hidden/>
              </div>

            </td>

            <!--<td class="text-xs-center">-->
              <!--<input v-model="props.item.special_right" class="checkbox col-sm" type="checkbox" disabled>-->
            <!--</td>-->

            <td class="justify-center layout px-0">
              <!--<button  class="table_buttons" @click="addAccepted(props.item)">-->
                <!--<v-icon color="#5bc0de">note_add</v-icon>-->
              <!--</button>-->
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

            <!--<div v-if="isOneAgree" class="row">-->
              <!--<div class="form__label-text col-sm">Добавить согласие:</div>-->
              <!--<input  v-model="agree" class="checkbox col-sm" type="checkbox" name=""/>-->
            <!--</div>-->
            <div class="row" >
              <div class="form__label-text col-sm">Добавить согласие:</div>
              <!--<input v-if="environment === 'Бюджет'" v-model="agree" class="checkbox col-sm" type="checkbox" name="" />-->
              <!--<input v-else v-model="agree" class="checkbox col-sm" type="checkbox" name="" disabled/>-->


                <!--<input v-if="((agree === false) && (eduForm ==='Договор') && (countDogAgree > 0))" v-model="agree" class="checkbox col-sm" type="checkbox" name="" disabled/>-->

                <!--<input v-else v-model="agree" class="checkbox col-sm" type="checkbox" name=""/>-->



              <!--<div v-if="agree">-->
                <!--<input v-model="agree" class="checkbox col-sm" type="checkbox" name="" />-->
              <!--</div>-->
              <!--<div v-else>-->
                <!--<input v-model="agree" v-if="agrees.length > 1" class="checkbox col-sm" type="checkbox" name="" disabled/>-->
                <!--<input v-model="agree" v-else class="checkbox col-sm" type="checkbox" name="" />-->
              <!--</div>-->


              <!--<input v-model="agree" v-else class="checkbox col-sm" type="checkbox" name="" />-->
            </div>

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
      <!--<button @click="onAddParent">Добавить</button>-->
      <!--<button @click="onSaveParent">Сохранить изм-я</button>-->
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

        countD: 0,
        countB: 0,

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
      showDate(){
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        let today = year + "-" + month + "-" + day;
        document.getElementById("theDate").value = today;
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
            this.countB++;
          }
          if(item.environmentId === 'Бюджет' && !item.agree){
            this.countB--;
          }
           if(item.environmentId === 'Договор' && item.agree) {
             this.countD++;
           }
           if(item.environmentId === 'Договор' && !item.agree) {
             this.countD--;
           }

          console.log('count D ', this.countD);
          console.log('count B ', this.countB);

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

      onSaveAccepted(){
        this.application.choosenWizards.accepted = true;
      },

      addAccepted(item){
        this.isAddAccepted = true;
        const index = this.application.choosenWizards.indexOf(item);
          this.faculty = this.application.choosenWizards[index].deparName;
          this.speciality = this.application.choosenWizards[index].specialityId;
          this.environment = this.application.choosenWizards[index].environmentId;
          this.eduForm = this.application.choosenWizards[index].eduForm;
        // this.application.choosenWizards[index].deparName;
        // this.application.choosenWizards[index].specialityId;
        // this.application.choosenWizards[index].environmentId;
        // this.application.choosenWizards[index].environmentId;
        // this.application.choosenWizards[index].deparName;

        location.href='profile#conditions_info';

      },

      validatorConditions(){
        let counterCheckTargOrg = 0;

        let counterLechDel = 0;
        let counterMedProf = 0;
        let counterStom = 0;
        let counterSestr = 0;
        let sumSpec = counterLechDel + counterMedProf + counterStom + counterSestr;
        // let counterCheckSpec : 0;

        let i = 0;
        //проверка на только 1 целевое направление
        for(i; i< this.apls.length; i++) {
          if (this.apls[i].chose === true && this.apls[i].environmentId === 'ЦелНапр') {
            counterCheckTargOrg++;
            console.log('counter + ', counterCheckTargOrg)
          } else if (this.apls[i].chose === false && this.apls[i].environmentId === 'ЦелНапр') {
            counterCheckTargOrg = 0;

          }
        }

        if(counterCheckTargOrg === 1 ){
          this.checkTargCount = true;
          console.log('true')
        }else{
          this.checkTargCount = false;
        }

        console.log('result counter ', counterCheckTargOrg)
      },




      onAppl(){
        // this.application.choosenWizards = [];
        this.countD= 0;
        this.countB= 0;

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
        console.log('on Appl ' + this.person.application.choosenWizards);
        console.log(this.person.application.choosenWizards);
        this.isModalVisible = false;
      },

      onAdd() {



          this.person.application.choosenWizards = [];
          this.isModalVisible = true;

          // AXIOS.get(`/profile/conditionsDto`)
          //   .then(response => {
          //     console.log(response.data)
          //     this.apls = response.data;
          //
          //     console.log(this.profiles)
          //   })
          //   .catch(e => {
          //     this.errors.push(e)
          //   })


      },
      openModalAgreemnt(item) {
        this.isModalAgreementVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      closeModalAgreemnt() {
        this.isModalAgreementVisible = false;
      },

      deleteItem(item){
          const index = this.application.choosenWizards.indexOf(item);
          console.log(index);
          this.application.choosenWizards.splice(index,1);

      },
      updateCurrentField(payload, objName) {
        let value = payload.target.value;
        this.$store.commit('person/updateCurrentField', {value, objName})
      },


      onNext() {
        console.log(this.application.application_selectedDeliveryType);
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
  .add_button {
    display: flex;
    justify-content: flex-end;
  }
  .clear_save_button {
    /*margin-top: 10%;*/
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
  }

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
  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
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
  label.row {
    margin-bottom: 3px;
  }

  .alarm_label {
    /*text-align: left;*/
    color: red;
  }
</style>
