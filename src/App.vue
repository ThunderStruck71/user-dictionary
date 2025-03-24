<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import UserDictionary from './components/UserDictionary/UserDictionary.vue';
import { UserDictionaryOptioMovementMode, UserDictionaryOptionDeliveryStatus } from './components/UserDictionary/UserDictionaryOption.constants'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <UserDictionary title="Статус поставки" sub-title="Статус" :options="UserDictionaryOptionDeliveryStatus" />
    <UserDictionary title="Режим перемещения" sub-title="Режим" :options="UserDictionaryOptioMovementMode" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
