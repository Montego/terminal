<template>
  <div class="align-content-center">
    <h1>Регистрация</h1>
    <form class="form" action="" method="post">
      <label class="form__row">
        <div class="form__label-text">Логин:</div>
        <input class="form__input" type="text" name="username" value="" placeholder="Имя пользователя" required/>
      </label>
      <label class="form__row">
        <div class="form__label-text">Почта:</div>
        <input class="form__input" type="email" name="email" value="" placeholder="Почтовый ящик" required/>
      </label>
      <label class="form__row">
        <div class="form__label-text">Пароль:</div>
        <input class="form__input" type="password" name="password" placeholder="Пароль" required/>
      </label>
      <div class="form__row form__links">
        <a class="form__link" href="/login">Авторизация</a>

      </div>
      <button class="form__btn-submit btn" type="submit">Зарегистрироваться</button>
    </form>
  </div>

</template>

<script>
  export default {
    name: "Registration"
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

