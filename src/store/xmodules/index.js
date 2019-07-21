import demoObj from './ContactPersonExample210720191235'
import Axios from "axios";

let dateConvert = function(d){
    console.log(d);
    return "10.07.1970 00:00";
};

let boolConvert = function(b){
    return b ? 1 : 0;
};

let fillLanguages = function(person){
    return [1,2,3]
        .map(e=> {return {name: `selected_foreignLanguageName${e}`, score: `language_score${e}` };})
        .filter(e=> { return person[e.name] > ''})
        .reduce((accum, e)=>{ accum.push({
            "languageId" : person[e.name],
            "score": person[e.score]});
            return accum;
        }, []);
};


let fillPK = function(person){
    return {
        "contactPersonId": null,
        "dataAreaId": "dat",
        "eduLevelId": "003",
        "soldieryId": "Невоеннообязанный",
        "soldieryStatus": 0,
        "militaryFormDoc": 0,
        "militarySeries": "",
        "militaryNumber": "",
        "militaryIssueBy": "",
        "militaryIssueDate": "01.01.1900 00:00",
        "militaryRank": "",
        "soldieryBegDate": "01.01.1900 00:00",
        "soldieryEndDate": "01.01.1900 00:00",
        "militaryDocType": 0,
        "militaryDocGrantDate": "01.01.1900 00:00",
        "eduCrimea": 0,
        "eduCountryRegionId": "РФ",
        "eduState": "Приморский",
        "acadamyYearId": "2015",
        "instName": "",
        "eduDocId": "Диплом",
        "eduCardSeries": "ЭВ",
        "eduCardNumber": "757237",
        "eduCardIssueDate": "13.07.2019 00:00",
        "eduCardIssueBy": "",
        "eduCardApplSeries": "",
        "eduCardApplNumber": "0551826",
        "meanScoreEduDoc": 5,
        "specConditions": "Не требуется",
        "highSchoolId": "",
        "qualificationLevelId": "",
        "specialityId": "",
        "specDescription": "",
        "eduStartDate": "13.07.2019 00:00",
        "qualDescription": "",
        "sacDate": "13.07.2019 21:20",
        "scienceWorksQty": 17,
        "otherDocName": "",
        "isAccreditationLikeExam": 0,
        "accreditationDocId": "",
        "accreditationSeries": "",
        "accreditationNumber": "",
        "accreditationIssueDate": "01.01.1900 00:00",
        "accreditationIssueBy": "",
        "accreditationDocType": -1,
        "accreditationGrantDateOriginal": "01.01.1900 00:00",
        "employDays": 0,
        "employMonths": 0,
        "employYears": 0,
        "isForeigners": 0,
        "accreditationScore": 0,
        "inipaDate": "13.07.2010 00:00",
        "modifiedBy": "TSST",
        "recId": null
    };
};






let fillTotal = function (s) {
    let person = s.state.person;
    // console.log(s);
    // return null;
  return {
      "lastName": person.tab_personal_lastname,
      "firstName": person.tab_personal_firstname,
      "middleName": person.tab_personal_middlename,
      "name": person.tab_personal_lastname + ' ' + person.tab_personal_firstname + ' ' + person.tab_personal_middlename,
      "lastNameGenitive": person.tab_personal_lastname_genitive,
      "firstNameGenitive": person.tab_personal_firstname_genitive,
      "middleNameGenitive": person.tab_personal_middlename_genitive,
      "contactPersonNameGenitive": person.tab_personal_lastname_genitive + ' ' + person.tab_personal_firstname_genitive + ' ' + person.tab_personal_middlename_genitive,
      "gender": person.tab_personal_selectedGender.id, // 1\2
      "inipa": person.tab_personal_INIPA, //"192-310-601 36", //
      "birthDate": dateConvert(person.tab_personal_birthDate), //"10.07.2010 00:00", //
      "birthPlace": person.tab_personal_birthplace, // "Тестовград",
      "otherCountryRegionId" : person.tab_personal_selectedCitizenship['countryRegionId'], // "РФ",
      "identityCardCode": person.tab_personal_selectedIdentityCardCode.identityCardCode, //"Паспорт РФ", // person.tab_personal_selectedIdentityCardCode, //
      "identityCardSeries": person.tab_personal_identityCardSeries , //"5811",  //  person.tab_personal_identityCardSeries , //
      "identityCardNumber": person.tab_personal_identityCardNumber, //"087580", //   person.tab_personal_identityCardNumber, //
      "identityCardIssueBy": person.tab_personal_identityCardIssueBy, // "ТП №59 отдела УФМС России по Санкт-Петербургу и Ленинградской обл. в Петроградском р-не гор. Санкт-Петербурга",
      "identityCardIssueDep": person.tab_personal_identityCardIssueDep, //"725-125", //
      "identityCardIssueDate": dateConvert(person.tab_personal_identityCardIssueDate), //"13.07.2010 00:00", //
      "isHotel": boolConvert(person.tab_personal_isHostel), //0, //
      "isCompatriot": boolConvert(person.tab_personal_isCompatriot),  //0, //

      "email": person.tab_personal_email, // "testFred1@gmail.com", //
      "cellularPhone": person.tab_personal_cellularPhone, //"88000013535", //
      "homePhoneNumber": person.tab_personal_homePhoneNumber, //"235642", // tab_personal_homePhoneNumber, //
      "langInfo": boolConvert(person.tab_personal_selectedForeignLanguageInfo.id) ,// 0, // ????
// tab_personal_isForeignLikeRussian
// tab_personal_isEquatedForeign = приравнять к иностранцам
// tab_personal_INIPADate - дата снилса!
// tab_personal_note // DESCRIPTION = Примечание !!! А ЕГО НЕТ В СЕРВИСЕ !!!

      "modifiedBy": "TSST",
      "recId": null,
      "contactPersonId": null,
      "dataAreaId": "dat",
      "educationLevel": 0, // ????
      "contactPersonPk" : fillPK(person),
      "entrantLanguages" : fillLanguages(person),
  };
};


export default function (fatStore) {
    let obj = fillTotal(fatStore);
    //console.log(demoObj);

    obj = Object.assign(demoObj, obj);

    // Axios.post(
    //     'http://10.71.0.115/ax_api/rest/contactPerson',
    //     obj
    // ).then(r => console.log(r));
    console.log('obj', obj);
    // console.log('fatStore', fatStore);
}