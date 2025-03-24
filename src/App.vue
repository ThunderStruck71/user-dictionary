<script setup lang="ts">
import UserDictionary from './components/UserDictionary/UserDictionary.vue';
import { UserDictionaryOptionMovementMode, UserDictionaryOptionDeliveryStatus } from './components/UserDictionary/UserDictionaryOptions'
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-responsive class="align-centerfill-height mx-auto" max-width="900">
          <v-img class="mb-4" height="150" src="../src/assets/logo.svg" />

          <div class="text-center">
            <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

            <h1 class="text-h2 font-weight-bold">{{ "User dictionary app" }}</h1>
          </div>

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
