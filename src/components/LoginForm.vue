<script setup lang="ts">
import { Button, FloatLabel, IconField, InputIcon, InputText, Message } from 'primevue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()
const isSubmitted = ref(false)

const isUsernameValid = computed(() => isSubmitted.value && !username.value.trim())
const isPasswordValid = computed(() => isSubmitted.value && !password.value.trim())

const handleLogin = () => {
  isSubmitted.value = true
  if(username.value && password.value)
    router.push("/home")
}

</script>
<template>
  <div class="min-h-screen flex justify-center items-start pt-16 px-4">
    <div class="w-full max-w-md space-y-5">
      <h1>Sign In</h1>
      <FloatLabel variant="in">
        <IconField>
          <InputIcon class="pi pi-user" />
          <InputText
            id="in_username"
            v-model="username"
            autocomplete="off"
            variant="filled"
            class="w-full"
            :invalid="isUsernameValid"
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
            :invalid="isPasswordValid"
          />
        </IconField>
        <label for="in_password" class="font-light">Password</label>
      </FloatLabel>
      <Button label="Login" class="w-full" size="large" @click="handleLogin" />
      <div>
        <Message v-show="!username" severity="error" variant="simple" size="small"
          >Username is required</Message
        >
      </div>
    </div>
  </div>
</template>
<style scoped></style>
