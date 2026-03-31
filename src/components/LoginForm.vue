<script setup lang="ts">
import { Button, FloatLabel, IconField, InputIcon, InputText } from 'primevue'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>
<template>
  <div class="min-h-screen flex justify-center items-start pt-16 px-4">
    <div class="w-full max-w-md space-y-5">
      <FloatLabel variant="in">
        <IconField>
          <InputIcon class="pi pi-user" />
          <InputText
            id="in_username"
            v-model="username"
            autocomplete="off"
            variant="filled"
            class="w-full"
          />
        </IconField>
        <label for="in_username" class="font-light">Username</label>
      </FloatLabel>
      <FloatLabel variant="in">
        <IconField>
          <InputIcon class="pi pi-lock" />
          <InputText
            type="password"
            id="in_password"
            v-model="password"
            autocomplete="off"
            variant="filled"
            class="w-full"
          />
        </IconField>
        <label for="in_password" class="font-light">Password</label>
      </FloatLabel>
      <Button label="Login" class="w-full" size="large" />
    </div>
  </div>
</template>
<style scoped></style>
