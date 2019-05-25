<template>
    <div>
      <tabs class="parent_tabs">
        <tab id="" name="Обзор">
          <div class="row">
            <button>Добавить</button>
          </div>
          <v-data-table
            :headers="headers_parent"
            :items="info_parent"
            class="elevation-1 text-xs-center"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.who_parent}}</td>
              <td class="text-xs-center">{{ props.item.snp_parent}}</td>
              <td class="text-xs-center">{{ props.item.surname_parent}}</td>
              <td class="text-xs-center">{{ props.item.name_parent }}</td>
              <td class="text-xs-center">{{ props.item.patronymic_parent}}</td>
              <td class="text-xs-center">{{ props.item.gender_parent}}</td>
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
                <input class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически" disabled="disabled"/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Кем приходится:</div>
                <select class="col-sm" name="">
                  <option>Мать</option>
                  <option>Отец</option>
                  <option>Другое</option>
                </select>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Фамилия:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Имя:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Отчество:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
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
                <input class="form__input col-sm" type="date" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Полных лет</div>
                <input class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически" disabled="disabled"/>
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
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>
              <label class="row">
                <div class="form__label-text col-sm">Мобильный телефон:</div>
                <input class="form__input col-sm" type="text" name="" placeholder=""/>
              </label>

              <div>
                <p>Адрес фактический</p>
              </div>
              <hr>
              <div class="row">
                <button>Ввести адрес</button>
                <button>Копировать из студента</button>
              </div>
              <label class="row">
                <div class="form__label-text col-sm">Адрес:</div>
                <textarea class="col-sm" name=""></textarea>
              </label>

              <div class="clear_save_button row">
                <button>Очистить</button>
                <button>Сохранить</button>
              </div>
            </div>
          </div>
        </tab>
        <!--<tab id="" name="Адресные данные">-->
          <!--<div class="inner_tab row">-->
            <!--<div class="col-sm-5">-->
              <!--<div>-->
                <!--<p>Адрес фактический</p>-->
              <!--</div>-->
              <!--<hr>-->
              <!--<div class="row">-->
                <!--<button>Ввести адрес</button>-->
                <!--<button>Копировать из студента</button>-->
              <!--</div>-->
              <!--<label class="row">-->
                <!--<div class="form__label-text col-sm-4">Адрес:</div>-->
                <!--<textarea class="col-sm-8" name=""></textarea>-->
              <!--</label>-->
            <!--</div>-->
          <!--</div>-->
        <!--</tab>-->
      </tabs>
    </div>
</template>

<script>
    export default {
        name: "TabParentInfo",
      data () {
        return {
          headers_parent: [
            { text: 'Кем приходится', value: 'who_parent', sortable: false, align: 'center' },
            { text: 'Ф.И.О.', value: 'snp_parent',sortable: false, align: 'center' },
            { text: 'Фамилия', value: 'surname_parent',sortable: false, align: 'center' },
            { text: 'Имя', value: 'name_parent', sortable: false, align: 'center' },
            { text: 'Отчество', value: 'patronymic_parent',sortable: false, align: 'center' },
            { text: 'Пол', value: 'gender_parent',sortable: false, align: 'center' },

          ],
          info_parent: [],
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
    margin-top: 10%;
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
