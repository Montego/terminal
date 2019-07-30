<template>
<div>
  <tabs class="main_tab" v-show="!showProfile" :handleClick="handleClick">

    <tab id="applicationFill" name="Заявление">
      <TabApplicationFill></TabApplicationFill>
    </tab>
    <tab id="documents" name="Документы">
      <TabDocuments></TabDocuments>
    </tab>

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
        TabOverviewApplication, TabApplicationFill, TabReceptionConditions,
        TabDocuments, TabEntranceTests, TabOther
      },
    }
</script>

<style scoped>
  .main_tab {
    margin-top: 2px;
    margin-left: 5px;
  }
</style>
