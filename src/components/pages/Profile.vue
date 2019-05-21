<template>
    <div class="outer">
      <div class="row search_place">
        <p>Абитуриент:</p>
        <form>
          <p>
            <input type="search" name="поиск" placeholder="Поиск по сайту">
            <input type="submit" value="Заявление">
          </p>
        </form>
      </div>
      <div>
        <!--<tabs :options="{ useUrlFragment: false }">-->
        <tabs class="main_tab">
          <tab id="" name="Обзор">
            <div class="tab_one">
              <!--<h5>название</h5>-->
              <!--<select>-->
                <!--<template v-for="item in items">-->
                  <!--<option>{{item.message}}</option>-->
                <!--</template>-->
              <!--</select>-->
            </div>
          </tab>

          <tab class="personal_tab" id="specialty" name="Личные сведения">
            <div class="inner_tab row">
              <div class="info_main col-sm">
                <div>
                  <p>Личные сведения</p>
                </div>
                <hr>
                <div>
                  <label class="row">
                    <div class="form__label-text col-sm">Ф.И.О</div>
                    <input  class="form__input col-sm" type="text" name="snp" placeholder="Заполняется автоматически" disabled="disabled"/>
                  </label>
                  <!--в фамилия namespace not found in mapState()-->
                  <label class="row">
                    <div class="form__label-text col-sm">Фамилия</div>
                    <input class="form__input col-sm" type="text" name="surname" placeholder="Фамилия" required/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Имя</div>
                    <input  class="form__input col-sm" type="text" name="name" placeholder="Имя" required/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Отчество</div>
                    <input class="form__input col-sm" type="text" name="patronymic" placeholder="Отчество" required/>
                  </label>
                  <hr>
                  <label class="row">
                    <div class="form__label-text col-sm">Фамилия в род.п.</div>
                    <input class="form__input col-sm" type="text" name="surname_genitive" placeholder="Фамилия в родительном п." required/>
                  </label>
                  <label class="row">
                  <div class="form__label-text col-sm">Имя в род.п.</div>
                  <input class="form__input col-sm" type="text" name="name_genitive" placeholder="Имя в родительном п." required/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Отчество в род.п.</div>
                    <input class="form__input col-sm" type="text" name="patronymic_genitive" placeholder="Отчество в родительном п." required/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Ф.И.О.(род. п.)</div>
                    <input class="form__input col-sm" type="text" name="snp_genitive" placeholder="Заполняется автоматически" disabled="disabled"/>
                  </label>
                  <label class="alarm_label">Проверьте Ф.И.О. в родительном падеже для Заявления.</label>
                  <label class="row">
                    <div class="form__label-text col-sm">Пол:</div>
                    <select class="col-sm">
                      <option>Пункт 1</option>
                      <option>Пункт 2</option>
                    </select>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Дата рождения:</div>
                    <input class="form__input col-sm" type="date" name="birthday" required/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Полных лет:</div>
                    <input class="form__input col-sm" type="text" name="age" placeholder="Заполняется автоматически" disabled="disabled"/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">СНИЛС</div>
                    <input class="form__input col-sm" type="text" name="snils" placeholder="***_***_***" required/>
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
                    <select class="col-sm" name="doc_type">
                      <option>Паспорт РФ</option>
                      <option>Не паспорт РФ</option>
                    </select>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Серия:</div>
                    <input class="form__input col-sm" type="text" name="doc_serial" placeholder="Серия документа" required/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Номер:</div>
                    <input class="form__input col-sm" type="text" name="doc_number" placeholder="Номер документа" required/>
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
                    <input class="form__input col-sm" type="text" name="doc_code_unit" placeholder="***_***" required/>
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
                    <input class="form__input col-sm" type="text" name="home_phone_number" placeholder="" required/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Мобильный телефон:</div>
                    <input class="form__input col-sm" type="text" name="mobile_number" placeholder="" required/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Эл. почта:</div>
                    <input class="form__input col-sm" type="email" name="email" placeholder="" required/>
                  </label>
                  <hr>
                  <label class="row">
                    <div class="form__label-text col-sm">Организация:</div>
                    <input class="form__input col-sm" type="text" name="organization_name" placeholder="Название организации"/>
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
                    <input class="form__input col-sm" type="text" name="seniority" placeholder="Заполняется автоматически" disabled="disabled"/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Стаж, лет:</div>
                    <input class="form__input col-sm" type="number" name="seniority_year" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Стаж, месяцев:</div>
                    <input class="form__input col-sm" type="number" name="seniority_month" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Стаж, дней:</div>
                    <input class="form__input col-sm" type="number" name="seniority_day" placeholder=""/>
                  </label>
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
          </tab>

          <!--///////////////////////////////////////-->
          <tab id="contacts" name="Адресные данные">
              <div class="inner_tab row">
                <div class="info_address col-sm">
                  <div>
                    <p>Адрес по прописке</p>
                  </div>
                  <hr>
                  <div class="buttons row">
                    <button>Ввести адрес</button>
                  </div>
                  <label class="row">
                    <div class="form__label-text col-sm">Адрес:</div>
                    <textarea class="col-sm" name=""></textarea>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Типа нас. пункта:</div>
                    <input class="form__input col-sm" type="number" name="" placeholder=""/>
                  </label>
                </div>
                <div class="info_address2 col-sm">
                  <div>
                    <p>Адрес фактический</p>
                  </div>
                  <hr>
                  <div class="buttons row">
                    <button>Ввести адрес</button>
                    <button>Копировать</button>
                  </div>
                  <label class="row">
                    <div class="form__label-text col-sm">Адрес:</div>
                    <textarea class="col-sm" name=""></textarea>
                  </label>
                </div>
                <div class="info_address2 col-sm">
                  <div>
                    <p>Адрес временной регистрации</p>
                  </div>
                  <hr>
                  <div class="buttons row">
                   <button>Ввести адрес</button>
                  </div>
                  <label class="row">
                    <div class="form__label-text col-sm">Адрес:</div>
                    <textarea class="col-sm" name=""></textarea>
                  </label>
                </div>
              </div>
          </tab>

          <tab id="graduate_military" name="Образование, военная служба">
            <div class="inner_tab row">
              <div class="col-sm">
                <div>
                  <p>Образование</p>
                </div>
                <hr>
                <div>
                  <label class="row">
                    <div class="form__label-text col-sm">Уровень образования:</div>
                    <select class="col-sm-2" name="">
                      <option>код 1</option>
                      <option>код 2</option>
                      <option>код 3</option>
                    </select>
                    <input class="form__input col-sm-6" type="text" name="" placeholder="Заполняется автоматически" disabled="disabled"/>
                  </label>
                </div>
                <div>
                  <p>Учебное заведение</p>
                </div>
                <hr>
                <div>
                  <label class="row">
                    <div class="form__label-text col-sm">Наименование:</div>
                    <textarea class="col-sm" name=""></textarea>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Страна:</div>
                    <select class="col-sm" name="">
                      <option>РФ</option>
                      <option>Другая страна 1</option>
                      <option>Другая страна 2</option>
                    </select>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Регион:</div>
                    <select class="col-sm" name="">
                      <option>Адыгея</option>
                      <option>Другой регион 1</option>
                      <option>Другой регион 2</option>
                    </select>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Дата окончания:</div>
                    <select class="col-sm" name="">
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                    </select>
                  </label>
                </div>
                <div>
                  <p>Документ об образовании</p>
                </div>
                <hr>
                <div>
                  <label class="row">
                    <div class="form__label-text col-sm">Документ об образовании:</div>
                    <select class="col-sm-2" name="">
                      <option>код 1</option>
                      <option>код 2</option>
                      <option>код 3</option>
                    </select>
                    <input class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически" disabled="disabled"/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Серия:</div>
                    <input class="form__input col-sm" type="number" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Номер:</div>
                    <input class="form__input col-sm" type="number" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Дата выдачи:</div>
                    <input class="form__input col-sm" type="date" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Наименование:</div>
                    <textarea class="col-sm" name=""></textarea>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Серия приложения:</div>
                    <input class="form__input col-sm" type="number" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Номер приложения:</div>
                    <input class="form__input col-sm" type="number" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Средний балл:</div>
                    <input class="form__input col-sm" type="text" name="" placeholder="Заполняется автоматически" disabled="disabled"/>
                    <button >Расчет среднего балла</button>
                  </label>
                </div>
              </div>
              <div class="col-sm">
                <div>
                  <p>Военная служба</p>
                </div>
                <hr>
                <div>
                  <label class="row">
                    <div class="form__label-text col-sm">Отношение к военной службе:</div>
                    <select class="col-sm" name="">
                      <option>Невоеннообязанный</option>
                      <option>Военнообязанный</option>
                      <option>Другое</option>
                    </select>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Прохождение службы:</div>
                    <select class="col-sm" name="">
                      <option>Служил</option>
                      <option>Не служил</option>
                      <option>Другое</option>
                    </select>
                  </label>
              </div>
                <div>
                  <p>Документ о военной службе</p>
                </div>
                <hr>
                <div>
                  <label class="row">
                    <div class="form__label-text col-sm">Тип документа:</div>
                    <select class="col-sm" name="">
                      <option>Не определено</option>
                      <option>вариант 2</option>
                      <option>Другое</option>
                    </select>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Номер военного билета:</div>
                    <input class="form__input col-sm" type="number" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Серия:</div>
                    <input class="form__input col-sm" type="number" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Дата выдачи:</div>
                    <input class="form__input col-sm" type="date" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Кем выдан:</div>
                    <textarea class="col-sm" name=""></textarea>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Воинское звание:</div>
                    <input class="form__input col-sm" type="text" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Копия/Оригинал:</div>
                    <select class="col-sm" name="">
                      <option>Оригинал</option>
                      <option>Копия</option>
                    </select>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Дата предоставления:</div>
                    <input class="form__input col-sm" type="date" name="" placeholder=""/>
                  </label>
                </div>
                <div>
                  <p>Документ о военной службе</p>
                </div>
                <hr>
                <div>
                  <label class="row">
                    <div class="form__label-text col-sm">Дата начала:</div>
                    <input class="form__input col-sm" type="date" name="" placeholder=""/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Дата окончания:</div>
                    <input class="form__input col-sm" type="date" name="" placeholder=""/>
                  </label>
                </div>
                <div>
                  <p>Дополнительные сведения</p>
                </div>
                <hr>
              </div>
            </div>
          </tab>

          <tab id="evidence_ege" name="Свидетельства ЕГЭ">
            <tabs class="ege_tabs">
              <tab id="" name="Свидетельства ЕГЭ">
                <div>
                  <p>Свидетельство</p>
                </div>
                <hr>
                <div>
                  <p>Предметы</p>
                </div>
                <hr>
              </tab>
              <tab id="" name="Паспортные данные для свидетельства">
              </tab>
            </tabs>
          </tab>
          <tab id="parent_trustee" name="Родитель/Попечитель">
            <tabs class="parent_tabs">
              <tab id="" name="Обзор">

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
                    <div class="clear_save_button row">
                      <button>Очистить</button>
                      <button>Сохранить</button>
                    </div>
                  </div>


                </div>

              </tab>
              <tab id="" name="Адресные данные">
                <div class="inner_tab row">
                  <div class="col-sm-5">
                    <div>
                      <p>Адрес фактический</p>
                    </div>
                    <hr>
                    <div class="row">
                      <button>Ввести адрес</button>
                      <button>Копировать из студента</button>
                    </div>
                    <label class="row">
                      <div class="form__label-text col-sm-4">Адрес:</div>
                      <textarea class="col-sm-8" name=""></textarea>
                    </label>
                  </div>
                </div>
              </tab>
            </tabs>
          </tab>
          <tab id="distinctive_features" name="Отличительные признаки">

          </tab>
          <tab id="photo" name="Фотография">
            <div class="clear_save_photo row">
              <button>Очистить</button>
              <button>Сохранить</button>
              <div class="col-sm-4">

              </div>
            </div>
          </tab>

        </tabs>
      </div>
    </div>
</template>



<script>
  import { mapState, mapGetters } from 'vuex'

    export default {
        name: "SomeInput",

      computed:{
        ...mapState('tab_personal_info', ['snp', 'surname', 'name_profile', 'patronymic', 'surname_genitive',
        'name_genitive', ' patronymic_genitive', 'snp_genitive', 'gender', 'birthday', 'age', 'snils',
        'snils_date', 'note', 'doc_type', 'doc_serial', 'doc_number', 'doc_issued_by', 'doc_issued_date',
        'doc_code_unit', 'citizenship', 'compatriot', 'equate_foreign', 'birth_place', 'hostel',
        'foreign_like_russian', 'home_phone_number', 'mobile_number', 'email', 'organization_name',
        'organization_address', 'organization_profession', 'seniority', 'seniority_year', 'seniority_month',
        'seniority_day', 'foreign_language', 'language_name', 'language_score']),
        ...mapGetters('tab_personal_info', ['form'])
      }
    }
</script>

<style scoped>
  .clear_save_button {
    margin-top: 90%;
    margin-left: 65%;
    display: flex;
    /*justify-content: space-between;*/
  }
  .outer {
    margin: 5px;
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
    margin-top: -45px;
  }
  .parent_tabs {
    margin-top: -45px;
  }
  .inner_tab {
    margin-top: -60px;
  }
  p {
    font-size: 25px;
  }
  button {
    min-width: 100px;
    padding: 10px;
    /*border: none;*/
    border-radius:5px;
    background-color: #99ccff;
    font-size: 16px;
    cursor: pointer;
  }

  .checkbox {
    transform:scale(1.3);
    opacity:0.9;
    cursor:pointer;
  }
  .main_tab {
    margin-top: -20px;
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
