<template>
  <div>
    <h1>Ординатура</h1>
    <div class="form__row links">
      <a class="form__link" href="#">Правила приёма</a>
      <a class="form__link" href="#">Изменения в правилах приема</a>
    </div>
    <div class="text_info">
      <h2>Контакты</h2>
      <p>
        <b>Адрес приёмной комиссии:</b> 195067, Санкт- Петербург, Пискарёвский проспект, дом 47, павильон 2/4.
      </p>
      <p>
        <b>Телефон:</b> (812) 530-00-34.
      </p>
      <p>
        <b>Режим работы:</b> 10:00-16:00, выходные - суббота, воскресенье.
      </p>
      <p>
        <b>Ракова Ирина Сергеевна - заведующая отделом</b>
      </p>
      <p>
        Если у вас возникли трудности, задать вопрос можно в форме обратной связи, выбрав тему "Приемная комиссия. Ординатура"
      </p>
      <a class="form__link" href="#">Задать вопрос</a>
    </div>
    <img src="../../assets/img/maps/map2.png" alt="Карта пути.Ординатура">
  </div>

</template>

<script>
    export default {
        name: "Residency"
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
