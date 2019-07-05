<template>
  <div>
    <form class="inner_tab row" @submit.prevent="someAction()">
    <div class="info_main col-sm">
      <div>
        <p>Личные сведения</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class=" form__label-text col-sm-4">Ф.И.О</div>
          <input v-model="fullname" class="uneditable form__input col-sm-8" type="text" name="name"
                 placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>

        <label class="row">
          <span class="form__label-text col-sm">Фамилия</span>
          <!--<input v-model="lastname_personal_info" class="form__input col-sm" v-validate="'required|alpha'" name="lastname"-->
                 <!--type="text">-->
          <!--<span>{{ errors.first('alpha') }}</span>-->
          <input v-model="person.tab_personal_lastname" value= "" class="form__input col-sm" type="text" name="lastname" required/>
        </label>
        <span class="alarm_label" v-if="person.tab_personal_lastname===''">Не заполнено поле "Фамилия"</span>
        <label class="row">
          <div class="form__label-text col-sm">Имя</div>
          <input v-model="person.tab_personal_firstname" class="form__input col-sm" type="text" name="firstname" required/>
        </label>
        <span class="alarm_label" v-if="person.tab_personal_firstname===''">Не заполнено поле "Имя"</span>
        <span class="alarm_label" v-else-if="person.tab_personal_firstname=== person.tab_personal_lastname">Имя не может совпадать с фамилией</span>
        <label class="row">
          <div class="form__label-text col-sm">Отчество</div>
          <input v-model="person.tab_personal_middlename" class="form__input col-sm" type="text" name="middlename" required/>
        </label>
        <hr>
        <label class="row">
          <div class="form__label-text col-sm">Фамилия в род.п.</div>
          <input v-model="person.tab_personal_lastname_genitive" class="form__input col-sm" type="text" name="lastname_genitive" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Имя в род.п.</div>
          <input v-model="person.tab_personal_firstname_genitive" class="form__input col-sm" type="text" name="firstname_genitive"
                 required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Отчество в род.п.</div>
          <input v-model="person.tab_personal_middlename_genitive" class="form__input col-sm" type="text" name="middlename_genitive"
                 required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm-4">Ф.И.О.(род. п.)</div>
          <input v-model="fullnameGenitive" class="uneditable form__input col-sm-8" type="text" name="snp_genitive"
                 placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <label class="alarm_label">Проверьте Ф.И.О. в родительном падеже для Заявления.</label>

        <label class="row">
          <div class="form__label-text col-sm">Пол:</div>
          <select v-model="person.tab_personal_selectedGender" class="minimal col-sm">
            <option v-for="item in gender" v-bind:value="item">
              {{item.name}}
            </option>
          </select>
        </label>

        <div>
          <div>
            <labael
          </div>
        </div>
        <label class="row">
          <div class="form__label-text col-sm">Дата рождения:</div>
          <input v-model="person.tab_personal_birthDate" class="form__input col-sm" type="date" name="birthday" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Полных лет:</div>
          <input v-model="fullage" class="form__input col-sm" type="text" name="age"
                 placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">СНИЛС</div>
          <input v-model="person.tab_personal_INIPA" class="form__input col-sm" type="text" name="snils" placeholder="***-***-***" v-mask="'###-###-###'"
                 required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">СНИЛС Дата:</div>
          <input v-model="person.tab_personal_INIPADate" class="form__input col-sm" type="date" name="snils_date"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Примечание:</div>
          <textarea v-model="person.tab_personal_note" class="col-sm" name="note"></textarea>
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

          <select v-model="person.tab_personal_selectedIdentityCardCode" class="minimal col-sm">
            <option v-for="item in identityCardCode" v-bind:value="item">
              {{item.identityCardCode}}
            </option>
          </select>

          <!--<select v-model="tab_personal_selectedIdentityCardCode" class="minimal col-sm">-->
            <!--<option v-for="option in options_identityCardCode" >-->
              <!--{{option.item}}-->
            <!--</option>-->
          <!--</select>-->
        </label>
        <span class="alarm_label" v-if="tab_personal_selectedIdentityCardCode===''">Не выбран тип документа</span>
        <label class="row">
          <div class="form__label-text col-sm">Серия:</div>
          <input v-if="tab_personal_selectedIdentityCardCode === 'Паспорт РФ'" v-model="person.tab_personal_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial" placeholder="****" v-mask="'####'" required/>
          <input v-else-if="tab_personal_selectedIdentityCardCode === 'Временное удостоверение лич.граждан.РФ'" v-model="person.tab_personal_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial" placeholder="***-***" v-mask="'###-###'" required/>
          <input v-else v-model="person.tab_personal_identityCardSeries" class="form__input col-sm" type="text" name="doc_serial"required/>

        </label>
        <span class="alarm_label" v-if="tab_personal_identityCardSeries===''">Не заполнено поле "Серия"</span>
        <span class="alarm_label" v-else-if="tab_personal_identityCardSeries.length<4 & tab_personal_selectedIdentityCardCode === 'Паспорт РФ'">Серия должна содержать 4 цифры</span>
        <label class="row">
          <div class="form__label-text col-sm">Номер:</div>
          <!--<input v-model="identityCardNumber" class="form__input col-sm" type="text" name="doc_number" required/>-->
          <input v-if="tab_personal_selectedIdentityCardCode === 'Паспорт РФ'" v-model="person.tab_personal_identityCardNumber" class="form__input col-sm" type="text" name="doc_serial" placeholder="******" v-mask="'######'" required/>
          <input v-else-if="tab_personal_selectedIdentityCardCode === 'Временное удостоверение лич.граждан.РФ'" v-model="person.tab_personal_identityCardNumber" class="form__input col-sm" type="text" name="doc_serial" placeholder="***-***-***" v-mask="'###-###-###'" required/>
          <input v-else v-model="person.tab_personal_identityCardNumber" class="form__input col-sm" type="text" name="doc_serial"required/>
        </label>
        <span class="alarm_label" v-if="tab_personal_identityCardNumber===''">Не заполнено поле "Номер"</span>
        <span class="alarm_label" v-else-if="tab_personal_identityCardNumber.length<6 & tab_personal_selectedIdentityCardCode === 'Паспорт РФ'">Номер должен содержать 6 цифр</span>

        <label class="row">
          <div class="form__label-text col-sm">Кем выдан:</div>
          <textarea v-model="person.tab_personal_identityCardIssueBy" class="col-sm" name="doc_issued_by"></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Дата выдачи:</div>
          <input v-model="person.tab_personal_identityCardIssueDate" class="form__input col-sm" type="date" name="doc_issued_date"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Код подразделения:</div>
          <input v-model="person.tab_personal_identityCardIssueDep" class="form__input col-sm" type="text" name="doc_code_unit" placeholder="***-***" v-mask="'###-###'"
                 required/>
        </label>
      </div>
      <label class="row">
        <div class="form__label-text col-sm">Гражданство:</div>

        <select v-model="person.tab_personal_selectedCitizenship"  class="minimal col-sm">
          <option v-for="item in addressCountryRegion" v-bind:value="item">
            {{item.countryRegionId}}
          </option>
        </select>
      </label>
      <label class="row">
        <div class="form__label-text col-sm">Соотечественник:</div>
        <input v-if="tab_personal_selectedCitizenship=='РФ'" v-model="person.tab_personal_isCompatriot" class="checkbox col-sm" type="checkbox" id="compatriot" disabled="disabled">
        <input v-else="tab_personal_selectedCitizenship=='РФ'" v-model="person.tab_personal_isCompatriot" class="checkbox col-sm" type="checkbox" >
      </label>
      <label class="alarm_label">(При наличии подтверждающих документов)</label>
      <label class="row">
        <div class="form__label-text col-sm">Приравнять к иностранцам:</div>
        <input v-if="tab_personal_isCompatriot==true" v-model="person.tab_personal_isEquatedForeign" class="checkbox col-sm" type="checkbox" disabled>
        <input v-else v-model="person.tab_personal_isEquatedForeign" class="checkbox col-sm" type="checkbox" id="equate_foreign">
      </label>
      <label class="alarm_label">(Беларусь, Казахстан, Киргизия, Таджикистан)</label>
      <label class="row">
        <div class="form__label-text col-sm">Место рождения:</div>
        <textarea v-model="person.tab_personal_birthplace" class="col-sm" name="birth_place"></textarea>
      </label>
      <label class="row">
        <div class="form__label-text col-sm">Общежитие:</div>
        <input v-model="person.tab_personal_isHostel" class="checkbox col-sm" type="checkbox" id="hostel">
      </label>
      <label class="row">
        <div class="form__label-text col-sm">Иностранец, как гражданин РФ:</div>
        <input v-if="tab_personal_selectedCitizenship=='РФ'" v-model="person.tab_personal_isForeignLikeRussian" class="checkbox col-sm" type="checkbox" id="foreign_like_russian" disabled>
        <input v-else v-model="person.tab_personal_isForeignLikeRussian" class="checkbox col-sm" type="checkbox"  >
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
          <input v-model="person.tab_personal_homePhoneNumber" class="form__input col-sm" type="text" name="home_phone_number"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Мобильный телефон:</div>
          <input v-model="person.tab_personal_cellularPhone" class="form__input col-sm" type="text" name="mobile_number" v-mask="'+7-###-###-##-##'"/>
        </label>
        <span class="alarm_label" v-if="person.tab_personal_cellularPhone===''">Не заполнено поле "Мобильный телефон"</span>
        <span class="alarm_label" v-else-if="tab_personal_cellularPhone.length<16">Некорректно заполнено поле "Мобильный телефон"</span>
        <label class="row">
          <div class="form__label-text col-sm">Эл. почта:</div>
          <input v-model="person.tab_personal_email" class="form__input col-sm" v-validate="'required|email'"  placeholder="" name="email" type="email">

          <!--<input class="form__input col-sm" type="email" name="email"/>-->
        </label>
        <label class="alarm_label col-sm">{{ errors.first('email') }}</label>
        <hr>
        <div>
          <p>Сведения о работе</p>
        </div>
        <hr>
        <label class="row">
          <div class="form__label-text col-sm">Организация:</div>
          <input v-model="person.tab_personal_company_name" class="form__input col-sm" type="text" name="organization_name"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Адрес:</div>
          <textarea v-model="person.tab_personal_company_address" class="col-sm" name="organization_address"></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Профессия:</div>
          <input v-model="person.tab_personal_seniority" class="form__input col-sm" type="text" name="organization_profession" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Трудовой стаж:</div>
          <input v-model="fullseniority" class="uneditable form__input col-sm" type="text" name="seniority"
                 placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Стаж, лет:</div>
          <input v-model="person.tab_personal_employYears" class="form__input col-sm" type="text" v-mask="'##'" name="employYears" placeholder=""/>
        </label>
        <span class="alarm_label" v-if="person.tab_personal_employYears>100">Люди столько не живут</span>
        <label class="row">
          <div class="form__label-text col-sm">Стаж, месяцев:</div>
          <input v-model="person.tab_personal_employMonths" class="form__input col-sm" type="text" v-mask="'##'" name="employMonths" placeholder=""/>
        </label>
        <span class="alarm_label" v-if="person.tab_personal_employMonths>11">Стаж, месяцев должен быть в диапазоне от 0 до 11</span>
        <label class="row">
        <div class="form__label-text col-sm">Стаж, дней:</div>
        <input v-model="person.tab_personal_employDays" class="form__input col-sm" type="text" v-mask="'##'" name="seniority_day" placeholder=""/>
        </label>
        <span class="alarm_label" v-if="person.tab_personal_employDays>31">Стаж, дней должен быть в диапазоне от 0 до 31</span>
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
          <select v-model="person.tab_personal_selectedForeignLanguageInfo"  class="minimal col-sm">
            <option v-for="item in langInfo" v-bind:value="item">
              {{item.name}}
            </option>
          </select>
        </label>
        <div class="row">
          <!--<div v-for="(selected_foreignLanguageName,language_description, index) in languages">-->
          <select v-model="person.selected_foreignLanguageName1" class="minimal col-sm-6">
            <option v-for="item in language" v-bind:value="item">
              {{item.languageId}}
            </option>
          </select>
          <select v-model="person.language_score1" class="minimal col-sm-6">
            <option v-for="item in languageLevel" v-bind:value="item">
              {{item.name}}
            </option>
          </select>
          <!--<input v-model="language_score1" class="form__input col-sm-6" type="text">-->

          <select v-model="person.selected_foreignLanguageName2" class="minimal col-sm-6">
            <option v-for="item in language" v-bind:value="item">
              {{item.languageId}}
            </option>
          </select>
          <select v-model="person.language_score2" class="minimal col-sm-6">
            <option v-for="item in languageLevel" v-bind:value="item">
              {{item.name}}
            </option>
          </select>

          <select v-model="person.selected_foreignLanguageName3" class="minimal col-sm-6">
            <option v-for="item in language" v-bind:value="item">
              {{item.languageId}}
            </option>
          </select>
          <select v-model="person.language_score3" class="minimal col-sm-6">
            <option v-for="item in languageLevel" v-bind:value="item">
              {{item.name}}
            </option>
          </select>
            <!--<div class="row">-->
              <!--<input class="button_add" type="button" value="Добавить" @click="onAddLanguage" >-->
              <!--<input class="button_add" type="button" value="Убрать" @click="onRemoveLanguage" >-->
            <!--</div>-->
          <!--</div>-->
        </div>

      </div>
    </div>
    </form>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  import { required, minLength, between, maxLength } from 'vuelidate/lib/validators'
  import { createHelpers } from 'vuex-map-fields';

  const { mapFields } = createHelpers({
    getterType: `tab_personal_info/getField`,
    mutationType: `tab_personal_info/updateField`,
  });

  const { mapFields:tab_personal_info } = createHelpers({
    getterType: `tab_personal_info/getField`,
    mutationType: `tab_personal_info/updateField`,
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });

  export default {
    name: "TabPersonalInfo",
    mounted() {
      this.$store.dispatch('enums/onLoadGender');
      this.$store.dispatch('dictionary/onLoadIdentityCardCode');
      // this.$store.dispatch('dictionary/onLoadOtherCountryRegion');
      this.$store.dispatch('enums/onLoadLangInfo');
      this.$store.dispatch('dictionary/onLoadAddressCountryRegion');
      this.$store.dispatch('dictionary/onLoadLanguage');
      this.$store.dispatch('enums/onLoadLanguageLevel');

    },
    computed: {
      // ...mapState('tab_personal_info', ['lastname_personal_info_tab','lastname_personal_info','gender', 'identityCardCode', 'otherCountryRegion', 'langInfo', 'languageName',]),
      // ...mapGetters('tab_personal_info', ['GET_LASTNAME_PERSONAL_INFO','GET_GENDER', 'GET_IDENTITY_CARD_CODE', 'GET_OTHER_COUNTRY_REGION', 'GET_LANGINFO']),
      // ...mapMutations('tab_personal_info', ['set_lastname_personal_info_tab']),

      ...mapState('enums', ['gender', 'langInfo','languageLevel'],),
      ...mapState('dictionary',['addressCountryRegion','language','identityCardCode']),
      ...mapGetters('enums', ['GET_GENDER','GET_LANGINFO', 'GET_LANGUAGE_LEVEL']),
      ...mapGetters('dictionary',['GET_ADDRESS_COUNTRY_REGION','GET_LANGUAGE', 'GET_IDENTITY_CARD_CODE']),
      ...person(['person']),
      ...tab_personal_info(['tab_personal_name', 'tab_personal_lastname', 'tab_personal_firstname',
        'tab_personal_middlename','tab_personal_birthDate','tab_personal_age',
        ' tab_personal_seniority','tab_personal_employYears','tab_personal_employMonths',
        'tab_personal_employDays','tab_personal_lastname_genitive','tab_personal_firstname_genitive',
        'tab_personal_middlename_genitive','tab_personal_contactPersonNameGenitive',
        'tab_personal_identityCardSeries','tab_personal_identityCardNumber',
        'tab_personal_identityCardIssueDate','tab_personal_identityCardIssueDep','tab_personal_identityCardIssueBy',
        'tab_personal_homePhoneNumber','tab_personal_cellularPhone','tab_personal_isCompatriot',
        'tab_personal_isEquatedForeign', 'tab_personal_isHostel',
        'tab_personal_isForeignLikeRussian','tab_personal_selectedGender',
        'tab_personal_selectedIdentityCardCode','tab_personal_selectedForeignLanguageInfo',
        'tab_personal_selectedCitizenship', 'tab_personal_INIPA', 'tab_personal_INIPADate', 'tab_personal_note',
        'tab_personal_bithplace', 'tab_personal_email'
      ]),

      fullname: function () {
        return this.person.tab_personal_name = this.person.tab_personal_lastname + ' ' + this.person.tab_personal_firstname + ' ' + this.person.tab_personal_middlename
      },
      fullnameGenitive: function () {
        return this.person.tab_personal_contactPersonNameGenitive = this.person.tab_personal_lastname_genitive + ' ' +
          this.person.tab_personal_firstname_genitive + ' ' + this.person.tab_personal_middlename_genitive
      },

      //TODO проверить, по дням неправильно
      fullage: function () {
        var today = new Date();
        var birth = new Date(this.person.tab_personal_birthDate);
        var age = today.getFullYear() - birth.getFullYear();
        var m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
          age--;
        }
        return age;
      },

      fullseniority: function () {
        return this.tab_personal_seniority = this.person.tab_personal_employYears + ',' + this.person.tab_personal_employMonths
      },

    },

    methods: {
      onAddLanguage(){
        this.conditions.push('');
      },
      onRemoveLanguage(){
        this.conditions.pop(this.conditions.length - 1);
      }

    },
    validations: {
      // Название поля должно совпадать с полем в data
      identityCardSeries: {
        required,
        validFormat: val => /^\d{4} \d{6}$/.test(val),
      },
      // passportDate: {
      //   required,
      //   validDate: val => moment(val, 'DD.MM.YYYY', true).isValid(),
      // },
      name: {
        required,
        maxLength: maxLength(10),
        alpha: val => /^[а-яё]*$/i.test(val),
      },
    },
    data() {
      return {
        languages:[
          {
            selected_foreignLanguageName:'',
            language_description:''
          }
        ],
        language_score1:'',
        language_score2:'',
        language_score3:'',
        selected_foreignLanguageName1:'',
        selected_foreignLanguageName2:'',
        selected_foreignLanguageName3:'',
        options_gender: [
          {id: 0, item: '-выберите пол-'},
          {id: 1, item: 'Мужской'},
          {id: 2, item: 'Женский'},
          {id: 3, item: 'Другое'},
        ],
        options_identityCardCode: [
          // {id: 0, item: '-выберите документ-'},
          {id: 1, item: 'ВидЖител'},
          {id: 2, item: 'ВоенБилет'},
          {id: 3, item: 'ВоенБилОфц'},
          {id: 4, item: 'Временное удостоверение лич.граждан.РФ'},
          {id: 5, item: 'ДиплПаспРФ'},
          {id: 6, item: 'ЗагрПасп'},
          {id: 7, item: 'ЗагрПаспРФ'},
          {id: 8, item: 'ИнострПасп'},
          {id: 9, item: 'НетДокум'},
          {id: 10, item: 'ПаспМорФл'},
          {id: 11, item: 'ПаспМоряка'},
          {id: 12, item: 'Паспорт РФ'},
          {id: 13, item: 'Паспорт иностранного гражданина'},
          {id: 14, item: 'ПРОЧЕЕ'},
          {id: 15, item: 'СвидБеженц'},
          {id: 16, item: 'СвидРожд'},
          {id: 17, item: 'СправОбОсв'},
          {id: 18, item: 'СпрУдЛичн'},
          {id: 19, item: 'УдЛичности'},
          {id: 20, item: 'УдОфицера'},
        ]

        ,
        options_citizenship: [
          {id: 1, item: 'РФ'},
          {id: 2, item: 'Казахстан'},
          {id: 2, item: 'Руанда'},
          {id: 2, item: 'СССР'},
        ],
        options_foreignLanguageInfo: [
          {id: 1, item: 'изучал'},
          {id: 2, item: 'не изучал'},
        ],
        options_foreignLanguageName: [
          {id: 1, item: 'английский'},
          {id: 2, item: 'французский'},
          {id: 3, item: 'немецкий'},
        ]
      }
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
