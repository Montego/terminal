import demoObj from "./ContactPersonExample210720191235";
import axios from "axios";
// import person from "./profile/person";

let dateConvert = function(date){
  let stamp = '';
  let regexp = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
  if (!date || !date.match(regexp)) {
    stamp = -2208988800000;
  } else {
    stamp = Date.parse(date);
  }

  let parsedDate = new Date(stamp);
  let year = parsedDate.getFullYear();
  let month = ('0' + (parsedDate.getMonth()+1)).slice(-2);
  let day = ('0' + parsedDate.getDate()).slice(-2);
  return day + '.' + month + '.' + year + ' ' + '00:00';
};


let boolConvert = function(b){
  return b ? 1 : 0;
};


let getOrderEgeSubject = function(subj){
  let res = 0;
  res = subj === 'Химия' ? 1 : res;
  res = subj === 'Биология' ? 2 : res;
  res = subj === 'Русский язык' ? 3 : res;

  return res;
};

let getIdEgeSubject = function(subj){

  let res = 0;
  res = subj === 'Химия' ? "Хим" : res;
  res = subj === 'Биология' ? "Биол" : res;
  res = subj === 'Русский язык' ? "РусскЯз" : res;

  return res;
};


let fillLanguages = function(person){
  return [1,2,3]
    .map(e=> {return {name: `selected_foreignLanguageName${e}`, score: `language_score${e}` };})
    .filter(e=> { return person[e.name] > ''})
    .reduce((accum, e)=>{ accum.push({
      "languageId" : person[e.name]['languageId'],
      "score": person[e.score]});
      return accum;
    }, []);
};


// Заглушка военнообязанный, meanScoreEduDocf
let fillPK = function(s){
  let info = s.person_info;
  console.log(info.tab_edu_military_selectedSoldiery, 'info.tab_edu_military_selectedSoldiery');

  return {
    "soldieryId": info.tab_edu_military_selectedSoldiery ? info.tab_edu_military_selectedSoldiery['soldieryId'] : "Невоеннообязанный", // //
    "soldieryStatus": info.tab_edu_military_selectedSoldieryStatus.id, // 0, // ??? tab_edu_military_selectedSoldieryStatus
    "militaryFormDoc": info.tab_edu_military_selectedMilitaryFormDoc.id,
    "militarySeries": info.tab_edu_military_militarySeries, // "",
    "militaryNumber": info.tab_edu_military_militaryNumber, //"",
    "militaryIssueBy": info.tab_edu_military_militaryIssueBy, // "",
    "militaryIssueDate": dateConvert(info.tab_edu_military_militaryIssueDate),// "01.01.1900 00:00",
    "militaryRank": info.tab_edu_military_militaryRank,
    "soldieryBegDate": dateConvert(info.tab_edu_military_startMilitary),// "01.01.1900 00:00",
    "soldieryEndDate": dateConvert(info.tab_edu_military_endMilitary),
    "militaryDocType": info.tab_edu_military_selectedDocType.id,
    "militaryDocGrantDate": dateConvert(info.tab_edu_military_docMilitaryShowDate), // "01.01.1900 00:00",


    "eduLevelId": "003", // ????
    "eduCountryRegionId": info.tab_edu_military_selectedState['countryRegionId'], // "РФ",
    "eduState": info.tab_edu_military_selectedState['stateId'], // "Приморский",
    "acadamyYearId" : info.tab_edu_military_selectedAcademyYear['academyYearId'], // "2015",
    "instName": info.tab_edu_military_univer, //"",
    "eduDocId": info.tab_edu_military_selectedEduDoc.eduDocId, //"Диплом",
    "eduCardSeries": info.tab_edu_military_eduDocSerial, //"ЭВ",
    "eduCardNumber": info.tab_edu_military_eduDocNumber, // "757237",
    "eduCardIssueDate": dateConvert(info.tab_edu_military_eduDocDate), // "13.07.2019 00:00",
    "eduCardIssueBy": info.tab_edu_military_eduDocName, //"",
    "eduCardApplSeries": info.tab_edu_military_attachment_serial,
    "eduCardApplNumber": info.tab_edu_military_attachment_number,
    "meanScoreEduDoc": info.score_full?info.score_full:0,

    "employDays": info.tab_personal_employDays,
    "employMonths": info.tab_personal_employMonths,
    "employYears": info.tab_personal_employYears,


    "inipaDate": dateConvert(info.tab_personal_INIPADate), // "13.07.2010 00:00",


    // -----------------------


    "isForeigners": 0,
    "specConditions": "Не требуется",
    "specDescription": "",

    "qualificationLevelId": "",
    "qualDescription": "",
    "specialityId": "",
    "eduStartDate": "13.07.2019 00:00",
    "sacDate": "13.07.2019 21:20",
    "otherDocName": "",
    "scienceWorksQty": 0,

    "isAccreditationLikeExam": 0,
    "accreditationDocId": "",
    "accreditationSeries": "",
    "accreditationNumber": "",
    "accreditationIssueDate": "01.01.1900 00:00",
    "accreditationIssueBy": "",
    "accreditationDocType": -1,
    "accreditationGrantDateOriginal": "01.01.1900 00:00",
    "accreditationScore": 0,

    "highSchoolId": "",

    "eduCrimea": 0,
    "modifiedBy": "TSST",
    "recId": null,
    "contactPersonId": null,
    "dataAreaId": "dat",
  };
};


let fillParents = function(s){
  let result = s.parents_info.map((info) => {
    return {
      "famRelationshipId": info.tab_parent_selectedFamRelationShip.famRelationShipId,
      "lastName": info.tab_parent_lastname,
      "firstName": info.tab_parent_firstname,
      "middleName": info.tab_parent_middlename,
      "name": info.tab_parent_name,
      "gender": info.tab_parent_selectedGender.id,
      "birthDate": dateConvert(info.tab_parent_birthDate), // "10.07.1970 00:00",
      "cellularPhone": info.tab_parent_cellularPhone, // "88001113535",
      "homePhoneNumber": info.tab_parent_homePhoneNumber, // "321724",

      "parentOrgName" : info.tab_parent_organization_name,
      "parentOrgAddress" : info.tab_parent_organization_address,
      "profession" : info.tab_parent_organization_seniority,
      "employTime" : info.tab_parent_organization_employYears,

      // не используются
      //
      "recId": null,
      "inipa": "",
      "contactPersonNameGenitive": "",
      "birthPlace": "",
      "otherCountryRegionId": "",
      "identityCardCode": "",
      "identityCardSeries": "",
      "identityCardNumber": "",
      "identityCardIssueBy": "",
      "identityCardIssueDep": "",
      "identityCardIssueDate": "10.07.1970 00:00",
      "isHotel": 0,
      "langInfo": 0,
      "isCompatriot": 0,
      "email": "",
      // ------------------------------

      "fiasAddress": [{
        "addrTableTd": 520,
        "addrRecId": "",
        "addressType": 0,
        "lineNum": 1,
        "countryRegionId": "РФ",
        "countryRegionName": "Россия",
        "aoLevel1": 1,
        "aoLevel1ObjRef": "c2deb16a-0330-4f05-821f-1d09c93331e6",
        "aoLevel1ObjName": "Санкт-Петербург г",
        "aoLevel2": 0,
        "aoLevel2ObjRef": "",
        "aoLevel2ObjName": "",
        "aoLevel3": 0,
        "aoLevel3ObjRef": "",
        "aoLevel3ObjName": "",
        "aoLevel4": 0,
        "aoLevel4ObjRef": "",
        "aoLevel4ObjName": "",
        "aoLevel5": 0,
        "aoLevel5ObjRef": "",
        "aoLevel5ObjName": "",
        "aoLevel6": 0,
        "aoLevel6ObjRef": "",
        "aoLevel6ObjName": "",
        "aoLevel7": 7,
        "aoLevel7ObjRef": "56971303-9731-4e84-b737-7b2020d38f5d",
        "aoLevel7ObjName": "Боткинская ул",
        "aoLevel90": 0,
        "aoLevel90ObjRef": "",
        "aoLevel90ObjName": "",
        "aoLevel91": 0,
        "aoLevel91ObjRef": "",
        "aoLevel91ObjName": "",
        "houseRef": "78048f15-89e3-4a28-a47f-935ec875df89",
        "houseName": "д.15 корп.2",
        "flat": "21",
        "postalCode": "194044",
        "kladrCode": "78000000000018900",
        "addressTxt": "Россия, Санкт-Петербург г, Боткинская ул, д.15 корп.2, кв. 21",
        "addressTxt_random": "",
        "aoLevel65": 0,
        "aoLevel65ObjRef": "",
        "modifiedBy": "TSST",
        "aoLevel65ObjName": ""
      }
      ],
      "modifiedBy": "TSST",
      "contactPersonId": null,
      "dataAreaId": "dat",
      "educationLevel": 0,
    };
  });

  return Array.isArray(result) ? result : [];

};


// заглушка
let fillComments = function(s){
  return []; /*
    {
        "commentId": "Достижения в учебе",
        "description": "Призер школьной олимпиады по химии",
        "recVersion": 0
    }
    */
};


// deliveryType && docReturn
let fillApp = function (s) {
  let info = s.application;
  return {
    "deliveryType": 0,
    "docReturnType": 0,

    "applDate": dateConvert(info.application_date), // "01.01.2016 00:00",


    "changeEnvBudget": 1,
    "docType": info.application_selectedDocType['id'],
    "grantDateOriginal": "15.03.2007 00:00",
    "courseNumber": 0,
    "isDocReturn": 0,
    "docReturnDate": "01.01.1900 00:00",
    "docReturnReasonId": "",
    "companyId": "2019-1",
    "applicationLines": fillAppLines(info.choosenWizards),
    "applicationDocs": fillAppDocs(info.application_documents),

    "studentNum": "",
  }
};


//  "documentId" - проблемы, doc.numberDoc ? doc.numberDoc :
let fillAppDocs = function (docs) {
  let result = docs.map( (doc) => {
      return {
        "documentId": doc.id,
        "docSeries": doc.docSeries ? doc.docSeries : '',
        "docNumber":  '',
        "docIssueDate": dateConvert(doc.dateOfIssueDoc),
        "docIssueBy": doc.issuedByDoc ? doc.issuedByDoc : '',
        "docName": doc.nameDoc,
        "docType": doc.docTypeDoc['id'],
        "docQuantity": doc.countDoc,
        "altDocName": doc.fullnameDoc,
        "docGrantDate": "01.01.1900 00:00",
        "documentKindId": "",
        "isauto": 0
      }
    }
  );
  return Array.isArray(result) ? result : [];
};


// нет целевых // compGroupsId - беда
let fillAppLines = function(wiz){
  let result = wiz.map(
    line => {
      return {
        "appLineId": line.id,
        "priority": 0,
        "refNum": "",
        "refDate": "01.01.2019 00:00",
        "contrNum": "",
        "contrDate": "01.01.1900 00:00",
        "targOrgId": "",
        "orgName": "",

        "compGroupsId":"",
        "compGroupLineId":"",


        "deparCode": line.deparCode,
        "specialityId": line.specialityId,
        "environmentId": line.environmentId,
        "envIdChange": "",
        "eduForm": 1,
        "agreements": line.agree ? [
          {
            "orderGroupType": 4,
            "refTableId": 51222,
            "refusalDate": "01.01.1900 00:00",
            "agreementDate": dateConvert(line.agreeDate)

          }
        ] : [],
      };
    }
  );

  return Array.isArray(result) ? result : [];

};

/*
"docQuantity": 1, // /????
  "documentId": "015",
"altDocName": "",
"docGrantDate": "01.01.2010 00:00",
    "isDublicate": 0,
    "documentKindId": ""
    "sourceType": 1,
 */
let fillPrefs = function(s) {
  let result = s.futures_info.map( (pref) => {
    return {

      "preferenceId": pref.tab_features_selectedPreference['preferenceId'] ,// "AT012",
      "prefType": pref.tab_features_selectedPreference['prefType'], // 0,
      "sourceType": 1,
      "typeDiploma": pref.tab_features_selectedTypeDiploma ? pref.tab_features_selectedTypeDiploma['id'] : 0,
      "nameOlympiad": "",
      "chemistry": 0,
      "biology": 1,
      "appLineId": "",
      "isPrefApprove": 0,
      "pointRandom": 0,
      "yearCount": 0,
      "pointFisExport": 0,
      "isShow": 0,
      "modifiedBy": "TSST",

      "preferenceDocs": [1, 2, 3].reduce((accum, n) => {
        if(pref[`doc${n}`] > ''){
          let doc = {
            "modifiedBy": "TSST",
            "documentId": "015",
            "docSeries": pref[`doc${n}_serial`], // "АБ",
            "docNumber": pref[`doc${n}_number`], // "55596932а",
            "docIssueDate": dateConvert(pref[`doc${n}_IssuDate`]), //  "01.01.2008 00:00",
            "docIssueBy": pref[`doc${n}_IssueBy`], //  "Отделом ВК С-ПБ по Выборгскому району",
            "docName": pref[`doc${n}_full_info`], //  "Диплом победителя/призера олимпиады школьников Серия 234234 № 23423423423423 от 24.05.2017 выдан ОргКом (Копия)",
            "docType": pref[`tab_features_selectedDocType${n}`]['id'], //0,
            "docQuantity": 1, // /????
            "altDocName": "",
            "docGrantDate": "01.01.2010 00:00",
            "isDublicate": 0,
            "documentKindId": ""
          };
          accum.push(doc);
        }
        return accum; }, []),
    };
  });

  return result = Array.isArray(result) ? result : [];
};


/// !!!если одно поле документа не заполнено, то только оно возьмется из основного докоумента!!!
let fillEge = function(s){
  let person = s.person_info;

  let result = s.ege_info.map((ege) => {
    return         {
      "otherCountyRegionId": ege.tab_ege_info_selectedCitizenship['countryRegionId'],// "КАЗАХСТАН",
      "docFirstName": ege.tab_ege_firstname > '' ? ege.tab_ege_firstname : person.tab_personal_firstname,
      "docMiddleName": ege.tab_ege_middlename > '' ? ege.tab_ege_middlename : person.tab_personal_middlename,
      "docLastName": ege.tab_ege_lastname > '' ? ege.tab_ege_lastname : person.tab_personal_lastname,
      "identityCardIssueDate": ege.tab_ege_identityCardIssueDate > '' ? dateConvert(ege.tab_ege_identityCardIssueDate)  :  dateConvert(person.tab_personal_identityCardIssueDate)  ,   // "01.07.2000 00:00",
      "identityCardSeries": ege.tab_ege_identityCardSeries > '' ? ege.tab_ege_identityCardSeries  :  person.tab_personal_identityCardSeries  , // "4587",
      "identityCardNumber": ege.tab_ege_identityCardNumber > '' ? ege.tab_ege_identityCardNumber  :  person.tab_personal_identityCardNumber  , // "98425252",
      "identityCardIssueBy": ege.tab_ege_identityCardIssueBy  > '' ?  ege.tab_ege_identityCardIssueBy  :  person.tab_personal_identityCardIssueBy  ,
      "identityCardCode": ege.tab_ege_selectedIdentityCardCode['identityCardCode'] || 'Паспорт РФ', //"87-89",
      "yearDeliveryEge": ege.tab_ege_year > '' ? ege.tab_ege_year : '2019', // "2019",



      "egeCertificateId": "123",
      "dataAreaId": "dat",
      "contactPersonId": "",
      "egeCertificateNumber": "",
      "printingNumber": "",
      "egeCertificateIssueDate": "01.01.1900 00:00",
      "docType": 0,
      "examFormEge": 0,
      "document": 0,
      "certificateStatus": 0,
      "locationEge": "",

      "egeCertificateGrantDate": "01.01.1900 00:00",


      "modifiedBy": "TSST",
      "egeSubjects": [
        {
          "modifiedBy": "TSST",
          "subjectId": getIdEgeSubject(ege.tab_ege_selectedSubject) , // "РусскЯз",
          "score": ege.tab_ege_score,
          "scoreFis": 0,
          "orderBy": getOrderEgeSubject(ege.tab_ege_selectedSubject),
          "lastCheckDate": "01.01.1900 00:00",
          "egeAppealStatus": 1
        }
      ]
    };
  });

  return result = Array.isArray(result) ? result : [];
};


let fillFiasPerson = function(s){
  let result = s.person_info['addressesDto'].map(e=>dtoToFias(e));
  return Array.isArray(result) ? result : [];
};

let dtoToFias = function(dto){
  return {
    "addrTableTd": 111111111,
    "addrRecId": "222222222",
    "addressType": dto.addressType['id'], // 0,
    "lineNum": 1,
    "countryRegionId": dto.countryRegion['refId'], //"РФ",
    "countryRegionName": dto.countryRegion['name'], //"Россия",
    "aoLevel1": 1,
    "aoLevel1ObjRef": dto.aolevel1['refId'], //"c2deb16a-0330-4f05-821f-1d09c93331e6",
    "aoLevel1ObjName": dto.aolevel1['name'] , // "Санкт-Петербург г",
    "aoLevel2": 2,
    "aoLevel2ObjRef": dto.aolevel2['refId'] , // "",
    "aoLevel2ObjName": dto.aolevel2['name'] , // "",
    "aoLevel3": 3,
    "aoLevel3ObjRef": dto.aolevel3['refId'] , // "",
    "aoLevel3ObjName": dto.aolevel3['name'] , // "",
    "aoLevel4": 4,
    "aoLevel4ObjRef": dto.aolevel4['refId'] , // "",
    "aoLevel4ObjName": dto.aolevel4['name'] , // "",
    "aoLevel5": 5,
    "aoLevel5ObjRef": dto.aolevel5['refId'] , // "",
    "aoLevel5ObjName": dto.aolevel5['name'] , // "",
    "aoLevel6": 6,
    "aoLevel6ObjRef": dto.aolevel6['refId'] , // "",
    "aoLevel6ObjName": dto.aolevel6['name'] , // "",
    "aoLevel7": 7,
    "aoLevel7ObjRef": dto.aolevel7['refId'] , // "56971303-9731-4e84-b737-7b2020d38f5d",
    "aoLevel7ObjName": dto.aolevel7['name'] , // "Боткинская ул",
    "aoLevel90": 90,
    "aoLevel90ObjRef": dto.aolevel90['refId'] , // "",
    "aoLevel90ObjName": dto.aolevel91['name'] , // "",
    "aoLevel91": 91,
    "aoLevel91ObjRef": dto.aolevel91['refId'] , // "",
    "aoLevel91ObjName": dto.aolevel91['name'],
    "houseRef": dto.house['refId'] ,// "78048f15-89e3-4a28-a47f-935ec875df89",
    "houseName": dto.house['name'],//"д.15 корп.2",
    "flat": dto.flat ,//"21",
    "postalCode": "",
    "kladrCode": "",
    "addressTxt": dto.addressTxt, // "Россия, Санкт-Петербург г, Боткинская ул, д.15 корп.2, кв.21",
    "addressTxt_random": dto.addressTxtRandom, //"",
    "aoLevel65": 65,
    "aoLevel65ObjRef": "",
    "modifiedBy": "TSST",
    "aoLevel65ObjName": ""
  };
};


let fillTotal = function (s) {
  let person = s.person_info;
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


    "subjectScores": [],
    "modifiedBy": "TSST",
    "recId": null,
    "contactPersonId": null,
    "dataAreaId": "dat",
    "educationLevel": 0, // ????
    "contactPersonPk" : fillPK(s),
    "entrantLanguages" : fillLanguages(person),
    "parents" : fillParents(s),
    "entrantComments": fillComments(s),
    "application": fillApp(s),
    "entrantPreferences": fillPrefs(s),
    "egeCertificates" : fillEge(s),
    "fiasAddress" : fillFiasPerson(s)
  };
};


export default function (fatJSON,some) {
  console.log('some33333333333 ', some);
  let obj = fillTotal(fatJSON);

  obj = Object.assign(demoObj, obj);

  console.log(fillEge(fatJSON));
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
    console.log('converter inside')
    axios.post('http://10.71.0.115/ax_api/rest/contactPerson', obj,config
  )
    .then(response => {
                some.commit('getIdsFromAxapta', response.data);


              // this.agreementId = response.data.agreementId;
              // this.applicationId = response.data.applicationId;
              // this.contactPersonId = response.data.contactPersonId;


            })
            .catch(e => {
              console.log(this.errors.push(e));
            });



    // .then(r =>


  // console.log('obj', obj);
  // console.log('fatStore', fatStore);
}
