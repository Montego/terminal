<template>
  <div>
    <form class="inner_tab row">
      <div class="info_main col-sm">
        <div>
          <p>Личные сведения</p>
        </div>
        <hr>
        <div>
          <label class="row computed-auto">
            <div class=" form__label-text col-sm-4">Ф.И.О</div>
            <input :value="(tab_personal_lastname + ' ' + tab_personal_firstname+ ' '+ tab_personal_middlename).trim()"
                   class="uneditable form__input col-sm-8" type="text" name="name"
                   placeholder="Заполняется автоматически" disabled="disabled"/>
          </label>

          <label :class="{ row : true , error1 : $v.tab_personal_lastname.$invalid}">
            <span class="form__label-text col-sm">Фамилия</span>
            <input v-model="tab_personal_lastname" value="" class="form__input col-sm" type="text" name="lastname"/>
          </label>

          <label :class="{ row : true , error1 : $v.tab_personal_firstname.$invalid}">
            <span class="form__label-text col-sm">Имя</span>
            <input v-model="tab_personal_firstname" class="form__input col-sm" type="text" name="firstname"/>
          </label>
          <label class="row">
            <span class="form__label-text col-sm">Отчество</span>
            <input data-vv-as="отчество" v-validate="'alpha_spaces'" v-model="tab_personal_middlename"
                   class="form__input col-sm" type="text" name="middlename"/>
          </label>
          <!--<span class="alarm_label">{{ errors.first('middlename') }}</span>-->
          <hr>
          <label :class="{ row : true , error1 : $v.tab_personal_lastname_genitive.$invalid}">
            <span class="form__label-text col-sm">Фамилия в род.п.</span>
            <input v-model="tab_personal_lastname_genitive" class="form__input col-sm" type="text"
                   name="lastname_genitive"/>
          </label>
          <!--<span class="alarm_label">{{ errors.first('lastname_genitive') }}</span>-->
          <label :class="{ row : true , error1 : $v.tab_personal_firstname_genitive.$invalid}">
            <span class="form__label-text col-sm">Имя в род.п.</span>
            <input v-model="tab_personal_firstname_genitive" class="form__input col-sm" type="text"
                   name="firstname_genitive"/>
          </label>
          <!--<span class="alarm_label">{{ errors.first('firstname_genitive') }}</span>-->
          <!--<label :class=" { row : true,   error1 : $v.tab_personal_middlename_genitive.$invalid } "> &lt;!&ndash;  &ndash;&gt;-->
          <label :class="{ row : true , error1 : $v.tab_personal_middlename_genitive.$invalid}">
            <span class="form__label-text col">Отчество в род.п.</span>
            <input class="form__input col" v-model="tab_personal_middlename_genitive" type="text"
                   name="middlename_genitive"/>
          </label>
          <!--<span class="alarm_label">{{ $v.tab_personal_middlename_genitive.$invalid }} {{ this.tab_personal_middlename.length > 0 }} </span>-->
          <label class="row computed-auto">
            <span class="form__label-text col-sm-4">Ф.И.О.(род. п.)</span>
            <input
              :value="(tab_personal_lastname_genitive + ' ' + tab_personal_firstname_genitive+ ' '+ tab_personal_middlename_genitive).trim()"
              class="uneditable form__input col-sm-8" type="text" name="snp_genitive"
              placeholder="Заполняется автоматически" disabled="disabled"/>
          </label>
          <!--<span class="alarm_label">{{ errors.first('middlename_genitive') }}</span>-->


          <label :class="{ row : true , error1 : $v.tab_personal_selectedGender.$invalid}">
            <span class="form__label-text col-sm">Пол:</span>

            <select v-model="tab_personal_selectedGender" class="minimal col-sm">
              <option v-for="item in gender" v-bind:value="item">
                {{item.name}}
              </option>
            </select>
          </label>
          <!--<span class="alarm_label">{{ $v.tab_personal_selectedGender }}</span>-->


          <label :class="{ row : true , error1 : $v.tab_personal_birthDate.$invalid}">
            <span class="form__label-text col-sm">Дата рождения:</span>
            <input v-validate data-vv-as="дата рождения" v-model="tab_personal_birthDate" class="form__input col-sm"
                   type="date" name="birthday" min="1918-01-01" max="2100-01-01"/>
          </label>
          <span class="alarm_label">{{ errors.first('birthday') }}</span>

          <label class="row computed-auto">
            <span class="form__label-text col-sm">Полных лет:</span>
            <input v-model="fullage" class="uneditable form__input col-sm" type="text" name="age"
                   placeholder="Заполняется автоматически" disabled="disabled"/>
          </label>

          <label :class="{ row : true , error1 : $v.tab_personal_INIPA.$invalid}">
            <span class="form__label-text col-sm">СНИЛС</span>
            <input v-model="tab_personal_INIPA" class="form__input col-sm" type="text" name="snils"
                   placeholder="***-***-*** **" v-mask="'###-###-### ##'"/>
          </label>
          <!--<span class="alarm_label">{{ errors.first('snils') }}</span>-->
          <label :class="{ row : true , error1 : $v.tab_personal_INIPADate.$invalid}">
            <span class="form__label-text col-sm">СНИЛС Дата:</span>
            <input v-model="tab_personal_INIPADate" class="form__input col-sm" type="date" name="snils_date"
                   min="1918-01-01" max="2100-01-01"/>
          </label>

          <span class="alarm_label">{{ errors.first('snils_date') }}</span>
          <label class="row">
            <div class="form__label-text col-sm">Примечание:</div>
            <textarea v-model="tab_personal_note" class="col-sm" name="note"></textarea>
          </label>

        </div>
      </div>
      <div class="info_pasp col-sm">
        <div>
          <p>Паспортные данные</p>
        </div>
        <hr>
        <div>
          <label class="row">
            <div class="form__label-text col-sm">Код документа:</div>

            <select v-model="tab_personal_selectedIdentityCardCode" class="minimal col-sm">
              <option v-for="item in identityCardCode" v-bind:value="item">
                {{item.identityCardCode}}
              </option>
            </select>
          </label>
          <label :class="{ row : true , error1 : $v.tab_personal_identityCardSeries.$invalid}">
            <span class="form__label-text col-sm">Серия:</span>
            <the-mask v-model="tab_personal_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial"
                      :mask="docSerialParams.mask" :placeholder="docSerialParams.placeholder" :masked="false"
                      :tokens="customTokens"
                      value=""
            />
          </label>

          <label :class="{ row : true , error1 : $v.tab_personal_identityCardNumber.$invalid}">
            <span class="form__label-text col-sm">Номер:</span>
            <input v-model="tab_personal_identityCardNumber" class="form__input col-sm" type="text" name="doc_number"
                   v-mask="docNumberParams['mask']" :placeholder="docNumberParams.placeholder"/>
          </label>
          <span class="alarm_label">{{ errors.first('doc_number') }}</span>


          <label :class="{ row : true , error1 : $v.tab_personal_identityCardIssueBy.$invalid}">
            <span class="form__label-text col-sm">Кем выдан:</span>
            <textarea v-model="tab_personal_identityCardIssueBy" class="col-sm" name="doc_issued_by"></textarea>
          </label>
          <label :class="{ row : true , error1 : $v.tab_personal_identityCardIssueDate.$invalid}">
            <span class="form__label-text col-sm">Дата выдачи:</span>
            <input v-model="tab_personal_identityCardIssueDate" class="form__input col-sm" type="date"
                   name="doc_issued_date" min="1918-01-01" max="2100-01-01"/>
          </label>
          <label :class="{ row : true , error1 : $v.tab_personal_identityCardIssueDep.$invalid}">
            <span class="form__label-text col-sm">Код подразделения:</span>
            <input v-model="tab_personal_identityCardIssueDep" class="form__input col-sm" type="text"
                   name="doc_code_unit" placeholder="***-***" v-mask="'###-###'"
                   required/>
          </label>
          <span class="alarm_label">{{ errors.first('doc_code_unit') }}</span>
        </div>
        <label class="row">
          <span class="form__label-text col-sm">Гражданство:</span>
          <select v-model="tab_personal_selectedCitizenship" class="minimal col-sm" @change="isForeigner()">
            <option v-for="item in addressCountryRegion" v-bind:value="item">
              {{item.name}}
            </option>
          </select>
        </label>
        <label class="row">

          <div class="form__label-text col-sm">Соотечественник:</div>
          <input v-if="tab_personal_selectedCitizenship.countryRegionId === 'РФ' | isOneOfFourCountry  | (isOtherCountry==true && tab_personal_isForeignLikeRussian== true)" v-model="tab_personal_isCompatriot"
                 class="checkbox col-sm" type="checkbox" disabled>
          <input v-else v-model="tab_personal_isCompatriot" @change="isForeigner()" class="checkbox col-sm" type="checkbox">
        </label>
        <label class="alarm_label">(При наличии подтверждающих документов)</label>
        <label class="row">
          <div class="form__label-text col-sm">Приравнять к иностранцам:</div>
          <input v-if="tab_personal_selectedCitizenship.countryRegionId === 'РФ' | isOtherCountry" v-model="tab_personal_isEquatedForeign" class="checkbox col-sm" type="checkbox" disabled>
          <input v-else v-model="tab_personal_isEquatedForeign" @change="isForeigner()" class="checkbox col-sm" type="checkbox"
                 id="equate_foreign">
        </label>
        <label class="alarm_label">(Беларусь, Казахстан, Киргизия, Таджикистан)</label>

        <label :class="{ row : true , error1 : $v.tab_personal_birthplace.$invalid}">
        <!--<label>-->
          <span class="form__label-text col-sm">Место рождения:</span>
          <textarea v-model="tab_personal_birthplace" class="col-sm" name="birth_place"></textarea>
        </label>

        <label class="row">
          <div class="form__label-text col-sm">Общежитие:</div>
          <input v-model="tab_personal_isHostel" class="checkbox col-sm" type="checkbox" id="hostel">
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Иностранец, как гражданин РФ:</div>
          <input v-if="tab_personal_selectedCitizenship.countryRegionId ==='РФ'| isOneOfFourCountry | (isOtherCountry==true && tab_personal_isCompatriot== true)" v-model="tab_personal_isForeignLikeRussian"
                 class="checkbox col-sm" type="checkbox" id="foreign_like_russian" disabled>
          <input v-else v-model="tab_personal_isForeignLikeRussian" class="checkbox col-sm" type="checkbox" @change="isForeigner()">
        </label>
        <div class="alarm_label">(С видом на жительство и аттестатом РФ. По соглашению)</div>
      </div>

      <div class="info_contacts col-sm">
        <div>
          <p>Контактные данные</p>
        </div>
        <hr>
        <div>
          <label class="row">
            <div class="form__label-text col-sm">Домашний телефон:</div>
            <input v-validate data-vv-as="домашний телефон" v-model="tab_personal_homePhoneNumber"
                   class="form__input col-sm" type="text" name="home_phone_number" placeholder="(XXX)XXX-XX-XX"
                   v-mask="'(###)###-##-##'"/>
          </label>
          <span class="alarm_label">{{ errors.first('home_phone_number') }}</span>
          <label class="row">
            <div class="form__label-text col-sm">Мобильный телефон:</div>
            <input v-validate data-vv-as="мобильный телефон" v-model="tab_personal_cellularPhone"
                   class="form__input col-sm" type="text" name="mobile_number" v-mask="'+#-###-###-##-##'"/>
          </label>

          <span class="alarm_label">{{ errors.first('mobile_number') }}</span>

          <label :class="{ row : true , error1 : $v.tab_personal_email.$invalid}">
            <span class="form__label-text col-sm">Эл. почта:</span>
            <input v-model="tab_personal_email" class="form__input col-sm" v-validate="'required|email'" placeholder=""
                   name="email" type="email">
          </label>
          <!--<label class="alarm_label col-sm">{{ errors.first('email') }}</label>-->
          <hr>
          <div>
            <p>Сведения о работе</p>
          </div>
          <hr>
          <label class="row">
            <div class="form__label-text col-sm">Организация:</div>
            <input v-model="tab_personal_company_name" class="form__input col-sm" type="text" name="organization_name"/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm">Адрес:</div>
            <textarea v-model="tab_personal_company_address" class="col-sm" name="organization_address"></textarea>
          </label>
          <label class="row">
            <div class="form__label-text col-sm">Профессия:</div>
            <input v-model="tab_personal_seniority" class="form__input col-sm" type="text" placeholder=""/>
          </label>
          <label class="row computed-auto">
            <div class="form__label-text col-sm">Трудовой стаж:</div>
            <input :value="tab_personal_employYears + ',' + tab_personal_employMonths"
                   class="uneditable form__input col-sm" type="text" name="seniority"
                   placeholder="Заполняется автоматически" disabled="disabled"/>
          </label>
          <label class="row">
            <div class="form__label-text col-sm">Стаж, лет:</div>
            <input v-model="tab_personal_employYears" class="form__input col-sm" type="text" v-mask="'##'"
                   name="employYears" placeholder=""/>
          </label>
          <span class="alarm_label" v-if="tab_personal_employYears>100">Люди столько не живут</span>
          <label class="row">
            <div class="form__label-text col-sm">Стаж, месяцев:</div>
            <input v-model="tab_personal_employMonths" class="form__input col-sm" type="text" v-mask="'##'"
                   name="employMonths" placeholder=""/>
          </label>
          <span class="alarm_label"
                v-if="tab_personal_employMonths>11">Стаж, месяцев должен быть в диапазоне от 0 до 11</span>
          <label class="row">
            <div class="form__label-text col-sm">Стаж, дней:</div>
            <input v-model="tab_personal_employDays" class="form__input col-sm" type="text" v-mask="'##'"
                   name="seniority_day" placeholder=""/>
          </label>
          <span class="alarm_label"
                v-if="tab_personal_employDays>31">Стаж, дней должен быть в диапазоне от 0 до 31</span>
          <div>
            <p>Иностранные языки</p>
          </div>
          <hr>
          <label class="row">
            <div class="form__label-text col-sm">Отметка о языках:</div>
            <!--<select class="col-sm" name="foreign_language">-->
            <!--<option>Изучал</option>-->
            <!--<option>Не изучал</option>-->
            <!--</select>-->
            <select v-model="tab_personal_selectedForeignLanguageInfo" class="minimal col-sm">
              <option v-for="item in langInfo" v-bind:value="item">
                {{item.name}}
              </option>
            </select>
          </label>

          <div v-if="tab_personal_selectedForeignLanguageInfo.name ==='Изучал'">
            <div class="row">
              <select v-model="selected_foreignLanguageName1" class="minimal col-sm-6">
                <option v-for="item in language" v-bind:value="item">
                  {{item.languageId}}
                </option>
              </select>
              <the-mask :mask="['Y']"
                        v-model="language_score1"
                        :tokens="customTokens"
                        :masked="true"
                        class="form__input col-sm"
              ></the-mask>
              <!--<input v-model="language_score1" class="form__input col-sm" type="text" v-mask="'#'"/>-->


              <select v-model="selected_foreignLanguageName2" class="minimal col-sm-6">
                <option v-for="item in language" v-bind:value="item">
                  {{item.languageId}}
                </option>
              </select>
              <the-mask :mask="['Y']"
                        v-model="language_score2"
                        :tokens="customTokens"
                        :masked="true"
                        class="form__input col-sm"
              ></the-mask>
              <!--<input v-model="language_score2" class="form__input col-sm" type="text" v-mask="'#'"/>-->

              <select v-model="selected_foreignLanguageName3" class="minimal col-sm-6">
                <option v-for="item in language" v-bind:value="item">
                  {{item.languageId}}
                </option>
              </select>
              <the-mask :mask="['Y']"
                        v-model="language_score3"
                        :tokens="customTokens"
                        :masked="true"
                        class="form__input col-sm"
              ></the-mask>
              <!--<input v-model="language_score3" class="form__input col-sm" type="text" v-mask="'#'"/>-->
            </div>

          </div>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import {required} from "vuelidate/lib/validators";
  import {createHelpers} from 'vuex-map-fields';
  import {mask, TheMask} from 'vue-the-mask'

  const checkINIPA = function validateSnils(snils) {
    let result = false;
    if (typeof snils === 'number') {
      snils = snils.toString();
    } else if (typeof snils !== 'string') {
      snils = '';
    }
    snils = snils.replace(/[\s|-]/g, '');
    if (!snils.length) {
      // throw new Error('СНИЛС пуст');
      return false;
    } else if (/[^0-9]/.test(snils)) {
      return false;// throw new Error('СНИЛС может состоять только из цифр');
    } else if (snils.length !== 11) {
      return false;// throw new Error('СНИЛС может состоять только из 11 цифр');
    } else {
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(snils[i]) * (9 - i);
      }
      let checkDigit = 0;
      if (sum < 100) {
        checkDigit = sum;
      } else if (sum > 101) {
        checkDigit = parseInt(sum % 101);
        if (checkDigit === 100) {
          checkDigit = 0;
        }
      }
      if (checkDigit === parseInt(snils.slice(-2))) {
        result = true;
      } else {
        return false; // throw new Error('Неправильное контрольное число');
      }
    }
    return result;
  };

  const {mapFields: person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });

  export default {
    name: "TabPersonalInfo",
    components: {TheMask},
    beforeCreate() {
      this.$store.dispatch('enums/onLoadGender');
      this.$store.dispatch('dictionary/onLoadIdentityCardCode');
      this.$store.dispatch('enums/onLoadLangInfo');
      this.$store.dispatch('dictionary/onLoadAddressCountryRegion');
      this.$store.dispatch('dictionary/onLoadLanguage');
      this.$store.dispatch('enums/onLoadLanguageLevel');

    },
    computed: {
      ...mapState('person', {person: state => state.person,}),
      ...mapState('enums', ['gender', 'langInfo', 'languageLevel'],),
      ...mapState('dictionary', ['addressCountryRegion', 'language', 'identityCardCode']),
      ...mapGetters('enums', ['GET_GENDER', 'GET_LANGINFO', 'GET_LANGUAGE_LEVEL']),
      ...mapGetters('dictionary', ['GET_ADDRESS_COUNTRY_REGION', 'GET_LANGUAGE', 'GET_IDENTITY_CARD_CODE']),
      ...person(['person', 'tab_personal_name', 'tab_personal_lastname', 'tab_personal_firstname',
        'tab_personal_middlename', 'tab_personal_birthDate', 'tab_personal_age',
        'tab_personal_seniority', 'tab_personal_employYears', 'tab_personal_employMonths',
        'tab_personal_employDays', 'tab_personal_lastname_genitive', 'tab_personal_firstname_genitive',
        'tab_personal_middlename_genitive', 'tab_personal_contactPersonNameGenitive',
        'tab_personal_identityCardSeries', 'tab_personal_identityCardNumber',
        'tab_personal_identityCardIssueDate', 'tab_personal_identityCardIssueDep', 'tab_personal_identityCardIssueBy',
        'tab_personal_homePhoneNumber', 'tab_personal_cellularPhone', 'tab_personal_isCompatriot',
        'tab_personal_isEquatedForeign', 'tab_personal_birthplace', 'tab_personal_isHostel',
        'tab_personal_isForeignLikeRussian', 'tab_personal_selectedGender',
        'tab_personal_selectedIdentityCardCode', 'tab_personal_selectedForeignLanguageInfo',
        'tab_personal_selectedCitizenship', 'tab_personal_INIPA', 'tab_personal_INIPADate', 'tab_personal_note',
        'tab_personal_bithplace', 'tab_personal_email', 'tab_personal_company_name', 'tab_personal_company_address',
        'language_score1', 'language_score2', 'language_score3', 'selected_foreignLanguageName1',
        'selected_foreignLanguageName2', 'selected_foreignLanguageName3','foreigner']),

      fullname: function () {
        return this.person.tab_personal_name = this.person.tab_personal_lastname + ' ' + this.person.tab_personal_firstname + ' ' + this.person.tab_personal_middlename
      },
      fullnameGenitive: function () {
        return this.person.tab_personal_contactPersonNameGenitive = this.person.tab_personal_lastname_genitive + ' ' +
          this.person.tab_personal_firstname_genitive + ' ' + this.person.tab_personal_middlename_genitive
      },
      fullage: function () {
        let today = new Date();
        let birth = new Date(this.tab_personal_birthDate);
        let age;
        if (birth.toString() === 'Invalid Date') {
          age = '';
        } else {
          age = (new Date(today - birth)).getFullYear() - 1970;
        }
        return age;
      },

      fullseniority: function () {
        return this.tab_personal_seniority = this.person.tab_personal_employYears + ',' + this.person.tab_personal_employMonths
      },
    },

    methods: {
      isForeigner(){
        if(this.person.application.choosenWizards.length!==0){
          this.person.application.choosenWizards = [];
        }

        this.foreigner = false;
        this.isOtherCountry = false;
        //TODO should work, but check make checkbox to null
        let country = this.tab_personal_selectedCitizenship.countryRegionId;
        let countryType = this.tab_personal_selectedCitizenship.eduCountryType;
        let isCompatriot = this.tab_personal_isCompatriot;
        let isEquatedForeign = this.tab_personal_isEquatedForeign;
        let isForeignLikeRussian = this.tab_personal_isForeignLikeRussian;

        if(country === "БЕЛАРУСЬ" || country === "КАЗАХСТАН" || country === "КИРГИЗИЯ" || country === "ТАДЖИКИСТАН"){
          this.isOneOfFourCountry = true;
          this.tab_personal_isCompatriot = false;
          this.tab_personal_isForeignLikeRussian = false;
        }else{
          this.isOneOfFourCountry = false;
        }

        if(this.tab_personal_selectedCitizenship.countryRegionId === "РФ"){
          this.tab_personal_isCompatriot = false;
          this.tab_personal_isEquatedForeign = false;
          this.tab_personal_isForeignLikeRussian = false;
        }

        if(this.tab_personal_selectedCitizenship.countryRegionId !== "РФ"){
          if(this.isOneOfFourCountry === false){
            console.log(this.tab_personal_selectedCitizenship.countryRegionId);
            console.log(this.isOneOfFourCountry);
            this.isOtherCountry = true;
            this.tab_personal_isEquatedForeign = false;
          }
        }


        // if(this.isOtherCountry){
        //   if(this.tab_personal_isCompatriot){
        //     this.tab_personal_isForeignLikeRussian = false;
        //   }
        //   if(this.tab_personal_isForeignLikeRussian){
        //     this.tab_personal_isCompatriot = false;
        //   }
        // }
        console.log("other country:",this.isOtherCountry)
        console.log("one of the four: ",this.isOneOfFourCountry)
        console.log("this is a foreigner",this.foreigner);
        console.log("countryType",countryType);
        console.log("isCompatriot",isCompatriot);
        console.log("isEquatedForeign",isEquatedForeign);
        console.log("isForeignLikeRussian",isForeignLikeRussian);


        if(this.isOtherCountry){
          if(!isCompatriot & !isForeignLikeRussian){
            this.foreigner = true;
          }
        }
        if(this.isOneOfFourCountry){
          if(isEquatedForeign){
            this.foreigner = true;
          }
        }

        console.log("foreigner - ",this.foreigner)
      },

      clearSelect(objName) {
        this.$store.commit('person/clearCurrentField', objName)
      },
      updateCurrentField(payload, objName) {
        let value = payload.target.value
        this.$store.commit('person/updateCurrentField', {value, objName})
      },

    },
    watch: {
      tab_personal_selectedIdentityCardCode:
        {
          immediate: true,
          handler: function (newVal) {
            if (newVal !== undefined && newVal.identityCardCode === 'Паспорт РФ') {
              this.docSerialParams.required = true;
              this.docSerialParams.mask = 'qqqq';
              this.docSerialParams.placeholder = '****';

              this.docNumberParams.required = true;
              this.docNumberParams.mask = '######';
              this.docNumberParams.placeholder = '******';

              this.docIssuedRequred = true;
            } else {
              this.docSerialParams.required = false;
              this.docSerialParams.mask = 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
              this.docSerialParams.placeholder = '';

              this.docNumberParams.required = false;
              this.docNumberParams.mask = '###########################################################################';
              this.docNumberParams.placeholder = '';

              this.docIssuedRequred = false;
            }
          }
        },
    },
    data() {
      return {
        isOneOfFourCountry: false,
        isOtherCountry: false,

        docSerialParams: {},
        docNumberParams: {},
        docIssuedRequred: true,
        customTokens: {
          'Y': {pattern: /[0-5]/},
          'q': {pattern: /[.]*/}
        },
      }
    },
    validations() {
      let obj = {};
      obj.tab_personal_middlename_genitive = this.tab_personal_middlename.length > 0 ? {required} : {};
      obj.tab_personal_lastname = {required};
      obj.tab_personal_firstname = {required};
      obj.tab_personal_lastname_genitive = {required};
      obj.tab_personal_firstname_genitive = {required};
      obj.tab_personal_INIPADate = {
        validDate: function (val) {
          if (val == '') {
            return true;
          }

          if ((new Date(val)).toString() === 'Invalid Date') {
            return false;
          }

          if (new Date(val).getFullYear() > 1990 && (new Date(val)) < new Date()) {
            return true;
          }
          return false;
        }
      };
      obj.tab_personal_birthDate = {
        required,
        validDate: val => (new Date(val)).toString() !== 'Invalid Date',
        foreverYang: function (val) {
          return (this.fullage > 16) && (this.fullage < 75);
        }
      };
      obj.tab_personal_selectedGender = {
        required,
        validFormat: val => val.id > 0,
      };
      obj.tab_personal_INIPA = {
        required,
        checkINIPA
      };

      obj.tab_personal_identityCardSeries = this.docSerialParams.required ? {required} : {};
      obj.tab_personal_identityCardNumber = this.docNumberParams.required ? {required} : {};
      obj.tab_personal_identityCardIssueBy = this.docIssuedRequred ? {required} : {};
      obj.tab_personal_identityCardIssueDate = this.docIssuedRequred ? {required} : {};
      obj.tab_personal_identityCardIssueDep = this.docIssuedRequred ? {required} : {};
      obj.tab_personal_birthplace = this.docIssuedRequred ? {required} : {};
      obj.tab_personal_email = this.docIssuedRequred ? {required} : {};
      return obj;

    }


  }
</script>

<style scoped>
  .uneditable {
    background-color: #F5F5F5;
  }

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

  label.computed-auto input {
    border: none;
    border-bottom: solid 1px gray;
  }

  .error1 span {
    color: red;
  }

  .disabled1 span {
    color: gray;
  }

</style>
