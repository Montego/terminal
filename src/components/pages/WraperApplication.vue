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
      <TabCheckAndSave></TabCheckAndSave>
    </tab>

  </tabs>
</div>
</template>

<script>
  import TabApplicationFill from "../tabs/Application/TabApplicationFill";
  import TabDocuments from "../tabs/Application/TabDocuments";
  import TabCheckAndSave from "../tabs/Application/TabCheckAndSave";
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
        TabApplicationFill,
        TabDocuments, TabCheckAndSave
      },
    }
</script>

<style scoped>
  .main_tab {
    margin-top: 2px;
    margin-left: 5px;
  }
</style>
