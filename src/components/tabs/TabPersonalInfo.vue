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
          <input v-model="fullname" class="form__input col-sm" type="text" name="name" placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <!--в фамилия namespace not found in mapState()-->
        <label class="row">
          <div class="form__label-text col-sm">Фамилия</div>
          <input v-model="lastname" class="form__input col-sm" v-validate="'required|alpha'" name="lastname" type="text" >
          <span>{{ errors.first('alpha') }}</span>
          <!--<input class="form__input col-sm" type="text" name="surname" required/>-->
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Имя</div>
          <input v-model="firstname" class="form__input col-sm" type="text" name="firstname"  required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Отчество</div>
          <input v-model="middlename" class="form__input col-sm" type="text" name="middlename"  required/>
        </label>
        <hr>
        <label class="row">
          <div class="form__label-text col-sm">Фамилия в род.п.</div>
          <input class="form__input col-sm" type="text" name="surname_genitive"  required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Имя в род.п.</div>
          <input class="form__input col-sm" type="text" name="name_genitive"  required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Отчество в род.п.</div>
          <input class="form__input col-sm" type="text" name="patronymic_genitive" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Ф.И.О.(род. п.)</div>
          <input class="form__input col-sm" type="text" name="snp_genitive" placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <label class="alarm_label">Проверьте Ф.И.О. в родительном падеже для Заявления.</label>

        <!--<label class="row">-->
          <!--<div class="form__label-text col-sm">Пол:</div>-->
          <!--<select class="col-sm" v-model="selectedGender">-->
            <!--<option v-for="name in gender" v-bind:value="gender.name">-->
              <!--{{ gender.name }}-->
            <!--</option>-->
          <!--</select>-->
          <!--<span>Выбрано: {{ selectedGender }}</span>-->

        <!--</label>-->

        <!--<p>I see {{ gender  }} </p>-->
        <!--<p>I see {{this.$store.getters.GET_GENDER}} </p>-->
        <!--<p>I see {{this.$store.getters.gender}} </p>-->




        <label class="row">
          <div class="form__label-text col-sm">Пол:</div>
          {{gender}}
          <select class="col-sm">
            <option v-for="gender in options_gender">
              {{gender.item}}
            </option>
          </select>
        </label>



        <label class="row">
          <div class="form__label-text col-sm">Дата рождения:</div>
          <input v-model="birthDate" class="form__input col-sm" type="date" name="birthday" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Полных лет:</div>
          <input v-model="fullage" class="form__input col-sm" type="text" name="age" placeholder="Заполняется автоматически" disabled="disabled"/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">СНИЛС</div>
          <input class="form__input col-sm" type="text" name="snils" placeholder="***-***-***" v-mask="'###-###-###'" required/>
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
          <input class="form__input col-sm" type="text" name="doc_serial"  required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Номер:</div>
          <input class="form__input col-sm" type="text" name="doc_number"  required/>
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
          <input class="form__input col-sm" type="text" name="doc_code_unit" placeholder="***-***"  v-mask="'###-###'" required />
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
        <input class="checkbox col-sm" type="checkbox" id="hostel" >
      </label>
      <label class="row">
        <div class="form__label-text col-sm">Иностранец, как гражданин РФ:</div>
        <input class="checkbox col-sm" type="checkbox" id="foreign_like_russian" >
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
          <input class="form__input col-sm" type="text" name="home_phone_number"  required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Мобильный телефон:</div>
          <input class="form__input col-sm" type="text" name="mobile_number" v-mask="'+7-###-###-##-##'" required/>
        </label>
        <label class="row">
          <div class="form__label-text col-sm">Эл. почта:</div>
          <input class="form__input col-sm" type="email" name="email" />
        </label>
        <hr>
        <div>
          <p>Сведения о работе</p>
        </div>
        <hr>
        <label class="row">
          <div class="form__label-text col-sm">Организация:</div>
          <input class="form__input col-sm" type="text" name="organization_name" />
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
          <input v-model="fullseniority" class="form__input col-sm" type="text" name="seniority" placeholder="Заполняется автоматически" disabled="disabled"/>
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
  import { mapState, mapGetters } from 'vuex'

    export default {
        name: "TabPersonalInfo",
        computed:{
          ...mapState('tab_personal_info', ['lastname_genitive',
            'firstname_genitive', 'middlename_genitive', 'contactPersonNameGenitive', 'gender', 'inipa',
            'inipa_date', 'note', 'identityCardCode', 'identityCardSeries', 'identityCardNumber', 'identityCardIssueBy', 'identityCardIssueDate',
            'identityCardIssueDep', 'otherCountryRegion', 'isCompatriot', 'isForeigners', 'birthPlace', 'isHotel',
            'foreign_like_russian', 'homePhoneNumber', 'cellularPhone', 'email', 'organization_name',
            'organization_address', 'organization_profession', 'foreign_language', 'language_name', 'language_score']),
          ...mapGetters('tab_personal_info',['GET_GENDER', 'lastname_genitive',
            'firstname_genitive', 'middlename_genitive', 'contactPersonNameGenitive', 'gender', 'inipa',
            'inipa_date', 'note', 'identityCardCode', 'identityCardSeries', 'identityCardNumber', 'identityCardIssueBy', 'identityCardIssueDate',
            'identityCardIssueDep', 'otherCountryRegion', 'isCompatriot', 'isForeigners', 'birthPlace', 'isHotel',
            'foreign_like_russian', 'homePhoneNumber', 'cellularPhone', 'email', 'organization_name',
            'organization_address', 'organization_profession','foreign_language', 'language_name', 'language_score']),

          // lastname() {
          //   return this.$store.getters.lastname;
          // },
          // firstname() {
          //   return this.$store.getters.firstname;
          // },
          // middlename() {
          //   return this.$store.getters.middlename;
          // },

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
          // fullage: function () {
          //   return this.age = new Date() - this.birthDate
          // }
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


          // contactPersonNameGenitive: this.lastname + ' ' + this.firstname + ' ' + this.middlename,
          // currentTabComponent: function () {
          //   return this.currentTab
          // }
        },
      mounted () {
        this.$store.dispatch('tab_personal_info/onLoadGender');
        this.$store.dispatch('tab_personal_info/onLoadIdentityCardCode');
        this.$store.dispatch('tab_personal_info/onLoadOtherCountryRegion');
        this.$store.dispatch('tab_personal_info/onLoadLangInfo');

        console.log(111111111111)
        console.log(this.$store.getters)
        console.log(this.$store.getters.GET_GENDER)
        console.log(222222222222)
        console.log(this.age)
      },
      data () {
        return {
          name:'',
          lastname:'',
          firstname:'',
          middlename:'',
          birthDate:'',
          age:'',
          seniority: '',
          employYears: '',
          employMonths: '',

          //test data
          selectedGender: '',
          options_gender: [
            {id: 0, item:'-выберите пол-'},
            {id: 1, item:'Мужской'},
            {id: 2, item:'Женский'},
            {id: 3, item:'Другое'},
          ],
          options_identityCardCode: [
            {id: 0, item:'-выберите документ-'},
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
  .calculate_score {
    margin-top: -8px;
  }
  .adress_button {
    margin-left: -20px;
  }

  tbody tr:hover td {
    background-color: #FFEFC6;
    cursor: pointer;
  }
  tr:hover {
    ackground-color: red;
  }
  .search_form div {
    font-size: 20px;
  }
  .search_form input {
    width: 500px;
  }
  .search_form {
    margin-top: 14px;
    height: 15px;
  }
  .search_button {
    margin-top: 7px;
    margin-left: 30px;
  }
  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    /*border: 4px;*/
  }
  input.checkbox{
    height: 15px;
    transform:scale(1.3);
    opacity:0.9;
    cursor:pointer;
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
  }
  .clear_save_button {
    margin-top: 75%;
    margin-left: 65%;
    display: flex;
    /*justify-content: space-between;*/
  }
  .outer {
    /*margin: 5px;*/
    /*margin-top: -5px;*/
    background: linear-gradient(45deg, #EECFBA, #C5DDE8);
    /*background: linear-gradient(to top left, powderblue, pink);*/
  }
  .distinctive_features_top {
    height: 50%;
  }
  .distinctive_features_bottom {
    height: 50%;
  }
  textarea {
    width: 90%; /* Ширина поля в процентах */
    height: 100px; /* Высота поля в пикселах */
    resize: none; /* Запрещаем изменять размер */
  }
  .buttons {
    margin-left: 10px;
  }
  .ege_tabs {
    margin-top: -35px;
  }
  .parent_tabs {
    margin-top: -35px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }
  .inner_tab {
    margin-top: -40px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }
  p {
    font-size: 25px;
  }
  button {
    min-width: 100px;
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

  /*.checkbox {*/
  /*transform:scale(1.3);*/
  /*opacity:0.9;*/
  /*cursor:pointer;*/
  /*}*/
  .main_tab {
    margin-top: 2px;
    margin-left: 5px;
    /*margin-right: 5px;*/
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

  .search_place {
    /*height: auto;*/
    margin-top: 30px;
    margin-left: 20px;
  }
  .search_place p{
    margin-right: 10px;
  }
  .input_profile_part1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
</style>
