<template>
<div class="align-content-center">
  <h1>Авторизация</h1>
  <form action="" method="post">
    <div class="form-group row pt-3 username">
      <label class="col-sm-12 col-form-label">Логин (телефон или почта) :  </label>
      <div class="col-12">
        <input type="text" name="username" value=""
               class="form-control col"
               placeholder="Username"/>
      </div>
    </div>
    <div class="form-group row password">
      <label class="col-sm-12 col-form-label"> Password:  </label>
      <div class="col-sm-12">
        <input type="password" name="password"
               class="form-control col"
               placeholder="Password"/>
      </div>
    </div>
    <div class="form-group row login_controls">
    <a href="/registration" class="col-sm-1"> Регистрация </a>
    <a href="/registration" class="col-sm-6">Забыли пароль? </a>
    <div class="col-sm-5">
      <button class="btn btn-primary" type="submit">Войти</button>
    </div>
    </div>
  </form>
</div>


  <!--<div>-->
    <!--<div class="align-content-center ">-->
      <!--<div class="col">-->
        <!--<h3>Авторизация</h3>-->
      <!--</div>-->
      <!--<div class="col">-->
        <!--<input type="text" >-->
        <!--<label>Почтовый ящик</label>-->
      <!--</div>-->
      <!--<div class="col">-->
        <!--<input type="password">-->
        <!--<label>Пароль</label>-->
      <!--</div>-->
      <!--<a href="Registation.vue"> Регистрация </a>-->
      <!--<button type="submit">Войти</button>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

  .username {
    margin-bottom: 10px;
  }
  .login_controls {
    margin-top: 10px;
  }
</style>
