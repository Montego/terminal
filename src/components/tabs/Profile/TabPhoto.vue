<template>
  <div>

  <section>
    <form method="post" class="row" action="/image/add" enctype="multipart/form-data">

      <div class="form-group row">
        <input type='file' @change="previewImages" id="newfiles" name="newfiles[]" class="form-control col-sm-9" accept="image/*" />
        <!--<button class="btn btn-outline-success float-right col-sm-4">Загрузить</button>-->
      </div>
      {{this.person}}

    </form>
    <!--<button class="btn btn-outline-success float-right col-sm-4" @click="clearPhoto" >Очистить</button>-->
      <div class="col-md-6 py-2 border" v-for="(image, index) in imagesData">
        <img class="img-thumbnail images_place" :src="image" v-if="image.length > 0">
      </div>
    <div class="clear_save_button row">
      <button @click="onSave">Сохранить </button>
    </div>
  </section>

  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields';
  import {AXIOS} from "../../plugins/APIService";

  const { mapMultiRowFields } = createHelpers({
    getterType: `person/getField`,
    mutationType: `person/updateField`,
  });
  const { mapFields:tab_personal_info} = createHelpers({
    getterType: 'tab_personal_info/getField',
    mutationType: 'tab_personal_info/updateField',
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
    export default {
      name: "TabPhoto",
      data() {
        return {
          info: [],
          imagesData: []
        }
      },
      computed: {
        // ...mapMultiRowFields(['profiles']),
        ...tab_personal_info([ 'tab_personal_lastname', 'tab_personal_firstname',
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
          'tab_personal_bithplace', 'tab_personal_email']),
        ...mapMultiRowFields(['persons']),
        ...person(['person']),
        show(){
          return this.persons
        }
      },
      methods: {



        onSave() {


          AXIOS.post(`/persons`,this.person)
            .then(response => {
              this.info.push(response.data)
            })
            .catch(e => {
              this.errors.push(e)
            })

        },


        // onSaveProfile() {
        //   function Prof(profile_lastname, profile_firstname,
        //                    profile_middlename,
        //                    profile_selectedGender, profile_birthDate, profile_age, profile_INIPA,
        //                    profile_INIPADate,profile_note, profile_selectedIdentityCardCode,
        //                    profile_identityCardSeries, profile_identityCardNumber, profile_identityCardIssueBy,
        //                    profile_identityCardIssueDate, profile_identityCardIssueDep,profile_selectedCitizenship,
        //                    profile__isCompatriot,profile_isEquatedForeign,profile_isHostel,
        //                    profile_isForeignLikeRussian,profile_homePhoneNumber,profile_cellularPhone,
        //                    profile_email,profile_seniority,profile_employYears,profile_employMonths,
        //                    profile_employDays
        //   ) {
        //
        //     // this.tab_personal_name = profile_name;
        //     this.tab_personal_lastname = profile_lastname;
        //     this.tab_personal_firstname = profile_firstname;
        //     this.tab_personal_middlename = profile_middlename;
        //     this.tab_personal_selectedGender = profile_selectedGender;
        //     this.tab_personal_birthDate = profile_birthDate;
        //     this.tab_personal_age = profile_age;
        //     this.tab_personal_INIPA = profile_INIPA;
        //     this.tab_personal_INIPADate = profile_INIPADate;
        //     this.tab_personal_note = profile_note;
        //     this.tab_personal_selectedIdentityCardCode = profile_selectedIdentityCardCode;
        //     this.tab_personal_identityCardSeries = profile_identityCardSeries;
        //     this.tab_personal_identityCardNumber = profile_identityCardNumber;
        //     this.tab_personal_identityCardIssueBy = profile_identityCardIssueBy;
        //     this.tab_personal_identityCardIssueDate = profile_identityCardIssueDate;
        //     this.tab_personal_identityCardIssueDep = profile_identityCardIssueDep;
        //     this.tab_personal_selectedCitizenship = profile_selectedCitizenship;
        //     this.tab_personal_isCompatriot = profile__isCompatriot;
        //     this.tab_personal_isEquatedForeign = profile_isEquatedForeign;
        //     this.tab_personal_isHostel = profile_isHostel;
        //     this.tab_personal_isForeignLikeRussian = profile_isForeignLikeRussian;
        //     this.tab_personal_homePhoneNumber = profile_homePhoneNumber;
        //     this.tab_personal_cellularPhone = profile_cellularPhone;
        //     this.tab_personal_email = profile_email;
        //     this.tab_personal_seniority = profile_seniority;
        //     this.tab_personal_employYears = profile_employYears;
        //     this.tab_personal_employMonths = profile_employMonths;
        //     this.tab_personal_employDays = profile_employDays;
        //
        //
        //   }
        //   let profile = new Prof(
        //      this.tab_personal_lastname, this.tab_personal_firstname,
        //     this.tab_personal_middlename,this.tab_personal_selectedGender,this.tab_personal_birthDate,
        //     this.tab_personal_age, this.tab_personal_INIPA, this.tab_personal_INIPADate,
        //     this.tab_personal_note, this.tab_personal_selectedIdentityCardCode,this.tab_personal_identityCardSeries,
        //     this.tab_personal_identityCardNumber,this.tab_personal_identityCardIssueBy,
        //     this.tab_personal_identityCardIssueDate,this.tab_personal_identityCardIssueDep,
        //     this.tab_personal_selectedCitizenship, this.tab_personal_isCompatriot, this.tab_personal_isEquatedForeign,
        //     this.tab_personal_isHostel,this.tab_personal_isForeignLikeRussian,this.tab_personal_homePhoneNumber,
        //     this.tab_personal_cellularPhone,this.tab_personal_email,this.tab_personal_seniority,
        //     this.tab_personal_employYears, this.tab_personal_employMonths, this.tab_personal_employDays
        //   );
        //   this.tab_profiles.push(profile);
        //   // location.href='profile#overview_personal_info';
        //   console.log(this.tab_profiles)
        // },

        clearPhoto() {
          this.imagesData.pop(this.imagesData.length-1);
        },
        previewImages: function(event) {
          this.imagesData = [];
          var pictures = event.target.files;
          for (var i = 0; i < pictures.length; i++) {
            var reader = new FileReader();
            reader.onload = (e) => {
              this.imagesData.push(e.target.result);
            }
            reader.readAsDataURL(pictures[i]);
          }
        }
      }
    }
</script>

<style scoped>
  .images_place {
    height: 640px;
    width: 480px
  }
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
    background-color: red;
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
    /*margin-top: 75%;*/
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
