<template>
<div>
  <tabs class="main_tab" >
    <tab id="overview_personal_info" name="Обзор">
      <TabOverview :handleClick="handleClick"></TabOverview>
    </tab>

    <tab class="personal_tab" id="personal_info" name="Личные сведения">
      <TabPersonalInfo></TabPersonalInfo>
    </tab>

    <tab id="contacts" name="Адресные данные">
      <TabAddressInfo></TabAddressInfo>
    </tab>

    <tab id="evidence_ege" name="Свидетельства ЕГЭ">
      <TabEvidenceEge></TabEvidenceEge>
    </tab>

    <tab class="graduate_military" id="graduate_military" name="Образование, военная служба">
      <TabEducationMilitary></TabEducationMilitary>
    </tab>

    <tab id="parent_trustee" name="Родитель/Попечитель">
      <TabParentInfo></TabParentInfo>
    </tab>
    <tab id="distinctive_features" name="Отличительные признаки">
      <TabDistinctiveFeaturesInfo></TabDistinctiveFeaturesInfo>
    </tab>
    <tab id="photo" name="Фотография">
      <TabPhoto></TabPhoto>
    </tab>
    <!--{{showProfile}}-->
  </tabs>
</div>
</template>

<script>
  import TabOverview from "../tabs/Profile/TabOverviewProfile";
  import TabPersonalInfo from "../tabs/Profile/TabPersonalInfo";
  import TabAddressInfo from "../tabs/Profile/TabAddressInfo";
  import TabEducationMilitary from "../tabs/Profile/TabEducationMilitaryInfo";
  import TabEvidenceEge from "../tabs/Profile/TabEvidenceEgeInfo";
  import TabParentInfo from "../tabs/Profile/TabParentInfo";
  import TabDistinctiveFeaturesInfo from "../tabs/Profile/TabDistinctiveFeaturesInfo";
  import TabPhoto from "../tabs/Profile/TabPhoto";
  import { createHelpers } from 'vuex-map-fields';

  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
    export default {
        name: "WraperProfile",
      props: {
        handleClick: Function,
      },
      // data() {
      //   return {
      //     showProfile: true,
      //   }
      // },
      computed: {
        ...person(['person', 'showProfile']),
      },
      components: {
        TabPhoto,
        TabDistinctiveFeaturesInfo,
        TabParentInfo, TabEvidenceEge, TabEducationMilitary,
        TabAddressInfo, TabPersonalInfo, TabOverview,


      },
      // methods: {
      //   handleClick(val) {
      //     this.showProfile = val;
      //   },
      // }
    }
</script>

<style scoped>

</style>
