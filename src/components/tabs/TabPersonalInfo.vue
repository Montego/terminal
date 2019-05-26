<template>
  <div class="inner_tab row">
    <div class="info_main col-sm">
      <div>
        <p>Личные сведения</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Ф.И.О</div>
          <input v-model="fullname" class="form__input col-sm" type="text" name="name"
                 placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <!--в фамилия namespace not found in mapState()-->
        <label class="row">
          <div class="form__label-text col-sm">Фамилия</div>
          <input v-model="lastname" class="form__input col-sm" v-validate="'required|alpha'" name="lastname"
                 type="text">
          <span>{{ errors.first('alpha') }}</span>
          <!--<input class="form__input col-sm" type="text" name="surname" required/>-->
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Имя</div>
          <input v-model="firstname" class="form__input col-sm" type="text" name="firstname" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Отчество</div>
          <input v-model="middlename" class="form__input col-sm" type="text" name="middlename" required/>
        </label>
        <hr>
        <label class="row">
          <div class="form__label-text col-sm">Фамилия в род.п.</div>
          <input v-model="lastname_genitive" class="form__input col-sm" type="text" name="lastname_genitive" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Имя в род.п.</div>
          <input v-model="firstname_genitive" class="form__input col-sm" type="text" name="firstname_genitive"
                 required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Отчество в род.п.</div>
          <input v-model="middlename_genitive" class="form__input col-sm" type="text" name="middlename_genitive"
                 required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Ф.И.О.(род. п.)</div>
          <input v-model="fullnameGenitive" class="form__input col-sm" type="text" name="snp_genitive"
                 placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <label class="alarm_label">Проверьте Ф.И.О. в родительном падеже для Заявления.</label>

        <label class="row">
          <div class="form__label-text col-sm">Пол:</div>
          <select v-model="selectedGender" class="col-sm">
            <option v-for="item in GET_GENDER">
              {{item.name}}
            </option>
          </select>
        </label>

        <label class="row">
          <div class="form__label-text col-sm">Дата рождения:</div>
          <input v-model="birthDate" class="form__input col-sm" type="date" name="birthday" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Полных лет:</div>
          <input v-model="fullage" class="form__input col-sm" type="text" name="age"
                 placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">СНИЛС</div>
          <input class="form__input col-sm" type="text" name="snils" placeholder="***-***-***" v-mask="'###-###-###'"
                 required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">СНИЛС Дата:</div>
          <input class="form__input col-sm" type="date" name="snils_date"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Примечание:</div>
          <textarea class="col-sm" name="note"></textarea>
        </label>
      </div>
    </div>
    <!--]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]-->
    <div class="info_pasp col-sm">
      <div>
        <p>Паспортные данные</p>
      </div>
      <hr>
      <div>
        <label class="row">
          <div class="form__label-text col-sm">Код документа:</div>
          <select class="col-sm">
            <option v-for="identityCardCode in options_identityCardCode">{{identityCardCode.item}}</option>
          </select>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Серия:</div>
          <input class="form__input col-sm" type="text" name="doc_serial" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Номер:</div>
          <input class="form__input col-sm" type="text" name="doc_number" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Кем выдан:</div>
          <textarea class="col-sm" name="doc_issued_by"></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Дата выдачи:</div>
          <input class="form__input col-sm" type="date" name="doc_issued_date"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Кем выдан:</div>
          <input class="form__input col-sm" type="text" name="doc_code_unit" placeholder="***-***" v-mask="'###-###'"
                 required/>
        </label>
      </div>
      <label class="row">
        <div class="form__label-text col-sm">Гражданство:</div>
        <select class="col-sm" name="citizenship">
          <option>РФ</option>
          <option>Не РФ</option>
        </select>
      </label>
      <label class="row">
        <div class="form__label-text col-sm">Соотечественник:</div>
        <input class="checkbox col-sm" type="checkbox" id="compatriot">
      </label>
      <label class="alarm_label">(При наличии подтверждающих документов)</label>
      <label class="row">
        <div class="form__label-text col-sm">Приравнять к иностранцам:</div>
        <input class="checkbox col-sm" type="checkbox" id="equate_foreign">
      </label>
      <label class="alarm_label">(Беларусь, Казахстан, Киргизия, Таджикистан)</label>
      <label class="row">
        <div class="form__label-text col-sm">Место рождения:</div>
        <textarea class="col-sm" name="birth_place"></textarea>
      </label>
      <label class="row">
        <div class="form__label-text col-sm">Общежитие:</div>
        <input class="checkbox col-sm" type="checkbox" id="hostel">
      </label>
      <label class="row">
        <div class="form__label-text col-sm">Иностранец, как гражданин РФ:</div>
        <input class="checkbox col-sm" type="checkbox" id="foreign_like_russian">
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
          <input class="form__input col-sm" type="text" name="home_phone_number"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Мобильный телефон:</div>
          <input class="form__input col-sm" type="text" name="mobile_number" v-mask="'+7-###-###-##-##'"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Эл. почта:</div>
          <input class="form__input col-sm" type="email" name="email"/>
        </label>
        <hr>
        <div>
          <p>Сведения о работе</p>
        </div>
        <hr>
        <label class="row">
          <div class="form__label-text col-sm">Организация:</div>
          <input class="form__input col-sm" type="text" name="organization_name"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Адрес:</div>
          <textarea class="col-sm" name="organization_address"></textarea>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Профессия:</div>
          <input class="form__input col-sm" type="text" name="organization_profession" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Трудовой стаж:</div>
          <input v-model="fullseniority" class="form__input col-sm" type="text" name="seniority"
                 placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Стаж, лет:</div>
          <input v-model="employYears" class="form__input col-sm" type="number" name="employYears" placeholder=""/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Стаж, месяцев:</div>
          <input v-model="employMonths" class="form__input col-sm" type="number" name="employMonths" placeholder=""/>
        </label>
        <!--<label class="row">-->
        <!--<div class="form__label-text col-sm">Стаж, дней:</div>-->
        <!--<input class="form__input col-sm" type="number" name="seniority_day" placeholder=""/>-->
        <!--</label>-->
        <div>
          <p>Иностранные языки</p>
        </div>

        <hr>

        <label class="row">
          <div class="form__label-text col-sm">Отметка о языках:</div>
          <select class="col-sm" name="foreign_language">
            <option>Изучал</option>
            <option>Не изучал</option>
          </select>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'

  export default {
    name: "TabPersonalInfo",
    computed: {
      ...mapState('tab_personal_info', ['gender', 'identityCardCode', 'otherCountryRegion', 'langInfo', 'languageName',]),
      ...mapGetters('tab_personal_info', ['GET_GENDER', 'GET_IDENTITY_CARD_CODE', 'GET_OTHER_COUNTRY_REGION', 'GET_LANGINFO']),

      gender() {
        return this.$store.getters.GET_GENDER;
      },
      identityCardCode() {
        return this.$store.getters.GET_IDENTITY_CARD_CODE;
      },
      otherCountryRegion() {
        return this.$store.getters.GET_OTHER_COUNTRY_REGION;
      },
      langInfo() {
        return this.$store.getters.GET_LANGINFO;
      },

      fullname: function () {
        return this.name = this.lastname + ' ' + this.firstname + ' ' + this.middlename
      },
      fullnameGenitive: function () {
        return this.contactPersonNameGenitive = this.lastname_genitive + ' ' + this.firstname_genitive + ' ' + this.middlename_genitive
      },

      //TODO проверить
      fullage: function () {
        var today = new Date();
        var birth = new Date(this.birthDate);
        var age = today.getFullYear() - birth.getFullYear();
        var m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
          age--;
        }
        return age;
      },

      fullseniority: function () {
        return this.seniority = this.employYears + ',' + this.employMonths
      },

    },
    mounted() {
      this.$store.dispatch('tab_personal_info/onLoadGender');
      this.$store.dispatch('tab_personal_info/onLoadIdentityCardCode');
      this.$store.dispatch('tab_personal_info/onLoadOtherCountryRegion');
      this.$store.dispatch('tab_personal_info/onLoadLangInfo');

    },
    data() {
      return {
        name: '',
        lastname: '',
        firstname: '',
        middlename: '',
        birthDate: '',
        age: '',
        seniority: '',
        employYears: '',
        employMonths: '',
        lastname_genitive: '',
        firstname_genitive: '',
        middlename_genitive: '',
        contactPersonNameGenitive: '',

        //test data
        selectedGender: '',
        options_gender: [
          {id: 0, item: '-выберите пол-'},
          {id: 1, item: 'Мужской'},
          {id: 2, item: 'Женский'},
          {id: 3, item: 'Другое'},
        ],
        options_identityCardCode: [
          {id: 0, item: '-выберите документ-'},
          {id: 1, item: 'Паспорт РФ'},
          {id: 2, item: 'Не паспорт РФ'},
        ]
        ,
        options_citizenship: [
          {id: 1, item: 'РФ'},
          {id: 2, item: 'Казахстан'},
        ],
        options_foreign_language: [
          {id: 1, item: 'изучал'},
          {id: 2, item: 'не изучал'},
        ]
      }
    }

  }
</script>

<style scoped>

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

  .alarm_label {
    /*text-align: left;*/
    color: red;
  }


</style>
