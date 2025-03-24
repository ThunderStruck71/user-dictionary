<script setup lang="ts">
import AppHeader from './components/UserDictionary/AppHeader/AppHeader.vue';
import UserDictionary from './components/UserDictionary/UserDictionary.vue';
import { UserDictionaryOptionMovementMode, UserDictionaryOptionDeliveryStatus } from './components/UserDictionary/UserDictionaryOptions'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-responsive class="align-centerfill-height mx-auto" max-width="900">
          <v-img class="mb-4" height="150" src="../src/assets/logo.svg" />

          <AppHeader msg="User dictionary app" />

          <div class="py-4" />

          <v-row>
            <v-col cols="6">
              <UserDictionary title="Статус поставки" sub-title="Статус"
                :options="UserDictionaryOptionDeliveryStatus" />
            </v-col>

            <v-col cols="6">
              <UserDictionary title="Режим перемещения" sub-title="Режим" :options="UserDictionaryOptionMovementMode" />
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>
