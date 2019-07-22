<template>
<div>
  <tabs class="main_tab" v-show="!showProfile" :handleClick="handleClick">
    <!--<tab id="overviewApplication" name="Обзор">-->
      <!--<TabOverviewApplication></TabOverviewApplication>-->
    <!--</tab>-->
    <!--<tab id="applicationFill" name="Заявление">-->
      <!--<TabApplicationFill></TabApplicationFill>-->
    <!--</tab>-->
    <tab id="overview_new" name="Заявление">
    <NewVersion></NewVersion>
    </tab>
    <!--<tab id="receptrionCondition" name="Условия приема">-->
      <!--<TabReceptionConditions></TabReceptionConditions>-->
    <!--</tab>-->
    <tab id="documents" name="Документы">
      <TabDocuments></TabDocuments>
    </tab>
    <!--<tab id="entranceTests" name="Вступительные испытания">-->
      <!--<TabEntranceTests></TabEntranceTests>-->
    <!--</tab>-->
    <tab id="other" name="Утвердить и сохранить">
      <TabOther></TabOther>
    </tab>
  </tabs>
</div>
</template>

<script>
  import TabOverviewApplication from "../tabs/Application/TabOverviewApplication";
  import TabApplicationFill from "../tabs/Application/TabApplicationFill";
  import TabReceptionConditions from "../tabs/Application/TabReceptionConditions";
  import TabDocuments from "../tabs/Application/TabDocuments";
  import TabEntranceTests from "../tabs/Application/TabEntranceTests";
  import TabOther from "../tabs/Application/TabOther";
  import NewVersion from "../tabs/Application/NewVersion";
  import { createHelpers } from 'vuex-map-fields';

  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
    export default {
        name: "WraperApplication",
        props: {
          handleClick: Function,
        },
      computed: {
        ...person(['person', 'showProfile']),
      },
      components: {
        // TabPhoto,
        // TabDistinctiveFeaturesInfo,
        // TabParentInfo, TabEvidenceEge, TabEducationMilitary,
        // TabAddressInfo, TabPersonalInfo, TabOverview,
        NewVersion,
        TabOverviewApplication, TabApplicationFill, TabReceptionConditions,
        TabDocuments, TabEntranceTests, TabOther
      },
    }
</script>

<style scoped>
  .main_tab {
    margin-top: 2px;
    margin-left: 5px;

    /*margin-right: 5px;*/
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }
</style>
