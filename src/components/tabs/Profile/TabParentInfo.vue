<template>
  <div>
    <tabs class="parent_tabs">
      <tab id="parent_overview" name="Обзор">
        <div class="row">
          <button @click="onInfo">Добавить</button>
        </div>
        <v-data-table
          :headers="headers_parent"
          :items="table_show"
          hide-actions
          class="elevation-1 text-xs-center"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.tab_parent_selectedFamRelationShip.name}}</td>
            <!--<td class="text-xs-center">{{ props.item.snp_parent}}</td>-->
            <td class="text-xs-center">{{ props.item.tab_parent_lastname}}</td>
            <td class="text-xs-center">{{ props.item.tab_parent_firstname }}</td>
            <td class="text-xs-center">{{ props.item.tab_parent_middlename}}</td>
            <td class="text-xs-center">{{ props.item.tab_parent_selectedGender.name}}</td>
            <td class="text-xs-center">
              <button @click="onEdit(props.item)">
                <v-icon color="#5bc0de">edit</v-icon>
              </button>{{ props.item.actions}}
              <button @click="onDelete(props.item)">
                <v-icon color="red">delete</v-icon>
              </button>{{ props.item.actions}}
            </td>
          </template>
          <template slot="no-data">
            <div></div>
          </template>
        </v-data-table>
      </tab>
      <tab id="parent_info" name="Личные данные попечителя">
        <div class="inner_tab row">
          <div class="col-sm-4">
            <div>
              <p>Личные данные родителя/попечителя</p>
            </div>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">Ф.И.О.</div>
              <input v-model="fullname" class="uneditable form__input col-sm" type="text" name="" placeholder="Заполняется автоматически"
                     disabled="disabled"/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Кем приходится:</div>
              <select v-model="tab_parent_selectedFamRelationShip" class="minimal col-sm">
                <option v-for="item in famRelationShip" v-bind:value="item">
                  {{item.name}}
                </option>
              </select>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Фамилия:</div>
              <input data-vv-as="фамилия" v-validate="'alpha_spaces'" v-model="tab_parent_lastname" class="form__input col-sm" type="text" name="tab_parent_lastname" placeholder="" required/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Имя:</div>
              <input data-vv-as="имя" v-validate="'alpha_spaces'" v-model="tab_parent_firstname" class="form__input col-sm" type="text" name="tab_parent_firstname" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Отчество:</div>
              <input data-vv-as="отчество" v-validate="'alpha_spaces'" v-model="tab_parent_middlename" class="form__input col-sm" type="text" name="tab_parent_middlename" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Пол:</div>
              <select v-model="tab_parent_selectedGender" class="minimal col-sm">
                <option v-for="item in gender" v-bind:value="item">
                  {{item.name}}
                </option>
              </select>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Дата рождения:</div>
              <input v-model="tab_parent_birthDate" class="form__input col-sm" type="date" min="1918-01-01" max="2100-01-01"/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Полных лет</div>
              <input v-model="fullage" class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически"
                     disabled="disabled"/>
            </label>
            <div>
              <p>Трудовой стаж</p>
            </div>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">Организация:</div>
              <input v-model="tab_parent_organization_name" class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Адрес:</div>
              <textarea v-model="tab_parent_organization_address" class="col-sm" name=""></textarea>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Профессия:</div>
              <input v-model="tab_parent_organization_seniority" class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Трудовой стаж, лет:</div>
              <input v-model="tab_parent_organization_employYears" class="form__input col-sm" type="text" v-mask="'##'"/>
            </label>
          </div>
          <div class="col-sm">
            <div>
              <p>Контактный телефон</p>
            </div>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">Домашний телефон:</div>
              <input v-validate data-vv-as="домашний телефон" v-model="tab_parent_homePhoneNumber" class="form__input col-sm" type="text" name="tab_parent_homePhoneNumber" placeholder="(XXX)XXX-XX-XX" v-mask="'(###)###-##-##'" />
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Мобильный телефон:</div>
              <input v-validate data-vv-as="мобильный телефон" v-model="tab_parent_cellularPhone" class="form__input col-sm" type="text" name="tab_parent_cellularPhone" v-mask="'+#-###-###-##-##'" required />
            </label>

            <div>
              <p>Адрес фактический</p>
            </div>
            <hr>
            <div class="row">
              <label class="col-sm"></label>
              <div class="row">
                <button @click="fillAddress()">Ввести адрес</button>
                <button @click="onCopyAddressFromStudent">Копировать из студента</button>
              </div>

            </div>
            <label class="row">
              <label v-if="copy !== 1" class="row">
                <div class="form__label-text col-sm-2">Адрес:</div>
                <div class="uneditable col-sm-10">{{ ADRText()[countOfAddParent] }}</div>
                <textarea :value="(ADRSearchObject[1])" class="uneditable col-sm-10" hidden></textarea>
              </label>
              <label v-else class="row">
                <div class="form__label-text col-sm-2">Адрес:</div>
                <div class="uneditable col-sm-10">{{ ADRText()[0] }}</div>
                <textarea :value="(ADRSearchObject[0])" class="uneditable col-sm-10" hidden></textarea>
              </label>

            </label>
            <div class="col">
              <v-btn v-if="show>=0" @click="show=-1">
                Скрыть
              </v-btn>
            </div>
            <div class="row">
              <div v-if="show === countOfAddParent" class="col-5 offset-3">
                <addresser :adrType="countOfAddParent"></addresser>
              </div>
            </div>

            <div class="clear_save_button row">
              <button @click="onClearFields">Очистить</button>
              <button @click="onAddParent">Добавить</button>
            </div>
          </div>
        </div>
      </tab>

    </tabs>
  </div>
</template>

<script>
  import {mapGetters, mapState, mapMutations} from 'vuex'
  import { createHelpers } from 'vuex-map-fields';
  import addresser from "../../addresser/addresser";
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  const { mapMultiRowFields } = createHelpers({
    getterType: `tab_parent_info/getField`,
    mutationType: `tab_parent_info/updateField`,
  });
  const { mapFields: tab_parent_info } = createHelpers({
    getterType: `tab_parent_info/getField`,
    mutationType: `tab_parent_info/updateField`,
  });

  export default {
    name: "TabParentInfo",
    components: {addresser},
    data() {
      return {
        show: -1,
        copy: -1,
        editedIndex: -1,
        editedItem:{},
        headers_parent: [
          {text: 'Кем приходится', value: 'tab_parent_selectedFamRelationShip', sortable: false, align: 'center'},
          // {text: 'Ф.И.О.', value: 'snp_parent', sortable: false, align: 'center'},
          {text: 'Фамилия', value: 'tab_parent_lastname', sortable: false, align: 'center'},
          {text: 'Имя', value: 'tab_parent_firstname', sortable: false, align: 'center'},
          {text: 'Отчество', value: 'tab_parent_middlename', sortable: false, align: 'center'},
          {text: 'Пол', value: 'tab_parent_selectedGender', sortable: false, align: 'center'},
          {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
        ],
        info_parent: [],
      }
    },
    mounted () {
      this.$store.dispatch('enums/onLoadGender');
      this.$store.dispatch('dictionary/onLoadFamRelationShip');
    },
    computed: {
      table_show() {
        return this.person.parents_info;
      },

      fullname: function () {
        return this.tab_parent_name = this.tab_parent_lastname + ' ' + this.tab_parent_firstname + ' ' + this.tab_parent_middlename
      },
      fullage: function () {
        var today = new Date();
        var birth = new Date(this.tab_parent_birthDate);
        var age = today.getFullYear() - birth.getFullYear();
        var m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
          age--;
        }
        return (isNaN(age)) ? '' : age;
      },
      ...person(['person','tab_address_factAddress']),
      ...mapState('enums', ['gender'],),
      ...mapGetters('enums', ['GET_GENDER']),
      ...mapState('dictionary', ['famRelationShip'],),
      ...mapGetters('dictionary', ['GET_famRelationShip']),
      ...mapMultiRowFields(['tab_parent_parents']),
      ...tab_parent_info(['tab_parent_name', 'tab_parent_lastname', 'tab_parent_firstname', 'tab_parent_middlename',
        'tab_parent_birthDate', 'tab_parent_seniority', 'tab_parent_homePhoneNumber', 'tab_parent_cellularPhone',
        'tab_parent_factAddress', 'tab_parent_selectedFamRelationShip', 'tab_parent_selectedGender',
        'tab_parent_organization_name','tab_parent_organization_address',
        'tab_parent_organization_seniority','tab_parent_organization_employYears',
      ]),
      ...mapGetters(['ADRSearchObject']),
      ...mapState('addressDto', {addressDto: state => state.fullAdrText,}),
      ...mapGetters(['ADRDTO']),
      ...mapGetters(['countOfAddParent']),
    },
    methods: {
      ...mapGetters(['ADRText']),
      ...mapMutations([
        'increment',
        'decrement'
      ]),

      updateCurrentField(payload, objName) {
        let value = payload.target.value;
        this.$store.commit('addressDto/updateCurrentField', {value, objName})
      },
      fillAddress(){
        this.show = this.countOfAddParent;
        this.copy = -1;
        this.$store.dispatch('loadEmptyAdrParentDTO');
      },

      onDelete(item) {
        const index = this.person.parents_info.indexOf(item);
        console.log(index);
        this.person.parents_info.splice(index,1);
        //TODO надо ли
        this.decrement();
      },
      onEdit(item) {
        this.editedIndex = this.person.parents_info.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.$store.dispatch('loadEmptyAdrParentDTO');
        this.increment();

        const index = this.person.parents_info.indexOf(item);

        location.href='profile#parent_info';
        this.tab_parent_name = this.person.parents_info[index].tab_parent_name;
        this.tab_parent_lastname = this.person.parents_info[index].tab_parent_lastname;
        this.tab_parent_firstname = this.person.parents_info[index].tab_parent_firstname;
        this.tab_parent_middlename = this.person.parents_info[index].tab_parent_middlename;
        this.tab_parent_birthDate = this.person.parents_info[index].tab_parent_birthDate;
        this.tab_parent_homePhoneNumber = this.person.parents_info[index].tab_parent_homePhoneNumber;
        this.tab_parent_cellularPhone = this.person.parents_info[index].tab_parent_cellularPhone;
        //TODO доделать адреса
        this.ADRDTO[this.countOfAddParent].addressAdmObject = this.person.parents_info[index].addressDto.addressAdmObject;
        this.ADRDTO[this.countOfAddParent].addressSearchObj = this.person.parents_info[index].addressDto.addressSearchObj;
        this.ADRDTO[this.countOfAddParent].addressSearchText = this.person.parents_info[index].addressDto.addressSearchText;
        this.ADRDTO[this.countOfAddParent].addressTxt = this.person.parents_info[index].addressDto.addressTxt;
        this.ADRDTO[this.countOfAddParent].addressTxtRandom = this.person.parents_info[index].addressDto.addressTxtRandom;
        this.ADRDTO[this.countOfAddParent].aolevel1 = this.person.parents_info[index].addressDto.aolevel1;
        this.ADRDTO[this.countOfAddParent].aolevel2 = this.person.parents_info[index].addressDto.aolevel2;
        this.ADRDTO[this.countOfAddParent].aolevel3 = this.person.parents_info[index].addressDto.aolevel3;
        this.ADRDTO[this.countOfAddParent].aolevel4 = this.person.parents_info[index].addressDto.aolevel4;
        this.ADRDTO[this.countOfAddParent].aolevel5 = this.person.parents_info[index].addressDto.aolevel5;
        this.ADRDTO[this.countOfAddParent].aolevel6 = this.person.parents_info[index].addressDto.aolevel6;
        this.ADRDTO[this.countOfAddParent].aolevel7 = this.person.parents_info[index].addressDto.aolevel7;
        this.ADRDTO[this.countOfAddParent].aolevel65 = this.person.parents_info[index].addressDto.aolevel65;
        this.ADRDTO[this.countOfAddParent].aolevel90 = this.person.parents_info[index].addressDto.aolevel90;
        this.ADRDTO[this.countOfAddParent].aolevel91 = this.person.parents_info[index].addressDto.aolevel91;
        this.ADRDTO[this.countOfAddParent].countryRegion = this.person.parents_info[index].addressDto.countryRegion;
        this.ADRDTO[this.countOfAddParent].flat = this.person.parents_info[index].addressDto.flat;
        this.ADRDTO[this.countOfAddParent].house = this.person.parents_info[index].addressDto.house;
        this.ADRDTO[this.countOfAddParent].postalCode = this.person.parents_info[index].addressDto.postalCode;

        if(this.ADRSearchObject[this.countOfAddParent].hasOwnProperty(name) && this.ADRSearchObject[0].hasOwnProperty(name)){
          this.ADRSearchObject[this.countOfAddParent].name = this.person.parents_info[index].addressDto.addressSearchObj.name;
        }

        this.ADRText()[this.countOfAddParent] = this.person.parents_info[index].addressDto.addressTxt;

        this.tab_parent_factAddress = this.person.parents_info[index].tab_parent_factAddress;
        this.tab_parent_selectedFamRelationShip = this.person.parents_info[index].tab_parent_selectedFamRelationShip;
        this.tab_parent_selectedGender = this.person.parents_info[index].tab_parent_selectedGender;
        this.tab_parent_organization_name = this.person.parents_info[index].tab_parent_organization_name;
        this.tab_parent_organization_address = this.person.parents_info[index].tab_parent_organization_address;
        this.tab_parent_organization_seniority = this.person.parents_info[index].tab_parent_organization_seniority;
        this.tab_parent_organization_employYears = this.person.parents_info[index].tab_parent_organization_employYears;
      },
      onInfo() {
        this.editedIndex = -1;
        this.editedItem = {};
        this.tab_parent_name = '';
        this.tab_parent_lastname = '';
        this.tab_parent_firstname = '';
        this.tab_parent_middlename = '';
        this.tab_parent_birthDate = '';
        this.tab_parent_homePhoneNumber = '';
        this.tab_parent_cellularPhone = '';
        this.tab_parent_factAddress = '';
        this.tab_parent_selectedFamRelationShip = '';
        this.tab_parent_selectedGender = {"id":1,"name":"Неизвестно"};
        this.tab_parent_organization_name = '';
        this.tab_parent_organization_address = '';
        this.tab_parent_organization_seniority = '';
        this.tab_parent_organization_employYears = '';

        this.$store.dispatch('loadEmptyAdrParentDTO');
        location.href='profile#parent_info';
      },
      onCopyAddressFromStudent() {
        this.copy = 1;

        this.ADRDTO[this.countOfAddParent].addressAdmObject = this.ADRDTO[0].addressAdmObject;
        this.ADRDTO[this.countOfAddParent].addressSearchObj = this.ADRDTO[0].addressSearchObj;
        this.ADRDTO[this.countOfAddParent].addressSearchText = this.ADRDTO[0].addressSearchText;
        this.ADRDTO[this.countOfAddParent].addressTxt = this.ADRDTO[0].addressTxt;
        this.ADRDTO[this.countOfAddParent].addressTxtRandom = this.ADRDTO[0].addressTxtRandom;
        this.ADRDTO[this.countOfAddParent].aolevel1 = this.ADRDTO[0].aolevel1;
        this.ADRDTO[this.countOfAddParent].aolevel2 = this.ADRDTO[0].aolevel2;
        this.ADRDTO[this.countOfAddParent].aolevel3 = this.ADRDTO[0].aolevel3;
        this.ADRDTO[this.countOfAddParent].aolevel4 = this.ADRDTO[0].aolevel4;
        this.ADRDTO[this.countOfAddParent].aolevel5 = this.ADRDTO[0].aolevel5;
        this.ADRDTO[this.countOfAddParent].aolevel6 = this.ADRDTO[0].aolevel6;
        this.ADRDTO[this.countOfAddParent].aolevel7 = this.ADRDTO[0].aolevel7;
        this.ADRDTO[this.countOfAddParent].aolevel65 = this.ADRDTO[0].aolevel65;
        this.ADRDTO[this.countOfAddParent].aolevel90 = this.ADRDTO[0].aolevel90;
        this.ADRDTO[this.countOfAddParent].aolevel91 = this.ADRDTO[0].aolevel91;
        this.ADRDTO[this.countOfAddParent].countryRegion = this.ADRDTO[0].countryRegion;
        this.ADRDTO[this.countOfAddParent].flat = this.ADRDTO[0].flat;
        this.ADRDTO[this.countOfAddParent].house = this.ADRDTO[0].house;
        this.ADRDTO[this.countOfAddParent].postalCode = this.ADRDTO[0].postalCode;

        if(this.ADRSearchObject[this.countOfAddParent].hasOwnProperty(name) && this.ADRSearchObject[0].hasOwnProperty(name)){
          this.ADRSearchObject[this.countOfAddParent].name = this.ADRSearchObject[0].name;
        }

        this.ADRText()[this.countOfAddParent] = this.ADRText()[0];

      },
      onClearFields() {
          this.tab_parent_name = '';
          this.tab_parent_lastname = '';
          this.tab_parent_firstname = '';
          this.tab_parent_middlename = '';
          this.tab_parent_birthDate = '';
          this.tab_parent_homePhoneNumber = '';
          this.tab_parent_cellularPhone = '';
          this.tab_parent_factAddress = '';
          this.tab_parent_selectedFamRelationShip = '';
          this.tab_parent_selectedGender = '';
          this.tab_parent_organization_name = '';
          this.tab_parent_organization_address = '';
          this.tab_parent_organization_seniority = '';
          this.tab_parent_organization_employYears = '';
      },

      onAddParent() {
        if (this.editedIndex > -1) {
          console.log('its redaction ')

          this.editedItem.tab_parent_name = this.tab_parent_name;
          this.editedItem.tab_parent_lastname = this.tab_parent_lastname;
          this.editedItem.tab_parent_firstname = this.tab_parent_firstname;
          this.editedItem.tab_parent_middlename = this.tab_parent_middlename;
          this.editedItem.tab_parent_birthDate = this.tab_parent_birthDate;
          this.editedItem.tab_parent_homePhoneNumber = this.tab_parent_homePhoneNumber;
          this.editedItem.tab_parent_cellularPhone = this.tab_parent_cellularPhone;
          this.editedItem.tab_parent_factAddress = this.tab_parent_factAddress;
          this.editedItem.tab_parent_selectedFamRelationShip = this.tab_parent_selectedFamRelationShip;
          this.editedItem.tab_parent_selectedGender = this.tab_parent_selectedGender;
          this.editedItem.tab_parent_organization_name = this.tab_parent_organization_name;
          this.editedItem.tab_parent_organization_address = this.tab_parent_organization_address;
          this.editedItem.tab_parent_organization_seniority = this.tab_parent_organization_seniority;
          this.editedItem.tab_parent_organization_employYears = this.tab_parent_organization_employYears;

          Object.assign(this.person.parents_info[this.editedIndex], this.editedItem);

          location.href='profile#parent_overview';
        }else {
          function Parent(parent_name, parent_lastname, parent_firstname, tab_parent_middlename,
                          parent_birthDate, parent_homePhoneNumber, parent_cellularPhone,
                          parent_factAddress, parent_selectedFamRelationShip, parent_selectedGender,
                          parent_organization_name, parent_organization_adress, parent_organization_seniority,
                          parent_organization_employYears) {
            // parent_name = this.tab_parent_name;
            this.tab_parent_name = parent_name;
            this.tab_parent_lastname = parent_lastname;
            this.tab_parent_firstname = parent_firstname;
            this.tab_parent_middlename = tab_parent_middlename;
            this.tab_parent_birthDate = parent_birthDate;
            this.tab_parent_homePhoneNumber = parent_homePhoneNumber;
            this.tab_parent_cellularPhone = parent_cellularPhone;
            this.addressDto = parent_factAddress;
            this.tab_parent_selectedFamRelationShip = parent_selectedFamRelationShip;
            this.tab_parent_selectedGender = parent_selectedGender;
            this.tab_parent_organization_name = parent_organization_name;
            this.tab_parent_organization_address = parent_organization_adress;
            this.tab_parent_organization_seniority = parent_organization_seniority;
            this.tab_parent_organization_employYears = parent_organization_employYears;

          }

          let parent = new Parent(
            this.tab_parent_name, this.tab_parent_lastname, this.tab_parent_firstname,
            this.tab_parent_middlename, this.tab_parent_birthDate, this.tab_parent_homePhoneNumber,
            this.tab_parent_cellularPhone,
            // this.tab_parent_factAddress,
            this.ADRDTO[this.countOfAddParent],
            this.tab_parent_selectedFamRelationShip,
            this.tab_parent_selectedGender, this.tab_parent_organization_name, this.tab_parent_organization_address,
            this.tab_parent_organization_seniority, this.tab_parent_organization_employYears
          );
          this.increment();
          // this.countOfAddParent++;
          location.href = 'profile#parent_overview';
          this.person.parents_info.push(parent);
          console.log(this.person.parents_info)
        }
      },
    }

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


  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid grey;
    /*border: 4px;*/
  }

  select {
    height: 25px;
    border-radius: 3px;
    border: 1px solid grey;
  }

  textarea {
    border-radius: 3px;
    border: 1px solid grey;
    width: 90%; /* Ширина поля в процентах */
    height: 100px; /* Высота поля в пикселах */
    resize: none; /* Запрещаем изменять размер */
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

  .clear_save_button {
    margin-top: 10%;
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
  }

  .parent_tabs {
    margin-top: -35px;
    margin-bottom: -10px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
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
