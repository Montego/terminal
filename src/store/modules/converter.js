import demoObj from "./ContactPersonExample210720191235";
import axios from "axios";
// import person from "./profile/person";


let null2 = function(e, replace = ''){
  return e? e : replace;
};


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


let fillAddressText = function(a, d = '', k = '', r = ''){
  d = d === '' ? '' : ', ' + d;
  k = k === '' ? '' : ', ' + k;
  r = r === '' ? '' : ', ' + r;
  return a + d + k + r;

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
  // console.log(info.tab_edu_military_educationLevel.eduLevelId, 'info.tab_edu_military_educationLevel.eduLevelId');
  return {
    "fisSettlementTypeId" : "",
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
    "militaryDocGrantDate": info.tab_edu_military_selectedDocType.id.name === 'Копия' ? "01.01.1900 00:00" : dateConvert(info.tab_edu_military_docMilitaryShowDate), // "01.01.1900 00:00",


    "eduLevelId": info.tab_edu_military_educationLevel['eduLevelId'], // ????
    "eduCountryRegionId": info.tab_edu_military_selectedState === null ? "" : info.tab_edu_military_selectedState['countryRegionId'], // "РФ",
    "eduState": info.tab_edu_military_selectedState === null ? "" : info.tab_edu_military_selectedState['stateId'] , // "Приморский",
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
    "description" : info.tab_personal_note,


    "isForeigners": boolConvert(info.tab_personal_isEquatedForeign),
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



let fillSubjectScore = function(s){
  let result = s.subjectScores.map((info) => {
    return {
      "subjectId": info.subjectId,
      "contactPersonId": s.id,
      "examPoint": info.examPoint,
      "examForm": info.examForm.id,

      "examNote": 0,
      "examPoint_test": 0,
      "examPoint_interview": 0,
      "examListNum": "",
      "examListDate": "01.01.1900 00:00",
      "eisExamPoint": 0
    }
  });
  return Array.isArray(result) ? result : [];
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
//TODO обязательные поля??
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
        "addressType": info.addressDto.addressType.id,
        "lineNum": info.addressDto.addressType.id,
        "countryRegionId": null2(info.addressDto.countryRegion.refId),
        "countryRegionName": null2(info.addressDto.countryRegion.name),
        "aoLevel1": 1,
        "aoLevel1ObjRef": null2(info.addressDto.aolevel1.refId),
        "aoLevel1ObjName": null2(info.addressDto.aolevel1.name),
        "aoLevel2": 2,
        "aoLevel2ObjRef": null2(info.addressDto.aolevel2.refId),
        "aoLevel2ObjName": null2(info.addressDto.aolevel2.name),
        "aoLevel3": 3,
        "aoLevel3ObjRef": null2(info.addressDto.aolevel3.refId),
        "aoLevel3ObjName": null2(info.addressDto.aolevel3.name),
        "aoLevel4": 4,
        "aoLevel4ObjRef": null2(info.addressDto.aolevel4.refId),
        "aoLevel4ObjName": null2(info.addressDto.aolevel4.name),
        "aoLevel5": 5,
        "aoLevel5ObjRef": null2(info.addressDto.aolevel5.refId),
        "aoLevel5ObjName": null2(info.addressDto.aolevel5.name),
        "aoLevel6": 6,
        "aoLevel6ObjRef": null2(info.addressDto.aolevel6.refId),
        "aoLevel6ObjName": null2(info.addressDto.aolevel6.name),
        "aoLevel7": 7,
        "aoLevel7ObjRef": null2(info.addressDto.aolevel7.refId),
        "aoLevel7ObjName": null2(info.addressDto.aolevel7.name),
        "aoLevel90": 90,
        "aoLevel90ObjRef": null2(info.addressDto.aolevel90.refId),
        "aoLevel90ObjName": null2(info.addressDto.aolevel90.name),
        "aoLevel91": 91,
        "aoLevel91ObjRef": null2(info.addressDto.aolevel91.refId),
        "aoLevel91ObjName": null2(info.addressDto.aolevel91.name),
        "houseRef": null2(info.addressDto.house.refId),
        "houseName": null2(info.addressDto.house.name),
        "flat": null2(info.addressDto.flat),
        "postalCode": null2(info.addressDto.postalCode),
        "kladrCode": "",
        "addressTxt": fillAddressText(null2(info.addressDto.addressTxt), null2(info.addressDto.house.name), null2(info.addressDto.flat), null2(info.addressDto.addressTxtRandom)),
        "addressTxt_random": null2(info.addressDto.addressTxtRandom),
        "aoLevel65": 65,
        "aoLevel65ObjRef": null2(info.addressDto.aolevel65['refId']),
        "modifiedBy": "TSST",
        "aoLevel65ObjName": null2(info.addressDto.aolevel65['name'])
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
  let info = s.person_info;
  return [
    {
      "commentId": info.selectedExtraInfos1,
      "description": info.extraInfosDescription1,
      "recVersion": 0
    },
    {
      "commentId": info.selectedExtraInfos2,
      "description": info.extraInfosDescription2,
      "recVersion": 0
    },
  ]; /*
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
    //TODO id или объект?
    "deliveryType": info.application_selectedDeliveryType.id,
    "docReturnType": info.application_selectedDeliveryReturnType.id,

    "applDate": dateConvert(info.application_date), // "01.01.2016 00:00",


    "changeEnvBudget": 1,
    "docType": info.application_selectedDocType['id'],
    "grantDateOriginal": info.application_selectedDocType['id'].name === "Копия"? "01.01.1900 00:00" : (dateConvert(info.application_date)),
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
        "documentId": doc.selected_document.documentId,
        "docSeries": doc.serialDoc ? doc.serialDoc : '',
        "docNumber": doc.numberDoc ? doc.numberDoc : '',
        "docIssueDate": dateConvert(doc.dateOfIssueDoc),
        "docIssueBy": doc.issuedByDoc ? doc.issuedByDoc : '',
        "docName": doc.fullnameDoc,
        "docType": doc.docTypeDoc['id'],
        "docQuantity": doc.countDoc,
        "altDocName": doc.nameDoc,
        "docGrantDate": "01.01.1900 00:00",
        "documentKindId": "",
        "isauto": doc.tab_document_auto ? 1 : 0
      }
    }
  );
  return Array.isArray(result) ? result : [];
};


// нет целевых // compGroupsId - беда
let fillAppLines = function(wiz){
  let result = wiz.map(
    line => {
      // console.log(line.date);
      // console.log(dateConvert(line.date));
      return {
        "appLineId": line.id,
        "priority": 0,
        "refNum": "",
        "refDate": "01.01.1900 00:00",
        "contrNum": line.environmentId === "ЦелНапр"? line.contract : "",
        "contrDate": line.environmentId === "ЦелНапр"? (dateConvert(line.date)) : "01.01.1900 00:00",
        "targOrgId": line.environmentId === "ЦелНапр"? line.company.targOrgId : "",
        "orgName": line.environmentId === "ЦелНапр"? line.company.name : "",

        "compGroupsId": line.compGroupsId === "" ? "" : line.compGroupsId,
        "compGroupsLineId": line.compGroupsLineId === "" ? "" : line.compGroupsLineId,


        "deparCode": line.deparCode,
        "specialityId": line.specialityId,
        "environmentId": line.environmentId,
        "envIdChange": "",
        "eduForm": 1,
        "agreements": line.agree ? [
          {
            "orderGroupType":
               line.orderGroupType === 'Общий набор'? 4 :
              (line.orderGroupType === 'Целевой набор' ? 3 :
              (line.orderGroupType === 'Особое право'? 2 : 1)),
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
  let someArray = s.application.choosenWizards;
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
            "documentId": pref[`doc${n}`].documentId,
            "docSeries": pref[`doc${n}_serial`], // "АБ",
            "docNumber": pref[`doc${n}_number`], // "55596932а",
            "docIssueDate": dateConvert(pref[`doc${n}_IssuDate`]), //  "01.01.2008 00:00",
            "docIssueBy": pref[`doc${n}_IssueBy`], //  "Отделом ВК С-ПБ по Выборгскому району",
            "docName": pref[`doc${n}_full_info`], //  "Диплом победителя/призера олимпиады школьников Серия 234234 № 23423423423423 от 24.05.2017 выдан ОргКом (Копия)",
            "docType": pref[`tab_features_selectedDocType${n}`]['id'], //0,
            "docQuantity": 1, // /????
            "altDocName":  ( pref[`tab_features_selectedDocType${n}`]['id'] === "015" && pref[`doc${n}_newName`] === "")? "[Иной документ]" : pref[`doc${n}_newName`],
            "docGrantDate": pref[`tab_features_selectedDocType${n}`]['id'].name === "Копия" ? "01.01.1900 00:00" : dateConvert(pref[`tab_featuresShowDate${n}`]),
            "isDublicate": 0,
            "documentKindId": ""
          };
          accum.push(doc);
        }
        return accum; }, []),
    };
  });


  // let id = "";
  // let preferenceId = "";
  // let prefType = "";

  // let documents = [];
  // console.log('applLine ----',someArray);
  for(let i = 0;i < someArray.length; i++){
    // console.log('in for',someArray[i]);

    if(someArray[i].specialRight) {
      let documents = [];
      if (someArray[i].proofSpecialRight1 !== null) {
        let doc = {
          "modifiedBy": "TSST",
          "documentId": someArray[i].proofSpecialRight1.documentId,
          "docSeries": someArray[i].serialSpecialRight1,
          "docNumber": someArray[i].numberSpecialRight1,
          "docIssueDate": dateConvert(someArray[i].dateSpecialRight1), //  "01.01.2008 00:00",
          "docIssueBy": "", //  "Отделом ВК С-ПБ по Выборгскому району",
          "docName": someArray[i].proofSpecialRight1.name + ' Cерия ' + someArray[i].serialSpecialRight1 + ' № ' + someArray[i].numberSpecialRight1 + ' от ' + dateConvert(someArray[i].dateSpecialRight1) + ' (' + someArray[i].docTypeSpecialRight1.name + ')',
          "docType": someArray[i].docTypeSpecialRight1.id, //0,
          "docQuantity": 1, // /????
          "altDocName": "",
          "docGrantDate": "01.01.1900 00:00",
          "isDublicate": 0,
          "documentKindId": ""
        };
        documents.push(doc);
      }

      if (someArray[i].proofSpecialRight2 !== null) {
        let doc = {
          "modifiedBy": "TSST",
          "documentId": someArray[i].proofSpecialRight2.documentId,
          "docSeries": someArray[i].serialSpecialRight2,
          "docNumber": someArray[i].numberSpecialRight2,
          "docIssueDate": dateConvert(someArray[i].dateSpecialRight2), //  "01.01.2008 00:00",
          "docIssueBy": "", //  "Отделом ВК С-ПБ по Выборгскому району",
          "docName": someArray[i].proofSpecialRight2.name + ' Cерия ' + someArray[i].serialSpecialRight2 + ' № ' + someArray[i].numberSpecialRight2 + ' от ' + dateConvert(someArray[i].dateSpecialRight2) + ' (' + someArray[i].docTypeSpecialRight2.name + ')',
          "docType": someArray[i].docTypeSpecialRight2.id, //0,
          "docQuantity": 1, // /????
          "altDocName": "",
          "docGrantDate": "01.01.1900 00:00",
          "isDublicate": 0,
          "documentKindId": ""
        };
        documents.push(doc);
      }

      let pref = {
        "preferenceId": someArray[i].typeOfSpecialRight.preferenceId,
        "prefType": someArray[i].typeOfSpecialRight.prefType,
        "sourceType": 0,
        "typeDiploma": 0,
        "nameOlympiad": "",
        "chemistry": 0,
        "biology": 1,
        "appLineId": someArray[i].id,
        "isPrefApprove": 0,
        "pointRandom": 0,
        "yearCount": 0,
        "pointFisExport": 0,
        "isShow": 0,
        "modifiedBy": "TSST",
        "preferenceDocs": documents
      }
      result.push(pref);
    }
  }


  //   if(someArray[i].numberSpecialRight1!== null){
  //     console.log('chekc spesial')
  //     id = someArray[i].id;
  //     preferenceId = someArray[i].typeOfSpecialRight.preferenceId;
  //     prefType = someArray[i].typeOfSpecialRight.prefType;
  //     console.log('preferenceId',preferenceId);
  //     console.log('prefType',prefType);
  //     console.log(id);
  //     console.log(someArray[i].proofSpecialRight1.documentId);
  //     console.log(someArray[i].serialSpecialRight1);
  //     console.log(someArray[i].numberSpecialRight1);
  //     console.log(dateConvert(someArray[i].dateSpecialRight1));
  //     console.log(someArray[i].proofSpecialRight1.name + ' Cерия ' + someArray[i].serialSpecialRight1 + ' № ' + someArray[i].numberSpecialRight1 + ' от ' + dateConvert(someArray[i].dateSpecialRight1) + ' ('+ someArray[i].docTypeSpecialRight1.name + ')');
  //     console.log(someArray[i].docTypeSpecialRight1.id);
  //
  //     let doc = {
  //       "modifiedBy": "TSST",
  //       "documentId": someArray[i].proofSpecialRight1.documentId,
  //       "docSeries": someArray[i].serialSpecialRight1,
  //       "docNumber": someArray[i].numberSpecialRight1,
  //       "docIssueDate": dateConvert(someArray[i].dateSpecialRight1), //  "01.01.2008 00:00",
  //       "docIssueBy": "", //  "Отделом ВК С-ПБ по Выборгскому району",
  //       "docName": someArray[i].proofSpecialRight1.name + ' Cерия ' + someArray[i].serialSpecialRight1 + ' № ' + someArray[i].numberSpecialRight1 + ' от ' + dateConvert(someArray[i].dateSpecialRight1) + ' ('+ someArray[i].docTypeSpecialRight1.name + ')',
  //       "docType": someArray[i].docTypeSpecialRight1.id, //0,
  //       "docQuantity": 1, // /????
  //       "altDocName":  "",
  //       "docGrantDate": "01.01.1900 00:00",
  //       "isDublicate": 0,
  //       "documentKindId": ""
  //     };
  //     console.log(doc);
  //     documents.push(doc);
  //     console.log(someArray[i].proofSpecialRight2)
  //     if(typeof someArray[i].proofSpecialRight2!== 'undefined' || someArray[i].proofSpecialRight2!==null){
  //       let doc = {
  //         "modifiedBy": "TSST",
  //         "documentId": someArray[i].proofSpecialRight2.documentId,
  //         "docSeries": someArray[i].serialSpecialRight2,
  //         "docNumber": someArray[i].numberSpecialRight2,
  //         "docIssueDate": dateConvert(someArray[i].dateSpecialRight2), //  "01.01.2008 00:00",
  //         "docIssueBy": "", //  "Отделом ВК С-ПБ по Выборгскому району",
  //         "docName": someArray[i].proofSpecialRight2.name + ' Cерия ' + someArray[i].serialSpecialRight2 + ' № ' + someArray[i].numberSpecialRight2 + ' от ' + dateConvert(someArray[i].dateSpecialRight2) + ' ('+ someArray[i].docTypeSpecialRight2.name + ')',
  //         "docType": someArray[i].docTypeSpecialRight2.id, //0,
  //         "docQuantity": 1, // /????
  //         "altDocName":  "",
  //         "docGrantDate": "01.01.1900 00:00",
  //         "isDublicate": 0,
  //         "documentKindId": ""
  //       };
  //       documents.push(doc);
  //     }
  //   }
  //
  // }
  // console.log(preferenceId)
  // console.log(prefType)
  // let pref = {
  //   "preferenceId":preferenceId,
  //   "prefType": prefType,
  //   "sourceType": 0,
  //   "typeDiploma": 0,
  //   "nameOlympiad": "",
  //   "chemistry": 0,
  //   "biology": 1,
  //   "appLineId": id,
  //   "isPrefApprove": 0,
  //   "pointRandom": 0,
  //   "yearCount": 0,
  //   "pointFisExport": 0,
  //   "isShow": 0,
  //   "modifiedBy": "TSST",
  //
  //   "preferenceDocs":documents
  //
  // }

  // console.log(pref)
  // result.push(pref);
  return result = Array.isArray(result) ? result : [];
};




/// !!!если одно поле документа не заполнено, то только оно возьмется из основного докоумента!!!

//TODO check ege
let egeDocComparator = (a, b) => {

  return (a.docFirstName             === b.docFirstName)
    && (a.docMiddleName            === b.docMiddleName)
    && (a.docLastName              === b.docLastName)
    && (a.identityCardIssueDate    === b.identityCardIssueDate)
    &&  (a.identityCardSeries       === b.identityCardSeries)
    && (a.identityCardNumber       === b.identityCardNumber)
    && (a.identityCardIssueBy      === b.identityCardIssueBy)
    && (a.identityCardCode         === b.identityCardCode)
    && (a.yearDeliveryEge          === b.yearDeliveryEge);
  // (a.otherCountyRegionId      === b.otherCountyRegionId)

};



let fillEge = function(s){
  const nullDate = "01.01.1900 00:00";

  let person = s.person_info;

  let array = s.ege_info;
  let array2 = [];

  for(let j=0; j<array.length; j++){
    if(array[j].tab_ege_score !== 0 ){

      if(array[j].tab_ege_changePaspInf === false){
        array[j].tab_ege_info_selectedCitizenship = '';
        array[j].tab_ege_firstname = '';
        array[j].tab_ege_middlename = '';
        array[j].tab_ege_lastname = '';
        array[j].tab_ege_identityCardIssueDate = '';
        array[j].tab_ege_identityCardSeries = '';
        array[j].tab_ege_identityCardNumber = '';
        array[j].tab_ege_identityCardIssueBy = '';
        array[j].tab_ege_selectedIdentityCardCode = '';

      }

      array2.push(array[j]);
    }
  }


  // let flatArray = s.ege_info.map((ege) => {
  let flatArray = array2.map((ege) => {
        return {
          "otherCountyRegionId": ege.tab_ege_changePaspInf === false ? "" : ege.tab_ege_info_selectedCitizenship['countryRegionId'],
          "docFirstName": ege.tab_ege_firstname,
          "docMiddleName": ege.tab_ege_middlename,
          "docLastName": ege.tab_ege_lastname,
          "identityCardIssueDate": ege.tab_ege_identityCardIssueDate === '' ? "01.01.1900 00:00" : dateConvert(ege.tab_ege_identityCardIssueDate),
          "identityCardSeries": ege.tab_ege_identityCardSeries,
          "identityCardNumber": ege.tab_ege_identityCardNumber,
          "identityCardIssueBy": ege.tab_ege_identityCardIssueBy,
          "identityCardCode": ege.tab_ege_changePaspInf === false ? "" : ege.tab_ege_selectedIdentityCardCode['identityCardCode'],
          "yearDeliveryEge": ege.tab_ege_year['academyYearId'],


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
              "subjectId": getIdEgeSubject(ege.tab_ege_selectedSubject), // "РусскЯз",
              "score": ege.tab_ege_score,
              "scoreFis": 0,
              "orderBy": getOrderEgeSubject(ege.tab_ege_selectedSubject),
              "modifiedBy": "TSST",
              "lastCheckDate": "01.01.1900 00:00",
              "egeAppealStatus": 1
            }
          ]
        };

  });

  let result = flatArray.reduce((accum, el)=> {
    // console.log('accum: ',accum);
    const i = accum.findIndex((e) => {
      return egeDocComparator(el, e)
    });

    if (i === -1) {
      accum.push(el);
    } else {
      accum[i].egeSubjects.push(el.egeSubjects[0]);
    }
    return accum;
  }, []);

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
    "lineNum": dto.addressType['id'], //1,
    "countryRegionId": null2(dto.countryRegion['refId']), //"РФ",
    "countryRegionName": null2(dto.countryRegion['name']), //"Россия",
    "aoLevel1": 1,
    "aoLevel1ObjRef": null2(dto.aolevel1['refId']), //"c2deb16a-0330-4f05-821f-1d09c93331e6",
    "aoLevel1ObjName": null2(dto.aolevel1['name']) , // "Санкт-Петербург г",
    "aoLevel2": 2,
    "aoLevel2ObjRef": null2(dto.aolevel2['refId']) , // "",
    "aoLevel2ObjName": null2(dto.aolevel2['name']) , // "",
    "aoLevel3": 3,
    "aoLevel3ObjRef": null2(dto.aolevel3['refId']) , // "",
    "aoLevel3ObjName": null2(dto.aolevel3['name']) , // "",
    "aoLevel4": 4,
    "aoLevel4ObjRef": null2(dto.aolevel4['refId']) , // "",
    "aoLevel4ObjName": null2(dto.aolevel4['name']) , // "",
    "aoLevel5": 5,
    "aoLevel5ObjRef": null2(dto.aolevel5['refId']) , // "",
    "aoLevel5ObjName": null2(dto.aolevel5['name']) , // "",
    "aoLevel6": 6,
    "aoLevel6ObjRef": null2(dto.aolevel6['refId']) , // "",
    "aoLevel6ObjName": null2(dto.aolevel6['name']) , // "",
    "aoLevel7": 7,
    "aoLevel7ObjRef": null2(dto.aolevel7['refId']) , // "56971303-9731-4e84-b737-7b2020d38f5d",
    "aoLevel7ObjName": null2(dto.aolevel7['name']) , // "Боткинская ул",
    "aoLevel90": 90,
    "aoLevel90ObjRef": null2(dto.aolevel90['refId']) , // "",
    "aoLevel90ObjName": null2(dto.aolevel90['name']) , // "",
    "aoLevel91": 91,
    "aoLevel91ObjRef": null2(dto.aolevel91['refId']) , // "",
    "aoLevel91ObjName": null2(dto.aolevel91['name']),
    "houseRef": null2(dto.house['refId']) ,// "78048f15-89e3-4a28-a47f-935ec875df89",
    "houseName": null2(dto.house['name']) ,//"д.15 корп.2",
    "flat": null2(dto.flat) ,//"21",
    "postalCode": null2(dto.postalCode),
    "kladrCode": "",
    "addressTxt": fillAddressText(null2(dto.addressTxt), null2(dto.house['name']), null2(dto.flat), null2(dto.addressTxtRandom)), // , // "Россия, Санкт-Петербург г, Боткинская ул, д.15 корп.2, кв.21",
    "addressTxt_random": null2(dto.addressTxtRandom), //"",
    "aoLevel65": 65,
    "aoLevel65ObjRef": null2(dto.aolevel65['refId']),
    "modifiedBy": "TSST",
    "aoLevel65ObjName": null2(dto.aolevel65['name'])
  };
};


let fillTotal = function (s) {
  let person = s.person_info;
  // console.log(person.tab_edu_military_educationLevel.eduLevelId, 'person.tab_edu_military_educationLevel.eduLevelId')
  // console.log(person.tab_edu_military_educationLevel, 'person.tab_edu_military_educationLevel')
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


    "parentOrgName": person.tab_personal_company_name,
    "parentOrgAddress": person.tab_personal_company_address,
    "profession": person.tab_personal_seniority,
    "employTime": person.tab_personal_employYears,


    "isForeignLikeRus" : boolConvert(person.tab_personal_isForeignLikeRussian),

// tab_personal_isForeignLikeRussian
// tab_personal_isEquatedForeign = приравнять к иностранцам
// tab_personal_INIPADate - дата снилса!
// tab_personal_note // DESCRIPTION = Примечание !!! А ЕГО НЕТ В СЕРВИСЕ !!!


    "subjectScores": fillSubjectScore(s),
    "modifiedBy": "TSST",
    "recId": null,
    "contactPersonId": null,
    "dataAreaId": "dat",
    "educationLevel" : person.tab_edu_military_educationLevel.eduLevelId, // ????
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
  // console.log('some33333333333 ', some);
  let obj = fillTotal(fatJSON);

  obj = Object.assign(demoObj, obj);

  // console.log(fillEge(fatJSON));
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
            })
            .catch(e => {
              console.log(this.errors.push(e));
            });
}
