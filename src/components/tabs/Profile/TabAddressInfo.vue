<template>
    <div class="inner_tab">
        <div class="row">
            <div class="info_address col-sm">
                <div>
                    <p>Адрес регистрации</p>
                </div>
                <hr>
                <div class="buttons row">
                    <button @click="show=0" class="adress_button">Ввести адрес</button>
                </div>
                <label class="row">
                    <div class="form__label-text col-sm-2">Адрес:</div>
                    <!--&#45;&#45;ыv-ыmodel="tab_address_registrationAddress"-->
                    <!--<textarea  class="uneditable col-sm-10" name=""-->
                    <!--&gt; </textarea>-->
                    <div class="uneditable col-sm-10">{{ ADRText()[0] }}</div>
                </label>
              <label class="row">
                <div class="form__label-text col-sm-3 ">ФИС</div>
                <select v-model="person.person_info.fisSettlementTypeId" class="minimal col-sm-3 ">
                  <option v-for="option in options_FIS">
                    {{option.item}}
                  </option>
                </select>
              </label>

              <!--<div class="col-sm-5">-->
                <!--<input v-model="person.person_info.fisSettlementTypeId" class="form__input col-sm" type="text"/>-->
              <!--</div>-->
            </div>
            <div class="info_address2 col-sm">
                <div>
                    <p>Адрес фактический</p>
                </div>
                <hr>
                <div class="buttons row">
                    <button class="adress_button" @click="show=1">Ввести адрес</button>
                    <!--<button class="adress_button" @click="onCopyAddress">Копировать</button>-->
                </div>
                <label class="row">
                    <div class="form__label-text col-sm-2">Адрес:</div>
                    <!--<textarea v-model="tab_address_factAddress" class="uneditable col-sm-10"></textarea>-->
                    <div class="uneditable col-sm-10">{{ ADRText()[1] }}</div>
                </label>
            </div>
            <div class="info_address2 col-sm">
                <div>
                    <p>Адрес временной регистрации</p>
                </div>
                <hr>
                <div class="buttons row">
                    <button @click="show=2" class="adress_button">Ввести адрес</button>
                </div>
                <label class="row">
                    <div class="form__label-text col-sm-2">Адрес:</div>
                    <!--<v-textarea >{{ ADRText()[0] }}</v-textarea>-->
                    <!--<div class="uneditable col-sm-10">{{ ADRText()[0] }}</div>-->
                    <textarea class="uneditable col-sm-10">{{ ADRText()[2] }}</textarea>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <v-btn v-if="show>=0" @click="show=-1">
                    Скрыть
                </v-btn>
            </div>
        </div>
        <div class="row">
            <div v-for="i in [0,1,2]" :key="i" v-if="show===i" class="col-5 offset-3">
                <addresser :adrType="i"></addresser>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    import {createHelpers} from 'vuex-map-fields';
    import addresser from "../../addresser/addresser";

    const {mapFields: person} = createHelpers({
        getterType: 'person/getField',
        mutationType: 'person/updateField',
    });
    const {mapFields: tab_address_info} = createHelpers({
        getterType: `tab_address_info/getField`,
        mutationType: `tab_address_info/updateField`,
    });

    export default {
        name: "TabAddressInfo",
        data() {
            return {
                checkedAddress: [],
                factAddress: '',
                show: -1,

              options_FIS: [
                {id: 1, item: '0'},
                {id: 2, item: '1'},
                {id: 3, item: '2'},
              ],
            }
        },
        // computed: {
        //     ...person(['person', 'tab_address_registrationAddress', 'tab_address_factAddress',
        //         'tab_address_templateRegistrationAddress',]),
        // },
        methods: {
            ...mapGetters(['ADRText']),
            // onCopyAddress() {
            //     // this.factAddress = this.person.tab_address_registrationAddress;
            //     this.tab_address_factAddress = this.tab_address_registrationAddress;
            // },
        },
      computed: {
        ...person(['person',])
      },
        components: {addresser}
    }
</script>

<style scoped>
    input.checkbox {
        height: 15px;
        transform: scale(1.3);
        opacity: 0.9;
        cursor: pointer;
    }

    .uneditable {
        background-color: #F5F5F5;
    }

    label.row {
        margin-bottom: 3px;
    }

    input {
        height: 25px;
        border-radius: 3px;
        border: 1px solid;
        border-color: grey;
        /*border: 4px;*/
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
        width: 90%;
        height: 100px;
        resize: none;
    }

    p {
        font-size: 25px;
        margin-bottom: 0px;
    }

    button {
        min-width: 100px;
        padding: 10px;
        border: 1px solid;
        border-color: grey;
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

    .search_form div {
        font-size: 20px;
    }

    .search_form input {
        width: 500px;
    }

    .adress_button {
        margin-left: -20px;
    }

    .row {
        margin-bottom: 8px;
    }

    .form__label-text {
        text-align: left;
    }

    .buttons {
        margin-left: 10px;
    }

    .inner_tab {
        margin-top: -40px;
        /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
    }


</style>
