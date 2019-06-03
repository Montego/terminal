<template>
  <div>
    <tabs class="parent_tabs">
      <tab id="" name="Обзор">
        <!--<div class="row">-->
          <!--<button>Добавить</button>-->
        <!--</div>-->
        <v-data-table
          :headers="headers_parent"
          :items="info_parent"
          hide-actions
          class="elevation-1 text-xs-center"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.who_parent}}</td>
            <td class="text-xs-center">{{ props.item.snp_parent}}</td>
            <td class="text-xs-center">{{ props.item.surname_parent}}</td>
            <td class="text-xs-center">{{ props.item.name_parent }}</td>
            <td class="text-xs-center">{{ props.item.patronymic_parent}}</td>
            <td class="text-xs-center">{{ props.item.gender_parent}}</td>
            <td class="text-xs-center">{{ props.item.acions}}</td>
          </template>
        </v-data-table>
      </tab>
      <tab id="" name="Личные данные попечителя">
        <div class="inner_tab row">
          <div class="col-sm">
            <div>
              <p>Личные данные родителя/попечителя</p>
            </div>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">Ф.И.О.</div>
              <input v-model="fullname" class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически"
                     disabled="disabled"/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Кем приходится:</div>
              <select v-model="tab_parent_selectedFamRelationShip" class="col-sm">
                <option v-for="option in options_FamRelationShip">
                  {{option.item}}
                </option>
              </select>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Фамилия:</div>
              <input v-model="tab_parent_lastname" class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <span class="alarm_label" v-if="tab_parent_lastname===''">Не заполнено поле "Фамилия"</span>
            <label class="row">
              <div class="form__label-text col-sm">Имя:</div>
              <input v-model="tab_parent_firstname" class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <span class="alarm_label" v-if="tab_parent_firstname===''">Не заполнено поле "Имя"</span>
            <span class="alarm_label" v-else-if="tab_parent_firstname===tab_parent_lastname && tab_parent_firstname!==''">Имя не может совпадать с фамилией</span>
            <label class="row">
              <div class="form__label-text col-sm">Отчество:</div>
              <input v-model="tab_parent_middlename" class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Пол:</div>
              <select class="col-sm" name="">
                <option>Мужской</option>
                <option>Женский</option>
                <option>Другое</option>
              </select>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Дата рождения:</div>
              <input v-model="tab_parent_birthDate" class="form__input col-sm" type="date" name="" placeholder=""/>
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
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Адрес:</div>
              <textarea class="col-sm" name=""></textarea>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Профессия:</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Трудовой стаж, лет:</div>
              <input class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
          </div>
          <div class="col-sm">
            <div>
              <p>Контактный телефон</p>
            </div>
            <hr>
            <label class="row">
              <div class="form__label-text col-sm">Домашний телефон:</div>
              <input v-model="tab_parent_homePhoneNumber" class="form__input col-sm" type="text" name="" placeholder=""/>
            </label>
            <label class="row">
              <div class="form__label-text col-sm">Мобильный телефон:</div>
              <input v-model="tab_parent_cellularPhone" class="form__input col-sm" type="text" name="mobile_number" v-mask="'+7-###-###-##-##'"/>
            </label>
            <span class="alarm_label" v-if="tab_parent_cellularPhone===''">Не заполнено поле "Мобильный телефон"</span>
            <span class="alarm_label" v-else-if="tab_parent_cellularPhone.length<16">Некорректно заполнено поле "Мобильный телефон"</span>
            <!--<label class="row">-->
              <!--<div class="form__label-text col-sm">Мобильный телефон:</div>-->
              <!--<input class="form__input col-sm" type="text" name="" placeholder="" v-mask="'+7-###-###-##-##'"/>-->
            <!--</label>-->

            <div>
              <p>Адрес фактический</p>
            </div>
            <hr>
            <div class="row">
              <label class="col-sm"></label>
              <div class="row">
                <button class="">Ввести адрес</button>
                <button @click="onCopyAddressFromStudent">Копировать из студента</button>
              </div>

            </div>
            <label class="row">
              <div class="form__label-text col-sm">Адрес:</div>
              <textarea v-model="tab_parent_factAddress" class="col-sm" name=""></textarea>
            </label>
            <div class="clear_save_button row">
              <button>Очистить</button>
              <button>Сохранить</button>
            </div>
          </div>
        </div>
      </tab>

    </tabs>
  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields';
  const { mapFields: tab_parent_info } = createHelpers({
    getterType: `tab_parent_info/getField`,
    mutationType: `tab_parent_info/updateField`,
  });
  const { mapFields:tab_address_info } = createHelpers({
    getterType: 'tab_address_info/getField',
    mutationType: 'tab_address_info/updateField',
  });
  export default {
    name: "TabParentInfo",

    data() {
      return {

        options_FamRelationShip: [
          {id: 1, item: 'Брат'},
          {id: 2, item: 'Дети'},
          {id: 3, item: 'Дядя'},
          {id: 4, item: 'Жена'},
          {id: 4, item: 'Мать'},
          {id: 4, item: 'Муж'},
          {id: 4, item: 'Опекун'},
          {id: 4, item: 'Отец'},
          {id: 4, item: 'Отчим'},
          {id: 4, item: 'Сестра'},
        ],

        headers_parent: [
          {text: 'Кем приходится', value: 'who_parent', sortable: false, align: 'center'},
          {text: 'Ф.И.О.', value: 'snp_parent', sortable: false, align: 'center'},
          {text: 'Фамилия', value: 'surname_parent', sortable: false, align: 'center'},
          {text: 'Имя', value: 'name_parent', sortable: false, align: 'center'},
          {text: 'Отчество', value: 'patronymic_parent', sortable: false, align: 'center'},
          {text: 'Пол', value: 'gender_parent', sortable: false, align: 'center'},
          {text: 'Действия', value: 'actions', sortable: false, align: 'center'},
        ],
        info_parent: [],
      }
    },
    computed: {
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
        return age;
      },
      ...tab_parent_info(['tab_parent_name', 'tab_parent_lastname', 'tab_parent_firstname', 'tab_parent_middlename',
        'tab_parent_birthDate', 'tab_parent_seniority', 'tab_parent_homePhoneNumber', 'tab_parent_cellularPhone',
        'tab_parent_factAddress', 'tab_parent_selectedFamRelationShip', 'tab_parent_selectedGender',
      ]),
      ...tab_address_info(['tab_address_factAddress',]),
    },
    methods: {
      onCopyAddressFromStudent() {
        this.tab_parent_factAddress = this.tab_address_factAddress;
      }
    }

  }
</script>

<style scoped>
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
    margin-top: 30%;
    /*margin-left: 65%;*/
    display: flex;
    justify-content: flex-end;
  }

  .parent_tabs {
    margin-top: -35px;
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
