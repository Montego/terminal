<template>
  <div>
    <h1>Специалитет</h1>
    <div class="form__row links">
      <a class="form__link" href="#">Правила приёма</a>
      <a class="form__link" href="#">Важные даты</a>
    </div>
    <div class="text_info">
      <h2>Контакты</h2>
      <p>
        <b>Адрес приёмной комиссии:</b> 195067, Санкт- Петербург, Пискарёвский проспект, дом 47, павильон 9.
      </p>
      <p>
        <b>Телефон:</b> (812) 303-50-53.
      </p>
      <p>
        <b>Режим работы:</b> 10:00-16:00, выходные - суббота, воскресенье.
      </p>
      <p>
        <b>Ответственный секретарь приёмной комиссии - Артюшкин Сергей Анатольевич.</b>
      </p>
      <p>
        Если у вас возникли трудности, задать вопрос можно в форме обратной связи, выбрав тему "Приемная комиссия. Специалитет"
      </p>
      <a class="form__link" href="#">Задать вопрос</a>
    </div>
    <img src="../../assets/img/maps/map1.png" alt="Карта пути.Специалитет">
  </div>


</template>

<script>
    export default {
        name: "Specialty"
    }
</script>

<style scoped>
  .links {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .text_info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
</style>
