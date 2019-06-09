<template>
  <!--<div class="clear_save_photo row">-->
    <!--&lt;!&ndash;<v-button>Очистить</v-button>&ndash;&gt;-->
    <!--<button>Очистить</button>-->
    <!--<button>Добавить</button>-->

    <!--<div class="col-sm-4">-->
      <!--<input type="file" @change="previewFiles">-->
    <!--</div>-->
    <!--<img id="photo" v-model="file" alt="your image" />-->
    <!--<div>-->
      <!--<button> Сохранить данные об аббитуриенте</button>-->
    <!--</div>-->
  <!--</div>-->
  <div>
  <section id="app">
    <form method="post" class="row" action="/image/add" enctype="multipart/form-data">

      <div class="form-group row">
        <input type='file' @change="previewImages" id="newfiles" name="newfiles[]" class="form-control col-sm-9" accept="image/*" />
        <!--<button class="btn btn-outline-success float-right col-sm-4">Загрузить</button>-->

      </div>

      <!--<div class="row">-->
        <!--<div class="col sm">-->
          <!--<button class="btn btn-outline-success float-right">Загрузить</button>-->
          <!--<button class="btn btn-outline-success float-right" @click="clearPhoto" >Очистить</button>-->
        <!--</div>-->
      <!--</div>-->
    </form>
    <!--<button class="btn btn-outline-success float-right col-sm-4" @click="clearPhoto" >Очистить</button>-->
      <div class="col-md-6 py-2 border" v-for="(image, index) in imagesData">
        <img class="img-thumbnail images_place" :src="image" v-if="image.length > 0">
      </div>
    <div class="clear_save_button row">
      <!--<button @click="onClearFields">Очистить</button>-->
      <button>Сохранить </button>
      <!--<button @click="onSaveParent">Сохранить изм-я</button>-->
    </div>
  </section>

  </div>
</template>

<script>
    export default {
      name: "TabPhoto",
      data() {
        return {
          imagesData: []
        }
      },
      methods: {

        clearPhoto() {
          this.imagesData.pop(this.imagesData.length-1);
        },
        previewImages: function(event) {
          this.imagesData = [];
          var pictures = event.target.files;
          for (var i = 0; i < pictures.length; i++) {
            var reader = new FileReader();
            reader.onload = (e) => {
              this.imagesData.push(e.target.result);
            }
            reader.readAsDataURL(pictures[i]);
          }
        }
      }
    }
</script>

<style scoped>
  .images_place {
    height: 640px;
    width: 480px
  }
  .calculate_score {
    margin-top: -8px;
  }
  .adress_button {
    margin-left: -20px;
  }

  tbody tr:hover td {
    background-color: #FFEFC6;
    cursor: pointer;
  }
  tr:hover {
    background-color: red;
  }
  .search_form div {
    font-size: 20px;
  }
  .search_form input {
    width: 500px;
  }
  .search_form {
    margin-top: 14px;
    height: 15px;
  }
  .search_button {
    margin-top: 7px;
    margin-left: 30px;
  }
  input {
    height: 25px;
    border-radius: 3px;
    border: 1px solid;
    border-color: grey;
    /*border: 4px;*/
  }
  input.checkbox{
    height: 15px;
    transform:scale(1.3);
    opacity:0.9;
    cursor:pointer;
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
  }
  .clear_save_button {
    /*margin-top: 75%;*/
    margin-left: 65%;
    display: flex;
    /*justify-content: space-between;*/
  }
  .outer {
    /*margin: 5px;*/
    /*margin-top: -5px;*/
    background: linear-gradient(45deg, #EECFBA, #C5DDE8);
    /*background: linear-gradient(to top left, powderblue, pink);*/
  }
  .distinctive_features_top {
    height: 50%;
  }
  .distinctive_features_bottom {
    height: 50%;
  }
  textarea {
    width: 90%; /* Ширина поля в процентах */
    height: 100px; /* Высота поля в пикселах */
    resize: none; /* Запрещаем изменять размер */
  }
  .buttons {
    margin-left: 10px;
  }
  .ege_tabs {
    margin-top: -35px;
  }
  .parent_tabs {
    margin-top: -35px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }
  .inner_tab {
    margin-top: -40px;
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }
  p {
    font-size: 25px;
  }
  button {
    min-width: 100px;
    padding: 10px;
    border: 1px solid;
    border-color: grey;
    border-radius:5px;
    background-color: ghostwhite;
    /*background-color: #EDD19C;*/
    font-size: 16px;
    cursor: pointer;
    transform:scale(0.8);
    opacity:0.9
  }

  /*.checkbox {*/
  /*transform:scale(1.3);*/
  /*opacity:0.9;*/
  /*cursor:pointer;*/
  /*}*/
  .main_tab {
    margin-top: 2px;
    margin-left: 5px;
    /*margin-right: 5px;*/
    /*background: linear-gradient(45deg, #EECFBA, #C5DDE8);*/
  }
  .row {
    margin-bottom: 8px;
  }
  .form__label-text {
    text-align: left;
  }
  .alarm_label {
    /*text-align: left;*/
    color: red;
  }

  .search_place {
    /*height: auto;*/
    margin-top: 30px;
    margin-left: 20px;
  }
  .search_place p{
    margin-right: 10px;
  }
  .input_profile_part1 {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
</style>
