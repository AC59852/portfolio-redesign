<template>
  <section id="contact" class="contact">
    <button @click="$nuxt.$emit('closeContact')">X</button>
    <h2 class="title">Contact Me<span>.</span></h2>
    <form action="" class="contact__form">
      <div class="form__field">
        <label for="name" class="form__label form__label--name">Name</label>
        <input type="text" name="name" id="name" class="form__input form__input--name">
      </div>
      <div class="form__field">
        <label for="email" class="form__label form__label--email">Email</label>
        <input type="email" name="email" id="email" class="form__input form__input--email">
      </div>
      <div class="form__field">
        <label for="message" class="form__label form__label--message">Message</label>
        <textarea name="message" id="message" class="form__input form__input--message"></textarea>
      </div>
      <button class="form__submit">Send</button>
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>