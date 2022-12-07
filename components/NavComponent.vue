<template>
  <header>
    <nav>
      <NuxtLink to="/">Austin</NuxtLink>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/work">Work</NuxtLink></li>
        <li><button @click="$nuxt.$emit('openContact')" class="cta__link">Contact Me</button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavComponent'
}
</script>

<style>

</style>