<template>
  <div>
    <h1>Контакты</h1>
    <div>
      <div class="text_info">

        <div class="text_info">
          <h3>Специалитет</h3>
          <p>
            <b>Адрес приёмной комиссии:</b> 195067, Санкт- Петербург, Пискарёвский проспект, дом 47, павильон 9.
          </p>
          <p>
            <b>Телефон:</b> (812) 303-50-53.
          </p>
        </div>

        <div class="text_info">
        <h3>Ординатура</h3>
          <p>
            <b>Адрес приёмной комиссии:</b> 195067, Санкт- Петербург, Пискарёвский проспект, дом 47, павильон 2/4.
          </p>
          <p>
            <b>Телефон:</b> (812) 530-00-34.
          </p>
        </div>

        <div class="text_info">
          <h3>Аспирантура</h3>
          <p>
            <b>Адрес приёмной комиссии:</b> 195067, Санкт- Петербург, Пискарёвский проспект, дом 47, павильон 29.
          </p>
          <p>
            <b>Телефон:</b> (812) 544-70-17, (812) 275-19-29.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
  .text_info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
</style>
