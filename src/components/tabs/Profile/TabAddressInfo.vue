<template>
    <div class="inner_tab">
        <div class="row">
            <div class="info_address col-sm">
                <div>
                    <p>Адрес по прописке</p>
                </div>
                <hr>
                <div class="buttons row">
                    <button class="adress_button">Ввести адрес</button>
                </div>
                <label class="row">
                    <div class="form__label-text col-sm-2">Адрес:</div>
                    <textarea v-model="tab_address_registrationAddress" class="uneditable col-sm-10" name=""></textarea>
                </label>
            </div>
            <div class="info_address2 col-sm">
                <div>
                    <p>Адрес фактический</p>
                </div>
                <hr>
                <div class="buttons row">
                    <button class="adress_button">Ввести адрес</button>
                    <button class="adress_button" @click="onCopyAddress">Копировать</button>
                </div>
                <label class="row">
                    <div class="form__label-text col-sm-2">Адрес:</div>
                    <textarea v-model="tab_address_factAddress" class="uneditable col-sm-10"></textarea>
                </label>
            </div>
            <div class="info_address2 col-sm">
                <div>
                    <p>Адрес временной регистрации</p>
                </div>
                <hr>
                <div class="buttons row">
                    <button class="adress_button">Ввести адрес</button>
                </div>
                <label class="row">
                    <div class="form__label-text col-sm-2">Адрес:</div>
                    <textarea v-model="tab_address_templateRegistrationAddress" class="uneditable col-sm-10"></textarea>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <v-btn @click="go()">
                    go
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import {createHelpers} from 'vuex-map-fields';

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
        computed: {
            ...person(['person', 'tab_address_registrationAddress', 'tab_address_factAddress',
                'tab_address_templateRegistrationAddress',]),
            // ...tab_address_info(['tab_address_registrationAddress', 'tab_address_factAddress',
            //   'tab_address_templateRegistrationAddress',
            // ]),


        },
        data() {
            return {
                checkedAddress: [],
                factAddress: '',
            }
        },
        methods: {
            onCopyAddress() {
                // this.factAddress = this.person.tab_address_registrationAddress;
                this.tab_address_factAddress = this.tab_address_registrationAddress;
            },
            go(){
                this.$store.dispatch('go');
            }
        }
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
