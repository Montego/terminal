<template>
  <div class="inner_tab">
    <div class="row">

      <div class="info_address col-sm">
        <div>
          <p>Адрес регистрации</p>
        </div>
        <hr>
        <div class="buttons row">
          <button @click="show=0 , copy=-1" class="adress_button">Ввести адрес</button>
        </div>
        <label class="row">
          <div class="form__label-text col-sm-2">Адрес:</div>
          <!--&#45;&#45;ыv-ыmodel="tab_address_registrationAddress"-->
          <!--<textarea class="uneditable col-sm-10" name=""-->
          <!--&gt; </textarea>-->

          <div class="uneditable col-sm-10">{{ ADRText()[0] }}</div>
          <textarea :value="(ADRSearchObject[0])" class="uneditable col-sm-10" hidden></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm-3 ">Тип населенного пункта</div>
          <select v-model="person.person_info.fisSettlementTypeId" class="minimal col-sm-3 ">
            <option v-for="option in options_FIS">
              {{option.id}} | {{option.name}}
            </option>
          </select>
        </label>

        <!--<div class="col-sm-5">-->
        <!--<input v-model="person.person_info.fisSettlementTypeId" class="form__input col-sm" type="text"/>-->
        <!--</div>-->
      </div>
      <div class="info_address2 col-sm">
        <div>
          <p>Адрес фактический</p>
        </div>
        <hr>
        <div class="buttons row">
          <button class="adress_button" @click="fillAddress()">Ввести адрес</button>
          <!--<button class="adress_button" @click="onCopyAddress">Копировать</button>-->
          <button class="adress_button" @click="copyAddress()">Копировать</button>
        </div>

        <label v-if="copy !== 1" class="row">
          <!--<div  class="uneditable col-sm-10">{{ ADRText()[1] }}</div>-->
          <!--<textarea :value="(ADRSearchObject[1].name)" class="uneditable col-sm-10" hidden></textarea>-->
            <div class="form__label-text col-sm-2">Адрес:</div>
            <div class="uneditable col-sm-10">{{ ADRText()[1] }}</div>
            <textarea :value="(ADRSearchObject[1])" class="uneditable col-sm-10" hidden></textarea>
        </label>
        <label v-else class="row">
            <div class="form__label-text col-sm-2">Адрес:</div>
            <div class="uneditable col-sm-10">{{ ADRText()[0] }}</div>
            <textarea :value="(ADRSearchObject[0])" class="uneditable col-sm-10" hidden></textarea>
        </label>


      </div>

      <div class="info_address3 col-sm">
        <div>
          <p>Адрес временной регистрации</p>
        </div>
        <hr>
        <div class="buttons row">
          <button class="adress_button" @click="show=2">Ввести адрес</button>
          <!--<button class="adress_button" @click="onCopyAddress">Копировать</button>-->
        </div>
        <label class="row">
          <div class="form__label-text col-sm-2">Адрес:</div>
          <!--<textarea v-model="tab_address_factAddress" class="uneditable col-sm-10"></textarea>-->
          <div class="uneditable col-sm-10">{{ ADRText()[2] }}</div>
          <textarea :value="(ADRSearchObject[2])" class="uneditable col-sm-10" hidden></textarea>
        </label>
      </div>

    </div>
    <div class="row">
      <div class="col">
        <v-btn v-if="show>=0" @click="show=-1">
          Скрыть
        </v-btn>
      </div>
    </div>
    <div class="row">
      <div v-for="i in [0,1,2]" :key="i" v-if="show===i" class="col-5 offset-3">
        <addresser :adrType="i"></addresser>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'

  import {createHelpers} from 'vuex-map-fields';
  import addresser from "../../addresser/addresser";

  const {mapFields: person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  const {mapFields: tab_address_info} = createHelpers({
    getterType: `tab_address_info/getField`,
    mutationType: `tab_address_info/updateField`,
  });

  export default {
    name: "TabAddressInfo",
    data() {
      return {
        checkedAddress: [],
        factAddress: '',
        show: -1,
        copy: -1,

        options_FIS: [
          {id: 1, name: 'Город федерального значения'},
          {id: 2, name: 'Город'},
          {id: 3, name: 'Населенный пункт городского типа'},
          {id: 3, name: 'Населенный пункт сельского типа'},
        ],
      }
    },
    methods: {
      ...mapGetters(['ADRText']),
      // ...mapGetters(['ADRDTO']),
      updateCurrentField(payload, objName) {
        let value = payload.target.value;
        this.$store.commit('addressDto/updateCurrentField', {value, objName})
      },

      copyAddress(){
        this.copy = 1;
        this.ADRDTO[1].addressType = {"id": "1", "name": "Адрес фактический"};
        this.ADRDTO[1].lineNum = 1;

        this.ADRDTO[1].addressAdmObject = this.ADRDTO[0].addressAdmObject;
        this.ADRDTO[1].addressSearchObj = this.ADRDTO[0].addressSearchObj;
        this.ADRDTO[1].addressSearchText = this.ADRDTO[0].addressSearchText;
        this.ADRDTO[1].addressTxt = this.ADRDTO[0].addressTxt;
        this.ADRDTO[1].addressTxtRandom = this.ADRDTO[0].addressTxtRandom;
        this.ADRDTO[1].aolevel1 = this.ADRDTO[0].aolevel1;
        this.ADRDTO[1].aolevel2 = this.ADRDTO[0].aolevel2;
        this.ADRDTO[1].aolevel3 = this.ADRDTO[0].aolevel3;
        this.ADRDTO[1].aolevel4 = this.ADRDTO[0].aolevel4;
        this.ADRDTO[1].aolevel5 = this.ADRDTO[0].aolevel5;
        this.ADRDTO[1].aolevel6 = this.ADRDTO[0].aolevel6;
        this.ADRDTO[1].aolevel7 = this.ADRDTO[0].aolevel7;
        this.ADRDTO[1].aolevel65 = this.ADRDTO[0].aolevel65;
        this.ADRDTO[1].aolevel90 = this.ADRDTO[0].aolevel90;
        this.ADRDTO[1].aolevel91 = this.ADRDTO[0].aolevel91;
        this.ADRDTO[1].countryRegion = this.ADRDTO[0].countryRegion;
        this.ADRDTO[1].flat = this.ADRDTO[0].flat;
        this.ADRDTO[1].house = this.ADRDTO[0].house;
        this.ADRDTO[1].postalCode = this.ADRDTO[0].postalCode;

        if(this.ADRSearchObject[1].hasOwnProperty(name) && this.ADRSearchObject[0].hasOwnProperty(name)){
          this.ADRSearchObject[1].name = this.ADRSearchObject[0].name;
          this.ADRSearchObject[1].name = this.ADRSearchObject[0].name;
        }

        this.ADRText()[1] = this.ADRText()[0];

        console.log(this.ADRDTO);
      },
      fillAddress(){
        this.copy = -1;
        this.show=1;
      }
    },
    computed: {
      ...person(['person',]),
      ...mapGetters(['ADRSearchObject']),
      ...mapGetters(['ADRDTO']),
      ...mapState('addressDto', {addressDto: state => state.fullAdrText,}),

    },
    components: {addresser}
  }
</script>

<style scoped>
  select.minimal {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px,
    5px 5px,
    1px 1.5em;
    background-repeat: no-repeat;
  }

  select.minimal:focus {
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, green 50%),
    linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px,
    5px 5px,
    1px 1.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
  }

  input.checkbox {
    height: 15px;
    transform: scale(1.3);
    opacity: 0.9;
    cursor: pointer;
  }

  .uneditable {
    background-color: #F5F5F5;
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
