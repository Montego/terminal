<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Адрес

          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <div class="row">
          <div class="col-sm-6">
            <label class="row">
              <span class="form__label-text col-sm">что-то</span>
              <input   value= "" class="form__input col-sm" type="text"/>
            </label>
            <label class="row">
              <span class="form__label-text col-sm">что-то</span>
              <input   value= "" class="form__input col-sm" type="text"/>
            </label>
            <label class="row">
              <span class="form__label-text col-sm">что-то</span>
              <input   value= "" class="form__input col-sm" type="text"/>
            </label>
            <label class="row">
              <span class="form__label-text col-sm">что-то</span>
              <input   value= "" class="form__input col-sm" type="text"/>
            </label>
            <label class="row">
              <span class="form__label-text col-sm">что-то</span>
              <input   value= "" class="form__input col-sm" type="text"/>
            </label>
            <label class="row">
              <span class="form__label-text col-sm">что-то</span>
              <input   value= "" class="form__input col-sm" type="text"/>
            </label>
            <label class="row">
              <span class="form__label-text col-sm">что-то</span>
              <input   value= "" class="form__input col-sm" type="text"/>
            </label>

          </div>
        </div>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button
            type="button"
            class="btn-green"
            @click="toApplication()"
          >
            Ввести адрес
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
  import { createHelpers } from 'vuex-map-fields';
  import {mapGetters, mapState} from 'vuex';
  const { mapFields: applications } = createHelpers({
    getterType: `applications/getField`,
    mutationType: `applications/updateField`,
  });
  const { mapFields:person} = createHelpers({
    getterType: 'person/getField',
    mutationType: 'person/updateField',
  });
  export default {
    name: 'modal',
    data () {
      return {

      }
    },
    props: {
      handleClick: Function,
    },
    methods: {
      choose(item) {

      },
      close() {
        this.$emit('close');
      },
      toApplication() {
        this.$emit('toApplication');

      }
    },
    computed: {
      ...applications(['application','apls'],),
      ...person(['person_info_id','showProfile']),
      ...mapState('dictionary',['targOrg'],),
      ...mapGetters('dictionary',['GET_targOrg']),
    },
    mounted() {


    },
  }
</script>

<style scoped>
  select {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
  }

  select.minimal {
    background-image:
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    border-color: grey;
  }

  select.minimal:focus {
    background-image:
      linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 15px) 1em,
      calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;
    border-color: grey;
    outline: 0;
    border: 1px solid;
    border-color: grey;
  }
  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    /*border: 4px;*/
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
