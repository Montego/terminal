<template>
  <div>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      @toApplication="onAppl(person_info_id)"
    />
    <div>
      <button v-if="isModalVisible === false" color="#5bc0de" @click="GetSavedProfile()">
        Показать
      </button>
      <button v-if="isModalVisible === false" color="#5bc0de" @click="onNewProfile()">
        +
      </button>
    </div>


    <v-data-table data-app
                  :headers="headers_profile"
                  :items="profiles" hide-actions
                  class="elevation-1 text-xs-center"
    >
      <template slot="items" slot-scope="props">
        <!--<td class="text-xs-center">{{ props.item.profile_1_personal_name }}</td>-->
        <td class="text-xs-center">{{ props.item.tab_personal_lastname }}</td>
        <td class="text-xs-center">{{ props.item.tab_personal_firstname}}</td>
        <td class="text-xs-center">{{ props.item.tab_personal_middlename}}</td>
        <!--<td class="text-xs-center">{{ props.item.tab_personal_selectedGender}}</td>-->
        <td class="text-xs-center">{{ props.item.tab_personal_birthDate}}</td>
        <!--<td class="text-xs-center">{{ props.item.application_number}}</td>-->
        <!--<td class="text-xs-center">{{ props.item.contact_code_pretendent}}</td>-->
        <td class="justify-center layout px-0">
          <!--<button class = "button_controls" type="button" @click="onApplication(props.item); handleClick(false) ">-->
          <button class = "button_controls" type="button" @click="onRedaction(props.item), handleClick(3) " title="Посмотреть заявление">
          <v-icon color="#5bc0de">description</v-icon>
          </button>
          <div>
            <button v-if="isModalVisible === false" class="button_controls" type="button"
                    @click="onRedaction(props.item)"
                    title="Посмотреть личные сведения">
              <v-icon color="#5bc0de">visibility</v-icon>
            </button>
          </div>

          <!--<div>-->
          <!--TODO скрыть-->
            <!--<button class="button_controls" type="button" @click="axapta(props.item.id)">-->
              <!--<v-icon color="#5bc0de">save</v-icon>-->
            <!--</button>-->

          <!--</div>-->
          <!--<div v-if="isModalVisible === false">-->
            <!--<button class="button_controls" v-if="props.item.resultAcceptPerson !=='Утверждено'"-->
                    <!--@click="onRedaction(props.item)">-->
              <!--<v-icon color="#5bc0de">edit</v-icon>-->
            <!--</button>-->
          <!--</div>-->

        </td>
      </template>
      <template slot="no-data">
        <div></div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import {AXIOS, AXIOS_print} from "../../plugins/APIService";
  import {createHelpers} from 'vuex-map-fields';
  import modal from "../../modals/modal";
  import {mapGetters, mapMutations} from "vuex";

  const {mapFields: applications} = createHelpers({
    getterType: `applications/getField`,
    mutationType: `applications/updateField`,
  });
  const {mapFields: person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });

  export default {
    name: "TabOverview",
    components: {
      modal
    },
    props: {
      handleClick: Function,
    },
    data() {
      return {
        personInfo: [],
        titles: [
          {
            title: 'Личные сведения'
          },
        ],

        headers_profile: [
          // { text: 'Ф.И.О.', value: 'personal_name', sortable: false, align: 'center' },
          {text: 'Фамилия', value: 'tab_personal_lastname',  align: 'center'},
          {text: 'Имя', value: 'firstname', sortable: false, align: 'center'},
          {text: 'Отчество', value: 'middlename', sortable: false, align: 'center'},
          // { text: 'Пол', value: 'selectedGender',sortable: false, align: 'center' },
          {text: 'Дата рождения', value: 'birthDate', sortable: false, align: 'center'},
          // { text: '№ Заявления', value: 'application_number',sortable: false, align: 'center' },
          {text: 'Действия', value: 'name', sortable: false, align: 'center'}
        ],
        pretendets: [],

      }
    },
    computed: {
      ...person(['user','person', 'showProfile', 'profiles', 'isModalVisible',
        'tab_personal_lastname', 'tab_personal_firstname', 'tab_personal_middlename', 'tab_personal_lastname_genitive',
        'tab_personal_firstname_genitive', 'tab_personal_middlename_genitive', 'tab_personal_selectedGender', 'tab_personal_birthDate',
        'tab_personal_INIPA', 'tab_personal_INIPADate', 'tab_personal_note', 'tab_personal_selectedIdentityCardCode',
        'tab_personal_identityCardSeries', 'tab_personal_identityCardNumber', 'tab_personal_identityCardIssueBy',
        'tab_personal_identityCardIssueDate', 'tab_personal_identityCardIssueDep', 'tab_personal_selectedCitizenship',
        'tab_personal_isCompatriot', 'tab_personal_isEquatedForeign', 'tab_personal_birthplace', 'tab_personal_isHostel',
        'tab_personal_isForeignLikeRussian', 'tab_personal_homePhoneNumber', 'tab_personal_cellularPhone', 'tab_personal_email',
        'tab_personal_company_name', 'tab_personal_company_address', 'tab_personal_seniority', 'tab_personal_employYears',
        'tab_personal_employMonths', 'tab_personal_employDays', 'tab_personal_selectedForeignLanguageInfo', 'selected_foreignLanguageName1',
        'language_score1', 'selected_foreignLanguageName2', 'language_score2', 'selected_foreignLanguageName3', 'language_score3',
        'tab_address_registrationAddress', 'tab_address_factAddress', 'tab_address_templateRegistrationAddress', 'tab_edu_military_educationLevel',
        'tab_edu_military_univer', 'tab_edu_military_selectedCountryRegion', 'tab_edu_military_selectedState', 'tab_edu_military_selectedAcademyYear',
        'tab_edu_military_selectedEduDoc', 'tab_edu_military_eduDocSerial', 'tab_edu_military_eduDocNumber', 'tab_edu_military_eduDocDate',
        'tab_edu_military_eduDocName', 'tab_edu_military_attachment_serial', 'tab_edu_military_attachment_number', 'score_five', 'score_four',
        'score_three', 'score_full', 'averageScore', 'tab_edu_military_selectedSoldiery', 'tab_edu_military_selectedSoldieryStatus', 'tab_edu_military_selectedMilitaryFormDoc',
        'tab_edu_military_militaryNumber', 'tab_edu_military_militarySeries', 'tab_edu_military_militaryIssueDate', 'tab_edu_military_militaryIssueBy',
        'tab_edu_military_militaryRank', 'tab_edu_military_selectedDocType', 'tab_edu_military_docMilitaryShowDate', 'tab_edu_military_startMilitary',
        'tab_edu_military_endMilitary', 'selectedExtraInfos1', 'selectedExtraInfos2', 'extraInfosDescription1', 'extraInfosDescription2', 'image', 'person_info_id',
        'resultAcceptPerson', 'savedResult', 'saved','showPrintApplication','showPrintDocuments','showPrintAgreement','imageOf'
      ]),
      ...applications(['application', 'application_person_id', 'application_person_name', 'applId', 'applTableName',
        'applTableNumber', 'applTableDate', 'applTableDeliveryType', 'apls', 'chooseAppls', 'resultApl',
        'countContract','countBudget'],),

      ...mapGetters(['countOfAddParent']),
      showTable() {
        return this.profiles;
      },

    },
    mounted() {
      return this.profiles;
    },

    methods: {
      customSort(items, index, isDesc) {
        items.sort((a, b) => {
          if (index === "tab_personal_lastname") {
            if (!isDesc) {
              return compare(a.tab_personal_lastname, b.tab_personal_lastname);
            } else {
              return compare(b.tab_personal_lastname, a.tab_personal_lastname);
            }
          }
        });
        return items;
      },


      ...mapMutations(['increment', 'decrement', 'default']),
      axapta(id) {
        console.log('in axapta method');
        this.$store.dispatch('go', id);
      },

      GetSavedProfile() {
        AXIOS.get(`/profile/personsTable`)
          .then(response => {
            this.profiles = response.data;
            console.log(this.profiles)
          })
          .catch(e => {
            this.errors.push(e)
          })
      },

      showModal() {
        if (this.saved !== 'Сохранено') {
          AXIOS.get('profile/application/' + (this.person_info_id)).then(response => {
            this.person.application = response.data;
          })
            .catch(e => {
              this.errors.push(e)
            })
          this.showProfile = false;
        } else {
        }
        location.href = 'profile#overview_new';
      },

      closeModal() {
        this.isModalVisible = false;
      },
      ...mapGetters(['ADRDTO']),
      ...mapGetters(['ADRText']),
      ...mapGetters(['ADRSearchObject']),
      onNewProfile() {
        this.showPrintApplication =  false;
        this.showPrintDocuments = false;
        this.showPrintAgreement = false;
        // this.$store.dispatch('onClearIdsFromAxapta');
        this.ADRSearchObject()[0] = {};
        this.ADRSearchObject()[1] = {};
        this.ADRSearchObject()[2] = {};

        this.countContract = 0;
        this.countBudget = 0;
        // this.person.ege_info = [];
        this.person.parents_info = [];
        this.person.futures_info = [];
        this.person_info_id = '';
        this.person.person_info_id = '';
        this.person.applications = [];
        this.person.application.application_selectedDocType = {"id": 0, "name": "Копия"};
        this.person.application.application_selectedDeliveryType = {"id":0,"name":"Лично"};
        this.person.application.application_selectedDeliveryReturnType = {"id":0,"name":"Лично"};

        this.profiles = [];

        this.successMessage = "";

        this.person.person_info.addressesDto = [];

        this.person.id = '';
        this.person.person_info.id = '';
        this.person_info_id = '';
        this.person.person_info_id = '';
        this.person.application.saved = '';
        this.person.application.application_number = '';
        this.person.application.application_date = '';
        this.person.application.choosenWizards = [];
        this.person.application.application_documents = [];
        this.person.application.application_selectedDeliveryType = {};
        this.person.application.application_selectedDocType = '';
        this.person.application.application_person_name = '';

        this.person.acceptedPerson = '';
        this.resultAcceptPerson = '';

        this.person.ege_info[0].tab_ege_selectedSubject = 'Химия';
        this.person.ege_info[0].tab_ege_score = 0;
        this.person.ege_info[0].tab_ege_year = {
          "academyYearId": "2019",
          "description": "2019-ый учебный год",
          "beginPeriod": "2019-01-01",
          "endPeriod": "2019-12-31"
        };
        this.person.ege_info[0].tab_ege_changePaspInf = false;
        this.person.ege_info[0].tab_ege_lastname = '';
        this.person.ege_info[0].tab_ege_firstname = '';
        this.person.ege_info[0].tab_ege_middlename = '';
        this.person.ege_info[0].tab_ege_selectedIdentityCardCode =
          {"identityCardCode":"Паспорт РФ",
          "identityCardNamemiddle":"Паспорт РФ",
          "identityCardNameFull":"Паспорт РФ",
          "identityCardNameShort":"",
          "isUniversity":1,
          "isMandatory_Number":1,
          "isMandatory_Series":1,
          "sort":1};
        this.person.ege_info[0].tab_ege_identityCardSeries = '';
        this.person.ege_info[0].tab_ege_identityCardNumber = '';
        this.person.ege_info[0].tab_ege_identityCardIssueDate = '';
        this.person.ege_info[0].tab_ege_identityCardIssueBy = '';
        this.person.ege_info[0].tab_ege_info_selectedCitizenship = {"countryRegionId":"РФ","name":"Россия", "eduCountryType": "1"};

        this.person.ege_info[1].tab_ege_selectedSubject = 'Биология';
        this.person.ege_info[1].tab_ege_score = 0;
        this.person.ege_info[1].tab_ege_year = {
          "academyYearId": "2019",
          "description": "2019-ый учебный год",
          "beginPeriod": "2019-01-01",
          "endPeriod": "2019-12-31"
        };
        this.person.ege_info[1].tab_ege_changePaspInf = false;
        this.person.ege_info[1].tab_ege_lastname = '';
        this.person.ege_info[1].tab_ege_firstname = '';
        this.person.ege_info[1].tab_ege_middlename = '';
        this.person.ege_info[1].tab_ege_selectedIdentityCardCode =
          {"identityCardCode":"Паспорт РФ",
            "identityCardNamemiddle":"Паспорт РФ",
            "identityCardNameFull":"Паспорт РФ",
            "identityCardNameShort":"",
            "isUniversity":1,
            "isMandatory_Number":1,
            "isMandatory_Series":1,
            "sort":1};
        this.person.ege_info[1].tab_ege_identityCardSeries = '';
        this.person.ege_info[1].tab_ege_identityCardNumber = '';
        this.person.ege_info[1].tab_ege_identityCardIssueDate = '';
        this.person.ege_info[1].tab_ege_identityCardIssueBy = '';
        this.person.ege_info[1].tab_ege_info_selectedCitizenship = {"countryRegionId":"РФ","name":"Россия", "eduCountryType": "1"};

        this.person.ege_info[2].tab_ege_selectedSubject = 'Русский язык';
        this.person.ege_info[2].tab_ege_score = 0;
        this.person.ege_info[2].tab_ege_year = {
          "academyYearId": "2019",
          "description": "2019-ый учебный год",
          "beginPeriod": "2019-01-01",
          "endPeriod": "2019-12-31"
        };
        this.person.ege_info[2].tab_ege_changePaspInf = false;
        this.person.ege_info[2].tab_ege_lastname = '';
        this.person.ege_info[2].tab_ege_firstname = '';
        this.person.ege_info[2].tab_ege_middlename = '';
        this.person.ege_info[2].tab_ege_selectedIdentityCardCode =
          {"identityCardCode":"Паспорт РФ",
            "identityCardNamemiddle":"Паспорт РФ",
            "identityCardNameFull":"Паспорт РФ",
            "identityCardNameShort":"",
            "isUniversity":1,
            "isMandatory_Number":1,
            "isMandatory_Series":1,
            "sort":1};
        this.person.ege_info[2].tab_ege_identityCardSeries = '';
        this.person.ege_info[2].tab_ege_identityCardNumber = '';
        this.person.ege_info[2].tab_ege_identityCardIssueDate = '';
        this.person.ege_info[2].tab_ege_identityCardIssueBy = '';
        this.person.ege_info[2].tab_ege_info_selectedCitizenship = {"countryRegionId":"РФ","name":"Россия", "eduCountryType": "1"};


        this.person.parents_info = [];
        this.person.futures_info = [];
        // this.person.person_info.image = "";
        this.id = '';
        this.image = '';
        this.imageOf = false;
        this.showimage = '';
        this.tab_personal_lastname = '';
        this.tab_personal_firstname = '';
        this.tab_personal_middlename = '';
        this.tab_personal_lastname_genitive = '';
        this.tab_personal_firstname_genitive = '';
        this.tab_personal_middlename_genitive = '';
        this.tab_personal_selectedGender = {"id": 1, "name": "Мужской"};
        this.tab_personal_birthDate = '';
        this.tab_personal_INIPA = '';
        this.tab_personal_INIPADate = '';
        this.tab_personal_note = '';

        this.tab_personal_selectedIdentityCardCode = {
          "identityCardCode": "Паспорт РФ",
          "identityCardNamemiddle": "Паспорт РФ",
          "identityCardNameFull": "Паспорт РФ",
          "identityCardNameShort": "",
          "isUniversity": 1,
          "isMandatory_Number": 1,
          "isMandatory_Series": 1,
          "sort": 1
        };
        this.tab_personal_identityCardSeries = '';
        this.tab_personal_identityCardNumber = '';
        this.tab_personal_identityCardIssueBy = '';
        this.tab_personal_identityCardIssueDate = '';
        this.tab_personal_identityCardIssueDep = '';
        this.tab_personal_selectedCitizenship = {"countryRegionId": "РФ", "name": "Россия", "eduCountryType": "1"};
        this.tab_personal_isCompatriot = false;
        this.tab_personal_isEquatedForeign = false;
        this.tab_personal_birthplace = '';
        this.tab_personal_isHostel = false;
        this.tab_personal_isForeignLikeRussian = false;
        this.tab_personal_homePhoneNumber = '';
        this.tab_personal_cellularPhone = '';
        this.tab_personal_email = '';
        this.tab_personal_company_name = '';
        this.tab_personal_company_address = '';
        this.tab_personal_seniority = '';
        this.tab_personal_employYears = '';
        this.tab_personal_employMonths = '';
        this.tab_personal_employDays = '';
        this.tab_personal_selectedForeignLanguageInfo = {"id": 0, "name": "Нет данных"};
        this.selected_foreignLanguageName1 = null;
        this.language_score1 = '';
        this.selected_foreignLanguageName2 = null;
        this.language_score2 = '';
        this.selected_foreignLanguageName3 = null;
        this.language_score3 = '';
        this.score_full = 0.00;
        this.tab_address_registrationAddress = '';
        this.tab_address_factAddress = '';
        this.tab_address_templateRegistrationAddress = '';
        this.person.person_info.fisSettlementTypeId = '';
        this.tab_edu_military_educationLevel = null;
        this.tab_edu_military_univer = '';
        this.tab_edu_military_selectedCountryRegion = {"countryRegionId": "РФ", "name": "Россия", "eduCountryType": "1"};
        this.tab_edu_military_selectedState = null;
        this.tab_edu_military_selectedAcademyYear = '';
        this.tab_edu_military_selectedEduDoc = '';
        this.tab_edu_military_eduDocSerial = '';
        this.tab_edu_military_eduDocNumber = '';
        this.tab_edu_military_eduDocDate = '';
        this.tab_edu_military_eduDocName = '';
        this.tab_edu_military_attachment_serial = '';
        this.tab_edu_military_attachment_number = '';
        this.score_five = 0;
        this.score_four = 0;
        this.score_three = 0;
        this.averageScore = '';
        this.tab_edu_military_selectedSoldiery = {"soldieryId": "Невоеннообязанный"};
        this.tab_edu_military_selectedSoldieryStatus = {"id": 0, "name": "Не служил"};
        this.tab_edu_military_selectedMilitaryFormDoc = {"id": 0, "name": "Не определено"};
        this.tab_edu_military_militaryNumber = '';
        this.tab_edu_military_militarySeries = '';
        this.tab_edu_military_militaryIssueDate = '';
        this.tab_edu_military_militaryIssueBy = '';
        this.tab_edu_military_militaryRank = '';
        this.tab_edu_military_selectedDocType = {"id": 0, "name": "Копия"};
        this.tab_edu_military_docMilitaryShowDate = '';
        this.tab_edu_military_startMilitary = '';
        this.tab_edu_military_endMilitary = '';

        this.doc1_newName= '';
        this.doc2_newName= '';
        this.doc3_newName= '';
        this.selectedExtraInfos1 = '';
        this.selectedExtraInfos2 = '';
        this.extraInfosDescription1 = '';
        this.extraInfosDescription2 = '';

        this.person.subjectScores[0].examPoint = 0;
        this.person.subjectScores[1].examPoint = 0;
        this.person.subjectScores[2].examPoint = 0;
        this.person.subjectScores[0].examForm= {"id":10,"name":"Вступит. испытания"};
        this.person.subjectScores[1].examForm= {"id":10,"name":"Вступит. испытания"};
        this.person.subjectScores[2].examForm= {"id":10,"name":"Вступит. испытания"};
        this.default();

        this.saved = '';
        this.person.saved = '';
        this.$store.dispatch('loadEmptyAdrDTO');
        location.href = 'profile#personal_info';
        // router.push('Profile');
        // router.push('/profile#personal_info');
      },

      onRedaction(item) {
        const index = this.profiles.indexOf(item);
        const idString = this.profiles[index].id;
        const id = parseInt(idString, 10);
        this.person_info_id = id;

        AXIOS.get(`/profile/personByPersonInfo/` + id)
          .then(response => {
            this.person = response.data;
            this.$store.commit('updateSpecialistDto', this.person.person_info.addressesDto);
            this.personInfo = response.data.person_info;
            this.tab_personal_lastname = this.personInfo.tab_personal_lastname;

            console.log(this.personInfo.tab_personal_lastname)

            this.tab_personal_firstname = this.personInfo.tab_personal_firstname
            this.tab_personal_middlename = this.personInfo.tab_personal_middlename
            this.tab_personal_lastname_genitive = this.personInfo.tab_personal_lastname_genitive
            this.tab_personal_firstname_genitive = this.personInfo.tab_personal_firstname_genitive
            this.tab_personal_middlename_genitive = this.personInfo.tab_personal_middlename_genitive
            this.tab_personal_selectedGender = this.personInfo.tab_personal_selectedGender
            this.tab_personal_birthDate = this.personInfo.tab_personal_birthDate
            this.tab_personal_INIPA = this.personInfo.tab_personal_INIPA
            this.tab_personal_INIPADate = this.personInfo.tab_personal_INIPADate
            this.tab_personal_note = this.personInfo.tab_personal_note

            this.tab_personal_selectedIdentityCardCode = this.personInfo.tab_personal_selectedIdentityCardCode;
            this.tab_personal_identityCardSeries = this.personInfo.tab_personal_identityCardSeries
            this.tab_personal_identityCardNumber = this.personInfo.tab_personal_identityCardNumber
            this.tab_personal_identityCardIssueBy = this.personInfo.tab_personal_identityCardIssueBy
            this.tab_personal_identityCardIssueDate = this.personInfo.tab_personal_identityCardIssueDate
            this.tab_personal_identityCardIssueDep = this.personInfo.tab_personal_identityCardIssueDep
            this.tab_personal_selectedCitizenship = this.personInfo.tab_personal_selectedCitizenship
            this.tab_personal_isCompatriot = this.personInfo.tab_personal_isCompatriot
            this.tab_personal_isEquatedForeign = this.personInfo.tab_personal_isEquatedForeign
            this.tab_personal_birthplace = this.personInfo.tab_personal_birthplace
            this.tab_personal_isHostel = this.personInfo.tab_personal_isHostel
            this.tab_personal_isForeignLikeRussian = this.personInfo.tab_personal_isForeignLikeRussian
            this.tab_personal_homePhoneNumber = this.personInfo.tab_personal_homePhoneNumber
            this.tab_personal_cellularPhone = this.personInfo.tab_personal_cellularPhone
            this.tab_personal_email = this.personInfo.tab_personal_email
            this.tab_personal_company = this.personInfo.tab_personal_company
            this.tab_personal_company_address = this.personInfo.tab_personal_company_address
            this.tab_personal_seniority = this.personInfo.tab_personal_seniority
            this.tab_personal_employYears = this.personInfo.tab_personal_employYears
            this.tab_personal_employMonths = this.personInfo.tab_personal_employMonths
            this.tab_personal_employDays = this.personInfo.tab_personal_employDays
            this.tab_personal_selectedForeignLanguageInfo = this.personInfo.tab_personal_selectedForeignLanguageInfo
            this.selected_foreignLanguageName1 = this.personInfo.selected_foreignLanguageName1
            this.language_score1 = this.personInfo.language_score1
            this.selected_foreignLanguageName2 = this.personInfo.selected_foreignLanguageName2
            this.language_score2 = this.personInfo.language_score2
            this.selected_foreignLanguageName3 = this.personInfo.selected_foreignLanguageName3
            this.language_score3 = this.personInfo.language_score3

            this.tab_address_registrationAddress = this.personInfo.tab_address_registrationAddress
            this.tab_address_factAddress = this.personInfo.tab_address_factAddress
            this.tab_address_templateRegistrationAddress = this.personInfo.tab_address_templateRegistrationAddress

            this.tab_edu_military_educationLevel = this.personInfo.tab_edu_military_educationLevel
            this.tab_edu_military_univer = this.personInfo.tab_edu_military_univer
            this.tab_edu_military_selectedCountryRegion = this.personInfo.tab_edu_military_selectedCountryRegion
            this.tab_edu_military_selectedState = this.personInfo.tab_edu_military_selectedState
            this.tab_edu_military_selectedAcademyYear = this.personInfo.tab_edu_military_selectedAcademyYear
            this.tab_edu_military_selectedEduDoc = this.personInfo.tab_edu_military_selectedEduDoc
            this.tab_edu_military_eduDocSerial = this.personInfo.tab_edu_military_eduDocSerial
            this.tab_edu_military_eduDocNumber = this.personInfo.tab_edu_military_eduDocNumber
            this.tab_edu_military_eduDocDate = this.personInfo.tab_edu_military_eduDocDate
            this.tab_edu_military_eduDocName = this.personInfo.tab_edu_military_eduDocName
            this.tab_edu_military_attachment_serial = this.personInfo.tab_edu_military_attachment_serial
            this.tab_edu_military_attachment_number = this.personInfo.tab_edu_military_attachment_number
            this.score_five = this.personInfo.score_five;
            this.score_four = this.personInfo.score_four;
            this.score_three = this.personInfo.score_three;
            this.averageScore = this.personInfo.averageScore
            this.tab_edu_military_selectedSoldiery = this.personInfo.tab_edu_military_selectedSoldiery
            this.tab_edu_military_selectedSoldieryStatus = this.personInfo.tab_edu_military_selectedSoldieryStatus
            this.tab_edu_military_selectedMilitaryFormDoc = this.personInfo.tab_edu_military_selectedMilitaryFormDoc
            this.tab_edu_military_militaryNumber = this.personInfo.tab_edu_military_militaryNumber
            this.tab_edu_military_militarySeries = this.personInfo.tab_edu_military_militarySeries
            this.tab_edu_military_militaryIssueDate = this.personInfo.tab_edu_military_militaryIssueDate
            this.tab_edu_military_militaryIssueBy = this.personInfo.tab_edu_military_militaryIssueBy
            this.tab_edu_military_militaryRank = this.personInfo.tab_edu_military_militaryRank
            this.tab_edu_military_selectedDocType = this.personInfo.tab_edu_military_selectedDocType
            this.tab_edu_military_docMilitaryShowDate = this.personInfo.tab_edu_military_docMilitaryShowDate
            this.tab_edu_military_startMilitary = this.personInfo.tab_edu_military_startMilitary
            this.tab_edu_military_endMilitary = this.personInfo.tab_edu_military_endMilitary
            this.selectedExtraInfos1 = this.personInfo.selectedExtraInfos1
            this.selectedExtraInfos2 = this.personInfo.selectedExtraInfos2
            this.extraInfosDescription1 = this.personInfo.extraInfosDescription1
            this.extraInfosDescription2 = this.personInfo.extraInfosDescription2

            this.person.application.choosenWizards = response.data.application.choosenWizards;

            this.image = this.personInfo.image;
            this.showimage = this.personInfo.showimage;
            this.acceptedPerson = this.personInfo.acceptedPerson;
          })
          .catch(e => {
            // this.errors.push(e)
            console.log(e);
          });
        console.log('id (person_info) for redaction is ' + id);
        location.href = 'profile#personal_info';
      },

      onAppl(id) {

        let i = 0;
        for (i; i < this.apls.length; i++) {
          if (this.apls[i].chose === true) {
            this.application.choosenWizards.push(this.apls[i]);
          }
        }
        AXIOS.post(`/profile/application/` + this.person_info_id, (this.application))
          .then(response => {
          })
          .catch(e => {
            console.log('what what')
          });

        AXIOS.get('/profile/conditions/' + (this.person_info_id))
          .then(response => {
            this.resultApl = response.data;
            console.log(this.resultApl.application_number)
          })
          .catch(e => {
          });

        AXIOS.get(`/profile/getApplicationPersonName/` + (this.person_info_id))
          .then(response => {
            console.log(response.data)
            this.application_person_name = response.data;
          })
          .catch(e => {
            this.errors.push(e)
          })
        console.log('выбранные ' + this.chooseAppls[0])
        console.log('in method -' + this.person_info_id)
      },
    },
  }
</script>

<style scoped>

  .button_controls {
    min-width: 60px;
  }

  table.v-table tbody tr {
    transition: none !important
  }

  table {
    padding: 0;
  }

  label.row {
    margin-bottom: 3px;
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
    border: 1px solid grey;
  }

  textarea {
    border-radius: 3px;
    border: 1px solid grey;
  }

  textarea {
    width: 90%; /* Ширина поля в процентах */
    height: 100px; /* Высота поля в пикселах */
    resize: none; /* Запрещаем изменять размер */
  }

  p {
    font-size: 25px;
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


</style>
