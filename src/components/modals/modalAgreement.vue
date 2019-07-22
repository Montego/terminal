<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Соглашение
          <button
            type="button"
            class="btn-close"
            @click="closeModalAgreemnt"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">

        <div  class="row">
          <div class="col-sm-6">
            <label class="row">
              <div class="form__label-text col-sm">Дата согласия:</div>
              <input v-model="acceptedDate" class="form__input col-sm" type="date"  min="1918-01-01" />
            </label>
          </div>
        </div>

      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button
            type="button"
            class="btn-green"
            @click="modalAgree()"
          >
            Создать заявление
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
    export default {
        name: "modalAgreement",
      methods: {

        closeModalAgreemnt() {
          this.$emit('closeModalAgreemnt');
        },
        modalAgree() {
          this.$emit('modalAgree');

        }
      }
    }
</script>

<style scoped>
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
