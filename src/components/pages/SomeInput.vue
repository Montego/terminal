<template>
    <div>
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
        <tabs>
          <tab id="" name="Обзор">
            <div class="tab_one">
              <h5>название</h5>
              <select>
                <template v-for="item in items">
                  <option>{{item.message}}</option>
                </template>
              </select>
            </div>
          </tab>

          <tab id="specialty" name="Личные сведения">
            <div class="personal_info row">
              <div class="info_main col-sm">
                <div>
                  <p>Личные сведения</p>
                </div>
                <div>
                  <label class="row">
                    <div class="form__label-text col-sm">Ф.И.О</div>
                    <input class="form__input col-sm" type="text" name="snp" placeholder="Заполняется автоматически" required/>
                  </label>
                  <label class="row">
                    <div class="form__label-text col-sm">Фамилия</div>
                    <input class="form__input col-sm" type="text" name="surname" placeholder="Фамилия" required/>
                  </label>
                </div>

              </div>
              <div class="info_pasp col-sm">
                <p>Паспортные данные</p>
              </div>
              <div class="info_contacts col-sm">
                <p>Контактные данные</p>
              </div>
            </div>
          </tab>
          <tab id="residency" name="Адресные данные">

          </tab>
          <tab id="postgraduate" name="Образование, военная служба">

          </tab>
          <tab id="contacts" name="Свидетельства ЕГЭ">

          </tab>
          <tab id="contacts" name="Родитель/Попечитель">

          </tab>
          <tab id="contacts" name="Отличительные признаки">

          </tab>
          <tab id="contacts" name="Фотография">

          </tab>

        </tabs>
      </div>
    </div>
</template>



<script>
  import { mapState, mapGetters } from 'vuex'

    export default {
        name: "SomeInput",

        data: () => ({
          items: [
            { message: 'первый вариант' },
            { message: 'второй вариант' }
          ]
      }),
      computed:{
        ...mapState('tab_personal_info', ['snp', 'surname', 'name', 'patronymic', 'surname_genitive',
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

  .search_place {
    margin-top: 30px;
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
