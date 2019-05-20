<template>
  <div>
    <h1>Аспирантура</h1>
    <div class="form__row links">
      <a class="form__link" href="#">Правила приёма</a>
      <a class="form__link" href="#">Списки</a>
      <a class="form__link" href="#">Количество поданых заявлений</a>
    </div>
    <div class="text_info">
      <h2>Контакты</h2>
      <p>
        <b>Адрес приёмной комиссии:</b> 195067, Санкт- Петербург, Пискарёвский проспект, дом 47, павильон 29.
      </p>
      <p>
        <b>Телефон:</b> (812) 544-70-17, (812) 275-19-29
      </p>
      <p>
        <b>Режим работы:</b> 10:00-16:00, выходные - суббота, воскресенье.
      </p>
      <p>
        <b>Аликбаева Лилия Абдулняимовна - заведующая отделом</b>
      </p>
      <p>
        Если у вас возникли трудности, задать вопрос можно в форме обратной связи, выбрав тему "Приемная комиссия. Аспирантура"
      </p>
      <a class="form__link" href="#">Задать вопрос</a>
    </div>
    <img src="../../assets/img/maps/map3.png" alt="Карта пути.Аспирантура">
  </div>
</template>

<script>
    export default {
        name: "Postgraduate"
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
