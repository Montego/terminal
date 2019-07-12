<template>
  <div class="align-content-center">
    <h1>Авторизация</h1>
    <form method="post" action="http://localhost:8081/auth/login">
      <label class="form__row">
        <div class="form__label-text">Логин (имя или почта) :</div>
        <input v-model="username" class="form__input" type="text" name="username" value="" placeholder="Username" required/>
      </label>
      <label class="form__row">
        <div class="form__label-text">Password:</div>
        <input v-model="password" class="form__input" type="password" name="password" placeholder="Password" required/>
      </label>
      <div class="form__row form__links">
        <a class="form__link" href="/Registration">Регистрация</a>
        <a class="form__link" href="#">Забыли пароль?</a>
      </div>
      <button class="form__btn-submit btn" type="submit" @click="">Войти</button>
    </form>
  </div>

</template>

<script>
  import {AXIOS} from "../plugins/APIService";
    export default {

      data() {
        return {
          username: "",
          password: ''
        }
      },
      mounted(){
        return this.password
      },

      methods: {
        // login() {
        //   AXIOS.post(`/auth/login`, username, password)
        //     .then(response => {
        //       this.info.push(response.data)
        //     })
        //     .catch(e => {
        //       this.errors.push(e)
        //     })
        // },

        onLogin (username,password) {
          console.log("on login");

          AXIOS.post("http://localhost:8081/auth/login2", {username: "username", password: "password"})
            .then(response => {
              this.resp = response;
              location.href='profile';
              console.log("username:" + username +  ' password:'+ password);

            })
        .catch(e => {
              console.error(e);
              console.log("fail");

          });

        }

      }
    }
</script>

<style scoped>

  .align-content-center {
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .form__row {
    display: block;
    margin-bottom: 20px;
  }

  .form__label-text {
    margin-bottom: 5px;
    font-size: 22px;
    font-weight: 500;
  }

  .form__input {
    width: 320px;
    height: 40px;
    box-sizing: border-box;
    padding: 5px 10px;
    border: 1px solid #99ccff;
    border-radius: 5px;
    font-size: 18px;
  }

  .form__input:focus {
    border-color: #99ccff;
    box-shadow: 0 0 2px 1px #99ccff;
  }

  .form__links {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    min-width: 200px;
    padding: 10px;
    border: none;
    border-radius:5px;
    background-color: #99ccff;
    font-size: 16px;
    cursor: pointer;
  }

  .btn:focus {
    box-shadow: 0 0 0 3px #000;
  }
</style>
