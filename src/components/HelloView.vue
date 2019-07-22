<template>
    <div class="hello" data-app>
        <v-btn
                @click="saveSpecialist"
                fixed absolute top right
                fab dark color="blue"
                style="margin-top: 5rem; z-index: 100;"
        ><v-icon >cloud_upload</v-icon></v-btn>
        <hr/>
        <v-container>
            <v-layout row>
                <v-flex xs10 offset-xs1>
                    <v-card dark color="brown">
                        <v-card-text><h5>{{ msg }}</h5></v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs8 offset-xs2>
                    <addresser adrType="0"/>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs8 offset-xs2>
                    <addresser adrType="1"/>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs8 offset-xs2>
                    <addresser adrType="2"/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import addresser from '@/components/addresser/addresser'
    import {mapActions} from 'vuex'

    export default {
        name: 'HelloView',
        components: {
            addresser
        },
        async mounted() {
            await this.loadSpecialist(852);
        },
        data() {
            return {
                msg: 'I am Jack\'s inflamed sense of rejection.'
            }
        },
        methods: {
            ...mapActions(['loadSpecialist', 'saveSpecialist']),
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
