<template>
    <div>
        <v-combobox
                v-model="selectedItem"
                item-text="name"
                :items="sOptions"
                :search-input.sync="search"
                return-object
                @input="newValue"
                auto-select-first
                @click:clear="clear()"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                clearable
                no-filter
                :label="label"
        >
            <template v-slot:item="data" >
                <template v-if="typeof data.item !== 'object'">
                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                </template>
                <template v-else >
                    <v-list-tile-content class="tile" >
                        <v-list-tile-title  v-html="data.item.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="data.item.fullName"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </template>
            </template>
        </v-combobox>
    </div>
</template>
<script>
    export default {
        name: "addresserLine",
        props: {
            adrItem: Object,
            selectOptions: Array,
            label: String
        },
        data() {
            return {
                search: null,
                selectedItem: '',
                cachedItem: {},
                cachedSearchInput: '',
                sOptions: [{}]
            }
        },
        methods: {
            onBlur: function(e){

            },
            onFocus: function(e){

            },
            clear: function () {
                this.$emit('clear');
            },
            newValue: function(obj){
                // console.log('newValue', obj);
                if(!obj || obj.refId === undefined || obj.refId === null || obj.refId === ''){
                    // console.log('1-newValue', this.selectedItem, this.cachedItem);
                    let tmpObj = {
                        aolevel : this.cachedItem.aolevel,
                        level   : this.cachedItem.level,
                        name    : this.cachedItem.name,
                        refId   : this.cachedItem.refId,
                        title   : this.cachedItem.title
                    };
                    this.$set(this, 'selectedItem', tmpObj);
                }
                else{
                    this.$emit('newValue', {newValue: obj, cachedItem: this.cachedItem});
                }
            }
        },
        watch: {
            adrItem: {
                immediate: true,
                handler: function(val){
                    this.selectedItem = val === undefined ? {} : val;
                    this.cachedItem = val === undefined ? {} : val;
                },
                deep: true
            },
            selectOptions: {
                immediate: true,
                handler: function(val){
                    this.sOptions = val;
                },
                deep: true
            },
            search(val) {
                if (this.selectedItem && val === this.selectedItem.name) {
                    return;
                }
                this.$emit('refresh', val);
            }
        }
    }
</script>
<style scoped>
    .v-combobox {
        font-size: .5rem;
    }

    .tile {
    }
    .tile:hover {
        text-decoration: underline;
    }
</style>
<!--  -->

