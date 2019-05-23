<template>
    <div class="outer">

      <div class="row search_place">
          <label class="row search_form">
            <div class="col-sm">Абитуриент:</div>
            <input class="col-sm" type="search" name="поиск" placeholder="Поиск по сайту">
          </label>
            <!--<input type="submit" value="Заявление">-->
            <button class="search_button col-sm-2">Заявление</button>

      </div>
      <div>
        <!--<tabs :options="{ useUrlFragment: false }">-->
        <tabs class="main_tab">
          <tab id="" name="Обзор">
            <v-data-table
              :headers="headers_all_pretendents"
              :items="info_all_pretendents"
              class="elevation-1 text-xs-center"
            >
              <template slot="items" slot-scope="props">
                <td class="text-xs-center">{{ props.item.snp_pretendent }}</td>
                <td class="text-xs-center">{{ props.item.surname_pretendent }}</td>
                <td class="text-xs-center">{{ props.item.name_pretendent}}</td>
                <td class="text-xs-center">{{ props.item.patronymic_pretendent}}</td>
                <td class="text-xs-center">{{ props.item.gender_pretendent}}</td>
                <td class="text-xs-center">{{ props.item.birthday_pretendent}}</td>
                <td class="text-xs-center">{{ props.item.contact_code_pretendent}}</td>
              </template>
            </v-data-table>
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
                    <input class="form__input col-sm" type="text" name="snp" placeholder="Заполняется автоматически" disabled="disabled"/>
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
                      <option v-for="gender in options_gender">{{gender.item}}</option>
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
                    <button class="adress_button">Ввести адрес</button>
                  </div>
                  <label class="row">
                    <div class="form__label-text col-sm-2">Адрес:</div>
                    <textarea class="col-sm-10" name=""></textarea>
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
                    <button class="adress_button">Ввести адрес</button>
                    <button class="adress_button">Копировать</button>
                  </div>
                  <label class="row">
                    <div class="form__label-text col-sm-2">Адрес:</div>
                    <textarea class="col-sm-10" name=""></textarea>
                  </label>
                </div>
                <div class="info_address2 col-sm">
                  <div>
                    <p>Адрес временной регистрации</p>
                  </div>
                  <hr>
                  <div class="buttons row">
                   <button class="adress_button">Ввести адрес</button>
                  </div>
                  <label class="row">
                    <div class="form__label-text col-sm-2">Адрес:</div>
                    <textarea class="col-sm-10" name=""></textarea>
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
                    <button class="calculate_score">Расчет среднего балла</button>
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
                <div class="row">
                  <div class="col-sm">
                    <div>
                      <p>Свидетельство</p>
                    </div>
                    <v-data-table
                      :headers="headers_ege_evidence"
                      :items="info_ege_evidence"
                      class="elevation-1 text-xs-center"
                    >
                      <template slot="items" slot-scope="props">
                        <td class="text-xs-center">{{ props.item.ege_evidence_number}}</td>
                        <td class="text-xs-center">{{ props.item.ege_evidence_date}}</td>
                        <td class="text-xs-center">{{ props.item.ege_evidence_t_number}}</td>
                        <td class="text-xs-center">{{ props.item.ege_evidence_score}}</td>
                        <td class="text-xs-center">{{ props.item.ege_evidence_copy_origin}}</td>
                        <td class="text-xs-center">{{ props.item.ege_evidence_date_show}}</td>
                        <td class="text-xs-center">{{ props.item.ege_evidence_form_ege}}</td>
                        <td class="text-xs-center">{{ props.item.ege_evidence_place_ege}}</td>
                        <td class="text-xs-center">{{ props.item.ege_evidence_year_ege}}</td>
                        <td class="text-xs-center">{{ props.item.ege_evidence_date_status}}</td>
                      </template>
                    </v-data-table>
                    <hr>
                    <div>
                      <p>Предметы</p>
                    </div>
                    <v-data-table
                      :headers="headers_ege_subjects"
                      :items="info_ege_subjects"
                      class="elevation-1 text-xs-center"
                    >
                      <template slot="items" slot-scope="props">
                        <td class="text-xs-center">{{ props.item.ege_subject_name}}</td>
                        <td class="text-xs-center">{{ props.item.ege_ball_1}}</td>
                        <td class="text-xs-center">{{ props.item.ege_ball_2}}</td>
                        <td class="text-xs-center">{{ props.item.ege_appeal_status}}</td>
                      </template>
                    </v-data-table>
                  </div>
                </div>

              </tab>
              <tab id="" name="Паспортные данные для свидетельства">
                <div class="inner_tab row">
                  <div class="col-sm-6">
                    <div>
                      <p>Паспортные данные для свидетельства</p>
                    </div>
                    <hr>
                    <div>
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
                        <div class="form__label-text col-sm">Документ</div>
                        <select class="col-sm-4" name="">
                          <option>Паспорт РФ</option>
                          <option>Не паспорт РФ</option>
                        </select>
                        <input class="form__input col-sm-6" type="text" name="" placeholder="Заполняется автоматически" disabled="disabled"/>
                      </label>
                      <label class="row">
                        <div class="form__label-text col-sm">Серия:</div>
                        <input class="form__input col-sm" type="text" name="" placeholder=""/>
                      </label>
                      <label class="row">
                        <div class="form__label-text col-sm">Номер:</div>
                        <input class="form__input col-sm" type="text" name="" placeholder=""/>
                      </label>
                      <label class="row">
                        <div class="form__label-text col-sm">Дата начала:</div>
                        <input class="form__input col-sm" type="date" name="" placeholder=""/>
                      </label>
                      <label class="row">
                        <div class="form__label-text col-sm-2">Кем выдан:</div>
                        <textarea class="col-sm-10" name=""></textarea>
                      </label>
                      <label class="row">
                        <div class="form__label-text col-sm">Гражданство</div>
                        <select class="col-sm" name="">
                          <option>РФ</option>
                          <option>Казахстан</option>
                        </select>
                      </label>

                    </div>
                  </div>
                    </div>
              </tab>
            </tabs>
          </tab>
          <tab id="parent_trustee" name="Родитель/Попечитель">
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
            <div>
              <p>Отличительные признаки</p>
            </div>
            <div class="row">
              <button>Добавить</button>
            </div>
            <div class="">
              <div class="distinctive_features_top">
                <v-hover :disabled="true">
                  <v-data-table
                    :headers="headers_features_info"
                    :items="info_features_info"
                    class="elevation-1 text-xs-center"
                  >
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-center">{{ props.item.code }}</td>
                      <td class="text-xs-center">{{ props.item.type_sygn }}</td>
                      <td class="text-xs-center">{{ props.item.name }}</td>
                      <td class="text-xs-center">{{ props.item.type_diplom }}</td>
                      <td class="text-xs-center">{{ props.item.ball_1}}</td>
                      <td class="text-xs-center">{{ props.item.done }}</td>
                      <td class="text-xs-center">{{ props.item.ball_2}}</td>
                    </template>

                  </v-data-table>
                </v-hover>
                <div class="distinctive_features_bottom">
                  <div>
                    <p>Прикрепленные документы</p>
                  </div>
                  <div class="row">
                    <button>Добавить</button>
                  </div>
                  <div class="row">
                    <button>Редактировать</button>
                  </div>
                  <v-data-table
                    :headers="headers_features_documents"
                    :items="info_features_documents"
                    class="elevation-1 text-xs-center"
                  >
                    <template slot="items" slot-scope="props">
                      <td class="text-xs-center">{{ props.item.num }}</td>
                      <td class="text-xs-center">{{ props.item.documents }}</td>
                      <td class="text-xs-center">{{ props.item.copy_or_origin }}</td>

                    </template>
                  </v-data-table>
                </div>
              </div>
            </div>
          </tab>
          <tab id="photo" name="Фотография">
            <div class="clear_save_photo row">
              <!--<v-button>Очистить</v-button>-->
              <button>Очистить</button>
              <button>Сохранить</button>
              <v-btn>Test of animations</v-btn>
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
      },
      data () {
        return {

      // tables
        headers_all_pretendents: [
          { text: 'Ф.И.О.', value: 'snp_pretendent', sortable: false, align: 'center' },
          { text: 'Фамилия', value: 'surname_pretendent',sortable: false, align: 'center' },
          { text: 'Имя', value: 'name_pretendent',sortable: false, align: 'center' },
          { text: 'Отчество', value: 'patronymic_pretendent',sortable: false, align: 'center' },
          { text: 'Пол', value: 'gender_pretendent',sortable: false, align: 'center' },
          { text: 'Дата рождения', value: 'birthday_pretendent',sortable: false, align: 'center' },
          { text: 'Код контактного лица', value: 'contact_code_pretendent',sortable: false, align: 'center' },
        ],
          info_all_pretendents: [],

          headers_ege_evidence: [
            { text: '№', value: 'ege_evidence_number', sortable: false, align: 'center' },
            { text: 'Дата выдачи', value: 'ege_evidence_date',sortable: false, align: 'center' },
            { text: 'Типограф.а №', value: 'ege_evidence_t_number',sortable: false, align: 'center' },
            { text: 'Сумма баллов', value: 'ege_evidence_score',sortable: false, align: 'center' },
            { text: 'Коп/ориг.', value: 'ege_evidence_copy_origin',sortable: false, align: 'center' },
            { text: 'Предоставлено', value: 'ege_evidence_date_show', sortable: false,align: 'center' },
            { text: 'Форма ЕГЭ', value: 'ege_evidence_form_ege',sortable: false, align: 'center' },
            { text: 'Место проведения', value: 'ege_evidence_place_ege',sortable: false, align: 'center' },
            { text: 'Год', value: 'ege_evidence_year_ege',sortable: false, align: 'center' },
            { text: 'Статус', value: 'ege_evidence_date_status',sortable: false, align: 'center' }

          ],
          info_ege_evidence: [],

          headers_ege_subjects: [
            { text: 'Предмет', value: 'ege_subject_name', sortable: false, align: 'center' },
            { text: 'Балл', value: 'ege_ball_1',sortable: false, align: 'center' },
            { text: 'Балл(ФИС)', value: 'ege_ball_2',sortable: false, align: 'center' },
            { text: 'Статус апелляция', value: 'ege_appeal_status',sortable: false, align: 'center' },
          ],
          info_ege_subjects: [],

          headers_parent: [
            { text: 'Кем приходится', value: 'who_parent', sortable: false, align: 'center' },
            { text: 'Ф.И.О.', value: 'snp_parent',sortable: false, align: 'center' },
            { text: 'Фамилия', value: 'surname_parent',sortable: false, align: 'center' },
            { text: 'Имя', value: 'name_parent', sortable: false, align: 'center' },
            { text: 'Отчество', value: 'patronymic_parent',sortable: false, align: 'center' },
            { text: 'Пол', value: 'gender_parent',sortable: false, align: 'center' },

          ],
          info_parent: [],

          headers_features_info: [
            { text: 'Код', value: 'code', sortable: false, align: 'center' },
            { text: 'Тип признака', value: 'type_sygn',sortable: false, align: 'center' },
            { text: 'Название', value: 'name',sortable: false, align: 'center' },
            { text: 'Тип диплома', value: 'type_diplom', sortable: false,align: 'center' },
            { text: 'Балл ИД', value: 'ball_1', sortable: false, align: 'center' },
            { text: 'Выполнено', value: 'done', sortable: false, align: 'center' },
            { text: 'Балл экс.в ФИС.', value: 'ball_2',sortable: false, align: 'center' },
          ],
          info_features_info: [],

          headers_features_documents: [
            { text: '№', value: 'num', sortable: false, align: 'center' },
            { text: 'Документ', value: 'documents',sortable: false, align: 'center' },
            { text: 'Копия(Оригинал)', value: 'copy_or_origin',sortable: false, align: 'center' },
          ],
          info_features_documents: [],
//test data
          options_gender: [
            {id: 0, item:'-выберите пол-'},
            {id: 1, item:'Мужской'},
            {id: 2, item:'Женский'},
            {id: 3, item:'Другое'},
          ],
          options_document_type: [
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
      },
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
